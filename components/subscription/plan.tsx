/* eslint-disable require-jsdoc */
import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type planProp = {
    planType: string;
    amount?: string;
    duration?: string;
    numOfProperties?: string;
    benefit1?: string;
    benefit2?: string;
    benefit3?: string;
    benefit4?: string;
    benefit5?: string;
}


export default function Plan(props:planProp){
    return(
<>
<div id="plans" className="w-[18.4375rem] border rounded-lg bg-gradient-to-br from-black to-white hover:border-gray-200 border-[#FAFAFA] mb-48 h-[26.4375rem] mt-10  ml-[1.5%]">
    <div className="ml-[21%] ">
<p className="mt-[3.3125rem] text-[#151515] font-normal text-xs leading-[150%]">{props.planType}</p>
<p className="mt-2.5 text-2xl text-[#151515] font-medium ">${props.amount}<span className="text-xs text-[#605A5A] font-normal leading-5 ">/{props.duration}/{props.numOfProperties}</span></p>
<button type="button" className="text-[#FA790F] mt-6 border border-[#FA790F] font-medium rounded text-sm px-9 py-2.5 text-center mr-2 mb-2">Select plan</button>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit1}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit2}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit3}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit4}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit5}</p>
</div>

</div>
</div>
</>

    )
}


function Plan1(props:planProp){
    return(
<>
<div id="plans" className="w-[18.4375rem] pl-[21%] border rounded-lg bg-gradient-to-br from-black to-white hover:border-gray-200 border-[#FAFAFA] mb-48 h-[26.4375rem] mt-10 ml-[1%]">
<p className="mt-[3.3125rem] text-[#151515]  font-normal text-xs leading-[150%]">{props.planType}</p>
<p className="mt-2.5 text-2xl text-[#151515] font-medium ">${props.amount}<span className="text-xs text-[#605A5A] font-normal leading-5 ">/{props.duration}/{props.numOfProperties}</span></p>
<button type="button" className="text-[#FA790F] mt-6 border border-[#FA790F] font-medium rounded text-sm px-9 py-2.5 text-center mr-2 mb-2">Select plan</button>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit1}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit2}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit3}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit4}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="text-[#151515] font-normal text-xs ml-2">{props.benefit5}</p>
</div>

</div>
</>

    )
}


function Plan2(props:planProp){
    return(

<div id="plans" className="w-[18.4375rem] text-[#151515] pl-[21%] hover:text-white hover:border-gray-200 border-[#FAFAFA] rounded-lg mb-48 h-[26.4375rem] mt-10 border ml-[1%]">
<p className="mt-[3.3125rem]  font-normal text-xs leading-[150%]">{props.planType}</p>
<p className="mt-2.5 text-2xl font-medium ">${props.amount}<span className="text-xs text-[#605A5A] font-normal leading-5 ">/{props.duration}/{props.numOfProperties}</span></p>
<button type="button" className="mt-6 border border-[#FA790F] font-medium rounded text-sm px-9 py-2.5 text-center mr-2 mb-2">Select plan</button>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="font-normal text-xs ml-2">{props.benefit1}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="font-normal text-xs ml-2">{props.benefit2}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="font-normal text-xs ml-2">{props.benefit3}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="font-normal text-xs ml-2">{props.benefit4}</p>
</div>
<div className="flex items-center mt-5">
<CheckCircleIcon htmlColor="#FA790F" fontSize="inherit" />
<p className="font-normal text-xs ml-2">{props.benefit5}</p>
</div>

</div>


    )
}

export {Plan1, Plan2};