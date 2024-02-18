import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import CourseContents from "../pages/CourseContents/CourseContents";
import AllCourses from "../pages/AllCourses/AllCourses";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },

      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "/course",
    element: <Courses></Courses>,
    children: [
      {
        path: "/course/content/:id",
        element: <CourseContents></CourseContents>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/course",
        element: <AllCourses></AllCourses>,
        loader: () => fetch("http://localhost:5000/contents"),
      },
    ],
  },
]);
