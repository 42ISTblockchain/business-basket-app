import React from "react";
import {useSelector} from "react-redux";
import moment from "moment";

export default function Home() {

    const dateConvert = function (date) {
        const fullDate = moment(date).format(`DD.MM.YYYY`)
        const time = moment(date).format(`hh:mm`)
        return {fullDate, time}
    }
    const jobList = useSelector((state) => state.jobList.allJob);

    return (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {jobList && jobList.map((data) =>
                (
                    <div key={data.id} className="card w-auto shadow-xl dark:bg-base-100 bg-base-100">
                        <div className="card-body">
                            <span className="self-end text-2xs badge badge-success">Tamamlandı</span>
                            <div className="flex justify-center">
                                <h1 className="text-2xl p-2">{data.category.name}</h1>
                            </div>
                            <hr/>
                            <p className="mt-4 mb-4">{data.description}</p>

                            <div
                                className="rounded-r-box rounded-bl-box border-success border-2 p-4 w-full flex justify-between">
                                <div className="flex-row flex">
                                    <span className="material-symbols-rounded">calendar_month</span>
                                    <span className="text-lg">{dateConvert(data.startDate).fullDate}</span>
                                </div>
                                <div className="flex-row flex">
                                    <span className="material-symbols-rounded">schedule</span>
                                    <span className="text-lg">{dateConvert(data.startDate).time}</span>
                                </div>
                            </div>

                            <div
                                className="rounded-r-box rounded-bl-box border-error border-2 p-4 w-full flex justify-between">
                                <div className="flex-row flex">
                                    <span className="material-symbols-rounded">calendar_month</span>
                                    <span className="text-lg">{dateConvert(data.endDate).fullDate}</span>
                                </div>
                                <div className="flex-row flex">
                                    <span className="material-symbols-rounded">schedule</span>
                                    <span className="text-lg">{dateConvert(data.endDate).time}</span>
                                </div>
                            </div>
                            <div className="flex justify-around w-full mt-6">
                                <div className="tooltip tooltip-primary" data-tip="Ücret">
                                    <div className="badge badge-primary p-2.5 mr-2">
                                        <span className="text-lg">{data.price}</span>
                                        <span className="material-symbols-rounded text-lg">currency_lira</span>
                                    </div>
                                </div>
                                <div className="tooltip tooltip-info" data-tip="Çalışan Sayısı">
                                    <div className="badge badge-info p-2.5 mr-2">
                                        <span className="material-symbols-rounded mr-2">group_add</span>
                                        <span className="text-lg">{data.workerCount}</span>
                                    </div>
                                </div>
                                <div className="tooltip tooltip-error" data-tip="Cinsiyet">
                                    <div className="badge badge-error p-2.5 mr-2">
                                        <span className="material-symbols-rounded mr-2">man_3</span>
                                        <span className="text-lg">{data.gender === "male" ? "Erkek" : "Kadın"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-success" data-tip="Bahşiş Seçeneği">
                                <div className="badge badge-success badge-outline p-2.5 w-full mr-2">
                                    <span className="material-symbols-rounded mr-2">price_check</span>
                                    <span className="text-lg">{data.tip ? "Bahşiş Var" : "Bahşiş Yok"}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                )
            )}
        </div>);
}
