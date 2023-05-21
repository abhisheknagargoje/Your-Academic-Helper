import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [meetUrl, setMeetUrl] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/events/${eventId}`);
        const eventData = await response.json();
        setEvent(eventData);
        setMeetUrl(eventData.meetUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleGenerateMeetLink = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/events/${eventId}/meet`
      );
      const { meetUrl } = response.data;
      setMeetUrl(meetUrl);
    } catch (error) {
      console.error("Error generating meet URL:", error);
    }
  };

  const extractTime = (date) => {
    const eventDate = new Date(date);
    const timeString = eventDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeString;
  };

  const formatDate = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate.toDateString();
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {event ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">{event.title}</h2>
            <p>
              <strong>Date:</strong> {formatDate(event.start)}
            </p>
            <p>
              <strong>Time:</strong> {extractTime(event.start)}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            {meetUrl ? (
              <p>
                <strong>Meet Link:</strong>{" "}
                <a href={meetUrl} target="_blank" rel="noopener noreferrer">
                  {meetUrl}
                </a>
              </p>
            ) : (
              <button
                onClick={handleGenerateMeetLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Generate Meet Link
              </button>
            )}
            {/* Additional event details */}
          </div>
        ) : (
          <p className="text-center">Loading event...</p>
        )}
      </div>
    </div>
  );
};

export default EventPage;
