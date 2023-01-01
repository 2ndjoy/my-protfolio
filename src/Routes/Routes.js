import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Info from "../Components/Info/Info";
import Projects from "../Components/Projects/Projects";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/info",
        element: <Info></Info>,
      },
    ],
  },
]);

export default routes;
