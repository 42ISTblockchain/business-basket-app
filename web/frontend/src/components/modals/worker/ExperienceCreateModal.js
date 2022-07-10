import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import axiosInstance from "../../../helper/http";
import alertify from "alertifyjs";
import ErrorAlert from "../ErrorAlert";

export default function ExperienceCreateModal() {

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) => {
        axiosInstance.post('/worker/profile/experience/create', data).then(res => alertify.success("Deneyim başarıyla eklendi."))
        window.location.href = "#";
        reset();
    };
    return (
        <div>
            <div className="modal" id="experienceCreateModal">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-box w-12/12 flex flex-col items-center">
                    <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
                        Yeni Deneyim Oluştur
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
                                className={`input input-bordered w-full ${errors.startDate && 'input-error'}`}{...register('startDate', {required: true})}
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
                            <textarea
                                className={`textarea textarea-bordered ${errors.description && 'textarea-error'}`} {...register('description', {required: true})}
                                placeholder="Açıklama"/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Adres</span>
                            </label>
                            <textarea
                                className={`textarea textarea-bordered ${errors.address && 'textarea-error'}`} placeholder="Adres" {...register('address', {required: true})}/>
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
                                Oluştur
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
