import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";

const Courses = () => {
  return (
    <div>
      <h1 style={{ position: "absolute", top: "50", rigth: "50" }}>
        Here Are Courses
      </h1>
      <Lottie
        style={{ height: "60px" }}
        animationData={education}
        loop={true}
      />
    </div>
  );
};

export default Courses;
