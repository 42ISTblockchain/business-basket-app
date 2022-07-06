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
import { ProtectedRoute } from "../helper/route-check";
import { Navigate } from "react-router-dom";
import Applications from "../views/hire/job/applications";
import WorkerProfile from "../views/worker/Profile";
import WorkerLogin from "../views/worker/auth/Login";
import HireLogin from "../views/hire/auth/Login";
import HireRegister from "../views/hire/auth/Register";
import Experience from "../views/worker/Experience";

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
				path: 'worker/login',
				exact: true,
				element: <WorkerLogin/>,
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

let elements = []

const auth = routes => routes.map((route) => {
	if (route.children) {
		route.children = auth(route.children)
	}
	if (route.element)
		elements.push({path:route.path, element: route.element})
	if (route.auth)
	 	route.element = <ProtectedRoute>route.element</ProtectedRoute>
	return route
})

// setInterval(()=>{
// 	console.log(elements)
// }, 10000)

export default routes
