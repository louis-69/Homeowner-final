/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";

export default function PersonalInformation() {
    return (
        <>
            {/* Accordian 1*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Basic Information
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Fullname</p>
                        <p className="text-gray-500">Mahama Hamida</p>
                    </div>
                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-500">mahamahamida@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-medium">Gender</p>
                        <p className="text-gray-500">Female</p>
                    </div>
                    <div>
                        <p className="font-medium">Username</p>
                        <p className="text-gray-500">@Meedah</p>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-500">+233 567 000 0001</p>
                    </div>
                    <div>
                        <p className="font-medium">Education</p>
                        <p className="text-gray-500">
                            Bsc. Computer Engineering
                        </p>
                    </div>
                    <div className="">
                        <p className="font-medium">Age</p>
                        <p className="text-gray-500">22</p>
                    </div>
                    <div>
                        <p className="font-medium">Marital status</p>
                        <p className="text-gray-500">Single</p>
                    </div>
                </div>
            </div>

            {/* Accordian 2*/}
            <div className="px-[5rem] py-5">
                <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                    Address Information
                </h2>
                <div className="grid grid-cols-4 gap-y-4 p-5 font-normal border bg-white border-b border-gray-200">
                    <div>
                        <p className="font-medium">Country</p>
                        <p className="text-gray-500">Ghana</p>
                    </div>
                    <div>
                        <p className="font-medium">City</p>
                        <p className="text-gray-500">Accra</p>
                    </div>
                    <div>
                        <p className="font-medium">Region</p>
                        <p className="text-gray-500">Greater Accra</p>
                    </div>
                    <div>
                        <p className="font-medium">Digital address</p>
                        <p className="text-gray-500">AA-OF-6R</p>
                    </div>
                    <div>
                        <p className="font-medium">Residential Address</p>
                        <p className="text-gray-500">Blk-0</p>
                    </div>
                    <div>
                        <p className="font-medium">Postal Address</p>
                        <p className="text-gray-500">AA-OF-6R</p>
                    </div>
                    <div>
                        <p className="font-medium">Zip Code</p>
                        <p className="text-gray-500">00233</p>
                    </div>
                </div>
            </div>

            {/* Accordian 3 */}
            <div>
                <div className="flex flex-row">
                    <div className="px-[5rem] py-5">
                        <h2 className="flex p-2 font-medium text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                            Health
                        </h2>
                        <div className="grid grid-cols-3 gap-y-4 gap-x-2 p-5  font-normal border bg-white border-b border-gray-200">
                            <div>
                                <p className="font-medium">Health Conditions</p>
                                <p className="text-gray-500">N/A</p>
                            </div>
                            <div>
                                <p className="font-medium">Allergies</p>
                                <p className="text-gray-500">N/A</p>
                            </div>
                            <div>
                                <p className="font-medium">Medical History</p>
                                <p className="text-gray-500">N/A</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-[5rem] py-5 w-3/5">
                        <h2 className="flex p-2 font-medium w-full text-left text-white bg-[#D0650D] border border-b-0 border-gray-200 rounded-t-xl">
                            Education
                        </h2>
                        <div className="grid grid-cols-3 gap-y-4 gap-x-2 p-5 py-5 font-normal border bg-white border-b border-gray-200">
                            <div>
                                <p className="font-medium">
                                    Highest Level of Education
                                </p>
                                <p className="text-gray-500">Undergraduate</p>
                            </div>
                            <div>
                                <p className="font-medium">School</p>
                                <p className="text-gray-500">
                                    Ashesi University
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">Date Commenced</p>
                                <p className="text-gray-500">10/10/2014</p>
                            </div>
                            <div>
                                <p className="font-medium">Date Completed</p>
                                <p className="text-gray-500">10/10/2018</p>
                            </div>
                            <div>
                                <p className="font-medium">Certificate</p>
                                <p className="text-[#0052FF] underline">
                                    View file
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
