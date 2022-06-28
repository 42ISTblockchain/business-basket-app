import Home from "../views/hire/Home";
import Jobs from "../views/hire/Jobs";
import JobApplicationAccepted from "../views/hire/JobApplicationAccepted";
import JobApplicationPending from "../views/hire/JobApplicationPending";
import JobApplicationRejected from '../views/hire/JobApplicationRejected';

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
        ]
    },
]
