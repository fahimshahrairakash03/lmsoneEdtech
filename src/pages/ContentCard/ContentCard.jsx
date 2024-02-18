import React from "react";

const ContentCard = ({ content }) => {
  const { details, title, image_url, _id } = content;
  return (
    <div className="ml-20 mt-8  ">
      <div
        style={{ height: "450px", width: "500px" }}
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
            <button
              style={{ width: "200px" }}
              className="transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 ..."
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
