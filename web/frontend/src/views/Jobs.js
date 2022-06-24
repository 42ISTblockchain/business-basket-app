import React, { useEffect, useState } from "react";
import { request } from "../helper/request";

export default function Jobs() {
  const [data, setData] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    request.get("/works").then((res) => setData(res.data));
    console.log("loaded");
  }, []);

  return (
    <>
      <div className="modal" id="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            İş Detayları
          </h3>
          <p className="py-4">
            {desc}
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
      <div className="flex mb-6 justify-end">
        <a href="#modal" className="btn btn-success">
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
              <th>Alınacak İşçi Sayısı</th>
              <th>Şehir</th>
              <th>Cinsiyet</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((job) => {
                return (
                  <tr key={job.id}>
                    <th>{job.job}</th>
                    <td>{job.startDate}</td>
                    <td>{job.endDate}</td>
                    <td>{job.price}</td>
                    <td>{job.workerCount}</td>
                    <td>{job.city}</td>
                    <td>{job.gender}</td>
                    <td>
                      <a href="#modal" onClick={() => setDesc(job.description)} className="btn btn-primary btn-sm">
                        Detay Gör
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
