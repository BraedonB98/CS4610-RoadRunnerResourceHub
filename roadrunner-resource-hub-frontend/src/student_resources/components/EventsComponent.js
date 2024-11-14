import React, { useState, useEffect } from "react";
import "../components/styling/Events.css";
 
// List of events used in the Events component, each event has a name, date, time, location, description, and image
// Add more events to the list to display more event cards
 
const events = [
    { // MSU Denver Student Government Assembly Meeting
        name: "MSU Denver Student Government Assembly Meeting",
        date: "Every other Thursday",
        time: "5:00 PM",
        location: "Tivoli 320",
        description: "Join the Student Government Assembly to learn about upcoming events and initiatives.",
        image: "../images/sga.png",
    },
 
    {
        name: "Socktober",
        date: "October 1st - October 31st",
        time: "All Day",
        location: "MSU Denver",
        description: "Donate new socks to the MSU Denver Food Bank.",
        image: "../images/socktober.jpeg",
    },
 
    {
        name: "Career Fair",
        date: "October 15th",
        time: "10:00 AM - 2:00 PM",
        location: "Tivoli Turnhalle",
        description: "Network with potential employers and discover internship opportunities.",
        image: "../images/careerFair.jpg",
    },

    {
        name: "Virtual Career Fair",
        date: "Every other Thursday",
        time: "5:00 PM",
        location: "Tivoli 320",
        description: "Join the Student Government Assembly to learn about upcoming events and initiatives.",
        image: "../images/virtualCF.jpeg",
    },

    {
        name: "Hackathon",
        date: "October 1st - October 31st",
        time: "All Day",
        location: "MSU Denver",
        description: "Donate new socks to the MSU Denver Food Bank.",
        image: "../images/hackathon.jpeg",
    },

    {
        name: "Thanksgiving Food Drive",
        date: "October 15th",
        time: "10:00 AM - 2:00 PM",
        location: "Tivoli Turnhalle",
        description: "Network with potential employers and discover internship opportunities.",
        image: "../images/thanksgivingFD.jpeg",
    },
 
];
 
const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // To track the current slide index
    const cardsPerSlide = 3; // Number of cards to display per slide
 
    // Calculate the range of events to display
    const currentEvents = events.slice(currentIndex, currentIndex + cardsPerSlide);
 
    const nextSlide = () => {
      if (currentIndex + cardsPerSlide < events.length) {
        setCurrentIndex(currentIndex + cardsPerSlide);
      }
    };
 
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - cardsPerSlide);
      }
    };
 
    return (
      <div>
        <h1 className="events-header">Upcoming Events</h1>
        <div className="events-container">
          {currentEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img className="event-image" src={event.image} alt={event.name} />
              <h2 className="event-name">{event.name}</h2>
              <p className="event-date-time">{event.date} at {event.time}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
 
        {/* Pagination Buttons */}
        <div className="pagination-buttons">
          <button onClick={prevSlide} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={nextSlide} disabled={currentIndex + cardsPerSlide >= events.length}>
            Next
          </button>
        </div>
      </div>
    );
  };
 
  export default Events;