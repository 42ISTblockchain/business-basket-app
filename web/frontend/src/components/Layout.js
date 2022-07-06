import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Modals from "./modals";

export default function Layout() {

    return (
        <>
            <Navbar />
            <Sidebar component={Outlet}/>
            <Modals/>
        </>
    );
}
