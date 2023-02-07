/* eslint-disable require-jsdoc */
import React from "react";

type bubbleProp = {
    name: string;
};
export default function Bubble(props: bubbleProp) {
    const color =
        props.name === "Approved"
            ? "bg-[#FFECCC] text-[#965E00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg list-disc"
            : props.name === "Rejected"
            ? "bg-[#FFE0E0] text-[#D30000] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg"
            : props.name === "Paid"
            ? "bg-[#CDFFCD] text-[#007F00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg"
            : props.name === "Pending"
            ? "bg-[#FFECCC] text-[#965E00] text-sm font-medium mr-2 px-3 py-0.5 rounded-lg"
            : "text-black text-sm font-medium mr-2 px-3 py-0.5 rounded-lg";
    return (
        <>
            <span className={`${color}`}>● {props.name}</span>
        </>
    );
}
