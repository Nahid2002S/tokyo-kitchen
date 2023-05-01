import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('https://assignment-10-server-nahid2002s.vercel.app/chefs')
    },
  ]);

  export default router;