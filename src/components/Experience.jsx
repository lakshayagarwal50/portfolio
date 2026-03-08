import React from "react";
import { CheckCircle } from "lucide-react";

function Experience({ experienceData, isLoaded }) {
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-400 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-700 md:left-6"></div>

            {experienceData.map((job, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 bg-linear-to-r from-orange-500 to-red-500 rounded-full -translate-x-1/2 border-4 border-black md:left-6"></div>

                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-2xl font-bold text-white">
                        {job.role}
                      </h3>
                      <h4 className="text-lg font-semibold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                        {job.company}
                      </h4>
                    </div>
                    <span className="text-neutral-400 text-sm whitespace-nowrap shrink-0">
                      {job.dates}
                    </span>
                  </div>
                  <div className="text-neutral-400 text-sm mb-6">
                    {job.location}
                  </div>

                  <ul className="space-y-4">
                    {job.description.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                        <span className="text-neutral-300 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;