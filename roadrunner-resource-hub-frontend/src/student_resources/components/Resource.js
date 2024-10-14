import React from "react";


// List of resources used in the ResourceCard component, each resource has a name, search keywords, description, link, and image
// Add more resources to the list to display more resource cards
const resources = [
    { // Canvas resource
        name: "Canvas",
        search: ["Canvas", "Learning Management System", "Courses", "Assignments"],
        description: "Access your courses, submit assignments, and communicate with professors.",
        link: "https://msudenver.instructure.com/login/saml", // Canvas link
        image: "../images/canvas3.png",
    },
    { // Student Organizations/Clubs resource
        name: "Student Organizations/Clubs",
        search: ["Student Organizations", "Clubs", "Student Life"],
        description: "Learn about student organizations and clubs at MSU Denver.",
        link: "https://roadrunnerlink.msudenver.edu/organizations", 
        image: "../images/clubs.jpg",
    },
    { // Campus Map resource
        name: "Campus Map",
        search: ["Campus Map", "Map", "Campus"],
        description: "View the campus map to help find your way around.",
        link: "https://map.concept3d.com/?id=225#!ct/2310?s",
        image: "../images/Campus1.jpg",
        },
    { // Tutoring Services resource
        name: "Tutoring Services",
        search: ["Tutoring Services", "Tutoring", "Academic Support"],
        description: "Learn more about tutoring services available on campus.",
        link: "https://www.msudenver.edu/student-academic-services/tutoring/",
        image: "../images/tutoring.jpg",
    },
    { // Class Schedule resource
        name: "Class Schedule",
        search: ["Class Schedule", "Schedule", "Courses"],
        description: "Access your class schedule to see class times and locations.",
        link: "https://ssomanager.msudenver.edu/ssomanager/saml/login?relayState=/c/auth/SSB?pkg=https://prod-banner.msudenver.edu/pls/prod_web/bwskfshd.P_CrseSchdDetl",
        image: "../images/class-schedule.jpg",
    },
    { // Auraria Campus Website resource
        name: "Auraria Campus Website",
        search: ["Auraria Campus", "Campus", "Website"],
        description: "Access information about campus life and resources.",
        link: "https://aurariacampus.edu/",
        image: "../images/Auraria_Campus_sign.jpg",
    },
    {// Academic Advising resource
        name: "Academic Advising",
        search: ["Academic Advising", "Advising", "Academic Support"],
        description: "Learn about academic advising and schedule appointments.",
        link: "https://www.msudenver.edu/advising/",
        image: "../images/Advising.jpg",
    },
    { // Library resource
        name: "Library",
        search: ["Library", "Research", "Books"],
        description: "Access books, articles, and resources for research needs.",
        link: "https://library.auraria.edu/",
        image: "../images/Auraria_Library.jpg",
    },
    {
        // Events resource
        name: "Events",
        search: ["Events", "Campus Events", "Activities"],
        description: "Stay updated with campus events, workshops, and activities.",
        link: "https://msudenver.trumba.com/",
        image: "../icons/schedule.png", 
    },
    {
        name: "Financial Aid",
        search: ["Financial Aid", "Scholarships", "Grants"],
        description: "Here you can find information about your financial aid package, scholarships, and grants.",
        link: "https://ssb.msudenver.edu/StudentSelfService/ssb/financialAid#!",
        image: "../images/Financial-Aid.png",
    },
    {
        name: "Roadrunner Athletics",
        search: ["Roadrunner Athletics", "Sports", "Athletics"],
        description: "Support MSU Denver's athletic teams and learn about upcoming games and events!",
        link: "https://roadrunnersathletics.com/index.aspx",
        image: "../images/athletics.jpg",
    },
    {
        name: "Apply for Graduation",
        search: ["Apply for Graduation", "Graduation", "Application"],
        description: "Click here to apply for graduation and receive your degree!",
        link: "https://ssb.msudenver.edu/StudentSelfService/ssb/graduationApplication#!",
        image: "../images/graduation.jpg",
    }
];

// Resource component that displays the resource name, description, and image
// Will be used in the ResourceCard component to display each resource
const Resource = ({ name,  description, link, image }) => {
    return (
        <div className="resource-card" onClick={() => window.open(link, "_blank")}>
            <img src={image} alt={name} className="resource-image" />
            <h2 className="resource-heading">{name}</h2>
            <p className="resource-description">{description}</p>
        </div>
    );
};

export { Resource, resources };