import {useForm} from "react-hook-form";
import axiosInstance from "../../helper/http";
import {useEffect, useState} from "react";
import ErrorAlert from "../../components/modals/ErrorAlert";
import alertify from "alertifyjs";
import React from "react";

export default function Profile() {

    const genders = [
        {
            key: "male",
            value: "Erkek",
        },
        {
            key: "female",
            value: "Kadın",
        }
    ];

    const {handleSubmit, register} = useForm();
    const [profile, setProfile] = useState(null);
    const [password, setPassword] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get("/worker/profile").then(res => setProfile(res.data))
    }, [])

    const onSubmit = data => {
        if (data.password !== data.passwordRepeat) {
            setError("Şifreler eşleşmiyor")
            return
        }
        axiosInstance.put("/worker/profile/update", data).then(res => {
            setProfile(res.data)
            alertify.success("Profiliniz başarıyla güncellendi")
        }).catch(err => setError(err.response.data.message))
    }

    return (
        profile && (
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                {error && <ErrorAlert error={error}/>}
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:flex lg:grid-cols-2 lg:gap-20">
                            <div className="lg:w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ad</span>
                                    </label>
                                    <input type="text" {...register("firstName")}
                                           placeholder="Ad"
                                           defaultValue={profile.firstName}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Soyad</span>
                                    </label>
                                    <input type="text" {...register("lastName")} placeholder="Soyad"
                                           defaultValue={profile.lastName}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Telefon</span>
                                    </label>
                                    <input type="text" {...register("phoneNumber")}
                                           placeholder="Telefon"
                                           defaultValue={profile.phoneNumber}
                                           className="input input-bordered"/>
                                </div>
                                <label className="label cursor-pointer mt-4">
                                    <span className="label-text">Şifre Değiştir</span>
                                    <input type="checkbox" onChange={() => setPassword(!password)}
                                           className="checkbox checkbox-primary"/>
                                </label>
                                {password &&
                                    <div className="mb-3">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Yeni Şifre</span>
                                            </label>
                                            <input type="password" {...register("password")}
                                                   placeholder="Yeni Şifre"
                                                   className="input input-bordered"/>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Yeni Şifre Tekrar</span>
                                            </label>
                                            <input type="password" {...register("passwordRepeat")}
                                                   placeholder="Yeni Şifre Tekrar"
                                                   className="input input-bordered"/>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="lg:w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Doğum Tarihi</span>
                                    </label>
                                    <input type="date" {...register("birthDay")}
                                           placeholder="Doğum Tarihi"
                                           defaultValue={profile?.birthDay?.toString()?.slice(0, 10)}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Cinsiyet</span>
                                    </label>
                                    <select className="select select-bordered" {...register('gender')}>
                                        <option disabled selected>
                                            Seçiniz
                                        </option>
                                        {genders.map(gender =>
                                            <option key={gender.value} value={gender.key} selected={gender.key === profile.gender && 'selected'}>
                                                {gender.value}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Boy</span>
                                    </label>
                                    <input type="number" {...register("height")}
                                           placeholder="Boy"
                                           defaultValue={profile.height}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Kilo</span>
                                    </label>
                                    <input type="number" {...register("weight")}
                                           placeholder="Kilo"
                                           defaultValue={profile.weight}
                                           className="input input-bordered"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6 items-center">
                            <button type="submit" className="btn btn-primary w-6/12">Güncelle</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}
