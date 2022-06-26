import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {http} from "../../helper/http";

export default function JobCreateModal() {
    const genders = [
        {
            key: 'male',
            value: 'Erkek'
        },
        {
            key: 'female',
            value: 'Kadın'
        },
        {
            key: 'both',
            value: 'Her ikiside'
        }
    ]

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        http.post('/hire/job/create', data).then(res => console.log(res))
        window.location.href = "#";
        reset();
    };
    const [cities, setCity] = useState()
    const [categories, setCategory] = useState()

    useEffect(() => {
        http.get("/generic/city").then((res) => setCity(res.data));
        http.get("/generic/category").then((res) => setCategory(res.data));
    }, []);

    return (
        <div>
            <div className="modal" id="jobCreateModal">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-box w-12/12 flex flex-col items-center">
                    <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
                        Yeni İş Oluştur
                    </h3>
                    <div className="grid lg:grid-cols-2 w-full gap-4 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">İş Kategorisi</span>
                            </label>
                            <select className="select select-bordered w-full " {...register('jobCategoryId')}>
                                <option disabled selected>
                                    Seçiniz
                                </option>
                                {categories && categories.map(category =>
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Ücret</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Ücret giriniz..."
                                       className="input input-bordered w-full" {...register('price')}/>
                                <span>TRY</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">İl</span>
                            </label>
                            <select className="select select-bordered w-full " {...register('cityId')}>
                                <option disabled selected>
                                    Seçiniz
                                </option>
                                {cities && cities.map(city =>
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Cinsiyet</span>
                            </label>
                            <select className="select select-bordered w-full " {...register('gender')}>
                                <option disabled selected>
                                    Seçiniz
                                </option>
                                {genders.map(gender =>
                                    <option key={gender.value} value={gender.key}>
                                        {gender.value}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Başlangıç Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className="input input-bordered w-full " {...register('startDate')}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Bitiş Tarihi</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Type here"
                                className="input input-bordered w-full " {...register('endDate')}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Çalışan Sayısı</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Çalışan sayısı giriniz..."
                                className="input input-bordered w-full" {...register('workerCount')}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Açıklama</span>
                            </label>
                            <textarea className="textarea textarea-bordered" {...register('description')}
                                      placeholder="Açıklama"/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Adres</span>
                            </label>
                            <textarea className="textarea textarea-bordered" {...register('address')}
                                      placeholder="Adres"/>
                        </div>
                        <div className="form-control mt-3 w-full ">
                            <label className="label cursor-pointer">
                                <span className="label-text">Bahşiş Seçeneği</span>
                                <input type="checkbox" className="checkbox" {...register('tip')}/>
                            </label>
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
