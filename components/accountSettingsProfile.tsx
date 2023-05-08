/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import Link from "next/link";

type navbarProp = {
    name?: string;
    hostType?: string;
};

function AccountSettingsProfile(props: navbarProp) {
    return (
        <div className="border rounded-t-lg border-[#E9ECEF]">
            <div className="flex flex-col h-[148px] rounded-t-lg items-center bg-[#FA790F] ">
                <Image
                    className="w-[150px] h-[150px] mt-[1.875rem] rounded-full border-4 border-white"
                    src={profilepic}
                    alt="Profile Photo"
                />
            </div>

            <div className="flex flex-col pt-[2.625rem] rounded-b-lg items-center h-[189px] bg-white">
                <p className="text-3xl text-[#2E2D37] font-extrabold leading-[112%] flex-grow-0 ">
                    {props.name}
                </p>
                <p className="text-base mt-[0.375rem] font-medium text-[#58575F] leading-[160%] flex-grow-0 ">
                    {props.hostType}
                </p>
                <Link href={"/views/homeowner"}>
                    <button className="text-white text-sm  h-9 w-32 mt-[0.375rem] bg-[#FA790F] rounded">
                        Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AccountSettingsProfile;
