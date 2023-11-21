import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCartPlus } from 'react-icons/fa6';
import { MdReviews } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";


const Dashboard = () => {
      return (
            <div className="grid grid-cols-12 mx-auto  ">

                  

                  {/* Dashboard menu */}

                  <div className="bg-[#D1A054] col-span-2  p-4 ">
                        <div>
                        <a className=" md:text-xl ml-20 text-black "> 
                        <h1 className="font-black md:text-xl">BISTRO BOSS</h1>
                        <p className="md:text-lg font-bold md:tracking-[4.12px] ">Restaurant</p>
                        </a>
                        </div>

                        <ul className="my-5 uppercase space-y-5  ">

                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/userHome'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex flex-col lg:flex-row gap-2 items-center">
                              <AiFillHome className="text-2xl "></AiFillHome>
                              User Home

                        </p>
                        </NavLink>
                        </li> 


                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/reservation'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <FaCalendarDays className=" text-2xl"></FaCalendarDays>
                              Reservation

                        </p>
                        </NavLink>
                        </li> 

                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/Payment'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <FaCalendarDays className=" text-2xl"></FaCalendarDays>
                              payment history

                        </p>
                        </NavLink>
                        </li> 

                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/MyCart'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <FaCartPlus className=" text-2xl"></FaCartPlus>
                              My-Cart

                        </p>
                        </NavLink>
                        </li> 


                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/AddReview'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <MdReviews className=" text-2xl"></MdReviews>
                              add review

                        </p>
                        </NavLink>
                        </li> 

                        <li className=" z-40 text-black ">
                        <NavLink to={'/dashboard/MyBooking'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <FaBookmark className=" text-2xl"></FaBookmark>
                              my booking

                        </p>
                        </NavLink>
                        </li> 

                        <div className="divider"></div>

                        <li className=" z-40 text-black ">
                        <NavLink to={'/ '} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <AiFillHome className=" text-2xl "></AiFillHome>
                               Home

                        </p>
                        </NavLink>
                        </li> 


                        <li className=" z-40 text-black ">
                        <NavLink to={'/OurMenu'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <IoMenu className=" text-2xl "></IoMenu>
                               menu

                        </p>
                        </NavLink>
                        </li> 

                        <li className=" z-40 text-black ">
                        <NavLink to={'/OurShop/:category'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <GiShoppingBag className=" text-2xl "></GiShoppingBag>
                               Shop

                        </p>
                        </NavLink>
                        </li> 

                        <li className=" z-40 text-black ">
                        <NavLink to={'/Contact'} 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFFFFF] underline " : ""
                        }
                        ><p className="flex gap-2 items-center flex-col lg:flex-row">
                              <MdContactPhone className=" text-2xl "></MdContactPhone>
                               Contact

                        </p>
                        </NavLink>
                        </li> 






                        </ul>




                  </div>


                  {/* Dashboard Content */}
                  <div className="col-span-10">
                        <Outlet></Outlet>


                  </div>
                  
            </div>
      );
};

export default Dashboard;