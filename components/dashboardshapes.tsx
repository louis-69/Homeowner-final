/* eslint-disable require-jsdoc */
import Link from "next/link";
import React from "react";
type dashboardProp = {
    number?: number | string;
    description?: string;
    percentage?: number | string;
    amount?: number | string;
    name?: string;
    mail?: string;
    money?: string;
    request?: string;
    link?: any;
};

function SmallRegtangle(props: dashboardProp) {
    return (
        <div className="flex flex-col justify-center items-center basis-52 border rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.07)]">
            <h1 className="mb-2 font-extrabold">{props.number}</h1>
            <p className="font-normal text-xs text-slate-400">
                {props.description}
            </p>
        </div>
    );
}

function Info(props: dashboardProp) {
    return (
        <div className="grid grid-cols-3 items-center h-16 bg-white border-b mb-4 overflow-auto">
            <div>
                <p className="flex justify-center">{props.name}</p>
                <p className="flex justify-center text-sm font-normal text-[#6568A4]">
                    {props.mail}
                </p>
            </div>
            <div>
                <p className="flex justify-center">{props.money}</p>
                <p className="text-sm font-normal text-[#ABABAF] flex justify-center ">
                    Reuqested on {props.request}
                </p>
            </div>
            <Link href={props.link} className="flex justify-end">
                <button
                    type="button"
                    className="text-white bg-[#D0650D]  font-medium rounded-lg text-sm px-10 py-1 mr-2 mb-2"
                >
                    View
                </button>
            </Link>
        </div>
    );
}

function Bubble(props: dashboardProp) {
    return (
        <div className="basis-[17.375rem] h-20 border boreder-[#FEFEFE] rounded-xl flex items-center justify-center">
            {props.number}
        </div>
    );
}

export default SmallRegtangle;
export { Bubble, Info };
