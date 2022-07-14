import React, {useEffect} from "react";
import axiosInstance from "../../../helper/http";
import {useSelector, useDispatch} from "react-redux";
import {allJobAction, currentJobAction} from "../../../slice/JobListSlice";
import {
    loadGenericCategories,
    loadGenericCities,
} from "../../../slice/genericSlice";
import {customStyles} from "../../../configs/datatableStyle";
import DataTable from "react-data-table-component";
import moment from "moment";

function EditButtons({data}) {
    const dispatch = useDispatch();
    return (
        <div>
            <a
                href="#infoModal"
                onClick={() => dispatch(currentJobAction(data))}
                className="mx-2 tooltip"
                data-tip="Açıklama"
            >
                <span className="material-symbols-rounded">visibility</span>
            </a>
            <a
                href="#jobEditModal"
                onClick={() => dispatch(currentJobAction(data))}
                className="mx-2 tooltip"
                data-tip="Düzenle"
            >
                <span className="material-symbols-rounded">edit</span>
            </a>
            <a
                href="#deleteModal"
                onClick={() => dispatch(currentJobAction(data))}
                className="mx-2 tooltip"
                data-tip="Sil"
            >
                <span className="material-symbols-rounded">close</span>
            </a>
        </div>
    )
}

export default function Jobs() {
    const jobList = useSelector((state) => state.jobList.allJob);
    const dispatch = useDispatch();

    const genders = [
        {
            key: "male",
            value: "Erkek",
        },
        {
            key: "female",
            value: "Kadın",
        },
        {
            key: "both",
            value: "Her ikiside",
        },
    ];

    const columns = [
        {
            name: "Kategori",
            selector: (row) => row.category.name,
        },
        {
            name: "Ücret",
            selector: (row) => row.price,
            sortable: true

        },
        {
            name: <span>Personel<br/>Sayısı</span>,
            selector: (row) => row.workerCount,
        },
        {
            name: "Şehir",
            selector: (row) => row.city.name,

        },
        {
            name: "Cinsiyet",
            selector: (row) => genders.find((gnd) => gnd.key === row.gender).value,

        },
        {
            name: <span>Başlangıç Tarihi</span>,
            selector: (row) => moment(row.startDate).format('DD.MM.YYYY hh:mm'),
            sortable: true
        },
        {
            name: <span>Bitiş<br/>Tarihi</span>,
            selector: (row) => moment(row.endDate).format('DD.MM.YYYY hh:mm'),
            sortable: true
        },
        {
            cell: (row) => <EditButtons data={row}/>,
            style: {
              minWidth: 'fit-content'
            },
            button: true,
            ignoreRowClick: true
        }
    ];

    useEffect(() => {

        axiosInstance.get("hire/job").then((res) => {
            dispatch(allJobAction(res.data))
        });
        axiosInstance
            .get("generic/city")
            .then((res) => dispatch(loadGenericCities(res.data)));
        axiosInstance
            .get("generic/category")
            .then((res) => dispatch(loadGenericCategories(res.data)));
    }, []);

    return (
        <>
            <div className="flex mb-6 justify-between">
                <a href="#jobCreateModal" className="btn btn-primary">
                    İş Ekle
                </a>
            </div>
            {jobList && <DataTable
                columns={columns}
                pagination
                responsive={true}
                data={jobList}
                striped={true}
                customStyles={customStyles}
            />}
        </>
    );
}
