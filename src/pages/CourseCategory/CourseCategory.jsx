import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import { Link } from "react-router-dom";

const CourseCategory = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lmsone-edtech-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <p key={course.id}>
          <Link to={`/course/content/${course.id}`}>
            <button
              style={{
                width: "200px",
                backgroundImage:
                  "linear-gradient(90deg, #be93c5 0%, #7bc6cc 100%)",
              }}
              className="btn btn-active font-extrabold  bg-violet-800 hover:translate-x-3 text-white  mt-5 btn-accent"
            >
              {course.name}
            </button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CourseCategory;
