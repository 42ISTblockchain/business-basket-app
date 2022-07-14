import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import { useOutletContext } from "react-router-dom";


export default function JobApplicationAccepted() {
    const [setFilteredData] = useOutletContext();
    const jobApplications = useSelector((state) => state.jobApplicationList.value);

    useEffect(() => {
        let filteredApplications = jobApplications.filter(applications => applications.status === "pending")
        setFilteredData(filteredApplications)
    }, []);
    return <></>
}
