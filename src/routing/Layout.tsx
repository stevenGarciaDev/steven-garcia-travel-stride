import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20 bg-[#fafafa] w-full min-h-screen">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
