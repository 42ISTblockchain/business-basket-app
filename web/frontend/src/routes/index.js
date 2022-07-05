import Jobs from "../views/hire/job/Jobs";
import JobApplicationAccepted from "../views/hire/job/applications/JobApplicationAccepted";
import JobApplicationPending from "../views/hire/job/applications/JobApplicationPending";
import JobApplicationRejected from '../views/hire/job/applications/JobApplicationRejected';
import WorkerProfile from "../views/hire/WorkerProfile";
import Profile from "../views/hire/Profile";
import WorkerHome from "../views/worker/Home";
import FindJob from "../views/worker/FindJob";
import Home from "../views/hire/Home";
import Layout from "../components/Layout";
import { ProtectedRoute } from "../helper/route-check";
import { Navigate } from "react-router-dom";
import Applications from "../views/hire/job/applications";

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
                element: <WorkerProfile/>,
            },
            {
                path: 'profile',
                exact: true,
                element: <Profile/>,
            }
        ],
    },
    {
        path: 'worker',
        exact: true,
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
            }
        ],
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