import React, { useEffect, useState } from "react";
import "../components/styling/Events.css";

const events = [
  {
    name: "MSU Denver Student Government Assembly Meeting",
    date: "Every other Thursday",
    time: "5:00 PM",
    location: "Tivoli 320",
    description: "Join the Student Government Assembly.",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000295839/www.msudenver.edu/wp-content/uploads/2021/05/campus-life-header.jpeg",
  },
  {
    name: "Socktober",
    date: "October 1st - October 31st",
    time: "All Day",
    location: "MSU Denver",
    description: "Donate new socks to the MSU Denver Food Bank.",
    image:
      "https://early-bird.msudenver.edu/wp-content/uploads/2024/09/Socktober_EB_500x335.png",
  },
  {
    name: "Career Fair",
    date: "October 15th",
    time: "10:00 AM - 2:00 PM",
    location: "Tivoli Turnhalle",
    description:
      "Network with potential employers and discover internship opportunities.",
    image:
      "https://www.msudenver.edu/wp-content/uploads/2023/05/C2HubCareerFair_9318_230405-2-scaled.jpg",
  },
  {
    name: "Health & Wellness Expo",
    date: "October 20th",
    time: "10:00 AM - 5:00 PM",
    location: "Student Union",
    description:
      "Explore resources for mental, physical, and emotional well-being.",
    image:
      "https://red.msudenver.edu/wp-content/uploads/2024/08/Sim-Skills-Labs_6965AM_08122024.jpg",
  },
  {
    name: "Alumni Networking Night",
    date: "October 25th",
    time: "6:00 PM - 9:00 PM",
    location: "Alumni Hall",
    description: "Meet MSU Denver alumni and expand your professional network.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH4TanVMFMMHAIRhIEPMET641t49Bp9k8EQ&s",
  },
];

const EventsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 768) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex + cardsPerSlide < events.length) {
      setCurrentIndex(currentIndex + 1); // Move by one card
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move by one card
    }
  };

  return (
    <div className="events-carousel">
      <button
        className="arrow-button left-arrow"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>

      <div
        className={`events-wrapper ${cardsPerSlide === 1 ? "single-card" : ""}`}
      >
        {events
          .slice(currentIndex, currentIndex + cardsPerSlide)
          .map((event, index) => (
            <div key={index} className="event-card hover-effect">
              <div className="event-card-line"></div>
              <img className="event-image" src={event.image} alt={event.name} />
              <div className="event-card-content">
                <h2 className="event-name">{event.name}</h2>
                <p className="event-date-time">
                  {event.date} at {event.time}
                </p>
                <p className="event-description">{event.description}</p>
                <p className="event-location">{event.location}</p>
                <a href="#" className="event-read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
      </div>

      <button
        className="arrow-button right-arrow"
        onClick={nextSlide}
        disabled={currentIndex + cardsPerSlide >= events.length}
      >
        &#8594;
      </button>
    </div>
  );
};

export default EventsComponent;
