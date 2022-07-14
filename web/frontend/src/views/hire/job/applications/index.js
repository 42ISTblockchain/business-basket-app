import React, {useEffect, useState} from "react";
import axiosInstance from "../../../../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";
import {useLocation} from "react-router-dom"
import ViewCv from "../../../../components/application/ViewCv";
import AcceptJob from "../../../../components/application/AcceptJob";
import RejectJob from "../../../../components/application/RejectJob";
import {Outlet} from "react-router-dom";
import {jobApplicationFilter} from "../../../../slice/JobApplicationFilterSlice";

export default function Applications() {
    const jobApplicationList = useSelector(state => state.jobApplicationList.value)
    const [filteredData, setFilteredData] = useState(null)
    const dispatch = useDispatch();
    const location = useLocation().pathname.split("/")[4]


    useEffect(() => {
        axiosInstance.get("/hire/job-application").then((res) => {
            dispatch(jobApplicationDatas(res.data))
            setFilteredData(res.data)
        });
    }, []);

    return (
        <>
            {filteredData && <Outlet context={[setFilteredData]}/>}
            {filteredData && filteredData.filter(job => job.status === location ? job : filteredData).map((application, index) => (

                <div key={index} className="indicator mr-10 mb-10 bg-base-200 rounded-2xl">
                    <div className="indicator-item indicator-bottom right-20">
                        {
                            (application.status === "accepted" || application.status === 'rejected') &&
                            <ViewCv workerId={application.worker.id}/>
                        }
                        {
                            application.status === 'pending' &&
                            <>
                                <AcceptJob id={application.id}/>
                                <ViewCv workerId={application.worker.id}/>
                                <RejectJob id={application.id}/>
                            </>
                        }
                    </div>
                    <div className="card border w-auto">
                        <div className="card-body">
                            <div className="flex mb-5">
                                <div className="avatar mr-5">
                                    <div className="w-20 rounded-full">
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
