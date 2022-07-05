import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <Navbar />
            <Sidebar component={Outlet}/>
        </>
    );
}
