/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import TabMenu from "components/TabMenu";
import axiosInstance from "helper/http";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function WorkerProfile() {
  const { id } = useParams();
  const tab = useRef(null);
  const tabContent = useRef(null);
  const [worker, setWorker] = useState();
  let prevTab = 0;

  useEffect(() => {
    axiosInstance.get("/hire/job-application/profile/" + id).then((res) => {
      setWorker(res.data);
    });
  }, []);

  function onClickTab(tabid) {
    if (tab.current.children[tabid]) {
      tab.current.children[prevTab].classList.remove("tab-active");
      tab.current.children[tabid].classList.add("tab-active");
      tabContent.current.children[prevTab].style.display = "none";
      tabContent.current.children[tabid].style.display = "block";
      prevTab = tabid;
    }
  }

  function Experiences() {
    return (
      <>
        {worker?.experiences &&
          worker.experiences.map((experience, index) => {
            return (
              <div
                className="card border-b-2 border-gray-600 mb-7 w-full shadow-xl"
                key={index}
              >
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">{experience.companyName}</h2>
                    <span className="badge badge-lg">
                      {moment(experience.startDate).format("DD.MM.YYYY")} /{" "}
                      {moment(experience.endDate).format("DD.MM.YYYY")}
                    </span>
                  </div>
                  <span className="badge badge-outline">
                    {experience.address}
                  </span>
                  <p>{experience.description}</p>
                </div>
              </div>
            );
          })}
      </>
    );
  }

  const tabs = [
    /*{
      name: "Hakkımda",
      content: "test",
      is_active: true,
    },*/
    {
      name: "Deneyimler",
      content: <Experiences />,
      is_active: true,
    },/*
    {
      name: "Yorumlar",
      content: "test ",
      is_active: false,
    },*/
  ];

  return (
    <div className="flex flex-col lg:flex-row h-auto">
      <div className="!w-full lg:!w-5/12 w-fit p-1">
        <div className="card w-100 bg-base-100 shadow-xl shadow-lg shadow-lg shadow-gray-500/20">
          <figure className="relative">
            <div
              className={
                worker?.gender === "male"
                  ? " bg-gradient-to-r from-indigo-500 bg-[#5cc7fa5e] dark:bg-[#5cc7fa5e] w-full h-28"
                  : "bg-gradient-to-r from-[#e750e3d9] bg-[#b731ba6b] dark:bg-[#b731ba6b] w-full h-28"
              }
            ></div>
            <div className="avatar absolute top-[54%]">
              <div className="w-24 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center mt-5  mt-0 pt-12">
            <h2 className="card-title">{`${worker?.firstName} ${worker?.lastName}`}</h2>
            <ul className="text-left text-lg">
              <li className="my-3">
                <span className="material-symbols-rounded text-sm">mail</span>{" "}
                {worker?.email}
              </li>
              <li className="my-3">
                <span className="material-symbols-rounded text-sm">call</span>{" "}
                {worker?.phoneNumber}
              </li>
              <li className="my-3">
                <span className="material-symbols-rounded text-sm">
                  calendar_month
                </span>{" "}
                {worker?.birthDay}
              </li>
              <li className="my-3 text-center">
                <span className="material-symbols-rounded text-lg">
                  {worker?.gender ? "male" : "female"}
                </span>{" "}
                {worker?.gender ? "Erkek" : "Kadın"}
              </li>
              <li>
                <img
                  src="https://i.hizliresim.com/1x4ovu2.png"
                  width="25"
                  height="25"
                  className="mx-auto mt-1"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 lg:!mt-0">
        <TabMenu tabs={tabs} />
      </div>
    </div>
  );
}
