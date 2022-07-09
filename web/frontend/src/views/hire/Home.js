import React from "react";
import {useSelector} from "react-redux";


export default function Home() {

    const jobList = useSelector((state) => state.jobList.allJob);
    console.log(jobList)
    return (
        <div className="grid sm:grid-cols-3 2xl:grid-cols-4 gap-5">
            {jobList && jobList.map((data, index) =>
                (<div key={index} className="card col-span-2 w-auto bg-base-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title ">Card title</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            )}
        </div>);
}
