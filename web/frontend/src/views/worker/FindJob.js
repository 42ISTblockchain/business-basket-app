import InfoModal from "../../components/modals/InfoModal";
import {useEffect, useState} from "react";
import {http} from "../../helper/http";
import {allJobAction, currentJobAction} from "../../slice/JobListSlice";
import {loadGenericCategories, loadGenericCities} from "../../slice/genericSlice";
import {useDispatch, useSelector} from "react-redux";

export default function FindJob() {
    const [query, setQuery] = useState({});
    const [jobs, setJob] = useState();
    const cities = useSelector((state) => state.genericValue.cities);
    const categories = useSelector((state) => state.genericValue.categories);
    const dispatch = useDispatch();

    function acceptJobApplication(jobId, hireId) {
        const workerId = JSON.parse(localStorage.getItem("auth")).id;
        if (window.confirm("İşi Kabul Etmek İstediğinize Emin Misiniz?"))
        {
            http.post(`/worker/job-application/create`, {
                jobId: jobId,
                status: "pending",
                workerId: workerId,
                hireId: hireId,
            }).then((res) => {
                console.log(res)
            })
        }
    }

    useEffect(() => {
        console.log(query)
        http.get("/hire/job", {params: query}).then((res) => dispatch(allJobAction(res.data)));
        http
            .get("/generic/city")
            .then((res) => dispatch(loadGenericCities(res.data)));
        http
            .get("/generic/category")
            .then((res) => dispatch(loadGenericCategories(res.data)));
        http
            .get("/worker/job-application/")
            .then((res) => setJob(res.data));
    }, [query]);

    return (
        <>
            <InfoModal />
            <div className="w-full justify-between mb-8">
                <select className="select w-full w-4/12 mr-20 select-bordered" onChange={(e) => setQuery({...query, cityId: e.target.value})}>
                    <option disabled selected>İl Seçiniz</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
                <select className="select w-full w-4/12 select-bordered" onChange={(e) => setQuery({...query, jobCategoryId: e.target.value})}>
                    <option disabled selected>İş Kategorisi Seçiniz</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket</th>
                        <th>İş Kategorisi</th>
                        <th>Kontenjan</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Ücret</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobs && jobs.map((job) => (
                        <tr className="hover">
                            <th>{job.hire.companyName}</th>
                            <td>{job.category.name}</td>
                            <td>{job.workerCount}</td>
                            <td>{new Date(job.startDate).toLocaleDateString()} <br /> {new Date(job.startDate).toLocaleTimeString()}</td>
                            <td>{new Date(job.endDate).toLocaleDateString()} <br /> {new Date(job.endDate).toLocaleTimeString()}</td>
                            <td>{job.price}</td>
                            <td>
                                <button className="mx-2 tooltip" data-tip="İşe Başvur" onClick={() => acceptJobApplication(job.id, job.hire.id)}>
                                    <span className="material-symbols-rounded">check_circle</span>
                                </button>
                                <a href="#infoModal"
                                   onClick={() => dispatch(currentJobAction(job))}
                                   className="mx-2 tooltip"
                                   data-tip="Detay"><span className="material-symbols-rounded">info</span></a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
