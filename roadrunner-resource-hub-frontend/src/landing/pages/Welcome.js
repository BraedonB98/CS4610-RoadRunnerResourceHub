import React from "react";
import ResourceCard from "../../student_resources/components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="page-welcometext">
        <h1>Welcome to the Roadrunner Resource Hub!</h1>
        <p>
          Here you will find common resources for all your academic needs.
          Whether you are a freshman sophomore, junior or a senior!{" "}
        </p>
      </div>

      <div className="welcome-container">
        {/* This is the container for the cards, put all the cards in here to make them appear in a row */}

            <ResourceCard name="Canvas" />

            <ResourceCard name="Auraria Campus Website" />

            <ResourceCard name="Library" />

            <ResourceCard name = "Academic Advising" />

            <ResourceCard name="Events" />

            <ResourceCard name="Financial Aid" />

            
          </div>

        </React.Fragment>
    )
}

export default Welcome;
