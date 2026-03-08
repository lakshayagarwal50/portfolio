// import { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Globe,
//   ExternalLink,
//   Download,
//   Code,
//   Database,
//   Palette,
//   Server,
//   Star,
//   Eye,
//   CheckCircle,
//   ArrowRight,
//   Send,
//   Heart,
//   Coffee,
//   Zap,
//   GraduationCap,
//   Award,
// } from "lucide-react";

// export default function PortfolioOne() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeProject, setActiveProject] = useState(0);
//   const [activeSkillCategory, setActiveSkillCategory] = useState("programming");

//   const userData = {
//     name: "LAKSHAY AGARWAL",
//     title: "Frontend Developer",
//     tagline:
//       "React Developer specializing in Redux, Next.js, and building scalable web applications.",
//     location: "Noida, Uttar Pradesh",
//     email: "lakshayagarwal50@gmail.com",
//     phone: "+91 9627990980",
//     resumeUrl: "/lakshay-agarwal-resume.pdf",

//     avatar: "https://placehold.co/192x192/F97316/FFFFFF?text=LA",

//     availableForHire: true,
//     availabilityText: "Available for new opportunities",

    
//     bio: "Detail-oriented Frontend Developer with internship experience at Appinventiv, building scalable HRMS portals and social media platforms. Proven ability to improve performance by 20% using React.js, Redux Toolkit, and Next.js. Also skilled in Data Science and Python from an internship at VDT Pipeline Integrity Solutions.",

//     social: {
//       github: "https://github.com/lakshayagarwal", // Placeholder, update with your URL
//       linkedin: "https://linkedin.com/in/lakshayagarwal", // Placeholder, update with your URL
//     },

//     stats: {
//       experience: "2", // For 2 Internships
//       projects: "2+",
//       awards: "2",
//       coffees: "500+", // Just for fun!
//     },
//   };

//   // === PROJECTS DATA FROM YOUR RESUME ===
//   const projects = [
//     {
//       id: 1,
//       title: "Employee Management System (Admin Portal)",
//       description:
//         "Developed an HRMS Admin Portal with modules for Leave, Attendance, Employee Setup, Dashboard, Reports, Loans, and DSR tracking. Built scalable, reusable components that improved UI performance by 25% and ensured 99% cross-browser compatibility.",
//       // Using a placeholder image
//       image: "https://placehold.co/600x400/171717/FFFFFF?text=HRMS+Portal",
//       technologies: ["React.js", "Redux", "Tailwind CSS"],
//       liveUrl: "#", // Add your live link here
//       githubUrl: null, // No GitHub link provided in resume
//       featured: true,
//       category: "Web Development",
//     },
//     {
//       id: 2,
//       title: "Image Steganography Application",
//       description:
//         "Built a desktop application to encode/decode hidden messages in images with an intuitive GUI supporting PNG, JPEG, JPG. Applied principles of steganography to create a secure, self-contained solution for data concealment.",
//       // Using a placeholder image
//       image:
//         "https://placehold.co/600x400/171717/FFFFFF?text=Steganography+App",
//       technologies: ["Python", "Tkinter", "PIL"],
//       liveUrl: null, // No live link provided in resume
//       githubUrl: "#", // Add your GitHub link here
//       featured: true,
//       category: "Desktop App",
//     },
//   ];

//   // === SKILLS DATA FROM YOUR RESUME ===
//   const skills = {
//     programming: [
//       { name: "C++", level: 90, icon: "🔷" },
//       { name: "Data Structures & Algorithms", level: 95, icon: "📊" },
//       { name: "Python", level: 85, icon: "🐍" },
//     ],
//     frontend: [
//       { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
//       { name: "React.js", level: 95, icon: "⚛️" },
//       { name: "Redux Toolkit", level: 92, icon: "🔄" },
//       { name: "Tailwind CSS", level: 90, icon: "🎨" },
//     ],
//     backendData: [
//       { name: "Python", level: 85, icon: "🐍" },
//       { name: "Matplotlib", level: 75, icon: "📈" },
//     ],
//     tools: [
//       { name: "Git", level: 90, icon: "📝" },
//       { name: "GitHub", level: 88, icon: "🐱" },
//       { name: "VS Code", level: 95, icon: "💙" },
//       { name: "Linux", level: 80, icon: "🐧" },
//       { name: "PyQt6", level: 70, icon: "📱" },
//     ],
//   };

