import React from "react";
import axiosInstance from "../../helper/http";

export default function RejectJob({id}) {
  function rejectJobApplication(id) {
    if (window.confirm("Gerçekten reddetmek istiyor musunuz?")) {
      axiosInstance
        .put(`/hire/job-application/update/${id}`, { status: "rejected" })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <button
      className="btn btn-error rounded-tr-box rounded-bl-box mx-auto tooltip"
      onClick={() => rejectJobApplication(id)}
      data-tip="Reddet"
    >
      <span className="material-symbols-rounded text-white">cancel</span>
    </button>
  );
}