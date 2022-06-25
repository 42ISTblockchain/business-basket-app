import React, { useEffect, useState } from "react";
import InfoModal from "../components/modals/InfoModal";
import JobCreateModal from "../components/modals/JobCreateModal";
import { request } from "../helper/request";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../slice/JobListSlice";
import JobEditModal from "../components/modals/JobEditModal";

export default function Jobs() {
  const [description, setDescription] = useState();
  const [job, setJob] = useState(null);
  const jobList = useSelector((state) => state.jobList.value);
  const dispatch = useDispatch();

  useEffect(() => {
    request.get("/works").then((res) => dispatch(loadData(res.data)));
  }, []);

  return (
    <>
      <InfoModal props={description} />
      <JobCreateModal />
      {job && <JobEditModal props={job}/> }
      <div className="flex mb-6 justify-between">
        <label htmlFor="jobCreateModal" className="btn btn-primary">
          İş Ekle
        </label>
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
                    <th>{job.job}</th>
                    <td>{job.startDate}</td>
                    <td>{job.endDate}</td>
                    <td>{job.price}</td>
                    <td>{job.workerCount}</td>
                    <td>{job.city}</td>
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
                      <a href="#jobEditModal" onClick={()=>setJob({job})} className="mx-2 tooltip" data-tip="Düzenle">
                        <span className="material-symbols-rounded">edit</span>
                      </a>
                      <a href="#" className="tooltip" data-tip="Sil">
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
