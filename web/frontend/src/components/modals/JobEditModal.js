import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function JobEditModal(data) {
  const { job } = data.props;
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "#";
    reset();
  };

  return (
    <div>
      <div className="modal" id="jobEditModal">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Ücret giriniz..."
                  className="input input-bordered w-full"
                  defaultValue={job.price}
                />
                <span>TRY</span>
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Başlangıç Tarihi</span>
              </label>
              <input
                {...register("startDate")}
                type="datetime-local"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={job.startDate}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Bitiş Tarihi</span>
              </label>
              <input
                {...register("endDate")}
                type="datetime-local"
                placeholder="Type here"
                className="input input-bordered w-full "
                defaultValue={job.endDate}
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Çalışan Sayısı</span>
              </label>
              <input
                {...register("workerCount")}
                type="number"
                placeholder="Çalışan sayısı giriniz..."
                className="input input-bordered w-full"
                defaultValue={job.workerCount}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Açıklama</span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered"
                placeholder="Açıklama"
                defaultValue={job.description}
              />
            </div>
            <div className="form-control mt-3 w-full ">
              <label className="label cursor-pointer">
                <span className="label-text">Bahşiş Seçeneği</span>
                <input
                  {...register("tip")}
                  type="checkbox"
                  className="checkbox"
                  defaultChecked={job.tip}
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
