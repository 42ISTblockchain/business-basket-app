import HireLogin from "./views/hire/auth/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {ProtectedRoute, UnprotectedRoute} from "./helper/route-check";
import Layout from "./components/Layout";
import HireRegister from "./views/hire/auth/Register";
import WorkerLogin from "./views/worker/auth/Login";
//import WorkerRegister from "./views/worker/auth/register";


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
                        path="hire/login"
                        exact
                        element={<HireLogin/>}
                    />
                    <Route
                        path="hire/register"
                        exact
                        element={<HireRegister/>}/>
                    <Route
                        path="worker/login"
                        exact
                        element={<WorkerLogin/>}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
