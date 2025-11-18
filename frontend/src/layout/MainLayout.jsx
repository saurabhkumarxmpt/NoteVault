import {Outlet} from "react-router-dom";

const MainLayout=()=>{
    <>
    <main className="min-h-screen">
        <Outlet/>
    </main>
    </>
}

export default MainLayout;