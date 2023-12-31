import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Services from "../Services/Services";
import AddServices from "../Services/AddServices";
import LogIn from "../LogInAndRegister/LogIn";
import Register from "../LogInAndRegister/Register";
import About from "../AboutSection/About";
import InsideHouse from "../InsideHouse/InsideHouse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/insideHouse",
        element: <InsideHouse></InsideHouse>,
      },
    ],
  },
]);
export default router;
