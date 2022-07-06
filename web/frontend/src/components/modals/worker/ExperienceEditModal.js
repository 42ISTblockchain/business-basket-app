import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {http} from "../../../helper/http";
import alertify from "alertifyjs";

export default function ExperienceEditModal({experience}) {

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm({
        defaultValues:  experience
    });

    const onSubmit = (data) => {
        http.put('/worker/profile/experience/update/' + experience.id, data).then(res => alertify.success("Deneyim başarıyla güncellendi."))
        window.location.href = "#";
        reset();
    };

    return (
        <div>
            <div className="modal" id="experienceEditModal">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-box w-12/12 flex flex-col items-center">
                    <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
                        Deneyim Düzenle
                    </h3>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Şirket Adı</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Şirket Adı"
                            className={`input input-bordered w-full ${errors.companyName && 'input-error'}`} {...register('companyName', {required: true})}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 w-full gap-4 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Başlangıç Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className={`input input-bordered w-full ${errors.startDate && 'input-error'}`} {...register('startDate', {required: true})}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Bitiş Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className={`input input-bordered w-full ${errors.endDate && 'input-error'}`} {...register('endDate', {required: true})}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Açıklama</span>
                            </label>
                            <textarea className={`textarea textarea-bordered ${errors.description && 'textarea-error'}`} {...register('description', {required: true})}
                                      placeholder="Açıklama"/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Adres</span>
                            </label>
                            <textarea className={`textarea textarea-bordered ${errors.address && 'textarea-error'}`} {...register('address', {required: true})}
                                      placeholder="Adres"/>
                        </div>

                        <div className="modal-action w-full">
                            <button
                                type="button"
                                onClick={() => {
                                    window.location.href = "#";
                                }}
                                className="btn btn-error text-white w-6/12"
                            >
                                İptal
                            </button>
                            <button
                                type="submit"
                                className="btn btn-success w-6/12 cursor-pointer items-center"
                            >
                                Güncelle
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
