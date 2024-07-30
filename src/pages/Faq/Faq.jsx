import React from "react";
import { TypeAnimation } from "react-type-animation";

const Faq = () => {
  return (
    <div className="text-center">
      <TypeAnimation
        style={{
          whiteSpace: "pre-line",
          fontSize: "44px",
          height: "195px",
          display: "block",
        }}
        sequence={[
          `How To enroll in Courses?\nWhat is the payment system?\nWhat is the refund policy?\nHow long the courses will be conducted?\nWho are the instructors?
    
Let's Enjoy The Whole Journey`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
          1000,
          "",
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Faq;
