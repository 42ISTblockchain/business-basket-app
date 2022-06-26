import Home from "../views/Home";
import Jobs from "../views/Jobs";

export const routes = [
    {
        id: 1,
        path: '/hire',
        exact: true,
        component: Home,
    },
    {
        id: 2,
        path: '/hire/job',
        exact: true,
        component: Jobs,
    },
    {
        id: 3,
        path: '/hire/applications',
        exact: true,
        component: Jobs,
    },
]
