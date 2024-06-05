import React, { useState, useEffect } from 'react';
import add from '../../Images/add.png';
import './event.css';

const EventPlanner = ({ apiData }) => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL;
  const selectedDate = apiData?.forecast?.forecastday[0]?.date;
  const city = apiData?.location?.name;

  useEffect(() => {
    if (selectedDate) {
      fetch(`${backendApiUrl}?date=${selectedDate}`)
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching events:', error));
    }
  }, [selectedDate]);

  const handleAddEvent = () => {
    const event = {
      id: Date.now(),
      date: selectedDate,
      name: newEvent,
      city: city
    };

    fetch(backendApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(data => {
        setEvents(prevEvents => {
          const updatedEvents = Array.isArray(prevEvents) ? [...prevEvents, data] : [data];
          return updatedEvents;
        });
        setNewEvent('');
      })
      .catch(error => console.error('Error adding event:', error));
  };

  return (
    <div className="event m-2 d-flex justify-content-center align-items-center">
      <div className="m-2 w-100">
        <div className="event_header text-center d-flex justify-content-center">
          <h5>Event Planner</h5>
         
        </div>
        <div className="event_list m-1 p-2">
          {events && events.length > 0 ? (
            events.map(event => (
              <div key={event.id} className="event_item">
                {event.name}
              </div>
            ))
          ) : (
            <div className="event_item">
              No events added
            </div>
          )}
        </div>
        <div className="addEvent d-flex">
          <input
            className="addEventBar p-2 m-1"
            type="text"
            placeholder="Enter the event you want to plan"
            value={newEvent}
            onChange={e => setNewEvent(e.target.value)}
            disabled={!selectedDate}
          />
          <button className="addButton m-1" onClick={handleAddEvent} disabled={!newEvent || !selectedDate}>
            <img className="addIcon" src={add} alt="add icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPlanner;
