import React from "react";

export default function InfoModal(info) {
  console.log(info);
  return (
    <div className="modal" id="infoModal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{info?.props?.title}</h3>
        <p className="py-4">{info?.props?.message}</p>
        <div className="modal-action">
          <a href="#" className="btn">
            Tamam
          </a>
        </div>
      </div>
    </div>
  );
}
