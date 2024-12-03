import React from "react";

import { AiFillDelete } from "react-icons/ai";

import { AuthContext } from "../../shared/context/auth-context";

// List of resources used in the ResourceCard component, each resource has a name, search keywords, description, link, and image
// Add more resources to the list to display more resource cards

const resources = [
  {
    // Canvas resource
    name: "Canvas",
    search: ["Canvas", "Learning Management System", "Courses", "Assignments"],
    description:
      "Access your courses, submit assignments, and communicate with professors.",
    link: "https://msudenver.instructure.com/login/saml", // Canvas link
    image: "https://www.lawsonstate.edu/_resources/images/Canvas_logo.png",
  },
  {
    // Student Organizations/Clubs resource
    name: "Student Organizations",
    search: ["Student Organizations", "Clubs", "Student Life"],
    description: "Learn about student organizations and clubs at MSU Denver.",
    link: "https://roadrunnerlink.msudenver.edu/organizations",
    image:
      "https://www.msudenver.edu/wp-content/uploads/2024/09/Socktober-630x350-1.jpg",
  },
  {
    // Campus Map resource
    name: "Campus Map",
    search: ["Campus Map", "Map", "Campus"],
    description: "View the campus map to help find your way around.",
    link: "https://map.concept3d.com/?id=225#!ct/2310?s",
    image:
      "https://www.msudenver.edu/wp-content/uploads/2021/06/we-are-here.png",
  },
  {
    // Tutoring Services resource
    name: "Tutoring Services",
    search: ["Tutoring Services", "Tutoring", "Academic Support"],
    description: "Learn more about tutoring services available on campus.",
    link: "https://www.msudenver.edu/student-academic-services/tutoring/",
    image: "https://www.msudenver.edu/wp-content/uploads/2022/08/Tutoring.png",
  },
  {
    // Class Schedule resource
    name: "Class Schedule",
    search: ["Class Schedule", "Schedule", "Courses"],
    description: "Access your class schedule to see class times and locations.",
    link: "https://ssomanager.msudenver.edu/ssomanager/saml/login?relayState=/c/auth/SSB?pkg=https://prod-banner.msudenver.edu/pls/prod_web/bwskfshd.P_CrseSchdDetl",
    image:
      "https://www.bigtime.net/wp-content/uploads/2024/02/Schedule-Conflicts_-How-to-Deal-with-Them-and-Benefit-From-the-Challenge.png",
  },
  {
    // Auraria Campus Website resource
    name: "Auraria Campus Website",
    search: ["Auraria Campus", "Campus", "Website"],
    description: "Access information about campus life and resources.",
    link: "https://aurariacampus.edu/",
    image: "https://live.staticflickr.com/3761/8847848094_e3f381efc7_b.jpg",
  },
  {
    // Academic Advising resource
    name: "Academic Advising",
    search: ["Academic Advising", "Advising", "Academic Support"],
    description: "Learn about academic advising and schedule appointments.",
    link: "https://www.msudenver.edu/advising/",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000295839/www.msudenver.edu/wp-content/uploads/2021/06/Campus4.jpg",
  },
  {
    // Library resource
    name: "Library",
    search: ["Library", "Research", "Books"],
    description: "Access books, articles, and resources for research needs.",
    link: "https://library.auraria.edu/",
    image: "https://i.ytimg.com/vi/iDpdkWj2MT0/maxresdefault.jpg",
  },
  {
    // Events resource
    name: "Events",
    search: ["Events", "Campus Events", "Activities"],
    description: "Stay updated with campus events, workshops, and activities.",
    link: "https://msudenver.trumba.com/",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000295839/www.msudenver.edu/wp-content/uploads/2023/03/DSC01978-2-scaled.jpg",
  },
  {
    name: "Financial Aid",
    search: ["Financial Aid", "Scholarships", "Grants"],
    description:
      "Here you can find information about your financial aid package, scholarships, and grants.",
    link: "https://ssb.msudenver.edu/StudentSelfService/ssb/financialAid#!",
    image:
      "https://www.intelligent.com/wp-content/uploads/2021/04/INT-Asset-New-1024x640.png",
  },
  {
    name: "Roadrunner Athletics",
    search: ["Roadrunner Athletics", "Sports", "Athletics"],
    description:
      "Support MSU Denver's athletic teams and learn about upcoming games and events!",
    link: "https://roadrunnersathletics.com/index.aspx",
    image:
      "https://roadrunnersathletics.com/images/2022/8/25/Athletics_Complex_07_PS_082422.jpg",
  },
  {
    name: "Apply for Graduation",
    search: ["Apply for Graduation", "Graduation", "Application"],
    description: "Click here to apply for graduation and receive your degree!",
    link: "https://ssb.msudenver.edu/StudentSelfService/ssb/graduationApplication#!",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000295839/www.msudenver.edu/wp-content/uploads/2021/06/Fall-2019-PM-Commencement_AM1215_191213-1.jpg",
  },
  {
    name: "Degree Progress Report",
    search: ["Degree Progress Report", "Degree", "Progress"],
    description:
      "View your degree progress report to see what courses you have completed and what you still need to take.",
    link: "https://degreeworks.msudenver.edu/Dashboard",
    image:
      "https://media.9news.com/assets/KUSA/images/fbf05e22-c3a7-420d-a19c-d390499b3120/fbf05e22-c3a7-420d-a19c-d390499b3120_1140x641.jpg",
  },
  {
    name: "C2 Hub",
    search: ["C2 Hub", "Career", "Center"],
    description:
      "Click here to access the C2 Hub where you can find resources, events, and tools related to career development such as resume building, job searching, and more.",
    link: "https://www.msudenver.edu/classroom-to-career-hub/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzWQ4eTIf5lDrlhsvvSsFzR9blOEu7Yzz2g&s",
  },
  {
    name: "Student Email",
    search: ["Student Email", "Email", "Outlook"],
    description:
      "Access your MSU Denver student email account to stay updated with important information.",
    link: "https://email.msudenver.edu/",
    image:
      "https://www.illumy.com/wp-content/uploads/2023/09/is-more-than-password-recovery.png",
  },
  {
    name: "Career Link",
    search: ["Career Link", "Career", "Jobs"],
    description:
      "Access Career Link to find job and internship opportunities, career fairs, upload your resume, and more.",
    link: "https://shibboleth-msudenver-csm.symplicity.com/sso/",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "VMock",
    search: ["VMock", "Resume", "Feedback"],
    description:
      "Get instant feedback on your resume with VMock, a resume review tool!",
    link: "https://www.vmock.com/msudenver/",
    image:
      "https://www.msudenver.edu/wp-content/uploads/2023/11/Rowdy-Open-House_ALM001_190413_fxcc-e1705432889651.jpg",
  },
  {
    name: "Writing Center",
    search: ["Writing Center", "Writing", "Tutoring"],
    description:
      "Get help with your writing assignments at the Writing Center!",
    link: "https://www.msudenver.edu/writing-center/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2-vwyMEwTHmPed90S1Xupztd-UiMFH5Y4A&s",
  },
  {
    name: "Graduate Financial Aid",
    search: ["Graduate Financial Aid", "Graduate", "Scholarships"],
    description:
      "Here you can find information about financial aid for graduate students, scholarships, and grants.",
    link: "https://www.msudenver.edu/graduate-school/financialaid/",
    image: "https://www.msudenver.edu/wp-content/uploads/2021/06/Tivoli1.jpg",
  },
  {
    name: "Register for Classes",
    search: ["Register for Classes", "Registration", "Courses"],
    description:
      "Here you can register for classes, view your class schedule, and more!",
    link: "https://ssb.msudenver.edu/StudentRegistrationSsb/ssb/registration",
    image:
      "https://www.msudenver.edu/wp-content/uploads/2021/07/JSSB_Main-scaled.jpg",
  },
];

// Resource component that displays the resource name, description, and image
// Will be used in the ResourceCard component to display each resource
const Resource = ({
  name,
  description,
  link,
  image,
  onDelete,
  isBackendResource,
}) => {
  const auth = React.useContext(AuthContext);

  const imagePath = isBackendResource
    ? process.env.REACT_APP_ASSET_URL + "/" + image
    : image;

  return (
    <div className="resource-card" onClick={() => window.open(link, "_blank")}>
      <img src={imagePath} alt={name} className="resource-image" />
      <h2 className="resource-heading">{name}</h2>
      <p className="resource-description">{description}</p>

      {auth.isLoggedIn &&
        isBackendResource && ( // If user is logged in and resource is from the backend, display delete button
          <button
            className="resource-button"
            onClick={(event) => {
              event.stopPropagation(); // Prevent the click event from bubbling up to the parent div
              onDelete(); // Call the onDelete function passed as a prop
            }}
          >
            Delete <AiFillDelete />
          </button>
        )}
    </div>
  );
};

export { Resource, resources };
