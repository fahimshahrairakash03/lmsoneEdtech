import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

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
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
                }}
                className="btn text-white w-36 font-bold lg:me-4 hover:-translate-y-1 hover:scale-110 duration-300 "
              >
                Start Learning
              </button>
            </Link>
            <Link>
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #c94b4b 0%, #4b134f 100%)",
                }}
                className="btn text-white w-36  mt-2 hover:-translate-y-1 hover:scale-110 duration-300 "
              >
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
