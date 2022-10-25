import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import CoursesDetails from "../Courses/CoursesDetails/CoursesDetails";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";
import FAQ from "../FAQ/FAQ";
import MainLayout from "../Layout/MainLayout";
import CoursesCetagory from "../Home/OurCetagory/OurCetagory";
import Cetagory from "../Courses/Cetagory/Cetagory";
import Checkout from "../Checkout/Checkout";
import PrivetRouter from "./PrivetRouter";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("https://progrummer-lab-server.vercel.app/category");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => {
          return fetch("https://progrummer-lab-server.vercel.app/category");
        },
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
            `https://progrummer-lab-server.vercel.app/course/${params.id}`
          );
        },
        element: <CoursesDetails></CoursesDetails>,
      },

      {
        path: "/cetagory/:id",
        loader: ({ params }) => {
          return fetch(
            `https://progrummer-lab-server.vercel.app/category/${params.id}`
          );
        },
        element: <Cetagory></Cetagory>,
      },

      {
        path: "/category",
        loader: () => {
          return fetch("https://progrummer-lab-server.vercel.app/category");
        },
        element: <CoursesCetagory></CoursesCetagory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },

      {
        path: "checkout",
        element: (
          <PrivetRouter>
            <Checkout></Checkout>
          </PrivetRouter>
        ),
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
