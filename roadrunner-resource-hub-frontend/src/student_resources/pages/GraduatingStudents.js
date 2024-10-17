import React from "react";
import ResourceCard from "../components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

// This is the LastYear page component for students in their final year at MSU Denver(Senior)
const LastYear = () => {
    return(
        <React.Fragment>
            <div className="page-welcometext">
                <h1>Welcome Graduating Students!</h1>
                <p>Here are some resources you may find useful as you finish your journey at MSU Denver!</p>
            </div>

            <div className="welcome-container">

                <ResourceCard name="Apply for Graduation" />

                <ResourceCard name="Degree Progress Report" />

                <ResourceCard name="C2 Hub" />

            </div>

        </React.Fragment>
    )
}

export default LastYear;