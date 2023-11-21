
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCartPlus } from 'react-icons/fa6';
import useCart from "../Hooks/useCart";

const NavBar = () => {
    const{user, logOut}=useContext(AuthContext)
    const [cart]= useCart()

   

    const handleLogOut=()=>{
        logOut()
        .then(result=>{
            const userLogOut= result.user;
            console.log(userLogOut)
        })
        .then(error=>{
            console.log(error)
        })
    }
    

      const navBar = <>


      <li className="md:text-lg z-40 text-[#FFFFFF] ">
          <NavLink to={'/'} 
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F68923] underline " : ""
          }
          >Home
          </NavLink>
      </li>
      
      <li className=" md:text-lg z-40 text-[#FFFFFF]" >
          <NavLink to={'/Contact'} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F68923] underline " : ""
          }>
          Contact Us
          </NavLink>
      </li>

        <li className=" text-lg text-[#FFFFFF] list-none">
          <NavLink to={'/Dashboard'}className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F68923] underline  " : ""
          } >
          Dashboard
          </NavLink>
          </li>

      <li className=" text-lg text-[#FFFFFF] list-none">
          <NavLink to={'/OurMenu'}className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F68923] underline  " : ""
          } >
          Our Menu
          </NavLink>
          </li>

          <li className=" text-lg text-[#FFFFFF] list-none">
          <NavLink to={'/OurShop/:category'}className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " text-[#F68923] underline  " : ""
          } >
          Our Shop
          </NavLink>
          </li>

          <li>

            <NavLink to={'/dashboard/cart'}>
            <button className="btn">
            <FaCartPlus className="text-2xl"></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div>
            </button>
            </NavLink>

          </li>

          

          {
            user? <>  <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Log-Out</button> </>
            : 
            <>

            <li className=" text-lg text-[#FFFFFF] list-none">
            <NavLink to={'/LogIn'}className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#F68923] underline  " : ""
            } >
            Log-In
            </NavLink>
            </li>
            </>
          }

         
       
      
      
 </>

      return (
            <div className="">
                  
                <div>
                 <div className="navbar fixed z-30 bg-opacity-60 text-white bg-[#1a1818] ">
                   <div className="navbar-center w-5/12">
                   <div className="dropdown">
                    <label tabIndex={0} className="btn  btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> 
                   </label> 
                   <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box w-52">
                   {navBar}
                   </ul>
                   </div>
                   
                    <a className=" text-xl ml-20 text-white "> 
                    <h1 className="font-black text-3xl">BISTRO BOSS</h1>
                    <p className="text-2xl font-bold tracking-[8.12px] ">Restaurant</p>
                    </a> 
                   </div>
                   <div className="navbar-center  hidden lg:flex">
                   <ul className="  gap-5 menu-horizontal px-1">
                   {navBar}
                   </ul>
                   </div>
                      {/* <div className="navbar-end  md:mr-5 hidden lg:flex"> 
                         
                     </div>  */}
                  </div> 
                </div>
 
          </div>
      );
};

export default NavBar;




