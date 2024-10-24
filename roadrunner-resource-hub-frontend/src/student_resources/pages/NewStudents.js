import React  from "react";
import ResourceCard from "../components/ResourceCard";

import { AiFillFileAdd } from "react-icons/ai";
import { useState } from "react";
import AddResourceModal from "../components/AddResourceModal";

import "../../student_resources/pages/styling/StudentResources.css";

// This is the FirstYear page component for students in their first year at MSU Denver(Freshman/Transfer)
const FirstYear = () => {

    const [showModal, setShowModal] = useState(false); // This is the state that will determine if the modal is open or not

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <React.Fragment>

            <div className= "NewStudents-background">

                <div className="page-welcometext">
                    <h1>Welcome New Students!</h1>
                    <p>Here are some resources you may find useful as you start your journey at MSU Denver as a Freshman or Transfer student!</p>
                    <p>Such as getting to know the campus, your class schedule, and other resources to help you succeed!</p>
                </div>

                <button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button>

                <div className="welcome-container">

                    <ResourceCard name= "Student Organizations" />

                    <ResourceCard name= "Campus Map" />

                    <ResourceCard name= "Auraria Campus Website" />

                    <ResourceCard name= "Class Schedule" />

                    <ResourceCard name= "Student Email" />

                </div>

                <AddResourceModal show={showModal} onCancel={closeModal} />

            </div>

        </React.Fragment>
    )
}

export default FirstYear;