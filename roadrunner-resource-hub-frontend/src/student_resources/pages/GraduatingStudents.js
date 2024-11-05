import React, { useContext, useState} from "react";
import ResourceCard from "../components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

import { AiFillFileAdd } from "react-icons/ai";
import AddResourceModal from "../components/AddResourceModal";

import { AuthContext } from "../../shared/context/auth-context";

// This is the LastYear page component for students in their final year at MSU Denver(Senior)
const LastYear = () => {
    const auth = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false); // This is the state that will determine if the modal is open or not

    const openModal = () => { // This function will open the modal
        setShowModal(true);
    }

    const closeModal = () => { // This function will close the modal
        setShowModal(false);
    }

    return(
        <React.Fragment>

            <div className="GraduatingStudents-background">

                <div className="page-welcometext">
                    <h1>Welcome Graduating Students!</h1>
                    <p>Here are some resources you may find useful as you finish your journey at MSU Denver!</p>
                </div>

                <div className= "resource-button-container">

                    {auth.isLoggedIn && (<button className="new-resource-button" onClick={openModal}> Add New Resource <AiFillFileAdd /> </button>)}

                </div>

                <div className="welcome-container">

                    <ResourceCard name="Apply for Graduation" />

                    <ResourceCard name= "Graduate Financial Aid" />

                    <ResourceCard name="Career Link" />

                    <ResourceCard name="C2 Hub" />

                </div>

                    {/* This is the modal that will pop up when the "Add New Resource" button is clicked */}
                    <AddResourceModal show={showModal} onCancel={closeModal} audience= 'graduating' />

            </div>

        </React.Fragment>
    )
}

export default LastYear;