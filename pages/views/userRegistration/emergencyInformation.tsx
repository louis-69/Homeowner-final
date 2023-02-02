/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";

export default function EmergencyInformation() {
    return (
        <>
            {/* Accordian 1*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Emergency Contact
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Name</p>
                        <p className="text-gray-500">Ama Yeboah</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-500">+233 402 101 1000</p>
                    </div>
                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">Tema, Blk 47</p>
                    </div>
                    <div>
                        <p className="font-medium">Relationship</p>
                        <p className="text-gray-500">Sister</p>
                    </div>
                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-500">example@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Accordian 2*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Other Contact
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Name</p>
                        <p className="text-gray-500">Kofi Ansah</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-500">+233 402 101 1000</p>
                    </div>
                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-500">Tema, Blk 47</p>
                    </div>
                    <div>
                        <p className="font-medium">Relationship</p>
                        <p className="text-gray-500">Friend</p>
                    </div>
                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-500">example@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}
