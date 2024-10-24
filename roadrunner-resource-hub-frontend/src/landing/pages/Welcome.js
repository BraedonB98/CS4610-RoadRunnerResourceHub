import React from "react";
import ResourceCard from "../../student_resources/components/ResourceCard";
import "../../student_resources/pages/styling/StudentResources.css";

const Welcome = () => {
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

        <div className="welcome-container">
       
       <Events /> {/* This will display the events*/}
       </div>

        <div className="welcome-container">
          {/* This is the container for the cards, put all the cards in here to make them appear in a row */}

              <ResourceCard name="Canvas" />

              <ResourceCard name= "Financial Aid" />

              <ResourceCard name="Degree Progress Report" />

              <ResourceCard name="Academic Advising" />

              <ResourceCard name= "VMock" />

          </div>

      </div>

        </React.Fragment>
    )
}

export default Welcome;
