import React from "react";
import ResourceCard from "../../student_resources/components/ResourceCard";
import AddResourceModal from "../../student_resources/components/AddResourceModal";
import { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "../../student_resources/pages/styling/StudentResources.css";
import EventsComponent from "../../student_resources/components/EventsComponent"; // Ensure this path matches your structure

const Welcome = () => {

  const [showModal, setShowModal] = useState(false); // This is the state that will determine if the modal is open or not

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>

      <div className="homePage-background">

        <div className="welcomePage-text">
          <h1>Welcome to the Roadrunner Resource Hub!</h1>
          <p>
            Here you will find common resources for all your academic needs.
            Whether you are a freshman sophomore, junior or a senior!{" "}
          </p>
        </div>

        <button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button>

        <EventsComponent />

        <div className="welcome-container">
          {/* This is the container for the cards, put all the cards in here to make them appear in a row */}

              <ResourceCard name="Canvas" />

              <ResourceCard name="Student Email" />

              <ResourceCard name= "Financial Aid" />

              <ResourceCard name="Degree Progress Report" />

              <ResourceCard name="Academic Advising" />

              <ResourceCard name= "VMock" />

              <ResourceCard name="Register for Classes" />

          </div>

          <AddResourceModal show={showModal} onCancel={closeModal} />
      </div>

        </React.Fragment>
    )
}

export default Welcome;
