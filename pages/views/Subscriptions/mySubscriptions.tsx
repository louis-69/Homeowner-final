/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../../";
import Link from "next/link";
import Active, {
    Expired,
} from "../../../../../../components/accountSettings/mySubscriptions";

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

                    <div className="bg-white mt-20 px-[2.5rem]">
                        <div className="flex items-center border-b">
                            <div className="mr-auto">
                                <h3>My Subscriptions</h3>
                                <p>
                                    Provided here is a compilation of all the
                                    plans that you have subscribed to.
                                </p>
                            </div>

                            <Link href={"/views/manageSubscriptions/proPlans"}>
                                <button
                                    type="button"
                                    className="text-[#FA790F] leading-5 text-xs border border-[#FA790F] font-normal rounded px-3 py-1"
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
