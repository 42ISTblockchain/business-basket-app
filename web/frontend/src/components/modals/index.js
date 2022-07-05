import InfoModal from "./InfoModal";
import JobCreateModal from "./JobCreateModal";
import JobEditModal from "./JobEditModal";
import DeleteModal from "./DeleteModal";
import React from "react";
import {useSelector} from "react-redux";

export default function Modals() {
    const currentJob = useSelector((state) => state.jobList.currentJob);
    return (
        <>
            <InfoModal/>
            <JobCreateModal/>
            {currentJob && <JobEditModal/>}
            <DeleteModal/>
        </>
    )
}