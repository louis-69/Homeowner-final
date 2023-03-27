/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.png"
import mailsent from "../assets/mailsent.png"


export default function MailSent() {
    return (
        <>
        
                <Head>
                    <title>Mail Sent</title>
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
                    <section className=" flex justify-center pt-20">
                    <div className="h-[649px] shadow-lg pt-[2.9375rem] bg-white w-[694px]">
                    <div className="w-[4rem] ml-20">
                    <Image src={logo} alt={"Homehub logo"} />
                    </div>
                    <Image className="w-[15.4375rem] ml-[33%] mt-[15%]  " src={mailsent} alt={"Mail image"} />

                    <p className="font-black text-xl leading-7 text-center">We sent a link to your email</p>

                    <p className="text-sm text-center text-[#747A80] mt-[4%] leading-[1.3125rem] ">We sent a link to your email? <a href="" className="text-[#0028FC] hover:underline-offset-2 hover:underline">Resend link</a></p>

                    </div>
                    </section>
                </main>
        </>
    );
}
