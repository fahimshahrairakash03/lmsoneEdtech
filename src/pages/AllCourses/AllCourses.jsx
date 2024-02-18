import React from "react";
import { useLoaderData } from "react-router-dom";
import ContentCard from "../ContentCard/ContentCard";

const AllCourses = () => {
  const courseContents = useLoaderData();
  return (
    <div>
      {courseContents.map((content) => (
        <ContentCard key={content._id} content={content}></ContentCard>
      ))}
    </div>
  );
};

export default AllCourses;
