import React, { useState, useEffect } from "react";
import "../components/styling/ResourceCard.css";

// List of resources used in the ResourceCard component, each resource has a name, search keywords, description, link, and image
// Add more resources to the list to display more resource cards
const resources = [
    { // Canvas resource
        name: "Canvas",
        search: ["Canvas", "Learning Management System", "Courses", "Assignments"],
        description: "Canvas is the Learning Management System used by MSU Denver. Here you can access your courses, submit assignments, and communicate with your professors.",
        link: "https://msudenver.instructure.com/login/saml", // Canvas link
        image: "../images/canvas3.png",
    },
    { // Student Organizations/Clubs resource
        name: "Student Organizations/Clubs",
        search: ["Student Organizations", "Clubs", "Student Life"],
        description: "Click here to learn more about the different student organizations and clubs at MSU Denver. Get involved and make new friends!",
        link: "https://roadrunnerlink.msudenver.edu/organizations", 
        image: "../images/clubs.jpg",
    },
    { // Campus Map resource
        name: "Campus Map",
        search: ["Campus Map", "Map", "Campus"],
        description: "Click here to view the campus map to help you find your way around campus!",
        link: "https://map.concept3d.com/?id=225#!ct/2310?s",
        image: "../images/Campus1.jpg",
        },
    { // Tutoring Services resource
        name: "Tutoring Services",
        search: ["Tutoring Services", "Tutoring", "Academic Support"],
        description: "Click here to learn more about the different tutoring services available to you on campus!",
        link: "https://www.msudenver.edu/student-academic-services/tutoring/",
        image: "../images/tutoring.jpg",
    },
    { // Class Schedule resource
        name: "Class Schedule",
        search: ["Class Schedule", "Schedule", "Courses"],
        description: "Access your class schedule here to see when and where your classes are being held!",
        link: "https://ssomanager.msudenver.edu/ssomanager/saml/login?relayState=/c/auth/SSB?pkg=https://prod-banner.msudenver.edu/pls/prod_web/bwskfshd.P_CrseSchdDetl",
        image: "../images/class-schedule.jpg",
    },
    { //Auraia Campus Website resource
        name: "Auraria Campus Website",
        search: ["Auraria Campus", "Campus", "Website"],
        description: "The Auraria Campus website is a great resource for all your campus needs. Here you can access information about campus life, resources like the ID Station, and more.",
        link: "https://aurariacampus.edu/",
        image: "../images/Auraria_Campus_sign.jpg",
    },
    {// Academic Advising resource
        name: "Academic Advising",
        search: ["Academic Advising", "Advising", "Academic Support"],
        description: "Click here to learn more about academic advising and how to schedule an appointment with your advisor.",
        link: "https://www.msudenver.edu/advising/",
        image: "../images/Advising.jpg",
    },
    { // Library resource
        name: "Library",
        search: ["Library", "Research", "Books"],
        description: "The MSU Denver Library is a great resource for all your research needs. Here you can access books, articles, and other resources to help you succeed in your classes.",
        link: "https://library.auraria.edu/",
        image: "../images/Auraria_Library.jpg",
    }
]

const ResourceCard = (props) => {
    const [resourcesState, setResourcesState] = useState([]); // State for resources
 
    useEffect(() => {  // Update resourcesState based on search or name prop
        if (props.search) {   
            setResourcesState(  // Filter resources based on search prop
                resources.filter(
                    (resource) => 
                        resource.search.filter((search) => search.includes(props.search)).length > 0 // Check if search prop is included in resource.search array
                )
            );
        } else if (props.name) {  // Filter resources based on name prop
            setResourcesState(resources.filter((resource) => resource.name === props.name)); // Check if name prop is equal to resource.name
        }
    }, [props.search, props.name]); 

    if (resourcesState.length > 0) { // Display resource card if resourcesState is not empty
        return ( 
            <React.Fragment>
                {resourcesState.map((resource) => (  
                    // Display resource card
                    <div
                        key={resource.name}
                        className="resource-card"
                        onClick={() => window.open(resource.link, "_blank")} // Open link in a new tab
                    >
                        <img src={resource.image} alt={resource.name} className="resource-image" />
                        <h2 className = "resource-heading">{resource.name}</h2>
                        <p className = "resource-description">{resource.description}</p>
                    </div>
                ))}
            </React.Fragment>
        );
    } else {
        return <div></div>; // Return empty div if resourcesState is empty
    }
};

export default ResourceCard;
