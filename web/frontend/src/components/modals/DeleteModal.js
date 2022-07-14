import React from "react";
import axiosInstance from "../../helper/http";
import {allJobAction, loadData} from "../../slice/JobListSlice";
import {useDispatch, useSelector} from "react-redux";

export default function DeleteModal() {
    const currentJob = useSelector((state) => state.jobList.currentJob)
    const allJob = useSelector((state) => state.jobList.allJob)
    const dispatch = useDispatch();
    let copy = [...allJob]

    function destroy() {
        axiosInstance.delete("/hire/job/delete/" + currentJob.id).then(() => {
            let deletedItem = allJob.indexOf(currentJob)
            if (deletedItem !== -1) {
                copy.splice(deletedItem, 1);
                dispatch(allJobAction(copy))
            }
        })
    }

    return (
        <div className="modal !items-baseline" id="deleteModal">
            <div className="w-6/12 !bg-none mt-3">
                <div className="alert shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="stroke-info flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Silmek istediğinize eminmisiniz ?</span>
                    </div>
                    <div className="flex-none">
                        <a href="#" className="btn btn-sm btn-ghost">İptal</a>
                        <a href="#" onClick={destroy} className="btn btn-sm btn-primary">Tamam</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
