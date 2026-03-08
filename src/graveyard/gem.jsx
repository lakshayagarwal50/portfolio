
// import React, { useState, useEffect, useRef } from "react";
// import { 
//   motion, useScroll, useTransform, useSpring, useMotionValue, 
//   useMotionTemplate, AnimatePresence, useAnimationFrame 
// } from "framer-motion";
// import { 
//   Github, Linkedin, Mail, ArrowUpRight, Terminal, 
//   Code2, Cpu, Globe, Layers, Command, Sparkles
// } from "lucide-react";
// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// // --- UTILS ---
// function cn(...inputs) { return twMerge(clsx(inputs)); }

// // --- DATA ---
// const DATA = {
//   name: "LAKSHAY AGARWAL",
//   role: "CREATIVE TECHNOLOGIST",
//   location: "NOIDA, IN",
//   email: "lakshayagarwal50@gmail.com",
//   projects: [
//     {
//       id: "01",
//       title: "HRMS // CORE",
//       category: "ENTERPRISE ARCHITECTURE",
//       tech: ["React", "Redux Toolkit", "Tailwind"],
//       desc: "Architected a massive-scale employee management system serving 500+ daily users. Reduced render cycles by 40%.",
//       color: "#7C3AED" // Violet
//     },
//     {
//       id: "02",
//       title: "NEURAL STEGANOGRAPHY",
//       category: "SECURITY & DATA",
//       tech: ["Python", "Cryptography", "Tkinter"],
//       desc: "A cryptographic tool hiding military-grade encrypted messages inside standard JPEG artifacts using bit-manipulation.",
//       color: "#06B6D4" // Cyan
//     },
//     {
//       id: "03",
//       title: "SOCIAL SYNC",
//       category: "REALTIME NETWORK",
//       tech: ["Next.js", "WebSockets", "Prisma"],
//       desc: "High-concurrency social feed featuring optimistic UI patterns and sub-millisecond interaction latency.",
//       color: "#EC4899" // Pink
//     }
//   ],
//   stack: ["REACT", "TYPESCRIPT", "NEXT.JS", "NODE", "PYTHON", "AWS", "WEBGL", "FRAMER"]
// };

// // --- COMPONENT: HACKER TEXT EFFECT ---
// const HackerText = ({ text, className }) => {
//   const [display, setDisplay] = useState(text);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

//   const scramble = () => {
//     let iterations = 0;
//     const interval = setInterval(() => {
//       setDisplay(
//         text.split("").map((char, index) => {
//           if (index < iterations) return text[index];
//           return chars[Math.floor(Math.random() * chars.length)];
//         }).join("")
//       );
//       if (iterations >= text.length) clearInterval(interval);
//       iterations += 1 / 3;
//     }, 30);
//   };

//   return (
//     <span onMouseEnter={scramble} className={cn("font-mono", className)}>
//       {display}
//     </span>
//   );
// };

// // --- COMPONENT: 3D TILT CARD ---
// const TiltCard = ({ children, className }) => {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
//   const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
//   const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     x.set(yPct * -20); // Rotate X based on Y movement
//     y.set(xPct * 20);  // Rotate Y based on X movement
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transformStyle: "preserve-3d", transform }}
//       className={cn("relative transition-all duration-200 ease-out", className)}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // --- COMPONENT: MAGNETIC BUTTON ---
// const MagneticButton = ({ children, className, ...props }) => {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
//   const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const { height, width, left, top } = ref.current.getBoundingClientRect();
//     const middleX = clientX - (left + width / 2);
//     const middleY = clientY - (top + height / 2);
//     x.set(middleX * 0.3); // Magnetic pull strength
//     y.set(middleY * 0.3);
//   };

//   const reset = () => { x.set(0); y.set(0); };

//   return (
//     <motion.button
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={reset}
//       style={{ x: xSpring, y: ySpring }}
//       className={cn("relative", className)}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// };

// // --- COMPONENT: INFINITE MARQUEE ---
// const Marquee = () => {
//   return (
//     <div className="relative flex overflow-hidden bg-white/5 border-y border-white/5 py-6">
//       <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
//         {[...DATA.stack, ...DATA.stack, ...DATA.stack, ...DATA.stack].map((item, i) => (
//           <div key={i} className="flex items-center gap-4">
//             <span className="text-4xl font-black text-transparent stroke-text opacity-30 uppercase font-mono">
//               {item}
//             </span>
//             <StarIcon />
//           </div>
//         ))}
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
//     </div>
//   );
// };
// const StarIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-violet-500 opacity-50">
//     <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
//   </svg>
// );

