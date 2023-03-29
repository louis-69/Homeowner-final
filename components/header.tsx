/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import profilepic from "../assets/profilepic.png";


function Header() {
    return (
        <>
            <header className="flex w-full h-[6.0625rem] items-center justify-between px-[5rem] bg-white">
                <Image src={logo} alt={"Homehub logo"} className="mr-auto w-[4.625rem] h-[]" />
                <Image src={profilepic} alt={"profile pic"} className=" rounded-full w-[3.125rem] h-[3.125rem]" />

            </header>
        </>
    );
}

export default Header;
