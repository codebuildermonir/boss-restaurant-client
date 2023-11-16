import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/ContactUs/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/Our Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import LogIn from "../Pages/Home/Log-In/LogIn";
import SignIn from "../Pages/Sing-Up/SignIn";

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
                  },
                  {
                        path:'/OurShop/:category',
                        element:<OurShop></OurShop>
                  },
                  {
                        path:'Login',
                        element:<LogIn></LogIn>
                  },
                  {
                        path:'SignIn',
                        element:<SignIn></SignIn>
                  }
                  
            ]
      }

])

export default myCreate;