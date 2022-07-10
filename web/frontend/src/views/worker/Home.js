import {useEffect, useState} from "react";
import axiosInstance from "../../helper/http";

export default function Home() {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        axiosInstance.get('/worker/my-job-application').then(res => setJobs(res.data))
    }, [])

    function badge(status) {
        switch (status) {
            case 'pending':
                return <span className="badge badge-warning">Onay Bekliyor</span>
            case 'accepted':
                return <span className="badge badge-success">Onaylandı</span>
            case 'rejected':
                return <span className="badge badge-error">Reddedildi</span>
        }
    }

    return (
        <div className="flex w-full">
            <div className="overflow-x-auto w-6/12">
                <h1 className="text-2xl mb-7">Başvurularım</h1>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>Durum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobs && jobs.map(job => (
                        <tr className="hover" key={job.id}>
                            <td>{job.hire.companyName}</td>
                            <td>{badge(job.status)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
