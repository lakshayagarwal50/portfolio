import React from "react";
// Note: Icon components are passed in via the skillCategories prop from data.js

function Skills({
  skills,
  skillCategories,
  isLoaded,
  activeSkillCategory,
  setActiveSkillCategory,
}) {
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-600 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveSkillCategory(category.id)}
              className={
                "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                (activeSkillCategory === category.id
                  ? "bg-linear-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
              }
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeSkillCategory].map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon} </span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-orange-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;