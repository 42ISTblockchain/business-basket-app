import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import axiosInstance from "../../helper/http";
import {allJobAction} from "../../slice/JobListSlice";
import {useDispatch, useSelector} from "react-redux";

export default function JobCreateModal() {
    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.jobList.allJob);

    const genders = [{
        key: 'male', value: 'Erkek'
    }, {
        key: 'female', value: 'Kadın'
    }, {
        key: 'both', value: 'Her ikiside'
    }]

    const {
        handleSubmit, register, formState: {errors}, reset,
    } = useForm();

    const onSubmit = (data) => {
        axiosInstance.post('/hire/job/create', data).then(res => dispatch(allJobAction([...jobList, res.data])))
        window.location.href = "#";
        reset();
    };
    const [cities, setCity] = useState()
    const [categories, setCategory] = useState()

    useEffect(() => {
        axiosInstance.get("/generic/city").then((res) => setCity(res.data));
        axiosInstance.get("/generic/category").then((res) => setCategory(res.data));
    }, []);
console.log("denememjda")
    return (<div>
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
                        <select defaultValue="Seçiniz" className="select select-bordered w-full " {...register('jobCategoryId')}>
                            <option disabled>
                                Seçiniz
                            </option>
                            {categories && categories.map(category => <option key={category.id} value={category.id}>
                                {category.name}
                            </option>)}
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Ücret</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Ücret giriniz..."
                                   className={`input input-bordered w-full ${errors.price && 'input-error'}`}
                                   {...register('price', {required: true})}/>
                            <span>TRY</span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">İl</span>
                        </label>
                        <select defaultValue="Seçiniz"
                                className="select select-bordered w-full " {...register('cityId')}>
                            <option disabled>
                                Seçiniz
                            </option>
                            {cities && cities.map(city => <option key={city.id} value={city.id}>
                                {city.name}
                            </option>)}
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Cinsiyet</span>
                        </label>
                        <select defaultValue="Seçiniz" className="select select-bordered w-full " {...register('gender')}>
                            <option disabled>
                                Seçiniz
                            </option>
                            {genders.map(gender => <option key={gender.value} value={gender.key}>
                                {gender.value}
                            </option>)}
                        </select>
                    </div>
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
                            className={`input input-bordered w-full ${errors.endDate && 'input-error'}`} {...register('endDate',{required: true})}
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
                            className={`input input-bordered w-full ${errors.workerCount && 'input-error'}`} {...register('workerCount', {required: true})}
                        />
                    </div>
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
    </div>);
}
