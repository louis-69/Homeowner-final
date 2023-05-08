/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import edit from "../../assets/Edit.png";
import remove from "../../assets/Remove.png";

type planProp = {
    type: string;
    expiry: string;
};

function PaymentMethods(props: planProp) {
    return (
        <div className="flex mt-7  py-5 pl-4 items-center">
            <div className=" mr-auto">
                <p className="text-base text-[#04030F] font-semibold leading-[22px]">
                    {props.type}
                </p>
                <p className="text-sm text-[#58575F] font-normal leading-[140%]">
                    {props.expiry}
                </p>
            </div>

            <div className="flex items-center mr-1 gap-x-3">
                <span className="flex bg-[#2B5E89] h-[28px] w-[68px] items-center rounded justify-center text-white text-xs text-center ">
                    Primary
                </span>
                <Image src={edit} alt="edit button" />
                <Image src={remove} alt="delete button" />
            </div>
        </div>
    );
}

export default PaymentMethods;
