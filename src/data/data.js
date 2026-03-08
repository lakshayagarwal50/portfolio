import { Code, Palette, Server, Zap } from "lucide-react";
// import {c++} from "./icons8-c++.svg"
export const userData = {
  name: "LAKSHAY AGARWAL",
  title: "Frontend Developer",
  tagline:
    "React Developer specializing in Redux, Next.js, and building scalable web applications.",
  location: "Noida, Uttar Pradesh",
  email: "lakshayagarwal50@gmail.com",
  phone: "+91 9627990980",
  resumeUrl: "/resume (1).pdf",

  avatar: "./yellow_sq.png",

  availableForHire: true,
  availabilityText: "Available for new opportunities",


  bio: "Detail-oriented Frontend Developer with  experience at Appinventiv, building scalable HRMS portals and social media platforms. Proven ability to improve performance by 20% using React.js, Redux Toolkit, and Next.js. Also skilled in Data Science and Python from an internship at VDT Pipeline Integrity Solutions.",

  social: {
    github: "https://github.com/lakshayagarwal50", 
    linkedin: "https://www.linkedin.com/in/lakshay-agarwal-649401216/", 
  },

  stats: {
    experience: "2",
    projects: "2+",
    awards: "2",
    coffees: "500+",
  },
};


export const projects = [
  {
    id: 1,
    title: "Employee Management System (Admin Portal)",
    description:
      "Developed an HRMS Admin Portal with modules for Leave, Attendance, Employee Setup, Dashboard, Reports, Loans, and DSR tracking. Built scalable, reusable components that improved UI performance by 25% and ensured 99% cross-browser compatibility.",
   
    image: "https://placehold.co/600x400/171717/FFFFFF?text=HRMS+Portal",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    liveUrl: "#", 
    githubUrl: null, 
    featured: true,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Image Steganography Application",
    description:
      "Built a desktop application to encode/decode hidden messages in images with an intuitive GUI supporting PNG, JPEG, JPG. Applied principles of steganography to create a secure, self-contained solution for data concealment.",
 
    image: "https://placehold.co/600x400/171717/FFFFFF?text=Steganography+App",
    technologies: ["Python", "Tkinter", "PIL"],
    liveUrl: null, 
    githubUrl: "#", 
    featured: true,
    category: "Desktop App",
  },
  {
    id: 3,
    title: "Image Steganography Application",
    description:
      "Built a desktop application to encode/decode hidden messages in images with an intuitive GUI supporting PNG, JPEG, JPG. Applied principles of steganography to create a secure, self-contained solution for data concealment.",
 
    image: "https://placehold.co/600x400/171717/FFFFFF?text=Steganography+App",
    technologies: ["Python", "Tkinter", "PIL"],
    liveUrl: null, 
    githubUrl: "#", 
    featured: true,
    category: "Desktop App",
  },
  {
    id: 2,
    title: "Image Steganography Application",
    description:
      "Built a desktop application to encode/decode hidden messages in images with an intuitive GUI supporting PNG, JPEG, JPG. Applied principles of steganography to create a secure, self-contained solution for data concealment.",
 
    image: "https://placehold.co/600x400/171717/FFFFFF?text=Steganography+App",
    technologies: ["Python", "Tkinter", "PIL"],
    liveUrl: null, 
    githubUrl: "#", 
    featured: true,
    category: "Desktop App",
  },
];


// === SKILLS DATA FROM YOUR RESUME ===
export const skills = {
  programming: [
    { name: "C++", level: 90, icon: "🔷" },
    { name: "Data Structures & Algorithms", level: 95, icon: "📊" },
    { name: "Python", level: 85, icon: "🐍" },
  ],
  frontend: [
    { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Redux Toolkit", level: 92, icon: "🔄" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
  ],
  backendData: [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Matplotlib", level: 75, icon: "📈" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "📝" },
    { name: "GitHub", level: 88, icon: "🐱" },
    { name: "VS Code", level: 95, icon: "💙" },
    { name: "Linux", level: 80, icon: "🐧" },
    { name: "PyQt6", level: 70, icon: "📱" },
  ],
};

// Skill categories updated to match your resume
export const skillCategories = [
  { id: "programming", name: "Programming", icon: Code },
  { id: "frontend", name: "Frontend", icon: Palette },
  { id: "backendData", name: "Backend/Data", icon: Server },
  { id: "tools", name: "Tools", icon: Zap },
];

// === EXPERIENCE DATA FROM YOUR RESUME ===
export const experienceData = [
  {
    company: "Appinventiv Technologies Pvt. Ltd.",
    role: "React Developer Intern",
    location: "Noida, India",
    dates: "March 2025 - Present",
    description: [
      "Built scalable applications including a core HRMS portal (serving 500+ employees) and a social media platform with login/sign-up, password recovery, feed, and post sharing.",
      "Improved performance by 20% through efficient state management with Redux Toolkit and by creating reusable, responsive UI components using React.js and Tailwind CSS.",
      "Delivered features in an Agile/Scrum environment using Next.js, contributing to code quality via peer reviews and consistently completing work ahead of sprint deadlines.",
    ],
  },
  {
    company: "VDT Pipeline Integrity Solutions Pvt. Ltd.",
    role: "Data Science & Python Software Development Intern",
    location: "Noida, India",
    dates: "Feb 2025 - March 2025",
    description: [
      "Optimized defect detection algorithms for pipeline inspection data, boosting identification accuracy by 50% (from 40% to 60%).",
      "Architected and deployed Linux shell scripts to automate data manipulation, significantly accelerating the processing of large-scale datasets.",
      "Re-engineered the core processing of a desktop application by eliminating redundant thread pools, creating a lightweight solution with improved data loading speeds.",
    ],
  },
];

// === EDUCATION DATA FROM YOUR RESUME ===
export const educationData = [
  {
    institution: "I.M.S. Engineering College",
    degree: "Bachelor of Technology, Computer Science and Design",
    location: "Ghaziabad, India",
    dates: "2021 - 2025",
    details: "",
  },
  {
    institution: "H.S.S. Public School",
    degree: "C.B.S.E. 12th (Senior Secondary)",
    location: "Hasanpur, India",
    dates: "2020 - 2021",
    details: "Completed with a score of 80%.",
  },
];

// === AWARDS DATA FROM YOUR RESUME ===
export const awardsData = [
  {
    title: "Code War at VIBGYOR",
    institution: "IMSEC Ghaziabad",
    year: "2024",
    result: "Secured 2nd Place (Silver Medal)",
  },
  {
    title: "Tech Riddle",
    institution: "IMSEC Ghaziabad",
    year: "2023",
    result: "Secured 2nd Place (Silver Medal)",
  },
];
