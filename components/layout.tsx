/* eslint-disable require-jsdoc */
import React from "react";
import Footer from "./footer";
import SideBar from "./sidebar";

type layoutType = {
    children?: any;
};

export default function Layout({ children }: layoutType) {
    return (
        <>
            <section className=" w-full bg-[#FAFAFA] flex flex-row">
                <SideBar />

                <div
                    className="flex flex-grow bg-[#FAFAFA] flex-col pl-[2rem]
			"
                >
                    {children}
                </div>
            </section>
            <Footer />
        </>
    );
}
