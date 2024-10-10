import React  from "react";
import ResourceCard from "../components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

const Freshman = () => {
    //insert function here
    return (
        <React.Fragment>
            <div className="page-welcometext">
                <h1>Welcome Freshman!</h1>
                <p>Here are some resources you may find useful as you start your journey at MSU Denver!</p>
            </div>

            <div className="welcome-container">

                <ResourceCard name="Student Organizations/Clubs" /> 

                <ResourceCard name="Campus Map" />

                <ResourceCard name="Tutoring Services" />

            </div>

        </React.Fragment>
    )
}

export default Freshman;