import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/events/${eventId}`);
        const eventData = await response.json();
        setEvent(eventData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [eventId]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {event ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">{event.title}</h2>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            {event.gmeetLink && (
              <p>
                <strong>Google Meet Link:</strong>{" "}
                <a
                  href={event.gmeetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.gmeetLink}
                </a>
              </p>
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
