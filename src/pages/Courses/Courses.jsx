import React, { useState } from "react";
import Lottie from "lottie-react";
import education from "../../assets/lottie/education.json";
import CourseCategory from "../CourseCategory/CourseCategory";
import CourseContents from "../CourseContents/CourseContents";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const Courses = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-3 ">
        <div className="p-4">
          <CourseCategory></CourseCategory>
        </div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Courses;
