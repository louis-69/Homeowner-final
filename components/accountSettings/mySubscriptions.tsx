/* eslint-disable require-jsdoc */
import Link from "next/link";
import React from "react";

type activeSubProp = {
    subscriptionID: string;
    startDate: string;
    price: string;
    access: string;
    nextBillingDate: string;
};

type expiredSubProp = {
    subscriptionID: string;
    startDate: string;
    price: string;
    access: string;
    nextBillingDate: string;
};

function Active(props: activeSubProp) {
    return (
        <div className="border-b py-5 px-4">
            <div className="flex items-center">
                <div className="mr-auto">
                    <span className="bg-[#4CAF50] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-[5px]">
                        Active
                    </span>

                    <h6 className="text-[#04030F] leading-[1.375rem] text-base font-medium pt-2">
                        Free plan
                    </h6>
                    <p className="text-[#58575F] leading-[140%] text-sm font-normal pt-2">
                        Subscription ID: {props.subscriptionID}
                    </p>
                </div>

                <Link href={"/views/"}>
                    <button
                        type="button"
                        className="text-[#FA790F] leading-5 text-xs border border-[#FA790F] font-normal rounded px-5 py-1.5"
                    >
                        Change plan
                    </button>
                </Link>
            </div>

            <div className="flex mt-10 gap-x-[10%] ">
                <div className="flex items-center">
                    <span className="flex mr-2 w-5 h-5 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Started on
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.startDate}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Priced
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.price}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Access
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.access}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Next billing date
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.nextBillingDate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Expired(props: expiredSubProp) {
    return (
        <div className="border-b py-5 px-4">
            <div className="flex items-center">
                <div className="mr-auto">
                    <span className="bg-[#FF0000] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-[5px]">
                        Expired
                    </span>

                    <h6 className="text-[#04030F] leading-[1.375rem] text-base font-medium pt-2">
                        Monthly
                    </h6>
                    <p className="text-[#58575F] leading-[140%] text-sm font-normal pt-2">
                        Subscription ID: {props.subscriptionID}
                    </p>
                </div>

                <Link href={"/views/"}>
                    <button
                        type="button"
                        className="text-[#ABABAF] border border-[#ABABAF] cursor-not-allowed font-medium rounded text-sm px-7 py-2.5 text-center"
                        disabled
                    >
                        Disabled
                    </button>
                </Link>
            </div>

            <div className="flex  mt-10 gap-x-[10%] ">
                <div className="flex items-center">
                    <span className="flex mr-2 w-5 h-5 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Started on
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.startDate}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Priced
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.price}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Access
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.access}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="flex w-5 h-5 mr-2 border-[#FA790F] border border-dashed rounded-full"></span>
                    <div>
                        <p className="font-medium text-[#04030F] leading-[143%] text-sm ">
                            Next billing date
                        </p>
                        <p className="text-[#58575F] font-medium leading-[143%] text-sm ">
                            {props.nextBillingDate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Active;
export { Expired };
