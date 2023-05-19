import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "../components/Navbar";

const Meetings = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events");
        const data = await response.json();
        const formattedEvents = data.map((event) => ({
          id: event._id,
          title: event.title,
          start: event.start,
          end: event.end,
          url: `meetings/${event._id}`,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      const createdEvent = await response.json();
      setEvents([...events, createdEvent]);
      setNewEvent({ title: "", start: "", end: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEventClick = (eventInfo) => {
    const eventId = eventInfo.event.id;
    window.location.href = `/${eventId}`;
  };

  return (
    <div className=" bg-slate-200">
      <Navbar />
      <div className="container w-10/12 mx-auto bg-white p-4">
        <form onSubmit={handleFormSubmit} className="mb-4">
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            placeholder="Event title"
            className="border rounded px-2 py-1"
          />
          <input
            type="datetime-local"
            name="start"
            value={newEvent.start}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 ml-2"
          />
          <input
            type="datetime-local"
            name="end"
            value={newEvent.end}
            onChange={handleInputChange}
            className="border rounded px-2 py-1 ml-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-1 ml-2"
          >
            Create Event
          </button>
        </form>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};
export default Meetings;
