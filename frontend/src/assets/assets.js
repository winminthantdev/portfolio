import profile_1 from "./profile1.png";
import profile_2 from "./profile2.jpg";

export const photos = {
  profile_1,
  profile_2,
};

export const datas = {
  home: {
    greeting: "Hi, I'm Win Min Thant 👋",
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
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "JavaScript", icon: "JS" },
    { name: "jQuery", icon: "jQ" },
    { name: "Bootstrap", icon: "BS" },
    { name: "Tailwind", icon: "TW" },
    { name: "ReactJs ", icon: "React" },
    { name: "PHP", icon: "PHP" },
    { name: "Java", icon: "Java" },
    { name: "Laravel ", icon: "Laravel" },
    { name: "Python", icon: "Py" },
    { name: "XML", icon: "XML" },
    { name: "JSON", icon: "JSON" },
    { name: "MySQL", icon: "MySQL" },
    { name: "Firebase", icon: "Firebase" },
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
