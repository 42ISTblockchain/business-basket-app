import {Navigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

const loginPath = '/auth/hire/login'

const RoleAuthProvider = function ({children}) {
    const localStore = JSON.parse(localStorage.getItem('auth'))
    const access_token = localStore?.tokens?.access_token
    const role = access_token ? jwtDecode(access_token) : null
    return localStore?.tokens?.access_token ? children : <Navigate to={loginPath}/>
}

export default RoleAuthProvider