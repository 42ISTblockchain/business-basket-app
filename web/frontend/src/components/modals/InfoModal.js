import React from "react";
import { useSelector } from "react-redux";

export default function InfoModal() {
  const currentJob = useSelector((state) => state.jobList.currentJob);
  return (
    <div className="modal" id="infoModal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">İş Hakkında</h3>
        <p className="py-4">{currentJob?.description}</p>
        <div className="modal-action">
          <a href="#" className="btn">
            Tamam
          </a>
        </div>
      </div>
    </div>
  );
}
