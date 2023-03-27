/* eslint-disable require-jsdoc */
import Image from "next/image";
import React from "react"
import notification from "../../assets/circle_notifications.png"


type announcementsProp = {
    message: string;
}


export default function Announcements(props:announcementsProp){
    return(
        <>

        <div className="ml-20 mr-20 bg-white">
        <div className="flex pl-10 py-3 border-b items-center ">
        <Image className="w-[56px] h-[56px]" src={notification} alt={"notification bell"} />
        <p className="font-semibold text-base ml-5 text-[#424242]">Announcement: </p>
        <p className="text-[#7A7A7A] text-base ml-2 font-normal leading-5">{props.message} </p>
        <span className="flex ml-auto mr-[2.6875rem] w-3 h-3 bg-[#FA790F] rounded-full"></span>

        </div>
        </div>
        </>
    )
}