// // --- MAIN APP ---
// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   // Custom Cursor Logic
//   useEffect(() => {
//     const updateCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", updateCursor);
//     return () => window.removeEventListener("mousemove", updateCursor);
//   }, []);

//   return (
//     <div className="bg-[#050505] min-h-screen text-[#EDEDED] overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      
//       {/* GLOBAL STYLES FOR CUSTOM CURSOR & MARQUEE */}
//       <style>{`
//         .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
//         @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .animate-marquee { animation: marquee 20s linear infinite; }
//         body { cursor: none; } /* Hiding default cursor */
//       `}</style>

//       {/* 1. FILM GRAIN OVERLAY (Cinematic Feel) */}
//       <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
//         style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
//       />

//       {/* 2. CUSTOM CURSOR */}
//       <motion.div 
//         className="fixed w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[60] mix-blend-difference"
//         animate={{ x: cursorPos.x - 16, y: cursorPos.y - 16 }}
//         transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
//       >
//         <div className="absolute inset-0 bg-white/20 rounded-full blur-[2px]" />
//       </motion.div>

//       {/* 3. PROGRESS BAR */}
//       <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 origin-left z-[100]" />

//       {/* 4. BACKGROUND AMBIENCE */}
//       <div className="fixed inset-0 z-0">
//          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px]" />
//          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
//          {/* Grid Pattern */}
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//       </div>

//       {/* --- HEADER / NAV --- */}
//       <header className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
//          <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
//             <Command className="w-6 h-6" />
//             <span className="hidden sm:inline">LAKSHAY.DEV</span>
//          </div>
//          <div className="flex gap-6 text-sm font-medium tracking-widest">
//             {["WORK", "ABOUT", "CONTACT"].map((link) => (
//               <MagneticButton key={link} className="hover:text-violet-400 transition-colors cursor-pointer">
//                 {link}
//               </MagneticButton>
//             ))}
//          </div>
//       </header>

//       {/* --- HERO SECTION --- */}
//       <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto w-full">
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//             <h2 className="text-violet-500 font-mono mb-4 tracking-widest text-sm flex items-center gap-2">
//               <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"/>
//               SYSTEM_ONLINE
//             </h2>
//           </motion.div>

//           <div className="relative">
//             <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-overlay opacity-50 select-none">
//               FRONTEND
//             </h1>
//             <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent mt-[-4vw] relative z-10">
//               ARCHITECT
//             </h1>
            
//             <motion.div 
//                initial={{ x: -100, opacity: 0 }}
//                animate={{ x: 0, opacity: 1 }}
//                transition={{ delay: 0.5 }}
//                className="absolute top-[10%] right-0 max-w-md hidden md:block"
//             >
//                <p className="text-lg text-neutral-400 font-mono leading-relaxed text-right border-r-2 border-violet-500 pr-6">
//                   Crafting scalable digital ecosystems with <span className="text-white">React</span> & <span className="text-white">Data Science</span>. 
//                   <br />Based in {DATA.location}
//                </p>
//             </motion.div>
//           </div>
          
//           <div className="mt-24 flex flex-wrap items-center gap-8">
//             <MagneticButton className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
//               <div className="absolute inset-0 bg-violet-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
//               <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
//                  EXPLORE WORK <ArrowUpRight className="w-5 h-5" />
//               </span>
//             </MagneticButton>
//             <div className="flex gap-6">
//                <a href={DATA.projects[0].github} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors hover:scale-110"><Github /></a>
//                <a href={DATA.projects[0].linkedin} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors hover:scale-110"><Linkedin /></a>
//                <a href={`mailto:${DATA.email}`} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors hover:scale-110"><Mail /></a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- INFINITE MARQUEE --- */}
//       <Marquee />

//       {/* --- WORK SECTION --- */}
//       <section className="relative z-10 py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-8">
//              <div>
//                 <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">SELECTED WORK</h2>
//                 <p className="font-mono text-violet-400">/ 2023 — 2025</p>
//              </div>
//              <div className="hidden md:block text-right">
//                 <p className="text-neutral-500">CASE STUDIES</p>
//                 <p className="text-white font-bold">03</p>
//              </div>
//           </div>

