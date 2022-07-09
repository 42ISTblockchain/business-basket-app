import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginData} from "../../slice/authSlice";
import jwtDecode from "jwt-decode";

const loginPath = '/auth/hire/login'

const LoginAuthProvider = function ({children}) {
    const auth = JSON.parse(localStorage.getItem('auth'))
    const dispatch = useDispatch()
    const data = jwtDecode(auth.tokens.access_token)

    if (!(auth?.tokens?.access_token)){
        dispatch(loginData(null))
        return <Navigate to={loginPath}/>
    }
    dispatch(loginData(data))
    return children
}

export default LoginAuthProvider