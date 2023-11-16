import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const MainLayout = () => {
      const location= useLocation()

      //console.log(location)
      
      const onHeaderFooter= location.pathname.includes('/LogIn')||location.pathname.includes('/SignIn')
      

      return (
            <div>

                  {onHeaderFooter ||<NavBar></NavBar>}
                  
                  
                  <Outlet></Outlet>
                  
                  {onHeaderFooter || <Footer></Footer>}
                  
                  
            </div>
      );
};

export default MainLayout;