// import { useState, useEffect } from "react";
// import {
//   userData,
//   experienceData,
//   educationData,
//   skills,
//   skillCategories,
//   projects,
//   awardsData,
// } from "./data";
// import {
//   ArrowRight,
//   Award,
//   CheckCircle,
//   Coffee,
//   Download,
//   ExternalLink,
//   Eye,
//   Github,
//   GraduationCap,
//   Heart,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Zap,
// } from "lucide-react";
// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeSkillCategory, setActiveSkillCategory] = useState("programming");

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className="bg-black min-h-screen text-white overflow-hidden">
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-orange-500/40 to-red-500/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-r from-green-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>
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
//         <section className="min-h-screen flex items-center justify-center py-20">
//           <div
//             className={
//               "text-center transition-all duration-1000 " +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="relative mb-8">
//               <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-linear-to-r  p-1 bg-linear-to-r from-orange-500 to-red-500">
//                 <img
//                   src={userData.avatar || "/placeholder.svg"}
//                   alt={userData.name}
//                   className="w-full h-full object-cover rounded-full bg-neutral-800"
//                 />
//               </div>
//               {userData.availableForHire && (
//                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
//                   <div className=" bg-linear-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
//                     <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                     <span>{userData.availabilityText}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
//               {userData.name}
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
//               {userData.title}
//             </h2>
//             <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
//               {userData.tagline}
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
//               <div className="text-center">
//                 <div className="text-3xl text-orange-400">
//                   {userData.stats.experience}
//                 </div>
//                 <div className="text-neutral-400 text-sm">
//                   years of experience
//                 </div>
//               </div>

//               <div className="text-center">
//                 <div className="text-3xl text-blue-400">
//                   {userData.stats.projects}
//                 </div>
//                 <div className="text-neutral-400 text-sm">
//                   Projects Completed
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl text-green-400">
//                   {userData.stats.coffees}
//                 </div>
//                 <div className="text-neutral-400 text-sm">Cups of Coffee</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl text-purple-400">
//                   {userData.stats.experience}
//                 </div>
//                 <div className="text-neutral-400 text-sm">
//                   years of experience
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//               <a
//                 href={"mailto:" + userData.email}
//                 className="group bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600  text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3 "
//               >
//                 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 <span>Get In Touch</span>
//               </a>
//               <a
//                 href={userData.resumeUrl}
//                 download
//                 className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-linear-to-r hover:from-orange-500/10 hover:to-red-500/10"
//               >
//                 <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                 <span>Download Resume</span>
//               </a>
//             </div>
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
//         <section className="py-20">
//           <div
//             className={
//               "transition-all duration-1000 delay-300" +
//               (isLoaded
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10")
//             }
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                 About{" "}
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
//                     <div className="absolute left-4 top-2 w-4 h-4 bg-linear-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 border-4 border-black md:left-6"></div>

//                     <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300">
//                       <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
//                         <div className="mb-2 sm:mb-0">
//                           <h3 className="text-2xl font-bold text-white">
//                             {job.role}
//                           </h3>
//                           <h4 className="text-lg font-semibold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
//                             {job.company}
//                           </h4>
//                         </div>
//                         <span className="text-neutral-400 text-sm whitespace-nowrap shrink-0">
//                           {job.dates}
//                         </span>
//                       </div>
//                       <div className="text-neutral-400 text-sm mb-6">
//                         {job.location}
//                       </div>

//                       <ul className="space-y-4">
//                         {job.description.map((point, i) => (
//                           <li key={i} className="flex items-start space-x-3">
//                             <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Education
//                 </span>
//               </h2>
//             </div>
//             <div className="max-w-4xl mx-auto">
//               <div className="relative space-y-12">
//                 <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-700 md:left-6"></div>
//                 {educationData.map((edu, index) => (
//                   <div key={index} className="relative pl-12 md:pl-16">
//                     <div className="absolute left-4 top-2 w-4 h-4 bg-linear-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 border-4 border-black md:left-6">
//                       <GraduationCap className="w-full h-full text-black p-0.5" />{" "}
//                       {/* Icon in the dot */}
//                     </div>
//                     <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300">
//                       <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
//                         <h3 className="text-2xl font-bold text-white">
//                           {edu.degree}
//                         </h3>
//                         <span className="text-neutral-400 text-sm whitespace-nowrap shrink-0">
//                           {edu.dates}
//                         </span>
//                       </div>
//                       <h4 className="text-lg font-semibold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
//                       ? "bg-linear-to-r from-orange-500 to-red-500 text-white shadow-lg"
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
//                       <span className="text-2xl">{skill.icon} </span>
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
//                       className="bg-linear-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
//                     <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
//                           className="flex items-center space-x-2 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
//                     <div className="shrink-0">
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
//                 <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                   Work Together
//                 </span>
//               </h2>
//               <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
//                 Ready to bring your ideas to life? Let's discuss your next
//                 project and create something amazing together.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="bg-linear-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
//                 <div className="flex items-center justify-center mb-8">
//                   <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
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
//                     className="group bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
//                   >
//                     <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                     <span>Send Message</span>
//                   </a>

//                   <a
//                     href={"tel:" + userData.phone}
//                     className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-linear-to-r hover:from-orange-500/10 hover:to-red-500/10"
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

// export default App;