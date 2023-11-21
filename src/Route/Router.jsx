import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/ContactUs/Contact";

import OurMenu from "../Pages/Our Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";
import LogIn from "../Pages/Home/Log-In/LogIn";
import SignIn from "../Pages/Sing-Up/SignIn";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/User-Home/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import MyCart from "../Pages/Dashboard/my cart/MyCart";
import AddReview from "../Pages/Dashboard/Add Review/AddReview";
import MyBooking from "../Pages/Dashboard/my booking/MyBooking";
import Payment from "../Pages/Dashboard/payment history/Payment";





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
                        path:'/OurMenu',
                        element:<PrivateRoute><OurMenu></OurMenu></PrivateRoute>
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
      },
      {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                  {
                        path:'userHome',
                        element:<UserHome></UserHome>
                  },
                  {
                        path:'reservation',
                        element:<Reservation></Reservation>
                  },
                  {
                        path:'MyCart',
                        element:<MyCart></MyCart>
                  },
                  {
                        path:'AddReview',
                        element:<AddReview></AddReview>
                  },
                  {
                        path:'MyBooking',
                        element:<MyBooking></MyBooking>
                  },
                  {
                        path:'Payment',
                        element:<Payment></Payment>
                  }
            ]
      }
      

])

export default myCreate;

