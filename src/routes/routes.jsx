import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Banner from "../banner/Banner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <Banner></Banner>
        }
      ]
    },
  ]);

  export default router;