/* eslint-disable require-jsdoc */
import React from "react";

type bubbleProp = {
    status: string;
};
export default function InvoiceStatus(props: bubbleProp) {
    const color =
        props.status === "Due"
            ? "bg-[#FF0000] text-[#FFFFFF] text-sm font-base mr-2 px-3 py-1 rounded list-disc"
            : props.status === "Completed"
            ? "bg-[#007F00] text-[#FFFFFF] text-sm font-base mr-2 px-3 py-1 rounded"
            : "text-black text-sm font-base mr-2 px-3 py-0.5 rounded";
    return (
        <>
            <span className={`${color}`}>{props.status}</span>
        </>
    );
}
