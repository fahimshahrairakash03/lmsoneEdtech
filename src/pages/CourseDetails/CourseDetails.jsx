import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { title, thumbnail_url, image_url, details, rating } = course;
  console.log(course);
  return (
    <div className="px-10 lg:px-20 py-5">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "200px", width: "400px" }}
            src={image_url}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className=" font-bold text-center text-4xl">{title}</h2>
          <p className="text-center mt-5">{details}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
