import React from "react";
import ReactTypingEffect from "react-typing-effect";
const TypingEffect = () => {
  return (
    <div>
      <h2>
        <span>Hello World , I am</span>
        <ReactTypingEffect
          text={["Student.", "Frontend Developer"]}
          speed={100}
          eraseDelay={10}
        />
      </h2>
    </div>
  );
};

export default TypingEffect;
