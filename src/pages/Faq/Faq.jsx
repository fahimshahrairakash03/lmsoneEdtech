import React from "react";
import { TypeAnimation } from "react-type-animation";

const Faq = () => {
  return (
    <div>
      <TypeAnimation
        style={{
          whiteSpace: "pre-line",
          fontSize: "44px",
          height: "195px",
          display: "block",
        }}
        sequence={[
          `Line one\nLine Two\nLine Three\nLine Four\nLine Five
    
Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
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
