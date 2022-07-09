import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const errorPage = '/auth/hire/login'

const RoleAuthProvider = function ({children}) {
    const {role} = useSelector(state => state.auth.value)
    return role ? children : <Navigate to={errorPage}/>
}

export default RoleAuthProvider