//   // Skill categories updated to match your resume
//   const skillCategories = [
//     { id: "programming", name: "Programming", icon: Code },
//     { id: "frontend", name: "Frontend", icon: Palette },
//     { id: "backendData", name: "Backend/Data", icon: Server },
//     { id: "tools", name: "Tools", icon: Zap },
//   ];

//   // === EXPERIENCE DATA FROM YOUR RESUME ===
//   const experienceData = [
//     {
//       company: "Appinventiv Technologies Pvt. Ltd.",
//       role: "React Developer Intern",
//       location: "Noida, India",
//       dates: "March 2025 - Present",
//       description: [
//         "Built scalable applications including a core HRMS portal (serving 500+ employees) and a social media platform with login/sign-up, password recovery, feed, and post sharing.",
//         "Improved performance by 20% through efficient state management with Redux Toolkit and by creating reusable, responsive UI components using React.js and Tailwind CSS.",
//         "Delivered features in an Agile/Scrum environment using Next.js, contributing to code quality via peer reviews and consistently completing work ahead of sprint deadlines.",
//       ],
//     },
//     {
//       company: "VDT Pipeline Integrity Solutions Pvt. Ltd.",
//       role: "Data Science & Python Software Development Intern",
//       location: "Noida, India",
//       dates: "Feb 2025 - March 2025",
//       description: [
//         "Optimized defect detection algorithms for pipeline inspection data, boosting identification accuracy by 50% (from 40% to 60%).",
//         "Architected and deployed Linux shell scripts to automate data manipulation, significantly accelerating the processing of large-scale datasets.",
//         "Re-engineered the core processing of a desktop application by eliminating redundant thread pools, creating a lightweight solution with improved data loading speeds.",
//       ],
//     },
//   ];

//   // === EDUCATION DATA FROM YOUR RESUME ===
//   const educationData = [
//     {
//       institution: "I.M.S. Engineering College",
//       degree: "Bachelor of Technology, Computer Science and Design",
//       location: "Ghaziabad, India",
//       dates: "2021 - 2025",
//       details: "Pursuing B.Tech with a focus on computer science and design.",
//     },
//     {
//       institution: "H.S.S. Public School",
//       degree: "C.B.S.E. 12th (Senior Secondary)",
//       location: "Hasanpur, India",
//       dates: "2020 - 2021",
//       details: "Completed with a score of 80%.",
//     },
//   ];

//   // === AWARDS DATA FROM YOUR RESUME ===
//   const awardsData = [
//     {
//       title: "Code War at VIBGYOR",
//       institution: "IMSEC Ghaziabad",
//       year: "2024",
//       result: "Secured 2nd Place (Silver Medal)",
//     },
//     {
//       title: "Tech Riddle",
//       institution: "IMSEC Ghaziabad",
//       year: "2023",
//       result: "Secured 2nd Place (Silver Medal)",
//     },
//   ];

//   useEffect(() => {
//     setIsLoaded(true);

//     // Auto-rotate projects (optional, can be removed)
//     const interval = setInterval(() => {
//       setActiveProject((prev) => (prev + 1) % projects.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [projects.length]);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Floating Code Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-orange-400/40 text-4xl font-mono animate-bounce delay-300">
//           {"<>"}
//         </div>
//         <div className="absolute top-40 right-20 text-blue-400/40 text-3xl font-mono animate-bounce delay-700">
//           {"{}"}
//         </div>
//         <div className="absolute bottom-40 left-20 text-green-400/40 text-5xl font-mono animate-bounce delay-1000">
//           {"[]"}
//         </div>
//         <div className="absolute bottom-20 right-40 text-purple-400/40 text-2xl font-mono animate-bounce delay-1500">
//           {"()"}
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center py-20">
//           <div
//             className={
//               "text-center transition-all duration-1000 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             {/* Avatar */}
//             <div className="relative mb-8">
//               <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500">
//                 <img
//                   src={userData.avatar}
//                   alt={userData.name}
//                   className="w-full h-full object-cover rounded-full bg-neutral-800"
//                 />
//               </div>

//               {/* Availability Badge */}
//               {userData.availableForHire && (
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                     <span>{userData.availabilityText}</span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Name & Title */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
//               {userData.name}
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
//               {userData.title}
//             </h2>
//             <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
//               {userData.tagline}
//             </p>

