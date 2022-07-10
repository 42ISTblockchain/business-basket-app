import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import InfoModal from "../../../../components/modals/InfoModal";
import axiosInstance from "../../../../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";

export default function Applications() {
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance.get("/hire/job-application").then((res) => {
            dispatch(jobApplicationDatas(res.data))
        });
    }, []);

    return (
        <>
            {jobApplications && jobApplications.filter(job => job.status === "accepted").map(application => (
                <div className="indicator mr-10 mb-10 bg-base-200 rounded-2xl">
                    <div className="indicator-item indicator-bottom right-20">
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
