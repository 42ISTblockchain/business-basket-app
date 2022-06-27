import React, {useEffect, useState} from "react";
import InfoModal from "../components/modals/InfoModal";
import {http} from "../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {loadData} from "../slice/JobApplicationListSlice";

export default function JobApplication() {
    const [description, setDescription] = useState();
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();

    useEffect(() => {
        http.get("/hire/job-application").then((res) => dispatch(loadData(res.data)));
    }, []);
    console.log(jobApplications)

    function acceptJobApplication(id) {
        alert(id);
    }

    function deleteJobApplication(id) {
        alert(id);
    }

    const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consectetur corporis distinctio exercitationem ipsa officiis placeat provident quaerat rem similique.";

    const jobApplication = {
        id: 1,
        name: "Ali Karabay",
        job: "Webmaster",
        state: "Aktif",
        phoneNumber: "0501050505",
        desc: desc
    };

    return (<>
        <InfoModal props={description}/>
        <div className="overflow-x-auto sm:table-fixed">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Başvuran Kişi</th>
                    <th>Başvurulan İş</th>
                    <th>Durum</th>
                    <th>Telefon</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {jobApplications && jobApplications.map((job) => {
                    return (
                        <tr key={job.id}>
                            <td>null</td>
                            <td>{job.category.name}</td>
                            <td>{job.job_applications.status}</td>
                            <td>null</td>
                            <td>i
                                <a href="#" className="mx-2 tooltip" data-tip="Onayla" onClick={() => acceptJobApplication(jobApplication.id)}><span className="material-symbols-rounded">check_circle</span></a>
                                <a href="#" className="mx-2 tooltip" data-tip="Reddet" onClick={() =>deleteJobApplication(jobApplication.id)}><span className="material-symbols-rounded">cancel</span></a>
                                <a href="#infoModal"
                                   onClick={() =>
                                       setDescription({
                                           title: "İş Detayı",
                                           message: desc
                                       })
                                   }
                                   className="mx-2 tooltip"
                                   data-tip="Detay"><span className="material-symbols-rounded">info</span></a>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </>);
}
