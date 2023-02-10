/* eslint-disable require-jsdoc */
import React, { useState, useRef, useEffect } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <header className="flex min-h-[7.125rem] items-center justify-between border-b-2 px-[5rem] bg-[#FAFAFA]">
                <h1>{props.title}</h1>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-50 "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Image src={bell} alt="" />
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-0.1rem] -right-[-0.06rem] ">
                            {props.number}
                        </div>
                    </button>
                    {isOpen && (
                        <div
                            className="absolute top-16 right-[22rem] mt-2 bg-white w-auto shadow-xl"
                            ref={ref}
                        >
                            <div className="py-1">
                                <a
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    href="#"
                                >
                                    Option 1 asdasdksadkjasha shdasgudhas
                                    dgjahgd ajs hd asgj djahsgdjhasgdjhasdg
                                    ahsgd jh
                                </a>
                                <a
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    href="#"
                                >
                                    Option 2
                                </a>
                                <a
                                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    href="#"
                                >
                                    Option 3
                                </a>
                            </div>
                        </div>
                    )}

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
                        <p className="text-[#FA790F] font-medium">
                            Zenith bank
                        </p>
                        <p className="text-[#FB8F37]">Manager</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
