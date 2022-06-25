import React from "react";

export default function JobCreateModal() {
    return (
        <div>
            <input type="checkbox" id="jobCreateModal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box w-12/12 flex flex-col items-center">
                    <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
                        Yeni İş Oluştur
                    </h3>
                    <div className="grid lg:grid-cols-2 w-full gap-4 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">İş Kategorisi</span>
                            </label>
                            <select className="select select-bordered w-full ">
                                <option disabled selected>
                                    Seçiniz
                                </option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Ücret</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Ücret giriniz..." className="input input-bordered w-full"/>
                                <span>TRY</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Başlangıç Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Bitiş Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Çalışan Sayısı</span>
                            </label>"
                            <input
                                type="number"
                                placeholder="Çalışan sayısı giriniz..."
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Açıklama</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Açıklama"/>
                        </div>
                        <div className="form-control mt-3 w-full ">
                            <label className="label cursor-pointer">
                                <span className="label-text">Bahşiş Seçeneği</span>
                                <input type="checkbox" className="checkbox"/>
                            </label>
                        </div>

                        <div className="modal-action w-full">
                            <label
                                htmlFor="jobCreateModal"
                                className="btn btn-error text-white w-6/12"
                            >
                                İptal
                            </label>
                            <label htmlFor="jobCreateModal" className="btn btn-primary w-6/12">
                                Oluştur
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
