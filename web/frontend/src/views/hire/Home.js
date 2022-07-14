import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axiosInstance from "helper/http";
import { useDispatch } from "react-redux";
import { allJobAction, currentJobAction } from "../../slice/JobListSlice";
import {
  loadGenericCategories,
  loadGenericCities,
} from "../../slice/genericSlice";

export default function Home() {
  const jobList = useSelector((state) => state.jobList.allJob);
  const dispatch = useDispatch();

  const dateConvert = function (date) {
    const fullDate = moment(date).format(`DD.MM.YYYY`);
    const time = moment(date).format(`hh:mm`);

    return { fullDate, time };
  };

  useEffect(() => {
    axiosInstance.get("hire/job").then((res) => {
      dispatch(allJobAction(res.data));
    });
    axiosInstance
      .get("generic/city")
      .then((res) => dispatch(loadGenericCities(res.data)));
    axiosInstance
      .get("generic/category")
      .then((res) => dispatch(loadGenericCategories(res.data)));
  },[]);

  return (
    <div className="flex flex-col">
      <div className="mb-6 self-end">
        <a href="#jobCreateModal" className="btn btn-primary">
          İş Ekle
        </a>
      </div>
      <div class="stats shadow mb-10">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Toplam İşler</div>
          <div class="stat-value text-primary items-center">25 adet</div>
          <div class="stat-desc">Tamamlanmamış 11 adet iş var.</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Onay Bekleyenler</div>
          <div class="stat-value text-secondary">2 Kişi</div>
          <div class="stat-desc">Onay bekleyen 5 kişi var.</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Olumlu Yorumlar</div>
          <div class="stat-desc text-secondary">
            Olumlu yorumların yüzde oranı.
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {jobList &&
          jobList.map((data) => (
            <div
              key={data.id}
              className="card w-auto shadow-xl dark:bg-base-100 bg-base-100"
            >
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="text-2xl p-2">{data.category.name}</h1>
                  <div>
                    <a
                      href="#jobEditModal"
                      className="mx-2 tooltip"
                      data-tip="Düzenle"
                      onClick={() => dispatch(currentJobAction(data))}
                    >
                      <span className="material-symbols-rounded">edit</span>
                    </a>
                    <a
                      href="#deleteModal"
                      className="mx-2 tooltip"
                      data-tip="Sil"
                      onClick={() => dispatch(currentJobAction(data))}
                    >
                      <span className="material-symbols-rounded">close</span>
                    </a>
                  </div>
                </div>
                <hr />
                <p className="mt-4 mb-4">{data.description}</p>

                <div className="rounded-r-box rounded-bl-box border-success border-2 p-4 w-full flex justify-between">
                  <div className="flex-row flex">
                    <span className="material-symbols-rounded">
                      calendar_month
                    </span>
                    <span className="text-lg">
                      {dateConvert(data.startDate).fullDate}
                    </span>
                  </div>
                  <div className="flex-row flex">
                    <span className="material-symbols-rounded">schedule</span>
                    <span className="text-lg">
                      {dateConvert(data.startDate).time}
                    </span>
                  </div>
                </div>

                <div className="rounded-r-box rounded-bl-box border-error border-2 p-4 w-full flex justify-between">
                  <div className="flex-row flex">
                    <span className="material-symbols-rounded">
                      calendar_month
                    </span>
                    <span className="text-lg">
                      {dateConvert(data.endDate).fullDate}
                    </span>
                  </div>
                  <div className="flex-row flex">
                    <span className="material-symbols-rounded">schedule</span>
                    <span className="text-lg">
                      {dateConvert(data.endDate).time}
                    </span>
                  </div>
                </div>
                <div className="flex justify-around w-full mt-6">
                  <div className="tooltip tooltip-primary" data-tip="Ücret">
                    <div className="badge badge-primary p-3 mr-2">
                      <span className="text-lg">{data.price}</span>
                      <span className="material-symbols-rounded text-lg">
                        currency_lira
                      </span>
                    </div>
                  </div>
                  <div
                    className="tooltip tooltip-info"
                    data-tip="Çalışan Sayısı"
                  >
                    <div className="badge badge-info p-3 mr-2">
                      <span className="material-symbols-rounded mr-2">
                        group_add
                      </span>
                      <span className="text-lg">{data.workerCount}</span>
                    </div>
                  </div>
                  <div className="tooltip tooltip-error" data-tip="Cinsiyet">
                    <div className="badge badge-error p-3 mr-2">
                      <span className="material-symbols-rounded mr-2">
                        man_3
                      </span>
                      <span className="text-lg">
                        {data.gender === "male" ? "Erkek" : "Kadın"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tooltip" data-tip="Bahşiş Seçeneği">
                  <div className="rounded-box border-2 badge-ghost badge-outline p-2.5 w-full mr-2">
                    <span className="material-symbols-rounded mr-2">
                      price_check
                    </span>
                    <span className="text-lg">
                      {data.tip ? "Bahşiş Var" : "Bahşiş Yok"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
