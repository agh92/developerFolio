/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Andres Gil",
  title: "Hi all, I'm Andres",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Software and Infrastructure with JavaScript / Python / Nodejs / Spring Boot / AWS."
  ),
  resumeLink: null, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/agh92",
  linkedin: "www.linkedin.com/in/andres-gil-herrera",
  //gmail: "saadpasta70@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER EAGER TO SOLVE PROBLEMS",
  skills: [
    emoji("⚡ Develop high quality software"),
    emoji("⚡ Practice DevOps and CI/CD"),
    emoji("⚡ React to changing customer needs")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technical University of Applied Sciences Wildau",
      logo: require("./assets/images/thWildauLogo.jpeg"),
      subHeader: "Master of Engineering in Telematics",
      duration: "2015 - 2018",
      desc: "Awarded for outstanding achievements as foreign student at a German university by the German Academic Exchange Service (DAAD)",
      descBullets: [
        "Computer Vision",
        "Machine Learning",
        "Numerical analysis",
      ]
    },
    {
      schoolName: "Imperial College London",
      logo: require("./assets/images/imperialLogo.jpeg"),
      subHeader: "Mathematics for Machine Learning Online Specialization",
      duration: "2018",
      desc: "Prerequisite mathematics for applications in data science and machine learning.",
      descBullets: [
        "Linear Algebra",
        "Multivariate Calculus",
        "PCA",
      ]
    },
    {
      schoolName: "University of Maryland, College Park",
      logo: require("./assets/images/marylandLogo.jpeg"),
      subHeader: "Cybersecurity Online Specialization",
      duration: "2017",
      desc: "Fundamental concepts underlying the construction of secure systems.",
      descBullets: [
        "Hardware Security",
        "Software Security",
        "Cryptography",
        "Usable Security"
      ]
    },
    {
      schoolName: "Technical University of Applied Sciences Wildau",
      logo: require("./assets/images/thWildauLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Telematics",
      duration: "2012 - 2015",
      desc: "Graduated with honors",
      descBullets: [
        "Distributed Systems",
        "Software Engineering",
        "IT Security and Networks",
      ]
    },
    {
      schoolName: "Deutsche Schule Medellín",
      logo: require("./assets/images/ibLogo.jpeg"),
      subHeader: "School Education",
      duration: "1996 - 2011",
      desc: "Graduated with International Baccalaureate (IB)",
      descBullets: [
        "Volunteer at Integrar a social development organization",
        "School exchange in Erich-Fried-Gesamtschule Ronsdorf",
        "Part of the basketball team"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Infrastructure",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Assecor GmbH",
      companylogo: require("./assets/images/assecorLogo.jpeg"),
      date: "May 2022 – Present",
      desc: "Development and support of multiple microservices running on the cloud.",
      descBullets: [
        "Microservices with Spring Boot",
        "AWS as Cloud Provider",
        "CI/CD with Gitlab"
      ]
    },
    {
      role: "Development Engineer",
      company: "IAV GmbH",
      companylogo: require("./assets/images/iavLogo.png"),
      date: "Jun 2014 – Mar 2022",
      desc: "Fullstack development of multemedia applications based on node.js web services and angular applications.",
      descBullets: [
        "Node.js web services",
        "Angular applications",
        "CI/CD with Jenkins"
      ]
    },
    {
      role: "Working Student",
      company: "Technical University of Applied Sciences Wildau",
      companylogo: require("./assets/images/thWildauLogo.jpeg"),
      date: "Feb 2013 – Jun 2014",
      desc: "Maintainance of the campus' and the library's iOS applications.",
      descBullets: [
        "REST API Specification",
        "Mobile App Development"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "THAT I AM ALLOWED TO TALK ABOUT",
  projects: [
    {
      image: require("./assets/images/iCampusLogo.png"),
      projectName: "iCampus Wildau",
      projectDesc: "Headed by Prof. Dr. Janett Mohnke, iCampus Wildau, is an integral part of the university and as such is responsible for the development of web-based tools and information structures on the Wildau campus.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://icampus.th-wildau.de/icampus/de/ueber-uns"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DAAD Price Winner",
      subtitle: "Price for outstanding achievements by foreign students at German universities.",
      image: require("./assets/images/daadLogo.jpeg"),
      imageAlt: "DAAD Logo",
      footerLink: [
        {
          name: "TH-Wildau Blog",
          url: "https://www.th-wildau.de/hochschule/aktuelles/neuigkeiten/news/preis-des-deutschen-akademischen-austauschdienstes-daad-2016-an-kolumbianischen-masterstudenten-d/"
        }
      ]
    },
    {
      title: "Udemy Learning",
      subtitle: "I am always exploring new technologies.",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Udemy Profile",
          url: "https://www.udemy.com/user/andres-gil-herrera-2/?key=subscribed_courses&subscribed_courses=1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
