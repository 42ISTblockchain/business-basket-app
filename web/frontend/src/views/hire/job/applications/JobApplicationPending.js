import React, {useEffect, useState} from "react";
import InfoModal from "../../../../components/modals/InfoModal";
import {http} from "../../../../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";

export default function JobApplication() {
    const [description, setDescription] = useState();
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();

    useEffect(() => {
        http.get("/hire/job-application").then((res) => dispatch(jobApplicationDatas(res.data)));
    }, []);

    function acceptJobApplication(id) {
        if (window.confirm("Gerçekten işe almak istiyor musunuz?")) {
            http.put(`/hire/job-application/update/${id}`, {status: 'accepted'}).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    function deleteJobApplication(id) {
        http.put(`/hire/job-application/update/${id}`, {status: 'rejected'}).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    function Badge(props) {
        let className = "badge gap-2";
        if (props.status === "accepted") {
            className += " badge-success";
        } else if (props.status === "pending") {
            className += " badge-warning";
        } else if (props.status === "rejected") {
            className += " badge-error";
        }
        return (
            <div className={className}>
                {props.children}
            </div>
        )
    }


    return (<>
        {jobApplications && jobApplications.filter(job => job.status === "pending").map(job => {
            return (
                <tr key={job.id}>
                    <td>{job.worker.firstName + ' ' + job.worker.lastName}</td>
                    <td>{job?.job?.category?.name}</td>
                    <td><Badge status={job.status}>{job.status}</Badge></td>
                    <td>{job.worker.phoneNumber}</td>
                    <td>
                        <button className="mx-2 tooltip" data-tip="Onayla"
                                onClick={() => acceptJobApplication(job.id)}><span
                            className="material-symbols-rounded">check_circle</span></button>
                        <button className="mx-2 tooltip" data-tip="Reddet"
                                onClick={() => deleteJobApplication(job.id)}><span
                            className="material-symbols-rounded">cancel</span></button>
                        <a href="#infoModal"
                           onClick={() =>
                               setDescription({
                                   title: "İş Detayı",
                                   message: job.job.description
                               })
                           }
                           className="mx-2 tooltip"
                           data-tip="Detay"><span className="material-symbols-rounded">info</span></a>
                    </td>
                </tr>
            )
        })}

    </>);
}
