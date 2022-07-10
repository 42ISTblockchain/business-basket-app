import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import axiosInstance from "../../../helper/http";
import {loginData} from "../../../slice/authSlice";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ErrorAlert from "../../../components/modals/ErrorAlert";

export default function Login() {
    const dispatch = useDispatch();
    const {handleSubmit, register} = useForm();
    const [error, setError] = useState();
    let navigate = useNavigate();

    function login(data) {
        axiosInstance.post("/worker/auth/login", {
            email: data.email,
            password: data.password,
        }).then((res) => {
            dispatch(loginData(res.data))
            localStorage.setItem('auth', JSON.stringify(res.data))
            console.log(res)
            navigate("/worker", {replace: true})
        }).catch(err => setError(err.response.data.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Giriş Yap</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut ssrepudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {error && <ErrorAlert error={error}/>}
                        <form onSubmit={handleSubmit(login)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email")} placeholder="email"
                                       className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Şifre</span>
                                </label>
                                <input type="password" name="password" {...register("password")} placeholder="Şifre"
                                       className="input input-bordered"/>
                                <label className="label">
                                    <a href="/forgot-password" className="label-text-alt link link-hover">Şifremi
                                        unuttum?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Giriş yap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
