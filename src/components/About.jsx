import React from "react";
import { Coffee, Github, Heart, Linkedin, Zap } from "lucide-react";

function About({ userData, isLoaded }) {
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-300" +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              {userData.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Coffee className="w-5 h-5 text-orange-400" />
                <span className="text-neutral-300">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-neutral-300">DSA Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-neutral-300">Agile/Scrum</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href={userData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={userData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-neutral-400 ml-4 font-mono text-sm">
                  lakshay.js
                </span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">
                  const <span className="text-blue-400">developer</span> = {"{"}
                </div>
                <div className="text-neutral-400 ml-4">
                  name:{" "}
                  <span className="text-green-400">'{userData.name}'</span>,
                </div>
                <div className="text-neutral-400 ml-4">
                  title:{" "}
                  <span className="text-green-400">'{userData.title}'</span>,
                </div>
                <div className="text-neutral-400 ml-4">
                  location:{" "}
                  <span className="text-green-400">'{userData.location}'</span>,
                </div>
                <div className="text-neutral-400 ml-4">
                  available:{" "}
                  <span className="text-orange-400">
                    {userData.availableForHire.toString()}
                  </span>
                  ,
                </div>
                <div className="text-neutral-400 ml-4">
                  skills: [<span className="text-green-400">'React'</span>,{" "}
                  <span className="text-green-400">'Redux'</span>,{" "}
                  <span className="text-green-400">'Python'</span>],
                </div>
                <div className="text-neutral-400 ml-4">
                  passion:{" "}
                  <span className="text-green-400">
                    'Building scalable apps'
                  </span>
                </div>
                <div className="text-purple-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;