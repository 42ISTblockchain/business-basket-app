import Jobs from "../views/hire/job/Jobs";
import JobApplicationAccepted from "../views/hire/job/applications/JobApplicationAccepted";
import JobApplicationPending from "../views/hire/job/applications/JobApplicationPending";
import JobApplicationRejected from '../views/hire/job/applications/JobApplicationRejected';
import WorkerDetail from "../views/hire/WorkerProfile";
import HireProfile from "../views/hire/Profile";
import WorkerHome from "../views/worker/Home";
import FindJob from "../views/worker/FindJob";
import Home from "../views/hire/Home";
import Layout from "../components/Layout";
import Applications from "../views/hire/job/applications";
import WorkerProfile from "../views/worker/Profile";
import WorkerLogin from "../views/worker/auth/Login";
import WorkerRegister from "../views/worker/auth/Register";
import HireLogin from "../views/hire/auth/Login";
import HireRegister from "../views/hire/auth/Register";
import Experience from "../views/worker/Experience";
import {LoginAuthProvider} from "../components/auth";

const routes = [
    {
        path: 'hire',
        exact: true,
		auth: true,
		element: <Layout/>,
        children: [
			{
				index: true,
				exact: true,
				element: <Home />
			},
            {
				path: "job",
				exact: true,
				children: [
					{
						index: true,
						exact: true,
						element: <Jobs />
					},
					{
						path: "applications",
						exact: true,
						element: <Applications />,
						children: [
							{
								index: true,
								exact: true,
								element: <JobApplicationAccepted />
							},
							{
								path: 'accepted',
								exact: true,
								element: <JobApplicationAccepted/>
							},
							{
								path: 'pending',
								exact: true,
								element: <JobApplicationPending/>
							},
							{
								path: 'rejected',
								exact: true,
								element: <JobApplicationRejected/>
							},
						]
					},
				]
			},
            {
                path: 'worker/profile',
                exact: true,
                element: <WorkerDetail/>,
            },
            {
                path: 'profile',
                exact: true,
                element: <HireProfile/>,
            }
        ],
    },
    {
        path: 'worker',
        exact: true,
		element: <Layout/>,
        children: [
            {
                path: '',
                exact: true,
                element: <WorkerHome/>,
            },
            {
                path: 'find-job',
                exact: true,
                element: <FindJob/>,
            },
			{
				path: 'profile',
				exact: true,
				element: <WorkerProfile/>,
			},
			{
				path: 'experience',
				exact: true,
				element: <Experience />,
			}
        ],
    },
	{
		path: 'auth',
		exact: true,
		children: [
			{
				path: 'worker',
				exact: true,
				children: [
					{
						path: 'login',
						exact: true,
						element: <WorkerLogin/>,
					},
					{
						path: 'register',
						exact: true,
						element: <WorkerRegister/>,
					}
				]
			},
			{
				path: 'hire',
				exact: true,
				children: [
					{
						path: 'login',
						exact: true,
						element: <HireLogin/>,
					},
					{
						path: 'register',
						exact: true,
						element: <HireRegister/>,
					}
				]
			},
		]
	}
]

const auth = routes => routes.map((route) => {
    if (route?.children) {
        route.children = auth(route.children)
    }
    if (route?.auth){
        route.element = <LoginAuthProvider>{route.element}</LoginAuthProvider>
    }
    return route
})

export default auth(routes)