//             {/* Stats (Updated from resume) */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
//               <div className="text-center">
//                 <div className="text-3xl font-black text-orange-400 mb-1">
//                   {userData.stats.experience}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Internships</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-blue-400 mb-1">
//                   {userData.stats.projects}
//                 </div>
//                 <div className="text-neutral-400 text-sm">
//                   Projects Completed
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-green-400 mb-1">
//                   {userData.stats.awards}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Awards Won</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-purple-400 mb-1">
//                   {userData.stats.coffees}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Cups of Coffee</div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
//               <a
//                 href={"mailto:" + userData.email}
//                 className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
//               >
//                 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 <span>Get In Touch</span>
//               </a>

//               <a
//                 href={userData.resumeUrl}
//                 download
//                 className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
//               >
//                 <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                 <span>Download Resume</span>
//               </a>
//             </div>

//             {/* Contact Info (Updated from resume) */}
//             <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-4 h-4" />
//                 <span>{userData.location}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="w-4 h-4" />
//                 <span>{userData.email}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-4 h-4" />
//                 <span>{userData.phone}</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-300 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 About{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Me
//                 </span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-6">
//                 <p className="text-lg text-neutral-300 leading-relaxed">
//                   {userData.bio}
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Coffee className="w-5 h-5 text-orange-400" />
//                     <span className="text-neutral-300">Coffee Enthusiast</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Heart className="w-5 h-5 text-red-400" />
//                     <span className="text-neutral-300">DSA Problem Solver</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Zap className="w-5 h-5 text-yellow-400" />
//                     <span className="text-neutral-300">Agile/Scrum</span>
//                   </div>
//                 </div>

//                 {/* Social Links (Updated from resume) */}
//                 <div className="flex space-x-4 pt-6">
//                   <a
//                     href={userData.social.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Github className="w-6 h-6" />
//                   </a>
//                   <a
//                     href={userData.social.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Linkedin className="w-6 h-6" />
//                   </a>
//                 </div>
//               </div>

//               {/* Code block updated with your data */}
//               <div className="relative">
//                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
//                   <div className="flex items-center space-x-2 mb-6">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     <span className="text-neutral-400 ml-4 font-mono text-sm">
//                       lakshay.js
//                     </span>
//                   </div>
//                   <div className="font-mono text-sm space-y-2">
//                     <div className="text-purple-400">
//                       const <span className="text-blue-400">developer</span> ={" "}
//                       {"{"}
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       name:{" "}
//                       <span className="text-green-400">'{userData.name}'</span>,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       title:{" "}
//                       <span className="text-green-400">'{userData.title}'</span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       location:{" "}
//                       <span className="text-green-400">
//                         '{userData.location}'
//                       </span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       available:{" "}
//                       <span className="text-orange-400">
//                         {userData.availableForHire.toString()}
//                       </span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       skills: [<span className="text-green-400">'React'</span>,{" "}
//                       <span className="text-green-400">'Redux'</span>,{" "}
//                       <span className="text-green-400">'Python'</span>],
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       passion:{" "}
//                       <span className="text-green-400">
//                         'Building scalable apps'
//                       </span>
//                     </div>
//                     <div className="text-purple-400">{"}"}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section (From Resume) */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-400 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 My{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Experience
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 My professional journey and key accomplishments.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="relative space-y-12">
//                 <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-700 md:left-6"></div>

//                 {experienceData.map((job, index) => (
//                   <div key={index} className="relative pl-12 md:pl-16">
//                     <div className="absolute left-4 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 border-4 border-black md:left-6"></div>

//                     <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300">
//                       <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
//                         <div className="mb-2 sm:mb-0">
//                           <h3 className="text-2xl font-bold text-white">
//                             {job.role}
//                           </h3>
//                           <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
//                             {job.company}
//                           </h4>
//                         </div>
//                         <span className="text-neutral-400 text-sm whitespace-nowrap flex-shrink-0">
//                           {job.dates}
//                         </span>
//                       </div>
//                       <div className="text-neutral-400 text-sm mb-6">
//                         {job.location}
//                       </div>

