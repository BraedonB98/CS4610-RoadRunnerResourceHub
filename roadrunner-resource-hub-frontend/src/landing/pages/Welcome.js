import React, { useContext, useState} from "react";
import ResourceCard from "../../student_resources/components/ResourceCard";
import AddResourceModal from "../../student_resources/components/AddResourceModal";

import { AiFillFileAdd } from "react-icons/ai";
import { AuthContext } from "../../shared/context/auth-context";
import "../../student_resources/pages/styling/StudentResources.css";
import EventsComponent from "../../student_resources/components/EventsComponent"; // Ensure this path matches your structure

const Welcome = () => {
  const auth = useContext(AuthContext);
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

<<<<<<< HEAD
        {auth.isLoggedIn && (<button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button>)}
=======

        <div className= "resource-button-container">

          {auth.isLoggedIn && (<button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button>)}

         {/* <button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button> */}

        </div>

        <EventsComponent />
>>>>>>> resourcemodal-backend

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
