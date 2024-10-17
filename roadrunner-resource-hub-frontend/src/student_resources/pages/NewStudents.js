import React  from "react";
import ResourceCard from "../components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

// This is the FirstYear page component for students in their first year at MSU Denver(Freshman/Transfer)
const FirstYear = () => {
    //insert function here
    return (
        <React.Fragment>
            <div className="page-welcometext">
                <h1>Welcome New Students!</h1>
                <p>Here are some resources you may find useful as you start your journey at MSU Denver as a Freshman or Transfer student!</p>
                <p>Such as getting to know the campus, your class schedule, and other resources to help you succeed!</p>
            </div>

            <div className="welcome-container">

                <ResourceCard name="Class Schedule" />

                <ResourceCard name="Canvas" />

                <ResourceCard name="Student Organizations/Clubs" /> 

                <ResourceCard name="Campus Map" />

                <ResourceCard name="Tutoring Services" />

                <ResourceCard name="Financial Aid" />

            </div>

        </React.Fragment>
    )
}

export default FirstYear;