import React, {useState} from 'react'
import {http} from "../../../helper/http";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ErrorAlert from "../../../components/modals/ErrorAlert";

export default function Register() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [error, setError] = useState();
    let navigate = useNavigate();

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

    function authRegister(data) {

        http.post("/worker/auth/register", data).then((res) => {
            navigate("/auth/worker/login", {replace: true})
        }).catch(err => setError(err.response.data.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Kayıt Ol</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut ssrepudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        {error && <ErrorAlert error={error}/>}
                        <form onSubmit={handleSubmit(authRegister)}>
                            <div className="lg:flex lg:grid-cols-2 lg:gap-20">
                                <div className="lg:w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Ad</span>
                                        </label>
                                        <input type="text" {...register("firstName", {required: true})} placeholder="Ad"
                                               className={`input input-bordered ${errors.firstName && 'input-error'}`}/>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email", {required: true})} placeholder="Email"
                                               className={`input input-bordered ${errors.email && 'input-error'}`}/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Cinsiyet</span>
                                        </label>
                                        <select className={`select select-bordered ${errors.gender && 'select-error'}`} {...register('gender', {required: true})}>
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
                                </div>
                                <div className="lg:w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Soyad</span>
                                        </label>
                                        <input type="text" {...register("lastName", {required: true})} placeholder="Soyad"
                                               className={`input input-bordered ${errors.lastName && 'input-error'}`}/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Telefon</span>
                                        </label>
                                        <input type="text" name="phoneNumber" {...register("phoneNumber", {required: true})} placeholder="Telefon"
                                               className={`input input-bordered ${errors.phoneNumber && 'input-error'}`}/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Şifre</span>
                                        </label>
                                        <input type="password" name="password" {...register("password", {required: true})} placeholder="Şifre"
                                               className={`input input-bordered ${errors.password && 'input-error'}`}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Kayıt ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
