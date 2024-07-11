import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ content }) => {
  const { details, title, image_url, _id } = content;
  return (
    <div className="lg:ml-20 m-4 mt-8  ">
      <div
        style={{ height: "450px", width: "400px" }}
        className="card card-compact w-96 bg-base-100 shadow-xl "
      >
        <figure>
          <img
            style={{ height: "200px" }}
            className="hover:transition duration-700 ease-in-out"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 150)}. . .</p>
          <div className="card-actions justify-center mt-3">
            <Link to={`/courseDetails/${_id}`}>
              <button
                style={{
                  width: "200px",
                }}
                className=" font-bold transition ease-in-out delay-150 text-xl text-white hover:-translate-y-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-purple-500 ..."
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
