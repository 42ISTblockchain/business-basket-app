import React, { useEffect } from "react";
import { http } from "../../helper/http";
import { useSelector, useDispatch } from "react-redux";
import { allJobAction, currentJobAction } from "../../slice/JobListSlice";
import InfoModal from "../../components/modals/InfoModal";
import JobCreateModal from "../../components/modals/JobCreateModal";
import JobEditModal from "../../components/modals/JobEditModal";
import DeleteModal from "../../components/modals/DeleteModal";
import {
  loadGenericCategories,
  loadGenericCities,
} from "../../slice/genericSlice";

export default function Jobs() {
  const jobList = useSelector((state) => state.jobList.job);
  const currentJob = useSelector((state) => state.jobList.currentJob);
  const dispatch = useDispatch();

  const genders = [
    {
      key: "male",
      value: "Erkek",
    },
    {
      key: "female",
      value: "Kadın",
    },
    {
      key: "both",
      value: "Her ikiside",
    },
  ];

  useEffect(() => {
    http.get("/hire/job").then((res) => dispatch(allJobAction(res.data)));
    http
      .get("/generic/city")
      .then((res) => dispatch(loadGenericCities(res.data)));
    http
      .get("/generic/category")
      .then((res) => dispatch(loadGenericCategories(res.data)));
  }, []);

  return (
    <>
      <InfoModal />
      <JobCreateModal />
      {currentJob && <JobEditModal />}
      <DeleteModal path="/hire/job/delete/" />

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
                    <td>{new Date(job.startDate).toLocaleDateString()} <br /> {new Date(job.startDate).toLocaleTimeString()}</td>
                    <td>{new Date(job.endDate).toLocaleDateString()} <br /> {new Date(job.endDate).toLocaleTimeString()}</td>
                    <td>{job.price}</td>
                    <td>{job.workerCount}</td>
                    <td>{job.city.name}</td>
                    <td>{genders.find((gnd) => gnd.key === job.gender).value}</td>
                    <td>
                      <a
                        href="#infoModal"
                        onClick={() => dispatch(currentJobAction(job))}
                        className="mx-2 tooltip"
                        data-tip="Detay"
                      >
                        <span className="material-symbols-rounded">
                          visibility
                        </span>
                      </a>
                      <a
                        href="#jobEditModal"
                        onClick={() => dispatch(currentJobAction(job))}
                        className="mx-2 tooltip"
                        data-tip="Düzenle"
                      >
                        <span className="material-symbols-rounded">edit</span>
                      </a>
                      <a
                        href="#deleteModal"
                        onClick={() => dispatch(currentJobAction(job))}
                        className="tooltip"
                        data-tip="Sil"
                      >
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