//           <div className="grid gap-32">
//             {DATA.projects.map((project, index) => (
//               <div key={project.id} className={cn("flex flex-col md:flex-row gap-12 items-center", index % 2 === 1 && "md:flex-row-reverse")}>
//                 {/* PROJECT TEXT */}
//                 <div className="flex-1 space-y-8">
//                    <div className="flex items-center gap-4 text-sm font-mono tracking-widest text-neutral-500">
//                       <span>{project.id}</span>
//                       <span className="h-px w-12 bg-neutral-700" />
//                       <span style={{ color: project.color }}>{project.category}</span>
//                    </div>
                   
//                    <HackerText text={project.title} className="block text-4xl md:text-6xl font-bold tracking-tight cursor-default" />
                   
//                    <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
//                       {project.desc}
//                    </p>

//                    <div className="flex flex-wrap gap-2">
//                       {project.tech.map(t => (
//                          <span key={t} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-neutral-300 hover:border-white/30 transition-colors">
//                             {t}
//                          </span>
//                       ))}
//                    </div>

//                    <MagneticButton className="inline-flex items-center gap-2 text-white font-bold hover:text-violet-400 transition-colors border-b border-transparent hover:border-violet-400 pb-1">
//                       VIEW CASE STUDY <ArrowUpRight className="w-4 h-4" />
//                    </MagneticButton>
//                 </div>

//                 {/* PROJECT CARD (3D TILT) */}
//                 <div className="flex-1 w-full">
//                   <TiltCard className="w-full aspect-[4/3] rounded-xl bg-neutral-900 border border-white/10 overflow-hidden group">
//                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                     
//                      {/* Simulated UI inside the card */}
//                      <div className="absolute inset-4 bg-[#0a0a0a] rounded-lg border border-white/5 flex flex-col overflow-hidden shadow-2xl">
//                         <div className="h-8 bg-neutral-900 border-b border-white/5 flex items-center px-4 gap-2">
//                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
//                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
//                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
//                         </div>
//                         <div className="flex-1 relative bg-neutral-950 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
//                            {/* Abstract representation of the project */}
//                            <div 
//                               className="w-32 h-32 rounded-2xl animate-pulse blur-xl absolute"
//                               style={{ backgroundColor: project.color, opacity: 0.2 }}
//                            />
//                            <div className="relative z-10 text-center">
//                               <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
//                                  <Code2 className="w-8 h-8 text-white/50" />
//                               </div>
//                               <h4 className="font-mono text-xs text-neutral-500">PREVIEW_MODE</h4>
//                            </div>
//                         </div>
//                      </div>
//                   </TiltCard>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- GRID STATS SECTION --- */}
//       <section className="relative z-10 py-32 border-t border-white/5 bg-neutral-900/20 backdrop-blur-sm">
//          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
//             {[
//                { label: "YEARS EXP", val: "02+" },
//                { label: "PROJECTS", val: "20+" },
//                { label: "COMMITMENT", val: "100%" },
//                { label: "COFFEE", val: "∞" },
//             ].map((stat, i) => (
//                <div key={i} className="bg-[#050505] p-12 text-center hover:bg-white/5 transition-colors group cursor-crosshair">
//                   <h3 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
//                      {stat.val}
//                   </h3>
//                   <p className="text-xs font-mono text-neutral-500 tracking-widest">{stat.label}</p>
//                </div>
//             ))}
//          </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="relative z-10 py-20 px-6 text-center overflow-hidden">
//          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none" />
//          <h2 className="text-[10vw] font-black text-white/10 leading-none">LAKSHAY</h2>
         
//          <div className="mt-12 flex flex-col items-center gap-8 relative z-10">
//             <p className="text-xl text-neutral-400 max-w-md">
//                Currently architecting the future of web at Appinventiv.
//                <br />Available for freelance collaborations.
//             </p>
//             <MagneticButton className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">
//                SAY HELLO
//             </MagneticButton>
            
//             <div className="mt-12 flex gap-8 text-sm font-mono text-neutral-600 uppercase">
//                <span>© {new Date().getFullYear()} LAKSHAY AGARWAL</span>
//                <span>NOIDA, IN</span>
//             </div>
//          </div>
//       </footer>
//     </div>
//   );
// }