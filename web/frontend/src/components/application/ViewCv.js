import { useNavigate } from "react-router-dom";
import React from "react";

export default function ViewCv({ workerId }) {
  console.log(workerId)

  let navigate = useNavigate();

  return (
    <button
      className="btn btn-primary rounded-tr-box rounded-bl-box mr-2 mx-auto tooltip"
      data-tip="CV'yi görüntüle"
      onClick={() => navigate("/hire/worker/profile/" + workerId)}
    >
      <span className="material-symbols-rounded text-white">visibility</span>
    </button>
  );
}
