import Home from "../views/Home";
import Jobs from "../views/Jobs";

export const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home,
    },
    {
        id: 2,
        path: '/job',
        exact: true,
        component: Jobs,
    },
]
