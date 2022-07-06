import React, {useEffect, useState} from "react";
import {http} from "../../helper/http";
import ExperienceCreateModal from "../../components/modals/worker/ExperienceCreateModal";
import ExperienceEditModal from "../../components/modals/worker/ExperienceEditModal";
import ExperienceDeleteModal from "../../components/modals/worker/ExperienceDeleteModal";


export default function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [editExperience, setEditExperience] = useState(null);

    useEffect(() => {
        http.get("/worker/profile/experience").then((res) => setExperiences(res.data));
    }, []);

    return (
        <>
            <ExperienceCreateModal/>
            {editExperience && <ExperienceEditModal experience={editExperience}/>}
            {editExperience && <ExperienceDeleteModal path="/worker/profile/experience/delete/" id={editExperience.id}/>}

            <div className="flex mb-6 justify-between">
                <a href="#experienceCreateModal" className="btn btn-primary">
                    Deneyim Ekle
                </a>
            </div>
            <div className="overflow-x-auto sm:table-fixed">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Şirket İsmi</th>
                        <th>Adress</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Açıklama</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {experiences.map((experience) => (
                        <tr key={experience.id}>
                            <td>{experience.companyName}</td>
                            <td>{experience.address}</td>
                            <td>{new Date(experience.startDate).toLocaleDateString()}</td>
                            <td>{new Date(experience.endDate).toLocaleDateString()}</td>
                            <td>{experience.description}</td>
                            <td>
                                <a
                                    href="#experienceEditModal"
                                    onClick={() => setEditExperience(experience)}
                                    className="mx-2 tooltip"
                                    data-tip="Düzenle"
                                >
                                    <span className="material-symbols-rounded">edit</span>
                                </a>
                                <a
                                    href="#experienceDeleteModal"
                                    onClick={() => setEditExperience(experience)}
                                    className="tooltip"
                                    data-tip="Sil"
                                >
                                    <span className="material-symbols-rounded">close</span>
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
