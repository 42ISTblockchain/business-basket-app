import {Outlet} from "react-router-dom";
import InfoModal from "../../../../components/modals/InfoModal";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../../helper/http";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";
import {customStyles} from "../../../../configs/datatableStyle";
import DataTable from "react-data-table-component";
import moment from "moment";


export default function Applications() {
    const jobApplications = useSelector((state) => state.jobApplicationList.value);
    const dispatch = useDispatch();
    console.log(jobApplications)

    useEffect(() => {
        axiosInstance.get("/hire/job-application").then((res) => {
            dispatch(jobApplicationDatas(res.data))
        });
    }, []);
    const columns = [
        {
            name: "Başvuran Kişi",
            selector: (row) => `${row.worker.firstName} ${row.worker.lastName}`,
        },
        {
            name: "Başvurulan İş",
            selector: (row) => row.job.category.name,
            sortable: true

        },
        {
            name: "Durum",
            selector: (row) => row.status,

        },
        {
            name: "Telefon",
            selector: (row) => row.worker.phoneNumber,

        }
    ];
    return (
        <>
            {
                jobApplications &&
                <DataTable
                    columns={columns}
                    pagination
                    responsive={true}
                    data={jobApplications}
                    striped={true}
                    customStyles={customStyles}
                />
            }</>
    )
}