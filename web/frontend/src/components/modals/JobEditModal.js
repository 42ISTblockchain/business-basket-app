import { useSelector, useDispatch } from "react-redux";
import { currentJobAction, allJobAction } from "../../slice/JobListSlice";
import { http } from "../../helper/http";
import alertify from "alertifyjs";
export default function JobEditModal() {
  const cities = useSelector((state) => state.genericValue.cities);
  const categories = useSelector((state) => state.genericValue.categories);
  const currentJob = useSelector((state) => state.jobList.currentJob);
  const jobList = useSelector((state) => state.jobList.job);
  let formData = {};

  const dispatch = useDispatch();

  const genders = [
    {
      key: "male",
      value: "Erkek",
    },
    {
      key: "female",
      value: "Kadın",
    },
    {
      key: "both",
      value: "Her ikiside",
    },
  ];

  const onChange = (e) => {
    if (e.target.id === "tip") formData.tip = e.target.checked;
    else formData[e.target.id] = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alertify.set("notifier", "position", "top-center");

    let resp;

    for (const [key, value] of Object.entries(currentJob)) {
      if (!formData[key]) {
        formData[key] = value;
      }
    }
    resp = jobList.map((obj) => (formData.id === obj.id ? formData : obj));
    http.put("/hire/job/update/" + currentJob.id, formData).then(() => {
      dispatch(currentJobAction(formData));
      dispatch(allJobAction(resp));
      alertify.success("İşlem başarılı bir şekilde gerçekleşti.");
    }).catch(() => alertify.error("İşlem başarısız. Lütfen tekrar deneyiniz."));

    window.location.href = "#";
  };
  return (
    <div>
      {console.log("render oldu", currentJob.id)}
      <div className="modal" id="jobEditModal">
        <form
          onSubmit={onSubmit}
          className="modal-box w-12/12 flex flex-col items-center"
        >
          <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
            İş Düzenle
          </h3>
          <div className="grid lg:grid-cols-2 w-full gap-4 ">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">İş Kategorisi</span>
              </label>
              <select
                className="select select-bordered w-full "
                defaultValue={currentJob.category.id}
                id="category"
                key={currentJob.id}
                onChange={(e) => onChange(e)}
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Ücret</span>
              </label>
              <label className="input-group">
                <input
                  key={currentJob.id}
                  type="number"
                  id="price"
                  placeholder="Ücret giriniz..."
                  className="input input-bordered w-full"
                  defaultValue={currentJob.price}
                  onChange={(e) => onChange(e)}
                />
                <span>TRY</span>
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">İl</span>
              </label>
              <select
                className="select select-bordered w-full "
                defaultValue={currentJob.city.id}
                key={currentJob.id}
                id="city"
                onChange={(e) => onChange(e)}
              >
                {cities &&
                  cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Cinsiyet</span>
              </label>
              <select
                defaultValue={currentJob.gender}
                className="select select-bordered w-full"
                key={currentJob.id}
                id="gender"
                onChange={(e) => onChange(e)}
              >
                <option disabled>Seçiniz</option>
                {genders.map((gender) => (
                  <option key={gender.value} value={gender.key}>
                    {gender.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Başlangıç Tarihi</span>
              </label>
              <input
                type="datetime-local"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={currentJob.startDate.toString().slice(0, 16)}
                key={currentJob.id}
                id="startDate"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Bitiş Tarihi</span>
              </label>
              <input
                type="datetime-local"
                defaultValue={currentJob.endDate.toString().slice(0, 16)}
                placeholder="Type here"
                className="input input-bordered w-full"
                key={currentJob.id}
                id="endDate"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Çalışan Sayısı</span>
              </label>
              <input
                key={currentJob.id}
                type="number"
                placeholder="Çalışan sayısı giriniz..."
                className="input input-bordered w-full"
                defaultValue={currentJob.workerCount}
                id="workerCount"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Açıklama</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Açıklama"
                defaultValue={currentJob.description}
                key={currentJob.id}
                id="description"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Adres</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                defaultValue={currentJob.address}
                placeholder="Adres"
                key={currentJob.id}
                id="address"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-control mt-3 w-full ">
              <label className="label cursor-pointer">
                <span className="label-text">Bahşiş Seçeneği</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  defaultChecked={currentJob.tip}
                  defaultValue={currentJob.tip}
                  key={currentJob.id}
                  id="tip"
                  onChange={(e) => onChange(e)}
                />
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
                Güncelle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
