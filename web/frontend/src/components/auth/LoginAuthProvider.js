import {Navigate} from "react-router-dom";

const loginPath = '/auth/hire/login'

const LoginAuthProvider = function ({children}) {
    const auth = JSON.parse(localStorage.getItem('auth'))
    return auth?.tokens?.access_token ? children : <Navigate to={loginPath}/>
}

export default LoginAuthProvider