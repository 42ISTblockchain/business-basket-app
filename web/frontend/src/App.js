import Login from "./views/auth/Login";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {ProtectedRoute, UnprotectedRoute} from "./helper/route-check";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                        {routes.map((route) => (
                            <Route
                                key={route.id}
                                path={route.path}
                                exact={route.exact}
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
