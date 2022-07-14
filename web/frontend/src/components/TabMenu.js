import React, {useEffect, useRef, useState} from 'react';

export default function TabMenu(props) {
    const tab = useRef(null);
    const tabContent = useRef(null);
    let prevTab = 0;

    useEffect(() => {
        for (let i = props.tabs.length - 1; i >= 0; i--) {
            if (props.tabs[i].is_active) {
                tabContent.current.children[i].style.display = "block";
                break;
            }
        }
    }, []);

    function onClickTab(tabid) {
        if (tab.current.children[tabid]) {

            tab.current.children[prevTab].classList.remove('border-b-[1px]');
            tabContent.current.children[prevTab].style.display = "none";
            tabContent.current.children[tabid].style.display = "block";
            tab.current.children[tabid].classList.add("border-b-[1px]");
            prevTab = tabid;
        }
    }

    return (
        <>
            {props.tabs &&
                <div className="card w-100 dark:bg-gray-600 bg-base-100 lg:ml-5 h-full mt-1">
                    <div className="tabs tabs-boxed bg-gradient-to-r from-[#3d6782] bg-[#5cc7fa5e] dark:bg-[#303258] w-full h-28 flex items-center"
                        ref={tab}>{
                        props.tabs.map((tab, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a href="#" key={index}
                                   className={tab.is_active ? "tab border-b-[1px] text-white font-bold" : "tab text-white font-bold"}
                                   onClick={() => onClickTab(index)}>{tab.name}
                                </a>
                            )
                        })
                    }
                    </div>
                    <div className="tab-content px-5 pt-2" ref={tabContent}>
                        {props.tabs.map((tab, index) => {
                            return (
                                <p className="hidden" key={index}>{tab.content}</p>
                            )
                        })}
                    </div>
                </div>

            }
        </>

        /*<div className="tabs tabs-boxed" ref={tab}>
            {props.tabs && props.tabs.map((tab,index) => {
                return (
                    <a href="#" key={index} className={tab.is_active ? "tab tab-active" : "tab"} onClick={() => onClickTab(index)}>{tab.name}
                    </a>
                )
            })}
        </div>

         */

    );
}