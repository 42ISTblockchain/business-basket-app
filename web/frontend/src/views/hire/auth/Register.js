import React, {useState} from 'react'
import {http} from "../../../helper/http";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ErrorAlert from "../../../components/modals/ErrorAlert";

export default function Register() {
    const {handleSubmit, register} = useForm();
    const [error, setError] = useState();
    let navigate = useNavigate();

    function authRegister(data) {

        http.post("/auth/hire/register", data).then((res) => {
            navigate("/auth/login", {replace: true})
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
                                            <span className="label-text">Şirket Adı</span>
                                        </label>
                                        <input type="text" name="companyName" {...register("companyName")} placeholder="Şirket Adı"
                                               className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" {...register("email")} placeholder="Email"
                                               className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Şifre</span>
                                        </label>
                                        <input type="password" name="password" {...register("password")} placeholder="Şifre"
                                               className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Telefon</span>
                                        </label>
                                        <input type="text" name="phoneNumber" {...register("phoneNumber")} placeholder="Telefon"
                                               className="input input-bordered"/>
                                    </div>
                                </div>
                                <div className="lg:w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Vergi No</span>
                                        </label>
                                        <input type="text" name="companyName" {...register("taxNumber")} placeholder="Vergi No"
                                               className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Vergi Dairesi</span>
                                        </label>
                                        <input type="text" name="companyName" {...register("taxOffice")} placeholder="Vergi Dairesi"
                                               className="input input-bordered"/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Adres</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered h-32" name="address" {...register("address")} placeholder="Adres"></textarea>
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
