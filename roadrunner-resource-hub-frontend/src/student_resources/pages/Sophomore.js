import React  from "react";
import ResourceCard from "../components/ResourceCard";
import '../../student_resources/pages/styling/StudentResources.css';

const Sophomore = () => {
    //insert function here
    return (
        <React.Fragment>
            <div className = "page-welcometext">

                <h1>Welcome Sophomores</h1>
                <p>Here are some resources you may find useful! </p>

                <div className="welcome-container">

                    {/* This is the container for the cards, put all the cards in here to make them appear in a row */}

                    <ResourceCard name="Canvas" />

                    
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sophomore;