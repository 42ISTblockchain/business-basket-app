import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {http} from "../../../../helper/http";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";

export default function Applications() {
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();

    function acceptJobApplication(id) {
        if (window.confirm("Gerçekten işe almak istiyor musunuz?")) {
            http.put(`/hire/job-application/update/${id}`, {status: 'accepted'}).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    function rejectJobApplication(id) {
        if (window.confirm("Gerçekten reddetmek istiyor musunuz?")) {
            http.put(`/hire/job-application/update/${id}`, {status: 'rejected'}).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        http.get("/hire/job-application").then((res) => {
            dispatch(jobApplicationDatas(res.data))
        });
    }, []);

    return (
        <>
            {jobApplications && jobApplications.filter(job => job.status === "pending").map(application => (
                <div className="indicator mr-10 mb-10 bg-base-200 rounded-2xl">
                    <div className="indicator-item indicator-bottom right-20">
                        <button className="btn btn-success text-white mx-auto tooltip" onClick={() => acceptJobApplication(application.id)} data-tip="Onayla"><span
                            className="material-symbols-rounded">check_circle</span>
                        </button>
                        <button className="btn btn-error ml-2 mx-auto tooltip" onClick={() => rejectJobApplication(application.id)} data-tip="Reddet"><span
                            className="material-symbols-rounded">cancel</span>
                        </button>
                        <button className="btn btn-primary ml-2 mx-auto tooltip" data-tip="CV'yi görüntüle">
                            <Link to={"/hire/worker/profile/" + application.worker.id}>
                                <span className="material-symbols-rounded">visibility</span>
                            </Link>
                        </button>
                    </div>
                    <div className="card border w-80">
                        <div className="card-body">
                            <div className="flex mb-5">
                                <div className="avatar mr-5">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/192/192/people"/>
                                    </div>
                                </div>
                                <h2 className="card-title">{application.worker.firstName} {application.worker.lastName}</h2>
                            </div>
                            <span className="badge badge-outline">{application?.job?.category?.name}</span>
                            <div>
                                <span className="material-symbols-rounded text-sm mr-2">call</span>
                                <span>{application.worker.phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
