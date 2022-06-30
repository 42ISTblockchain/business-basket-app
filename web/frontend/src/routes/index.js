import Home from "../views/hire/Home";
import Jobs from "../views/hire/Jobs";
import JobApplicationAccepted from "../views/hire/JobApplicationAccepted";
import JobApplicationPending from "../views/hire/JobApplicationPending";
import JobApplicationRejected from '../views/hire/JobApplicationRejected';
import WorkerProfile from "../views/hire/WorkerProfile";
import Profile from "../views/hire/Profile";

export const routes = [
    {
        path: '/hire',
        exact: true,
        children: [
            {
                path: '',
                exact: true,
                component: Home,
            },
            {
                path: 'job',
                exact: true,
                component: Jobs,
            },
            {
                path: 'applications/accepted',
                exact: true,
                component: JobApplicationAccepted,
            },
            {
                path: 'applications/pending',
                exact: true,
                component: JobApplicationPending,
            },
            {
                path: 'applications/rejected',
                exact: true,
                component: JobApplicationRejected,
            },
            {
                path: 'worker/profile',
                exact: true,
                component: WorkerProfile,
            },
            {
                path: 'profile',
                exact: true,
                component: Profile,
            }
        ]
    },
]
