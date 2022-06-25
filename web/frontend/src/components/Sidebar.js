import React from "react";
import {routes} from "../routes";
import {NavLink, Route, Routes} from "react-router-dom";
import {menus} from "../configs/menus";

export default function Sidebar() {
    return (
        <div className="drawer drawer-mobile h-[calc(100vh-64px)]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content  flex flex-col h-full lg:p-12 p-2 !z-20">
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            exact={route.exact}
                            element={<route.component/>}
                        />
                    ))}
                </Routes>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content z-10">
                    {menus.hire.map((menu) => {
                        return (
                            <li key={menu.id} className="mb-2">
                                <NavLink to={menu.path} className="bg-white">
                                   <span className="material-symbols-rounded">{menu.icon}</span>
                                    {menu.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
