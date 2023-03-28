/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import House1 from "../../assets/House1.png"
import guest from "../../assets/guest.png"


type pendingProp = {
    propertyName?: string;
    guestName?: string;
    date?: string;
    price?: number | string;
    houseNumber?: string;
    houseType?: string;


};


export default function pendingTable(props: pendingProp) {



    return (
        <>
        
                                                <td className="w-4 p-4">
                                                    <div className="flex ">
                                                        <input
                                                            id="checkbox-table-1"
                                                            type="checkbox"
                                                            className="h-4 w-4 mb-[72px] border-[#FA790F] rounded-sm bg-[#FAFAFA] text-[#FA790F]"
                                                        />
                                                        <label
                                                            htmlFor="checkbox-table-1"
                                                            className="sr-only"
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th className="justify-between mt-4 whitespace-nowrap pl-6 py-6">
                                                    <div>
                                                    <p>Modern Home</p>
                                                    <div className="flex w-">
                                                    
                                                    <Image src={House1} alt={"property image"} className="w-[73px] rounded-lg mt-2 h-[65px]" />
                                                    <div className="ml-3 mt-4">
                                                    <p className="font-normal text-sm leading-[130%]  text-[#2E2D37]"><span className="text-[#818187]">House no:</span> {props.houseNumber}</p>
                                                    <p className="mt-3 font-normal text-sm leading-[130%] text-[#2E2D37]"><span className="text-[#818187]">Type:</span> {props.houseType}</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </th>
                                                <td className=" flex p-6 py-6">
                                                    <Image src={guest} alt={"guest photo"} className="w-[40px] h-[40px] rounded-full" />
                                                    <p className="ml-2 mt-2">{props.guestName}</p>
                                                </td>
                                                <td className="px-6 pb-16">
                                                    <p>Sent request on</p>
                                                    <p className="pl-4">{props.date}</p>
                                                </td>
                                                <td className="px-6 pb-10">
                                                <button type="button" className="text-white font-medium leading-5 text-sm  bg-[#FA790F] focus:ring-0 rounded px-9 mr-20 py-2 mb-2 ">Accept</button>

                                                <p className="text-[#FA790F] text-base leading-5 font-medium pl-8">Decline</p>
                                                </td>

                            

                                                
                                               
                                    

                                                </>
    )};





