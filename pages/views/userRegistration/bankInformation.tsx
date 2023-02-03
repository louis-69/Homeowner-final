/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";

export default function BankInformation() {
    return (
        <>
            {/* Accordian 1*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Finances
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Bank</p>
                        <p className="text-gray-500">Ecobank</p>
                    </div>
                    <div>
                        <p className="font-medium">Account Number</p>
                        <p className="text-gray-500">10020000100</p>
                    </div>
                    <div>
                        <p className="font-medium">Card Number</p>
                        <p className="text-gray-500">10020000100</p>
                    </div>
                    <div>
                        <p className="font-medium">Beneficiaries</p>
                        <p className="text-gray-500">Adam Steve</p>
                    </div>
                    <div>
                        <p className="font-medium">Beneficiary's contact</p>
                        <p className="text-gray-500">+233 567 000 0001</p>
                    </div>
                    <div>
                        <p className="font-medium">Branch Location</p>
                        <p className="text-gray-500">Kronom, Kumasi</p>
                    </div>
                    <div className="">
                        <p className="font-medium">Credit Report</p>
                        <p className="text-[#0052FF] underline">View file</p>
                    </div>
                </div>
            </div>

            {/* Accordian 2*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Colateral Property
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Property Type</p>
                        <p className="text-gray-500">Vehicle</p>
                    </div>
                    <div>
                        <p className="font-medium">Description</p>
                        <p className="text-gray-500">1991 Honda Accord</p>
                    </div>
                    <div>
                        <p className="font-medium">Property Value</p>
                        <p className="text-gray-500">GHC 3000.00</p>
                    </div>
                    <div>
                        <p className="font-medium">Date Purchased</p>
                        <p className="text-gray-500">19//10/2003</p>
                    </div>
                    <div>
                        <p className="font-medium">Property State</p>
                        <p className="text-gray-500">Full ownership</p>
                    </div>
                    <div>
                        <p className="font-medium">Proof of Asset</p>
                        <p className="text-[#0052FF] underline">View file</p>
                    </div>
                </div>
            </div>
        </>
    );
}
