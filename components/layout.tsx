/* eslint-disable require-jsdoc */
import React from "react";
import Footer from "./footer";
import SideBar from "./sidebar";

type layoutType = {
    children?: any;
};

export default function Layout({ children }: layoutType) {
    return (
        <section className=" min-h-screen w-full flex flex-col">
            <SideBar />

            <div
                className="flex h-screen flex-grow flex-col pl-[16rem]
			"
            >
                {children}

                <Footer />
            </div>
        </section>
    );
}
