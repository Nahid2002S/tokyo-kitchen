import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Banner from "../banner/Banner";
import Login from "../login/Login";
import Register from "../Register/Register";
import Chefrecipes from "../chef-recipes/Chefrecipes";
import Chefs from "../chefs/chefs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <Banner></Banner>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'chef-recipes/:id',
            element: <PrivateRoute><Chefrecipes></Chefrecipes></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-10-server-nahid2002s.vercel.app/chefs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;