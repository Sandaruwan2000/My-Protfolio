import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  kotline,
  update,
  cons,
  solo,
  c1,
  c2,
  c3,
  c4,
  hack,
  c5,
  c6,
  c7,
  c8,
  c9,
  sim,
  ninja,
  link,
  game,
  note,
  todo,
  salary,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "Achived",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "kotline",
    icon: kotline,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "E.G Motors",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2024 - june 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:c1,
    name: "Sololearn",
    designation: "Course",
    company: "SQL",
    image:solo,
  },
  {
    testimonial:c2,
    name: "Sololearn",
    designation: "Course",
    company: "JAVA",
    image:solo,
  },
  {
    testimonial:c3,
    name: "Sololearn",
    designation: "Course",
    company: "HTML",
    image:solo,
  },
  {
    testimonial:c5,
    name: "HackerRank",
    designation: "Course",
    company: "SQL(Basic)",
    image:hack,
  },
  {
    testimonial:c6,
    name: "HackerRank",
    designation: "Course",
    company: "SQL(Intermediate)",
    image:hack,
  },
  {
    testimonial:c4,
    name: "HackerRank",
    designation: "Course",
    company: "SQL(Advanced)",
    image:hack,
  },
  {
    testimonial:c7,
    name: "Coding Ninjas",
    designation: "Course",
    company: "JAVA",
    image:ninja,
  },
  {
    testimonial:c8,
    name: "Simplilearn",
    designation: "Course",
    company: "JAVA FULL STACK",
    image:sim,
  },
  {
    testimonial:c9,
    name: "LinkedIn",
    designation: "Course",
    company: "OOP",
    image:link,
  },
];

const projects = [
  {
    name: "Garage Management System",
    description:
      "The MERN Stack Garage Management System is a web application designed to streamline garage operations. Built with MongoDB, Express.js, React, and Node.js, it features secure user authentication for managing access. Users can register and log in to keep the system secure. The system also includes daily status updates for vehicle repairs, allowing staff to track and log repair progress. This enhances efficiency and improves communication within the garage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: update,
    source_code_link: "https://github.com/Sandaruwan2000/Garage_Management_Systerm.git",
  },
  {
    name: "Rent Vehicle Management System",
    description:
      "The Vehicle Rental System is a web application designed for managing vehicle rentals. It is built using Java Servlets and features an admin panel for administrators. This panel allows administrators to add new vehicles to the inventory. Additionally, only administrators can delete or update vehicle details. The system ensures efficient vehicle management and rental operations. Overall, it enhances service quality and flexibility.This vehicle type devided using design pattern",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Servlet",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sandaruwan2000/VehicleRentalSystem.git",
  },
  {
    name: "Constraction Management System",
    description:
      "The Construction Management System is a web application developed using PHP, HTML, and CSS. It is designed to streamline the management of construction projects. A key feature of the system is the ability to add new construction orders, allowing users to efficiently manage project details and workflows. This system helps in organizing tasks, improving project tracking, and enhancing overall efficiency in construction management.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cons,
    source_code_link: "https://github.com/Sandaruwan2000/THEHOME.git",
  },
  {
    name: "Car Game",
    description:
      "The car game is a mobile application developed using Kotlin. It features a ViewModel for managing game data efficiently. The game includes different levels, providing a progressive challenge for players. High scores are saved using SharedPreferences, ensuring user progress is maintained. Intents are utilized for navigation between various game activities, enhancing the user experience. Overall, the game offers an engaging and dynamic gameplay experience.",
    tags: [
      {
        name: "Kotline",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/Sandaruwan2000/Car-Game.git",
  },
  {
    name: "Note App",
    description:
    "The note app is a mobile application developed using Kotlin. It features ViewModels for managing note data efficiently. This uses an SQLite database to store notes, allowing users to add, edit, and delete notes. All notes can be viewed as a list . Additionally, app includes a dark mode feature, enhancing the user experience. Regular updates ensure  app remains secure and up-to-date. Overall,app offers a user-friendly and dynamic note-taking experience, catering to a wide range of user needs.",
    tags: [
      {
        name: "Kotline",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://github.com/Sandaruwan2000/NoteApp2.git",
  },
  {
    name: "TODO-APP",
    description:
    "The todo app is a web application developed using  React, Express, MongoDB, and Node.js, with Firebase handling authentication. Users can securely log in to manage their todo  lists, which are stored in MongoDB. The app allows users to add, edit, and delete items, organizing them into personalized and date lists. A clean and intuitive interface facilitates easy task management, ensuring users can view and update their todo list.Regular updates maintain security and improve functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Sandaruwan2000/TODO-App.git",
  },
 
  
];

export { services, technologies, experiences, testimonials, projects };
