import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            {/* <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className=" rounded-lg shadow-2xl"
            /> */}
            <Lottie
              // style={{ height: "60px" }}
              animationData={education}
              loop={true}
            />
          </div>
          <div className="w-1/2 text-center">
            <h1 className="font-extrabold lg:text-6xl mb-5">
              {" "}
              Start Learning <br />
              and explore your <br />
              Top Subject
            </h1>

            <Link to="/course">
              <button className="btn btn-outline btn-secondary me-4">
                Start Learning
              </button>
            </Link>
            <Link>
              <button className="btn btn-outline btn-accent">
                Join Us Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
