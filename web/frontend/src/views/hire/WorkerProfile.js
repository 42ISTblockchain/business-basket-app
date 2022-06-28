import React, {useEffect, useRef} from 'react';
import TabMenu from "../../components/TabMenu";

export default function WorkerProfile() {

    const tab = useRef(null);
    const tabContent = useRef(null);
    let prevTab = 0;


    function onClickTab(tabid){
       if(tab.current.children[tabid]){
           console.log(prevTab);
           tab.current.children[prevTab].classList.remove('tab-active');
           tab.current.children[tabid].classList.add("tab-active");
           tabContent.current.children[prevTab].style.display = "none";
           tabContent.current.children[tabid].style.display = "block";
           prevTab = tabid;
       }
    }

    const tabs = [
        {
            name: 'Hakkımda',
            content: "asdsadadadadadadadad asdsadada asdasdasd dasdadadas dsaasdad dasdasd adasdsa adasdad dsada",
            is_active: true
        },
        {
            name: "Deneyimler",
            content: "asdsadadadadadadadad ",
            is_active: false
        },
        {
            name: "Yorumlar",
            content: "asdsadadadadadadadad ",
            is_active: false
        }
        ];

    const worker = {
        name: 'John',
        surname: 'Doe',
        role: "Çalışan",
        email: 'asdasda@hotmail.com',
        phone: '0555555555',
        birthDay: '01/01/2000',
        gender: "male"
    }


    return (
        <div className="flex flex-col lg:flex-row h-auto">
            <div className="!w-full lg:!w-5/12 w-fit p-1">
                <div className="card w-100 bg-base-100 shadow-xl shadow-lg shadow-lg shadow-gray-500/20">
                    <figure className="relative">
                        <div className={worker.gender ===  "male" ? " bg-gradient-to-r from-indigo-500 bg-[#5cc7fa5e] dark:bg-[#5cc7fa5e] w-full h-28" : "bg-gradient-to-r from-[#e750e3d9] bg-[#b731ba6b] dark:bg-[#b731ba6b] w-full h-28"}></div>
                        <div className="avatar absolute top-[54%]">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310"/>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center mt-5 bg-[#f2f2f2] dark:bg-[#242a34] mt-0 pt-12">
                        <h2 className="card-title">{`${worker.name} ${worker.surname}`}</h2>
                        <ul className="text-left text-lg">
                            <li className="font-bold">{worker.role}</li>
                            <li className="my-3"><span className="material-symbols-rounded text-sm">mail</span> {worker.email}</li>
                            <li className="my-3"><span className="material-symbols-rounded text-sm">call</span> {worker.phone}</li>
                            <li className="my-3"><span className="material-symbols-rounded text-sm">calendar_month</span> {worker.birthDay}</li>
                            <li className="my-3 text-center"><span className="material-symbols-rounded text-lg">{worker.gender ? "male" : "female"}</span>  {worker.gender ? "Erkek" : "Kadın"}</li>
                            <li><img src="https://i.hizliresim.com/1x4ovu2.png" width="25" height="25" className="mx-auto mt-1"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10 lg:!mt-0">
                <TabMenu tabs={tabs}/>
            </div>
        </div>
    );
}