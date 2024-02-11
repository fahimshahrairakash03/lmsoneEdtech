import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },

      {
        path: "/course",
        element: <Courses></Courses>,
      },
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
]);
