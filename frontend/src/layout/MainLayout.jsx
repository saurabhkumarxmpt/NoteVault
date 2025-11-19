import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout=()=>{
    return(
        <>
        <Navbar/>
        <div>
        <Outlet />    {/* Yaha se HomePage render hoga */}
      </div>
        </>
    )
}

export default MainLayout;