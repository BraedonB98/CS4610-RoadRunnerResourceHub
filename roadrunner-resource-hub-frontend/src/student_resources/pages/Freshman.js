import React  from "react";
import Card from "../../shared/components/UIElements/Card";

const Freshman = () => {
    //insert function here
    return (
        <React.Fragment>
            <div className="page-welcometext">
                <h1>Welcome Freshman!</h1>
                <p>Here are some resources you may find useful as you start your journey at MSU Denver!</p>
            </div>

            <div className="welcome-container">

                <Card {...{style: {width: '30%', margin: '1.5rem', cursor: 'pointer' }, 
                onClick: () => {window.location.href = "https://roadrunnerlink.msudenver.edu/organizations"}}} className="welcome-card">
                    <img src="../clubs.jpg" alt="Clubs" className="welcome-image"/>
                    <h2> Student Organizations/Clubs </h2>
                    <p> Click here to learn more about the different student organizations and clubs on campus
                        to get involved and meet new people! </p>
                </Card>

                <Card {...{style: {width: '30%', margin: '1.5rem'}, 
                onClick: () => {window.location.href = "https://map.concept3d.com/?id=225#!ct/2310?s/"}}} className="welcome-card">
                    <img src="../Campus1.jpg" alt="Campus Map" className="welcome-image"/>
                    <h2> Campus Map </h2>
                    <p> Click here to view the campus map to help you find your way around campus! </p>
                </Card>

                <Card {...{style: {width: '30%', margin: '1.5rem'},
                onClick: () => {window.location.href = "https://www.msudenver.edu/student-academic-services/tutoring/"}}}
                className="welcome-card">
                    <img src="../tutoring.jpg" alt="Tutoring" className="welcome-image"/>
                    <h2> Tutoring Services </h2>
                    <p> Click here to learn more about the different tutoring services available to you on campus! </p>
                </Card>

            </div>

        </React.Fragment>
    )
}

export default Freshman;