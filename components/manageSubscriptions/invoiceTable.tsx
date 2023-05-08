/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import InvoiceStatus from "./invoiceStatus";

type TableProps = {
    id: string;
    date: string;
    price: number;
    status: string;
};

export default function InvoiceTable(props: TableProps) {
    return (
        <>
            <td className="pl-[2%]">
                <p className="text-[#ED4C5C] text-sm">{props.id}</p>
            </td>

            <td className="pl-[16%]">
                <p className="text-[#2E2D37] font-medium text-sm">
                    {props.date}
                </p>
            </td>

            <td className="pl-[1%] py-6">
                <p className="text-[#04030F] font-normal text-base">
                    ${props.price}
                </p>
            </td>
            <td className="pl-[20%] pr-0 mr-0 py-6">
                <p>
                    <InvoiceStatus status={props.status} />
                </p>
            </td>
        </>
    );
}
