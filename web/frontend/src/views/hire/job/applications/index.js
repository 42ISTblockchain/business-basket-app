import {Outlet} from "react-router-dom";

export default function Applications({children}) {
    console.log(<Outlet />)
     return (
         <>
             <Outlet />
         </>
     )
}