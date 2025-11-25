import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const MainLayout=()=>{
    return(
        <>
        <Navbar/>
        <div>
        <Outlet />    {/* Yaha se HomePage render hoga */}
      </div>
      <Footer/>
        </>
    )
}

export default MainLayout;