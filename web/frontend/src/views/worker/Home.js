import {useEffect, useState} from "react";
import axiosInstance from "../../helper/http";

export default function Home() {
    const [jobAccepteds, setJobAccepteds] = useState();
    const [jobPendings, setJobPendings] = useState();
    const [jobRejecteds, setJobRejecteds] = useState();

    useEffect(() => {
        axiosInstance.get('/worker/my-job-application', {params: {status: 'accepted'}}).then(res => setJobAccepteds(res.data))
        axiosInstance.get('/worker/my-job-application', {params: {status: 'pending'}}).then(res => setJobPendings(res.data))
        axiosInstance.get('/worker/my-job-application', {params: {status: 'rejected'}}).then(res => setJobRejecteds(res.data))
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
        <div className="flex w-full gap-10">
            <div className="overflow-x-auto w-6/12">
                <h3 className="text-2xl mb-7">Onaylanan Başvurularım</h3>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>Durum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobAccepteds && jobAccepteds.map(accepted => (
                        <tr className="hover" key={accepted.id}>
                            <td>{accepted.hire.companyName}</td>
                            <td>{badge(accepted.status)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto w-6/12">
                <h3 className="text-2xl mb-7">Bekleyen Başvurularım</h3>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>Durum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobPendings && jobPendings.map(pending => (
                        <tr className="hover" key={pending.id}>
                            <td>{pending.hire.companyName}</td>
                            <td>{badge(pending.status)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto w-6/12">
                <h3 className="text-2xl mb-7">Reddedilen Başvurularım</h3>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>Durum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobRejecteds && jobRejecteds.map(rejected => (
                        <tr className="hover" key={rejected.id}>
                            <td>{rejected.hire.companyName}</td>
                            <td>{badge(rejected.status)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
