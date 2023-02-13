/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import bell from "../assets/bell.png";
import message from "../assets/message.png";
import zenith from "../assets/zenith.jpg";
import line from "../assets/line.png";

type headerProp = {
    number?: number;
    title: string;
};

function Header(props: headerProp) {
    return (
        <>
            <header className="flex min-h-[7.125rem] items-center justify-between border-b-2 px-[5rem] bg-[#FAFAFA]">
                <h1>{props.title}</h1>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-50 "
                    >
                        <Image src={bell} alt="" />
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-0.1rem] -right-[-0.06rem] ">
                            {props.number}
                        </div>
                    </button>

                    <button
                        type="button"
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-50 "
                    >
                        <Image src={message} alt="" />
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-0.1rem] -right-[-0.06rem] ">
                            {props.number}
                        </div>
                    </button>
                    <div>
                        <Image src={line} alt="" />
                    </div>
                    <div className="w-10">
                        <Image src={zenith} alt="" />
                    </div>
                    <div>
                        <p className="text-[#FA790F]">Zenith bank</p>
                        <p className="text-[#FB8F37]">Manager</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
