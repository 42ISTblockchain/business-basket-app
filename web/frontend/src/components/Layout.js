import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({component: Component}) {
    return (
        <>
            <Navbar />
            <Sidebar component={Component}/>
        </>
    );
}
