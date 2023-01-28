/* eslint-disable require-jsdoc */
import React from "react";
type dashboardProp = {
    number?: number | string;
    description?: string;
    percentage?: number | string;
    amount?: number | string;
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

function LargeRegtangle(props: dashboardProp) {
    return (
        <div className="flex flex-col justify-center items-center justify-between mr-2.5 py-6 basis-52 border rounded-lg bg-white shadow-[0_4px_58px_rgba(0,0,0,0.04)]">
            <p>{props.description}</p>
            <p>{props.percentage}</p>
            <p>{props.amount}</p>
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
export { LargeRegtangle, Bubble };