//                       <ul className="space-y-4">
//                         {job.description.map((point, i) => (
//                           <li key={i} className="flex items-start space-x-3">
//                             <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
//                             <span className="text-neutral-300 leading-relaxed">
//                               {point}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Education Section (New, from Resume) */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-500 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 My{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Education
//                 </span>
//               </h2>
//             </div>
//             <div className="max-w-4xl mx-auto">
//               <div className="relative space-y-12">
//                 <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-700 md:left-6"></div>
//                 {educationData.map((edu, index) => (
//                   <div key={index} className="relative pl-12 md:pl-16">
//                     <div className="absolute left-4 top-2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 border-4 border-black md:left-6">
//                       <GraduationCap className="w-full h-full text-black p-0.5" />{" "}
//                       {/* Icon in the dot */}
//                     </div>
//                     <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300">
//                       <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
//                         <h3 className="text-2xl font-bold text-white">
//                           {edu.degree}
//                         </h3>
//                         <span className="text-neutral-400 text-sm whitespace-nowrap flex-shrink-0">
//                           {edu.dates}
//                         </span>
//                       </div>
//                       <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
//                         {edu.institution}
//                       </h4>
//                       <div className="text-neutral-400 text-sm mb-4">
//                         {edu.location}
//                       </div>
//                       <p className="text-neutral-300 leading-relaxed">
//                         {edu.details}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section (Updated from Resume) */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-600 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 My{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Skills
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 Technologies and tools I use to bring ideas to life
//               </p>
//             </div>

