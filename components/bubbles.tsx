/* eslint-disable require-jsdoc */
import React from "react";

type bubbleProp = {
    name: string;
};
export default function Bubble(props: bubbleProp) {
    const color =
        props.name === "Renting"
            ? "bg-[#FEE4CF] text-[#FA790F] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg list-disc"
            : props.name === "Buying"
            ? "bg-[#CDFFCD] text-[#007F00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg"
            : props.name === "Paid"
            ? "bg-[#CDFFCD] text-[#007F00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg"
            : "text-black text-sm font-medium mr-2 px-3 py-0.5 rounded-lg";
    return (
        <>
            <span className={`${color}`}>● {props.name}</span>
        </>
    );
}
