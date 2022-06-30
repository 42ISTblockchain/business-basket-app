import {Navigate, Outlet} from "react-router-dom";

const loginPath = '/auth/hire/login'

export const UnprotectedRoute = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth?.tokens?.access_token ? <Navigate to={loginPath}/> : <Outlet />
}

export const ProtectedRoute = () => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    return auth?.tokens?.access_token ? <Outlet /> : <Navigate to={loginPath}/>
}
