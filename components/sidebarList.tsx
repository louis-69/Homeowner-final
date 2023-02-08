/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
// import Link from "next/link";

type sideBarProp = {
    icon?: any;
    name: string;
};

function List(props: sideBarProp) {
    return (
        <li>
            <div className="flex items-center p-2 pl-16 text-base font-medium hover:bg-yellow-50/40 hover:border-r-4 hover:border-[#46E1FF]">
                <Image src={props.icon} alt="" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#FEE4CF]">
                    {props.name}
                </span>
            </div>
        </li>
    );
}

function Title(props: sideBarProp) {
    return (
        <li>
            <span className="flex items-center flex-1 ml-9 whitespace-nowrap p-2 mt-3 text-base font-normal  rounded-lg dark:text-white">
                <Image src={props.icon} className="pr-1" alt="" /> {props.name}
            </span>
        </li>
    );
}

export default List;
export { Title };
