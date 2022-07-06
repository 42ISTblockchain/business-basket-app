import React from "react";
import DataTable from "react-data-table-component";
import {customStyles} from "../../../configs/datatableStyle";
import {currentJobAction} from "../../../slice/JobListSlice";

function EditButtons() {
    return (
        <div className="flex flex-row">
            <a
                href="#jobEditModal"
                className="mx-2 tooltip"
                data-tip="Düzenle"
            >
                <span className="material-symbols-rounded">visibility</span>
            </a>
            <a
                href="#jobEditModal"
                className="mx-2 tooltip"
                data-tip="Düzenle"
            >
                <span className="material-symbols-rounded">edit</span>
            </a>
            <a
                href="#jobEditModal"
                className="mx-2 tooltip"
                data-tip="Düzenle"
            >
                <span className="material-symbols-rounded">close</span>
            </a>
        </div>)
}

const columns = [
    {
        name: "Kategori",
        selector: (row) => row.title,
    },
    {
        name: "Ücret",
        selector: (row) => row.year,

    },
    {
        name: <span>Personel<br/>Sayısı</span>,
        selector: (row) => row.number,

    },
    {
        name: "Şehir",
        selector: (row) => row.year,

    },
    {
        name: "Cinsiyet",
        selector: (row) => row.year,

    },
    {
        name: <span>Başlangıç Tarihi</span>,
        selector: (row) => row.year,
        sortable: true
    },
    {
        name: <span>Bitiş<br/>Tarihi</span>,
        selector: (row) => row.year
    },
    {
        cell: (row) => row.buttonData,
        button: true,
    }
];

const data = [
    {
        id: 1,
        title: "Beetlejuicedasda wefsdfew",
        year: "1988",
        number: 123,
        buttonData: <EditButtons/>

    },
    {
        id: 2,
        title: "Ghostbusters",
        year: "1984",
        number: 53543,
        buttonData: <EditButtons/>
    },
    {
        id: 3,
        title: "Ghostbusters",
        year: "1984",
        number: 53543,
        buttonData: <EditButtons/>
    }
];

export default function JobDatatable() {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
        />
    );
}
