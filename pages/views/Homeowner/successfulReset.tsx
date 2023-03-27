/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.png"
import checkmark from "../assets/checkmark.png"


export default function SignUp() {
    return (
        <>
        
                <Head>
                    <title>Reset Successful</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] min-h-screen">
                    {/* Bottom menu */}
                    <section className="flex justify-center ">
                    <div className="h-[649px] pt-[2.9375rem] shadow-lg bg-white w-[694px]">
                    <div>
                    <Image className="w-[4rem] ml-[4.1875rem] mt-[]" src={logo} alt={"Homehub logo"} />
                    </div>
                    <Image className="w-[6.25rem] ml-[43%] mt-[20%]" src={checkmark} alt={"Mail image"} />

                    <p className="font-black text-xl leading-7 mt-10 text-center ">Your password was reset successfully</p>

                    <p className="text-sm text-center text-[#747A80] mt-[4%] leading-[1.3125rem] ">Go back to <a href="" className="text-[#0028FC] hover:underline-offset-2 hover:underline">sign in</a></p>

                    </div>
                    </section>
                </main>
        </>
    );
}
