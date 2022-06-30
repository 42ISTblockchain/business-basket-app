import {useForm} from "react-hook-form";

export default function Profile() {

    const {handleSubmit, register} = useForm();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        http.get("/hire/profile").then(res => setProfile(res.data))
    }, [])

    return (
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
                <form>
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
                                    <span className="label-text">Yeni Şifre</span>
                                </label>
                                <input type="password" name="password" {...register("password")} placeholder="Yeni Şifre"
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

                    <div className="form-control mt-6 items-center">
                        <button type="submit" className="btn btn-primary w-6/12">Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
