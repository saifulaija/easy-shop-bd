import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";


export const router = createBrowserRouter([{
path:'/',
element:<Layout></Layout>,
errorElement:<ErrorPage></ErrorPage>,
children:[
      {
            path:'/',
            element:<Home></Home>
      }
]
}


])