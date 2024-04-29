import { Outlet } from "react-router-dom";
import Footer from "../Sheard/Footer/Footer";
import Navbar from "../Sheard/Navbar/Navbar";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;