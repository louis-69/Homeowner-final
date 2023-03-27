/* eslint-disable require-jsdoc */
import React from "react"
import { CircularProgressbar } from "react-circular-progressbar";


type dashboardProps={
    totalBookings?: string;
    profileViews?: string;
    totalPropertySales?: string;
    totalProperties?: string;
    active?: string;
    inactive?: string;
    selling?: string;
    renting?: string;
}

const percentage=60


export default function ProfileRectangle(props:dashboardProps){
    return(
       
        <div className="w-[] bg-white shadow-lg rounded-lg h-[140px] ">
        <p className="font-medium text-[32px] leading-[44px] pt-8 text-center ">{props.profileViews}</p>
        <p className="text-[#58575F] text-center font-normal text-base mt-2 leading-[150%]">Profile views</p>
        </div>
       
    )
}

function BookingsRectangle(props:dashboardProps){
    return(
       
        <div className="w-[] bg-white rounded-[5px] shadow-lg h-[140px] ">
        <p className="font-medium text-[32px] leading-[44px] pt-8 text-center ">{props.totalBookings}</p>
        <p className="text-[#58575F] text-center font-normal text-base mt-2 leading-[150%]">Total Bookings</p>
        </div>
       
    )
}

function PropertiesRectangle(props:dashboardProps){
    return(
        
        <div className="w-[] bg-white rounded-[5px] shadow-lg h-[140px] ">
        <p className="font-medium text-[32px] leading-[44px] pt-8 text-center ">{props.totalPropertySales}</p>
        <p className="text-[#58575F] text-center font-normal text-base mt-2 leading-[150%]">Total Property Sales</p>
        </div>
      
    )
}
function LargeRectangle(props:dashboardProps){
    return(
        
        <div className="w-[] rounded-[5px] shadow-lg bg-white h-[18.5625rem]">
                                    <p className="font-medium text-xs leading-[150%] pl-6 pt-6  text-[#04030F]">Active & Inactive Rent</p>
                                    <div className="flex ml-0 items-center mt-8">
                                    <div className="w-[194px] px-6 h-[194px]">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%
                                            Active`}
                                        className="font-normal text-[#04030F]"
                                        styles={{
                                            path: {
                                                stroke: `rgba(252, 188, 135, ${
                                                    percentage / 100
                                                })`,
                                               
                                            },
                                            trail: {
                                                stroke: '#D0650D',
                                                strokeLinecap: 'butt',                                             
                                              },
                                            text: {
                                                fill: "#04030F",
                                                fontSize: "14px",
                                                textAnchor: 'middle'
                                            },
                                        }}
                                    />
                                    </div>


                                    <div className="ml-10 pb-[9%] ">
                                    <span className="flex items-center text-sm font-normal text-[#58575F] dark:text-white"><span className="flex w-2.5 h-2.5 bg-[#FCBC87] rounded-full mr-1.5 flex-shrink-0"></span>Active (600)</span>
                                    <span className="flex items-center text-sm font-normal text-[#58575F] dark:text-white"><span className="flex w-2.5 h-2.5 bg-[#D0650D] rounded-full mr-1.5 flex-shrink-0"></span>Inactive (400)</span>
                                    </div>
                                    
                                    </div>
                                </div>
    
    )
}

function MediumRectangle(props:dashboardProps){
    return(
        <>
        <div className=" flex items-center bg-white rounded-lg shadow-lg h-[140px] ">
        <div className="ml-[5.625rem]">
            <p className="font-medium text-[32px] leading-[44px] text-center">{props.totalProperties}</p>
            <p className="text-[#58575F] font-normal text-base mt-2 leading-[150%]">Total Properties</p>
        </div>

        <div className="ml-16 ">
        <span className="flex items-center text-base font-medium text-[#828187] dark:text-white"><span className="flex w-2 h-2 bg-[#FA790F] mt-1 rounded-full mr-1.5 flex-shrink-0"></span>{props.selling} selling</span>

        <span className="flex items-center text-base font-medium mt-7 text-[#828187] dark:text-white"><span className="flex w-2 h-2 bg-[#FA790F] mt-1 rounded-full mr-1.5 flex-shrink-0"></span>{props.renting} renting</span>

        </div>
        
        </div>
        </>
    )
}

export {BookingsRectangle,MediumRectangle,LargeRectangle, PropertiesRectangle, ProfileRectangle };