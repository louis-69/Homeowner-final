/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import pdf from "../assets/pdf.png";
import print from "../assets/print.png";
import transact from "../assets/transaction.png";

type transactionprop = {
    name: string;
    dayDate: string;
    transferNumber: number;
    accountNumber: number;
    cardNumber: number | string;
    sent: number;
    return: number;
};

export default function TransactionModal(props: transactionprop) {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-4">
                <Image src={transact} alt={""} className="w-52 h-52 mb-2" />
                <h1>GHC 2000.00 to {props.name}</h1>
                <p className="text-[#828187] text-sm mb-2">
                    Completed {props.dayDate}
                </p>
            </div>
            <div className="bg-[#D0650D] flex flex-col gap-y-4 px-4 text-white h-auto text-sm">
                <div className="flex items-center mt-4 justify-between">
                    <p>Transfer</p>
                    <p>#{props.transferNumber}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Sent to</p>
                    <p>{props.name}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Account number</p>
                    <p>{props.accountNumber}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Card number</p>
                    <p>{props.cardNumber}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Amount sent</p>
                    <p>GHC {props.sent}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Amount return</p>
                    <p>GHC {props.return}</p>
                </div>
                <div className="flex flex-row justify-between py-4">
                    <button className="flex gap-x-1">
                        <Image src={pdf} alt={""} className="mt-1" />
                        <span>Download</span>
                    </button>
                    <button className="flex gap-x-1">
                        <Image src={print} alt={""} className="mt-1" />
                        <span>Print</span>
                    </button>
                </div>
            </div>
        </>
    );
}
