import React from "react";
import axiosInstance from "../../helper/http";

export default function AcceptJob({ id }) {
  function acceptJobApplication(id) {
    if (window.confirm("Gerçekten işe almak istiyor musunuz?")) {
      axiosInstance
        .put(`/hire/job-application/update/${id}`, { status: "accepted" })
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
      className="btn btn-success rounded-tr-box rounded-bl-box mr-2 mx-auto tooltip"
      onClick={() => acceptJobApplication(id)}
      data-tip="Onayla"
    >
      <span className="material-symbols-rounded text-white">check_circle</span>
    </button>
  );
}
