import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      {/* <div className="flex lg:justify-center lg:items-center mx-5 ">
        <div className="lg:w-1/2 sm:text-center ">
          <p className="font-extrabold text-7xl mb-5">
            Start Learning <br />
            and explore your <br />
            Top Subject
          </p>

          <Link to="/course">
            <button className="btn btn-outline btn-secondary me-4">
              Start Learning
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline btn-accent">Join Us Free</button>
          </Link>
        </div>
        <div className="w-1/2">
          <Lottie
            // style={{ height: "60px" }}
            animationData={education}
            loop={true}
          />
        </div>
      </div> */}
      <Banner></Banner>
    </>
  );
};

export default Home;
