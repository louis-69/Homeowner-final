/* eslint-disable require-jsdoc */
import React from "react";
import { useRouter } from "next/router";
// import Link from "next/link";

type sideBarProp = {
    icon?: any;
    name: string;
    url?: string;
};

function List(props: sideBarProp) {
    const router = useRouter();

    return (
        <li
            className={
                router.pathname == props.url
                    ? "active: bg-[#FEE4CF4D]/30 border-r-2 border-[#46E1FF]"
                    : ""
            }
        >
            <div className="flex items-center p-3 text-center border-y text-sm font-medium hover:bg-[#FEE4CF]/40 hover:border-r-2 hover:border-y-[#E9ECEF] hover:border-[#46E1FF]">
                <span className="flex-1 ml-3 whitespace-nowrap text-[#303030]">
                    {props.name}
                </span>
            </div>
        </li>
    );
}

function Title(props: sideBarProp) {
    return (
        <li>
            <div className="my-[2.9375rem]">
                <span className="whitespace-nowrap p-[17%] mt-3 mb-[9] text-lg font-semibold leading-[33px] text-[#FA790F] rounded-lg dark:text-white">
                    {props.name}
                </span>
            </div>
        </li>
    );
}

function Title1(props: sideBarProp) {
    return (
        <li>
            <div className="mb-[2.9375rem]">
                <span className="whitespace-nowrap p-[17%] mt-3 mb-[9] text-lg font-semibold leading-[33px] text-[#FA790F] rounded-lg dark:text-white">
                    {props.name}
                </span>
            </div>
        </li>
    );
}

export default List;
export { Title, Title1 };
