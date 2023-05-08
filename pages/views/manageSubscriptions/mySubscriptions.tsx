/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../components/layout";
import Link from "next/link";
import Active, {
    Expired,
} from "../../../components/accountSettings/mySubscriptions";

export default function MySubscriptions() {
    return (
        <>
            <div className="bg-white h-[97px] w-full">
                <div className="w-[75px] h-[74px] ml-[5.56%] mt-[29px]">
                    <Image src={logo} alt="" />
                </div>
            </div>

            <Layout>
                <Head>
                    <title>My Subscriptions</title>
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

                    <div className="bg-white w-[93%] rounded-lg border mt-20 px-5">
                        <div className="flex items-center pb-5 border-b">
                            <div className="mr-auto">
                                <h3 className="pl-4 text-[#FA790F] text-2xl font-semibold pt-5">My Subscriptions</h3>
                                <p className="pl-4 text-[#58575F] text-sm leading-[140%] font-normal pt-2  ">
                                    Provided here is a compilation of all the
                                    plans that you have subscribed to.
                                </p>
                            </div>

                            <Link href={"/views/manageSubscriptions/proPlans"}>
                                <button
                                    type="button"
                                    className="text-[#FA790F] leading-5 text-xs border mr-4 border-[#FA790F] font-normal rounded px-3 py-1"
                                >
                                    Upgrade now - Go pro $30
                                </button>
                            </Link>
                        </div>

                        <Active
                            startDate="May 1, 2023"
                            subscriptionID="#20009482475"
                            price="Monthly"
                            access="All features"
                            nextBillingDate="June 1, 2023"
                        />

                        <Expired
                            startDate="May 1, 2023"
                            subscriptionID="#20009482475"
                            price="Monthly"
                            access="All features"
                            nextBillingDate="June 1, 2023"
                        />
                    </div>
                </main>
            </Layout>
        </>
    );
}