//             {/* Skill Categories (Updated) */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {skillCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveSkillCategory(category.id)}
//                   className={
//                     "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
//                     (activeSkillCategory === category.id
//                       ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
//                       : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
//                   }
//                 >
//                   <category.icon className="w-5 h-5" />
//                   <span>{category.name}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Skills Grid (Updated) */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {skills[activeSkillCategory].map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <span className="text-2xl">{skill.icon}</span>
//                       <span className="text-white font-semibold">
//                         {skill.name}
//                       </span>
//                     </div>
//                     <span className="text-orange-400 font-bold">
//                       {skill.level}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-neutral-800 rounded-full h-2">
//                     {/* FIXED: Width now comes from skill.level */}
//                     <div
//                       className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section (Updated from Resume) */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-700 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Featured{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Projects
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 A showcase of my recent work and creative solutions
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {projects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute top-4 right-4">
//                       <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                         {project.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-white mb-3">
//                       {project.title}
//                     </h3>
//                     <p className="text-neutral-300 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex space-x-4">
//                       {/* Conditionally render buttons */}
//                       {project.liveUrl && (
//                         <a
//                           href={project.liveUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
//                         >
//                           <Eye className="w-4 h-4" />
//                           <span>Live Demo</span>
//                           <ExternalLink className="w-4 h-4" />
//                         </a>
//                       )}
//                       {project.githubUrl && (
//                         <a
//                           href={project.githubUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
//                         >
//                           <Github className="w-4 h-4" />
//                           <span>Code</span>
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <a
//                 href={userData.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
//               >
//                 <span>View All Projects on GitHub</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Honors & Awards Section (New, from Resume) */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-900 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Honors &{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Awards
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 My achievements and recognitions
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {awardsData.map((award, index) => (
//                 <div
//                   key={index}
//                   className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0">
//                       <Award className="w-10 h-10 text-orange-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1">
//                         {award.title}
//                       </h3>
//                       <p className="text-neutral-400 text-sm mb-2">
//                         {award.institution} - {award.year}
//                       </p>
//                       <p className="text-lg text-white font-semibold">
//                         {award.result}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-1100 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Let's{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Work Together
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
//                 Ready to bring your ideas to life? Let's discuss your next
//                 project and create something amazing together.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
//                 <div className="flex items-center justify-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
//                     <Mail className="w-8 h-8 text-white" />
//                   </div>
//                 </div>

//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   Ready to Start a Project?
//                 </h3>
//                 <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
//                   I'm currently{" "}
//                   {userData.availableForHire ? "available" : "not available"}{" "}
//                   for new opportunities. Let's discuss how we can work together.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
//                   <a
//                     href={"mailto:" + userData.email}
//                     className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
//                   >
//                     <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                     <span>Send Message</span>
//                   </a>

//                   <a
//                     href={"tel:" + userData.phone}
//                     className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
//                   >
//                     <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                     <span>Call Me</span>
//                   </a>
//                 </div>

//                 <div className="flex justify-center items-center space-x-8 text-neutral-400">
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Quick Response</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Problem Solver</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Available Now</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// =============================

// import { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Twitter,
//   Globe,
//   ExternalLink,
//   Download,
//   Code,
//   Database,
//   Palette,
//   Server,
//   Star,
//   Eye,
//   CheckCircle,
//   ArrowRight,
//   Send,
//   Heart,
//   Coffee,
//   Zap,
// } from "lucide-react";

// export default function PortfolioOne() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeProject, setActiveProject] = useState(0);
//   const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

//   // User Data Variables - Easily customizable
//   const userData = {
//     name: "LAKSHAY AGARWAL",
//     title: "Frontend Developer",
//     tagline: "Crafting digital experiences with code and creativity",
//     location: "San Francisco, CA",
//     email: "chai@chaicode.com",
//     phone: "+1 (555) 123-4567",
//     website: "https://alexrodriguez.dev",
//     resumeUrl: "/resume.pdf",
//     avatar: "/yellow_sq.png",

//     // Availability
//     availableForHire: true,
//     availabilityText: "Available",

//     // Bio
//     bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",

//     // Social Links
//     social: {
//       github: "https://github.com/hiteshchoudhary",
//       linkedin: "https://linkedin.com/in/hiteshchoudhary",
//       twitter: "https://twitter.com/hiteshdotcom",
//       website: "https://hitesh.ai",
//     },

//     // Experience Stats
//     stats: {
//       experience: "5+",
//       projects: "50+",
//       clients: "25+",
//       coffees: "1000+",
//     },
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description:
//         "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
//       image:
//         "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
//       technologies: [
//         "Next.js",
//         "TypeScript",
//         "Tailwind CSS",
//         "Stripe",
//         "PostgreSQL",
//       ],
//       liveUrl: "https://ecommerce-demo.com",
//       githubUrl: "https://github.com/hiteshchoudhary",
//       featured: true,
//       category: "Web Development",
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description:
//         "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
//       image:
//         "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
//       technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
//       liveUrl: "https://taskmanager-demo.com",
//       githubUrl: "https://github.com/hiteshchoudhary",
//       featured: true,
//       category: "Full Stack",
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       description:
//         "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
//       image:
//         "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
//       technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
//       liveUrl: "https://weather-dashboard-demo.com",
//       githubUrl: "https://github.com/hiteshchoudhary",
//       featured: false,
//       category: "Frontend",
//     },
//     {
//       id: 4,
//       title: "AI Chat Bot",
//       description:
//         "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
//       image:
//         "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
//       technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
//       liveUrl: "https://ai-chatbot-demo.com",
//       githubUrl: "https://github.com/hiteshchoudhary",
//       featured: true,
//       category: "AI/ML",
//     },
//   ];

//   const skills = {
//     frontend: [
//       { name: "React", level: 95, icon: "⚛️" },
//       { name: "Next.js", level: 90, icon: "▲" },
//       { name: "TypeScript", level: 88, icon: "📘" },
//       { name: "Tailwind CSS", level: 92, icon: "🎨" },
//       { name: "Vue.js", level: 85, icon: "💚" },
//       { name: "JavaScript", level: 95, icon: "🟨" },
//     ],
//     backend: [
//       { name: "Node.js", level: 90, icon: "🟢" },
//       { name: "Python", level: 85, icon: "🐍" },
//       { name: "Express.js", level: 88, icon: "🚀" },
//       { name: "FastAPI", level: 82, icon: "⚡" },
//       { name: "GraphQL", level: 80, icon: "🔗" },
//       { name: "REST APIs", level: 92, icon: "🌐" },
//     ],
//     database: [
//       { name: "PostgreSQL", level: 88, icon: "🐘" },
//       { name: "MongoDB", level: 85, icon: "🍃" },
//       { name: "Redis", level: 80, icon: "🔴" },
//       { name: "Prisma", level: 85, icon: "⚡" },
//       { name: "Supabase", level: 82, icon: "🚀" },
//       { name: "Firebase", level: 78, icon: "🔥" },
//     ],
//     tools: [
//       { name: "Git", level: 95, icon: "📝" },
//       { name: "Docker", level: 85, icon: "🐳" },
//       { name: "AWS", level: 80, icon: "☁️" },
//       { name: "Vercel", level: 90, icon: "▲" },
//       { name: "Figma", level: 75, icon: "🎨" },
//       { name: "VS Code", level: 98, icon: "💙" },
//     ],
//   };

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Product Manager at TechCorp",
//       content:
//         "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
//       avatar: "👩‍💼",
//       rating: 5,
//     },
//     {
//       name: "Mike Chen",
//       role: "Startup Founder",
//       content:
//         "Working with Alex was a game-changer for our startup. He built our MVP in record time without compromising on quality.",
//       avatar: "👨‍💻",
//       rating: 5,
//     },
//     {
//       name: "Emily Davis",
//       role: "Design Director",
//       content:
//         "Alex has an incredible ability to bring designs to life. His code is clean, efficient, and perfectly matches our design vision.",
//       avatar: "👩‍🎨",
//       rating: 5,
//     },
//   ];

//   useEffect(() => {
//     setIsLoaded(true);

//     // Auto-rotate projects
//     const interval = setInterval(() => {
//       setActiveProject((prev) => (prev + 1) % projects.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const skillCategories = [
//     { id: "frontend", name: "Frontend", icon: Palette },
//     { id: "backend", name: "Backend", icon: Server },
//     { id: "database", name: "Database", icon: Database },
//     { id: "tools", name: "Tools", icon: Code },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Floating Code Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
//           {"<>"}
//         </div>
//         <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
//           {"{}"}
//         </div>
//         <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
//           {"[]"}
//         </div>
//         <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
//           {"()"}
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center py-20">
//           <div
//             className={
//               "text-center transition-all duration-1000 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             {/* Avatar */}
//             <div className="relative mb-8">
//               <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500">
//                 <img
//                   src={userData.avatar || "/placeholder.svg"}
//                   alt={userData.name}
//                   className="w-full h-full object-cover rounded-full bg-neutral-800"
//                 />
//               </div>

//               {/* Availability Badge */}
//               {userData.availableForHire && (
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                     <span>{userData.availabilityText}</span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Name & Title */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
//               {userData.name}
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
//               {userData.title}
//             </h2>
//             <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
//               {userData.tagline}
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
//               <div className="text-center">
//                 <div className="text-3xl font-black text-orange-400 mb-1">
//                   {userData.stats.experience}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-blue-400 mb-1">
//                   {userData.stats.projects}
//                 </div>
//                 <div className="text-neutral-400 text-sm">
//                   Projects Completed
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-green-400 mb-1">
//                   {userData.stats.clients}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Happy Clients</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-black text-purple-400 mb-1">
//                   {userData.stats.coffees}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Cups of Coffee</div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
//               <a
//                 href={"add mail id here"}
//                 className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
//               >
//                 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 <span>Get In Touch</span>
//               </a>

//               <a
//                 href={userData.resumeUrl}
//                 download
//                 className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
//               >
//                 <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                 <span>Download Resume</span>
//               </a>
//             </div>

//             {/* Contact Info */}
//             <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-4 h-4" />
//                 <span>{userData.location}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="w-4 h-4" />
//                 <span>{userData.email}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-4 h-4" />
//                 <span>{userData.phone}</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-300 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 About{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Me
//                 </span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-6">
//                 <p className="text-lg text-neutral-300 leading-relaxed">
//                   {userData.bio}
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Coffee className="w-5 h-5 text-orange-400" />
//                     <span className="text-neutral-300">Coffee Enthusiast</span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Heart className="w-5 h-5 text-red-400" />
//                     <span className="text-neutral-300">
//                       Open Source Contributor
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
//                     <Zap className="w-5 h-5 text-yellow-400" />
//                     <span className="text-neutral-300">Problem Solver</span>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex space-x-4 pt-6">
//                   <a
//                     href={userData.social.github}
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Github className="w-6 h-6" />
//                   </a>
//                   <a
//                     href={userData.social.linkedin}
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Linkedin className="w-6 h-6" />
//                   </a>
//                   <a
//                     href={userData.social.twitter}
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Twitter className="w-6 h-6" />
//                   </a>
//                   <a
//                     href={userData.social.website}
//                     className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
//                   >
//                     <Globe className="w-6 h-6" />
//                   </a>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
//                   <div className="flex items-center space-x-2 mb-6">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     <span className="text-neutral-400 ml-4 font-mono text-sm">
//                       developer.js
//                     </span>
//                   </div>
//                   <div className="font-mono text-sm space-y-2">
//                     <div className="text-purple-400">
//                       const <span className="text-blue-400">developer</span> ={" "}
//                       {"{"}
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       name: <span className="text-green-400">'Chai lover'</span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       title:{" "}
//                       <span className="text-green-400">'{userData.title}'</span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       location:{" "}
//                       <span className="text-green-400">
//                         '{userData.location}'
//                       </span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       available:{" "}
//                       <span className="text-orange-400">
//                         {userData.availableForHire.toString()}
//                       </span>
//                       ,
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       skills: [<span className="text-green-400">'React'</span>,{" "}
//                       <span className="text-green-400">'Node.js'</span>,{" "}
//                       <span className="text-green-400">'TypeScript'</span>],
//                     </div>
//                     <div className="text-neutral-400 ml-4">
//                       passion:{" "}
//                       <span className="text-green-400">
//                         'Building amazing things'
//                       </span>
//                     </div>
//                     <div className="text-purple-400">{"}"}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-500 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 My{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Skills
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 Technologies and tools I use to bring ideas to life
//               </p>
//             </div>

//             {/* Skill Categories */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {skillCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveSkillCategory(category.id)}
//                   className={
//                     "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
//                     (activeSkillCategory === category.id
//                       ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
//                       : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
//                   }
//                 >
//                   <category.icon className="w-5 h-5" />
//                   <span>{category.name}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Skills Grid */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {skills[activeSkillCategory].map((skill, index) => (
//                 <div
//                   key={skill.name}
//                   className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <span className="text-2xl">{skill.icon}</span>
//                       <span className="text-white font-semibold">
//                         {skill.name}
//                       </span>
//                     </div>
//                     <span className="text-orange-400 font-bold">
//                       {skill.level}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-neutral-800 rounded-full h-2">
//                     <div
//                       className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ width: "30%" }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-700 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Featured{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Projects
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 A showcase of my recent work and creative solutions
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {projects.map((project, index) => (
//                 <div
//                   key={project.id}
//                   className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute top-4 right-4">
//                       <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                         {project.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-white mb-3">
//                       {project.title}
//                     </h3>
//                     <p className="text-neutral-300 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex space-x-4">
//                       <a
//                         href={project.liveUrl}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
//                       >
//                         <Eye className="w-4 h-4" />
//                         <span>Live Demo</span>
//                         <ExternalLink className="w-4 h-4" />
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
//                       >
//                         <Github className="w-4 h-4" />
//                         <span>Code</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <a
//                 href={userData.social.github}
//                 className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
//               >
//                 <span>View All Projects</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-900 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 What Clients{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Say
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
//                 Testimonials from satisfied clients and collaborators
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="flex items-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-5 h-5 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-neutral-300 mb-6 leading-relaxed italic">
//                     "{testimonial.content}"
//                   </p>
//                   <div className="flex items-center space-x-4">
//                     <div className="text-3xl">{testimonial.avatar}</div>
//                     <div>
//                       <div className="text-white font-semibold">
//                         {testimonial.name}
//                       </div>
//                       <div className="text-neutral-400 text-sm">
//                         {testimonial.role}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-1100 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 Let's{" "}
//                 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Work Together
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
//                 Ready to bring your ideas to life? Let's discuss your next
//                 project and create something amazing together.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
//                 <div className="flex items-center justify-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
//                     <Mail className="w-8 h-8 text-white" />
//                   </div>
//                 </div>

//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   Ready to Start a Project?
//                 </h3>
//                 <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
//                   I'm currently{" "}
//                   {userData.availableForHire ? "available" : "not available"}{" "}
//                   for new projects. Let's discuss how we can work together to
//                   achieve your goals.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
//                   <a
//                     href={""}
//                     className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
//                   >
//                     <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                     <span>Send Message</span>
//                   </a>

//                   <a
//                     href={userData.phone}
//                     className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
//                   >
//                     <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                     <span>Schedule Call</span>
//                   </a>
//                 </div>

//                 <div className="flex justify-center items-center space-x-8 text-neutral-400">
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Quick Response</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Free Consultation</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span>Flexible Rates</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
