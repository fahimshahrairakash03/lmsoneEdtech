import React from "react";
import CourseCategory from "../CourseCategory/CourseCategory";
import { useLoaderData } from "react-router-dom";
import ContentCard from "../ContentCard/ContentCard";
import Lottie from "lottie-react";

const CourseContents = () => {
  const courseContents = useLoaderData();
  console.log(courseContents);
  return (
    <div>
      {courseContents.map((content) => (
        <ContentCard key={content._id} content={content}></ContentCard>
      ))}
    </div>
  );
};

export default CourseContents;
