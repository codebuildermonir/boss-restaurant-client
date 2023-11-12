import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/ContactUs/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/Our Menu/OurMenu";

const myCreate = createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/',
                        element:<HomePage></HomePage>
                  },
                  {
                        path:'/Contact',
                        element:<Contact></Contact>

                  },
                  {
                        path:'Dashboard',
                        element:<Dashboard></Dashboard>
                  },
                  {
                        path:'/OurMenu',
                        element:<OurMenu></OurMenu>
                  }
                  
            ]
      }

])

export default myCreate;