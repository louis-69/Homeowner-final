/* eslint-disable require-jsdoc */
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type BenefitProps = {
    benefit: string;
    benefit2?: string;
    benefit3?: string;
    benefit4?: string;
    benefit5?: string;
    benefit6?: string;
    benefit7?: string;
    benefit8?: string;
};

type planProp = {
    duration: string;
    description?: string;
    price: string;
};

type OtherPlanProp = {
    planType: string;
    amount?: string;
    duration?: string;
    numOfProperties?: string;
    benefit1?: string;
    benefit2?: string;
    benefit3?: string;
    benefit4?: string;
    benefit5?: string;
};

function OtherPlans(props: OtherPlanProp) {
    return (
        <>
            <div
                id="plans"
                className="w-[15.625rem] border rounded-lg h-[19rem] hover:text-white hover:border-gray-200 border-[#FAFAFA] pb-4 mt-8 ml-[5%]"
            >
                <div id="subscription" className="ml-[21%]">
                    <p className="mt-3 font-normal text-xs leading-[150%]">
                        {props.planType}
                    </p>
                    <p className="mt-2.5 text-2xl font-medium ">
                        ${props.amount}
                        <span className="text-xs font-normal leading-5 ">
                            /{props.duration}/{props.numOfProperties}
                        </span>
                    </p>
                    <button
                        type="button"
                        id="plan-buttons"
                        className="mt-5 border border-[#FA790F] font-medium rounded text-sm px-9 py-2.5 text-center mr- mb-2"
                    >
                        Select plan
                    </button>
                    <div className="flex items-center mt-4">
                        <CheckCircleIcon
                            htmlColor="#FA790F"
                            fontSize="inherit"
                        />
                        <p className="font-normal text-xs ml-2">
                            {props.benefit1}
                        </p>
                    </div>
                    <div className="flex items-center mt-3">
                        <CheckCircleIcon
                            htmlColor="#FA790F"
                            fontSize="inherit"
                        />
                        <p className="font-normal text-xs ml-2">
                            {props.benefit2}
                        </p>
                    </div>
                    <div className="flex items-center mt-3">
                        <CheckCircleIcon
                            htmlColor="#FA790F"
                            fontSize="inherit"
                        />
                        <p className="font-normal text-xs ml-2">
                            {props.benefit3}
                        </p>
                    </div>
                    <div className="flex items-center mt-3">
                        <CheckCircleIcon
                            htmlColor="#FA790F"
                            fontSize="inherit"
                        />
                        <p className="font-normal text-xs ml-2">
                            {props.benefit4}
                        </p>
                    </div>
                    <div className="flex items-center mt-3">
                        <CheckCircleIcon
                            htmlColor="#FA790F"
                            fontSize="inherit"
                        />
                        <p className="font-normal text-xs ml-2">
                            {props.benefit5}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

function Benefit(props: BenefitProps) {
    return (
        <div className="bg-[#D7D9FE29] pl-5 py-2.5 items-center">
            <div className="flex items-center">
                <CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
                <p className="font-normal text-xs ml-2">{props.benefit}</p>
            </div>
        </div>
    );
}

function PlansInfo(props: planProp) {
    return (
        <div className="flex h-24 border-b mr-4 items-center">
            <section className="w-36 mr-0">
                <p className="text-[#04030F] text-base leading-[125%] font-medium ">
                    {props.duration}
                </p>
                <p className="text-[#58575F] font-normal leading-[143%] text-sm ">
                    {props.description}
                </p>
            </section>

            <div className="w-5">
                <p className="ml-7 text-[#58575F] leading-[20px] font-medium text-sm  ">
                    ${props.price}
                </p>
            </div>
            <div>
                <button
                    type="button"
                    className="text-white bg-[#FA790F] leading-5 text-xs font-normal ml-40  rounded px-5 py-2"
                >
                    Choose plan
                </button>
            </div>
        </div>
    );
}

export default Benefit;
export { PlansInfo, OtherPlans };
