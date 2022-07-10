import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginData} from "../../slice/authSlice";
import jwtDecode from "jwt-decode";

const loginPath = '/auth/hire/login'

const LoginAuthProvider = function ({children}) {
    const accessToken = JSON.parse(localStorage.getItem('auth'))?.tokens?.access_token
    const dispatch = useDispatch()
    if (!accessToken){
        dispatch(loginData(null))
        return <Navigate to={loginPath}/>
    }
    const data = jwtDecode(accessToken)
    dispatch(loginData(data))
    return children
}

export default LoginAuthProvider