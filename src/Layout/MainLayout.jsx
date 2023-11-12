import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";


const MainLayout = () => {
      return (
            <div>
                  <NavBar></NavBar>
                  <Outlet></Outlet>
                  <Footer></Footer>
                  
            </div>
      );
};

export default MainLayout;