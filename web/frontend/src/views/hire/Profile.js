import {useForm} from "react-hook-form";
import axiosInstance from "../../helper/http";
import {useEffect, useState} from "react";
import ErrorAlert from "../../components/modals/ErrorAlert";
import alertify from "alertifyjs";

export default function Profile() {

    const {handleSubmit, register} = useForm();
    const [profile, setProfile] = useState(null);
    const [password, setPassword] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get("/hire/profile").then(res => setProfile(res.data))
    }, [])

    const onSubmit = data => {
        if (data.password !== data.passwordRepeat) {
            setError("Şifreler eşleşmiyor")
            return
        }
        axiosInstance.put("/hire/profile/update", data).then(res => setProfile(res.data)).catch(err => setError(err.response.data.message))
        alertify.success("Profiliniz başarıyla güncellendi")
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
                                        <span className="label-text">Şirket Adı</span>
                                    </label>
                                    <input type="text" name="companyName" {...register("companyName")}
                                           placeholder="Şirket Adı"
                                           defaultValue={profile.companyName}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" {...register("email")} placeholder="Email"
                                           defaultValue={profile.email}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Telefon</span>
                                    </label>
                                    <input type="text" name="phoneNumber" {...register("phoneNumber")}
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
                                            <input type="password" name="password" {...register("password")}
                                                   placeholder="Yeni Şifre"
                                                   className="input input-bordered"/>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Yeni Şifre Tekrar</span>
                                            </label>
                                            <input type="password" name="passwordRepeat" {...register("passwordRepeat")}
                                                   placeholder="Yeni Şifre Tekrar"
                                                   className="input input-bordered"/>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="lg:w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Vergi No</span>
                                    </label>
                                    <input type="text" name="companyName" {...register("taxNumber")}
                                           placeholder="Vergi No"
                                           defaultValue={profile.taxNumber}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Vergi Dairesi</span>
                                    </label>
                                    <input type="text" name="taxOffice" {...register("taxOffice")}
                                           placeholder="Vergi Dairesi"
                                           defaultValue={profile.taxOffice}
                                           className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Adres</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32"
                                              name="address" {...register("address")} placeholder="Adres"
                                              defaultValue={profile.address}></textarea>
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
