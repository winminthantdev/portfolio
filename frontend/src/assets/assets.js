import profile_1 from "./profile1.png";
import profile_2 from "./profile2.jpg";

import HTML from "./html.png";
import CSS from "./css.png";
import JavaScript from "./js.png";
import TypeScript from "./ts.png";
import jQuery from "./jquery.png";
import Bootstrap from "./bootstrap.png";
import Tailwind from "./tailwind.png";
import ReactJs  from "./react.svg";
import ReactQuery from "./reactquery.svg";
import Redux from "./redux.png";
import NodeJs from "./node-js.png";
import PHP from "./php.png";
import Java from "./java.png";
import Laravel from "./laravel.png";
import Python from "./python.png";
import XML from "./xml.svg";
import JSON from "./json.png";
import Express from "./express.svg";
import MySQL from "./mysql.png";
import MongoDB from "./mongodb.png";
import Firebase from "./Firebase.png";
import Webhook from "./webhook.svg";
import Figma from "./figma.png";

import dashboard from "./project/dashboard.png"
import product from "./project/product.png"
import chatroom from "./project/chatroom.png"
import fooddali from "./project/fooddali.png"
import hotelbooking from "./project/hotelbooking.png"

export const photos = {
  profile_1,
  profile_2,
};

export const datas = {
  home: {
    greeting: "Win Min Thant",
    tagline: "Passionate Full Stack Developer & UI/UX Designer",
    intro:
      "I craft responsive websites and engaging user interfaces with React.js, Tailwind CSS, and modern web technologies.",
  },
  about: {
    description:
      "I'm Win Min Thant, a developer currently focused on full-stack web development. I'm studying Computer Science at the University of the People, with previous studies at Yadanabon University paused due to the political situation. I have hands-on experience in mobile phone repair, have worked as a computer teaching assistant, and actively share tech knowledge through my digital content pages. I'm building projects using PHP, React.js, Laravel, MySQL, and Tailwind CSS, aiming to create practical and user-friendly web applications.",
    resumeLink: "/resume/winminthant.pdf",
  },
  projects: [
    {
      title: "Talkie – Dating App",
      description:
        "A real-love-focused dating app with premium plans, ad-free features, and deep profile matching.",
      techStack: ["React Native", "Firebase", "Tailwind", "Figma"],
      link: "https://github.com/yourusername/talkie",
      image: "/projects/talkie.png",
    },
    {
      title: "Q&A Web App for Students",
      description:
        "A module-based question and answer app using PHP, jQuery, and AJAX for interactive learning.",
      techStack: ["PHP", "jQuery", "AJAX", "MySQL", "Tailwind CSS"],
      link: "https://github.com/yourusername/qa-app",
      image: "/projects/qa-app.png",
    },
    {
      title: "Food Ordering Web App",
      description:
        "A full-stack food ordering platform with admin panel and dynamic cart system.",
      techStack: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      link: "https://github.com/yourusername/food-app",
      image: "/projects/food-app.png",
    },
  ],
  skills: [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon:  CSS},
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "jQuery",  icon: jQuery},
    { name: "Bootstrap", icon: Bootstrap},
    { name: "Tailwind",  icon: Tailwind},
    { name: "ReactJs", icon: ReactJs },
    { name: "ReactQuery", icon: ReactQuery },
    { name: "Redux", icon: Redux },
    { name: "NodeJs", icon: NodeJs },
    { name: "PHP",  icon: PHP},
    { name: "Java",  icon: Java},
    { name: "Laravel ", icon: Laravel},
    { name: "Python",  icon: Python},
    { name: "XML", icon: XML},
    { name: "JSON", icon: JSON},
    { name: "Express", icon: Express},
    { name: "MySQL",icon: MySQL },
    { name: "MongoDB",icon: MongoDB },
    { name: "Firebase", icon: Firebase },
    { name: "Webhook", icon: Webhook },
    { name: "Figma", icon: Figma },
  ],
  uiux: [
    {
      title: "Relax Music App UI",
      description:
        "A soothing mobile music player interface focusing on calming tones and minimal design.",
      tool: "Figma",
      image: "/uiux/relax-music.png",
    },
    {
      title: "Hotel Booking UI",
      description:
        "High-fidelity UI for a luxury hotel booking app with filters and detailed views.",
      tool: "Figma",
      image: "/uiux/hotel-booking.png",
    },
    {
      title: "Talkie Branding Kit",
      description:
        "Logo, brand color palette, and onboarding screen for Talkie dating app.",
      tool: "Figma",
      image: "/uiux/talkie-branding.png",
    },
  ],
  contact: {
    name: "Win Min Thant",
    title: "Let's Connect",
    email: "winminthant.dev@gmail.com",
    location: "Myanmar",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      facebook: "https://facebook.com/yourusername",
    },
  },
};

// Dummy project data for demonstration
export const projects = [
  {
    id: 1,
    title: 'Admin Dashboard UI',
    details: 'A responsive dashboard UI built with modern layout and data display using React and Tailwind CSS. Includes sidebar navigation, analytics cards, and clean dark mode.',
    photo: dashboard,
    link: 'https://winminthantdev.github.io/dashboard/',
    language: ['HTML', 'Tailwind', 'Javascript']
  },
  {
    id: 2,
    title: 'Product Details UI',
    details: 'A minimal and elegant product detail page concept showing product images, price, and features using React and Tailwind for fast prototyping.',
    photo: product,
    link: 'https://winminthantdev.github.io/productdetails/',
    language: ['HTML', 'Tailwind', 'Javascript']
  },
  {
    id: 3,
    title: 'Talkie Dating App Landing',
    details: 'A landing page for Talkie — a real-love dating app focused on true partnership. Includes branding, features section, and call-to-action.',
    photo: chatroom,
    link: 'https://talkiesocialapp.onrender.com/',
    language: ['HTML', 'Tailwind', 'Jquery', 'JSON', 'Firebase']
  },
  {
    id: 4,
    title: 'QuickStay Hotel Booking',
    details: 'Full UI/UX page design for a hotel booking service. Includes hotel listings, booking CTA, and smooth animations.',
    photo: hotelbooking,
    link: 'https://quickstaywithus.onrender.com/',
    language: ['HTML', 'Tailwind', 'Jquery', 'JSON', 'ReactJs']
  },
  {
    id: 5,
    title: 'Tomato Food Delivery',
    details: 'A modern and responsive food delivery web app built with ReactJs and JSON for data handling. Features include product listings, category filters, and a simple cart interface — designed for fast food ordering and smooth user experience.',
    photo: fooddali,
    link: 'https://tomato-24y8.onrender.com/',
    language: ['HTML', 'CSS', 'JSON', 'ReactJs']
  }
];



// Particles
export const particles =  "./particles.json" ;