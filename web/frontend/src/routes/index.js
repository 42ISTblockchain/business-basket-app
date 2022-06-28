import Home from "../views/hire/Home";
import Jobs from "../views/hire/Jobs";
import JobApplicationAccepted from "../views/hire/JobApplicationAccepted";
import JobApplicationPending from "../views/hire/JobApplicationPending";
import JobApplicationRejected from '../views/hire/JobApplicationRejected';
import WorkerProfile from "../views/hire/WorkerProfile";

export const routes = [
    {
        path: '/hire',
        exact: true,
        children: [
            {
                path: '/hire',
                exact: true,
                component: Home,
            },
            {
                path: '/hire/job',
                exact: true,
                component: Jobs,
            },
            {
                path: '/hire/applications/accepted',
                exact: true,
                component: JobApplicationAccepted,
            },
            {
                path: '/hire/applications/pending',
                exact: true,
                component: JobApplicationPending,
            },
            {
                path: '/hire/applications/rejected',
                exact: true,
                component: JobApplicationRejected,
            },
            {
                path: '/hire/worker/profile',
                exact: true,
                component: WorkerProfile,
            }
        ]
    },
]
