import Login from "./views/hire/auth/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {ProtectedRoute, UnprotectedRoute} from "./helper/route-check";
import Layout from "./components/Layout";
import Register from "./views/hire/auth/Register";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoute/>}>
                    <Route path="/" element={<Navigate to="/hire"/>}/>
                    {routes.map((route, index) => (
                        route.children.map((child, index) => (
                            <Route key={index} path={route.path}>
                                <Route
                                    key={index}
                                    path={child.path}
                                    exact={child.exact}
                                    element={<Layout component={child.component}/>}
                                />
                            </Route>
                        ))
                    ))}
                </Route>

                <Route path="/auth" element={<UnprotectedRoute/>}>
                    <Route
                        path="login"
                        exact
                        element={<Login/>}
                    />
                    <Route
                        path="register"
                        exact
                        element={<Register/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
