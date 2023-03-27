/* eslint-disable require-jsdoc */
import React from "react";
import Footer from "./footer";
import Header from "./header";



type layoutType = {
    children?: any;
};

export default function Layout({ children }: layoutType) {
    return (
        <section className="w-full flex flex-col">
            <Header />
            <div
                className="flex h-screen flex-grow flex-col  
			"
            >
                {children}

                {/* <Footer /> */}

            </div>

        </section>
        
    );
}
