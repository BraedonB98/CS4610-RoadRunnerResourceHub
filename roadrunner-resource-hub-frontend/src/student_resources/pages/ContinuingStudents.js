import React from "react";
import ResourceCard from "../components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

// This is the MiddleYears page component for students in their second and third year at MSU Denver(Sophomore/Junior)
const MiddleYears = () => {
    return(
        <React.Fragment>
            <div className="page-welcometext">
                <h1>Welcome Continuing Students!</h1>
                <p>Here are some resources you may find useful as you continue your journey at MSU Denver!</p>
            </div>

            <div className="welcome-container">

                <ResourceCard name="Degree Progress Report" />

                <ResourceCard name="Canvas" />

                <ResourceCard name="Academic Advising" />

                <ResourceCard name="Tutoring Services" />

                <ResourceCard name="Financial Aid" />



            </div>

        </React.Fragment>
    )
}

export default MiddleYears;
