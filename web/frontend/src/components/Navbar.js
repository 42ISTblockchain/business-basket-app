import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginData} from "../slice/authSlice";
import {useEffect} from "react";
import {themeChange} from 'theme-change'


export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {role} = useSelector(state => state.auth.value)
    useEffect(() => {
        themeChange(false)
    }, [])

    function logout() {
        localStorage.removeItem('auth');
        dispatch(loginData(null))
        navigate(`/auth/${role}/login`, {replace: true})
    }


    return (
        <div className="navbar bg-primary text-primary-content flex-shrink-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        htmlFor="sidebar"
                        className="btn btn-ghost btn-circle lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">İş Sepeti</a>
            </div>
            <div className="navbar-end">
                <div className="flex justify-between">
                    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Tema Değiştir</button>

                    <div className="dropdown dropdown-end text-primary dark:text-white">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791"/>
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink to={`/${role}/profile`} className="justify-between">
                                    Profil
                                </NavLink>
                            </li>
                            <li>
                                <a onClick={() => logout()}>Çıkış yap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
