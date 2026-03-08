import React from "react";
import { CheckCircle, Mail, Phone, Send } from "lucide-react";

function Contact({ userData, isLoaded }) {
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-1100 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              I'm currently{" "}
              {userData.availableForHire ? "available" : "not available"} for new
              opportunities. Let's discuss how we can work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={"mailto:" + userData.email}
                className="group bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </a>

              <a
                href={"tel:" + userData.phone}
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-linear-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Call Me</span>
              </a>
            </div>

            <div className="flex justify-center items-center space-x-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;