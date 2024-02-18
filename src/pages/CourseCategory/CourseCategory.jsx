import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import { Link } from "react-router-dom";

const CourseCategory = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <p key={course.id}>
          <Link to={`/course/content/${course.id}`}>
            <button
              style={{ width: "200px" }}
              className="btn btn-active bg-violet-400 hover:translate-x-3 hover:text-white hover:bg-violet-600 mt-5 btn-accent"
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
