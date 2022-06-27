import React, {useEffect, useState} from "react";
import InfoModal from "../components/modals/InfoModal";
import JobCreateModal from "../components/modals/JobCreateModal";
import {http} from "../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {loadData} from "../slice/JobListSlice";
import JobEditModal from "../components/modals/JobEditModal";
import DeleteModal from "../components/modals/DeleteModal";

export default function Jobs() {
    const [description, setDescription] = useState();
    const [job, setJob] = useState(null);
    const jobList = useSelector((state) => state.jobList.value);
    const dispatch = useDispatch();

    useEffect(() => {
        http.get("/hire/job").then((res) => dispatch(loadData(res.data)));
    }, []);

    return (
        <>

            <InfoModal props={description}/>
            <JobCreateModal/>
            {job && <JobEditModal props={job}/>}
            {job?.job?.id && <DeleteModal id={job?.job?.id} path="/hire/job/delete/"/>}
            <div className="flex mb-6 justify-between">
                <a href="#jobCreateModal" className="btn btn-primary">
                    İş Ekle
                </a>
            </div>
            <div className="overflow-x-auto sm:table-fixed">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>İş Tanımı</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Ücret</th>
                        <th>İşçi Sayısı</th>
                        <th>Şehir</th>
                        <th>Cinsiyet</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobList &&
                        jobList.map((job) => {
                            return (
                                <tr className="hover" key={job.id}>
                                    <th>{job.category.name}</th>
                                    <td>{job.startDate}</td>
                                    <td>{job.endDate}</td>
                                    <td>{job.price}</td>
                                    <td>{job.workerCount}</td>
                                    <td>{job.city.name}</td>
                                    <td>{job.gender}</td>
                                    <td>
                                        <a
                                            href="#infoModal"
                                            onClick={() =>
                                                setDescription({
                                                    title: "İş Detayı",
                                                    message: job.description,
                                                })
                                            }
                                            className="mx-2 tooltip"
                                            data-tip="Detay"
                                        >
                                        <span className="material-symbols-rounded">
                                          visibility
                                        </span>
                                        </a>
                                        <a href="#jobEditModal" onClick={() => setJob({job})} className="mx-2 tooltip"
                                           data-tip="Düzenle">
                                            <span className="material-symbols-rounded">edit</span>
                                        </a>
                                        <a href="#deleteModal" onClick={() => setJob({job})} className="tooltip"
                                           data-tip="Sil">
                                            <span className="material-symbols-rounded">close</span>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
