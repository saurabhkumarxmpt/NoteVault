import {Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../features/auth/Login";

const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
        </>
    )
}

export default AppRouter;