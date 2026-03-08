import React from "react";
import { Download, Mail, MapPin, Phone, Send } from "lucide-react";

function Hero({ userData, isLoaded }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div
        className={
          "text-center transition-all duration-1000 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-linear-to-r  p-1 bg-linear-to-r from-orange-500 to-red-500">
            <img
              src={userData.avatar || "/placeholder.svg"}
              alt={userData.name}
              className="w-full h-full object-cover rounded-full bg-neutral-800"
            />
          </div>
          {userData.availableForHire && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className=" bg-linear-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>{userData.availabilityText}</span>
              </div>
            </div>
          )}
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          {userData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
          {userData.title}
        </h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {userData.tagline}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl text-orange-400">
              {userData.stats.experience}
            </div>
            <div className="text-neutral-400 text-sm">years of experience</div>
          </div>

          <div className="text-center">
            <div className="text-3xl text-blue-400">
              {userData.stats.projects}
            </div>
            <div className="text-neutral-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400">
              {userData.stats.coffees}
            </div>
            <div className="text-neutral-400 text-sm">Cups of Coffee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400">
              {userData.stats.experience}
            </div>
            <div className="text-neutral-400 text-sm">years of experience</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href={"mailto:" + userData.email}
            className="group bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600  text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3 "
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Get In Touch</span>
          </a>
          <a
            href={userData.resumeUrl}
            download
            className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-linear-to-r hover:from-orange-500/10 hover:to-red-500/10"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{userData.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{userData.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{userData.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;