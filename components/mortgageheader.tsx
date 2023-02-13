/* eslint-disable require-jsdoc */
import React from "react";
import more from "../assets/More.png";
import Image from "next/image";
import {
    InterestRate,
    APR,
} from "../pages/views/mortgageRequests/rates/mortgage";

type morgageProp = {
    product: string;
    modified: string;
    interest: number;
    percentage: number;
};
type morgageProp2 = {
    product2: string;
    modified2: string;
};
export default function MortgageHeader(props: morgageProp) {
    return (
        <>
            <div className="grid grid-cols-3 items-center h-16 bg-white border-b overflow-auto">
                <div>
                    <p className="pl-[10%]">{props.product}</p>
                    <p className="text-sm font-normal text-[#6568A4] pl-[5%]">
                        {props.modified}
                    </p>
                </div>
                <p className="pl-[20%]">{props.interest}%</p>
                <div className="flex flex-row justify-between px-6">
                    <p className="ml-[55%]">{props.percentage}%</p>
                    <div className="grid items-center">
                        <Image src={more} alt={""} />
                    </div>
                </div>
            </div>
        </>
    );
}

export function Percentages(props: morgageProp2) {
    return (
        <>
            <div className="grid grid-cols-3 items-center h-16 bg-white border-b overflow-auto">
                <div>
                    <p className="pl-[10%]">{props.product2}</p>
                    <p className="text-sm font-normal text-[#6568A4] pl-[5%]">
                        {props.modified2}
                    </p>
                </div>
                <InterestRate />
                <div className="flex flex-row justify-between px-6">
                    <APR />
                    <div className="grid items-center">
                        <Image src={more} alt={""} />
                    </div>
                </div>
            </div>
        </>
    );
}
