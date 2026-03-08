import React from "react";
import { Award } from "lucide-react";

function Awards({ awardsData, isLoaded }) {
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-900 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Honors &{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            My achievements and recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <Award className="w-10 h-10 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {award.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-2">
                    {award.institution} - {award.year}
                  </p>
                  <p className="text-lg text-white font-semibold">
                    {award.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;