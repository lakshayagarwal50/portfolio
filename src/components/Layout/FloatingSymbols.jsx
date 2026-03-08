import React from "react";

function FloatingSymbols() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 text-orange-400/40 text-4xl font-mono animate-bounce delay-300">
        {"<>"}
      </div>
      <div className="absolute top-40 right-20 text-blue-400/40 text-3xl font-mono animate-bounce delay-700">
        {"{}"}
      </div>
      <div className="absolute bottom-40 left-20 text-green-400/40 text-5xl font-mono animate-bounce delay-1000">
        {"[]"}
      </div>
      <div className="absolute bottom-20 right-40 text-purple-400/40 text-2xl font-mono animate-bounce delay-1500">
        {"()"}
      </div>
    </div>
  );
}

export default FloatingSymbols;