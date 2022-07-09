import React, {useEffect, useState} from "react";
import InfoModal from "../../../../components/modals/InfoModal";
import {http} from "../../../../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";
import Badge from "../../../../components/badge";

export default function JobApplicationAccepted() {
    const [description, setDescription] = useState();
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();
    console.log(jobApplications)

    useEffect(() => {
        http.get("/hire/job-application").then((res) => {
            dispatch(jobApplicationDatas(res.data))
        });
    }, []);


    return (
        <>
            {jobApplications && jobApplications.filter(job => job.status === 'accepted').map(job => {
                return (
                    <tr key={job.id}>
                        <td>{job.worker.firstName + ' ' + job.worker.lastName}</td>
                        <td>{job.job.category.name}</td>
                        <td><Badge status={job.status} >{job.status}</Badge></td>
                        <td>{job.worker.phoneNumber}</td>
                        <td>
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
