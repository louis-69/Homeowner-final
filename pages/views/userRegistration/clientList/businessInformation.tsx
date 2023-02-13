/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";

export default function BusinessInformation() {
    return (
        <>
            {/* Accordian 1*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Employment Information
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Company</p>
                        <p className="text-gray-500">Sidaky Solutions Ltd</p>
                    </div>
                    <div>
                        <p className="font-medium">Date Joined</p>
                        <p className="text-gray-500">10/10/2015</p>
                    </div>
                    <div>
                        <p className="font-medium">Proof of Employment</p>
                        <p className="text-[#0052FF] underline">View file</p>
                    </div>
                    <div>
                        <p className="font-medium">Position Held</p>
                        <p className="text-gray-500">Data scientist</p>
                    </div>
                    <div>
                        <p className="font-medium">Employer's name</p>
                        <p className="text-gray-500">Josh Ansu</p>
                    </div>
                    <div>
                        <p className="font-medium">Employer's contact</p>
                        <p className="text-gray-500">+233 000 000 0001</p>
                    </div>
                    <div className="">
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">Tema, Blk 47</p>
                    </div>
                    <div>
                        <p className="font-medium">Company Mail</p>
                        <p className="text-gray-500">N/A</p>
                    </div>
                </div>
            </div>

            {/* Accordian 2*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Other
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Company</p>
                        <p className="text-gray-500">Naj Mothercare</p>
                    </div>
                    <div>
                        <p className="font-medium">Date Joined</p>
                        <p className="text-gray-500">10/10/2015</p>
                    </div>
                    <div>
                        <p className="font-medium">Proof of Employment</p>
                        <p className="text-[#0052FF] underline">View file</p>
                    </div>
                    <div>
                        <p className="font-medium">Position Held</p>
                        <p className="text-gray-500">CEO</p>
                    </div>
                    <div>
                        <p className="font-medium">Employer's name</p>
                        <p className="text-gray-500">Self-employed</p>
                    </div>
                    <div>
                        <p className="font-medium">Employer's contact</p>
                        <p className="text-gray-500">+233 000 000 0001</p>
                    </div>
                    <div className="">
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">Tema, Blk 47</p>
                    </div>
                    <div>
                        <p className="font-medium">Company Mail</p>
                        <p className="text-gray-500">N/A</p>
                    </div>
                </div>
            </div>
        </>
    );
}
