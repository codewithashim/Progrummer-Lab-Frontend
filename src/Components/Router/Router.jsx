import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Header/Header";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import CoursesDetails from "../Courses/CoursesDetails/CoursesDetails";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        loader: () => {
          return fetch("https://progrummer-lab-server.vercel.app/course");
        },
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) => {
          return fetch(
            `https://progrummer-lab-server.vercel.app/course${params.id}`
          );
        },
        element: <CoursesDetails></CoursesDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },

      // ========== NotFound Route  //
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
