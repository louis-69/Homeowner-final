/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png"


type navbarProp = {
    name?: string;
    hostType?: string;
    joinDate?: string;
};

function UserDetails(props: navbarProp) {
    return (
        <>        
                <Image src={profilepic} alt={"profile pic"} className="w-[7rem] ml-20 mt-[40px] h-[7rem] " />
                <div className="ml-3 pt-9 mr-auto">
                <p className="font-extrabold text-[32px] leading-9 text-white">{props.name}</p>
                <p className="font-medium text-base leading-6 text-white">{props.hostType}</p>
                <p className="font-normal text-sm leading-[18.2px] text-white ">{props.joinDate}</p>
                </div>
        </>
    );
}

export default UserDetails;
