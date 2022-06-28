import Login from "./views/auth/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {ProtectedRoute, UnprotectedRoute} from "./helper/route-check";
import Layout from "./components/Layout";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/" element={<Navigate to="/hire" />} />
                    {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={true}
                                element={<Layout component={route.component} />}
                            />
                        ))}
                </Route>

                <Route path="login" element={<UnprotectedRoute/>}>
                    <Route
                        path="/login"
                        exact
                        element={<Login/>}
                    />
                </Route>

            </Routes>
        </>
    );
}

export default App;
