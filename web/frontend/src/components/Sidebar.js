import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {hire, worker} from "../configs/menus";

import {useSelector} from "react-redux";

export default function Sidebar({component: Component}) {
    const {id, email, role} = useSelector(state => state.auth.value)

    let menus;

    if (role === "hire") {
        menus = hire;
    } else if (role === "worker") {
        menus = worker;
    }

    return (<div className="drawer drawer-mobile h-[calc(100vh-64px)]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content h-full w-full lg:p-12 p-4">
            <Component/>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                {menus && menus.map((menu, index) => {
                    return (<div key={index}>
                        <li className="mb-2 bg-white dark:bg-[#242930] rounded-lg">
                            <NavLink to={menu.path}>
                                  <span className="material-symbols-rounded">
                                    {menu.icon}
                                  </span>
                                {menu.name}
                            </NavLink>
                        </li>
                        {menu.children && menu.children.map((child, index) => {
                            return (<li
                                key={index}
                                className="mb-2 ml-8 bg-white dark:bg-[#242930] rounded-lg"
                            >
                                <NavLink key={index} to={child?.path}>
                          <span className="material-symbols-rounded">
                            {child.icon}
                          </span>
                                    {child.name}
                                </NavLink>
                            </li>);
                        })}
                    </div>);
                })}
            </ul>
        </div>
    </div>);
}
