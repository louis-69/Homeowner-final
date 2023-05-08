/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../components/layout";
import Benefit, {
    OtherPlans,
    PlansInfo,
} from "../../../components/manageSubscriptions/proPlans";

export default function ProPlans() {
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

                    <div className="bg-white mt-20 pl-5 w-[93%] rounded-lg border  pr-5  pb-5">
                        <div className="pb-[2.75rem]">
                            <h3 className="pl-4 text-[#FA790F] text-2xl font-semibold pt-5 ">
                                Go pro now!
                            </h3>
                            <p className="pl-4 text-[#58575F] text-sm leading-[140%] font-normal pt-2  ">
                                By upgrading now, you will have access to all
                                the features of this application and can get a
                                lot more out of it
                            </p>
                        </div>

                        <div className="flex pb-3 border-y mr-[9%]">
                            <div className="w-[26%] rounded-lg ml-4 mt-4 mb-[2.9rem] mr-auto ">
                                <Benefit benefit="Benefit1" />
                                <Benefit benefit="Benefit2" />
                                <Benefit benefit="Benefit3" />
                                <Benefit benefit="Benefit4" />
                                <Benefit benefit="Benefit5" />
                                <Benefit benefit="Benefit6" />
                                <Benefit benefit="Benefit7" />
                                <Benefit benefit="Benefit8" />
                            </div>

                            <div className="mr rounded-md mt-4">
                                <PlansInfo
                                    duration="Monthly"
                                    price="20.00/month"
                                />
                                <PlansInfo
                                    duration="Biannually"
                                    description="Billed every 6 months"
                                    price="133.90/month"
                                />
                                <PlansInfo
                                    duration="Annually"
                                    description="Billed every year"
                                    price="451.89/month"
                                />
                            </div>
                        </div>

                        {/* Other plans */}

                        <h3 className="pl-4 text-[#FA790F] text-xl font-semibold pt-[2rem] ">
                            Browse other plans
                        </h3>

                        <div className="flex flex-wrap gap-x-[5%]">
                            <div className="w-[28%]">
                                <OtherPlans
                                    planType="BASIC PLAN"
                                    amount="20"
                                    duration="Month"
                                    numOfProperties="5 properties"
                                    benefit1="Benefit 1"
                                    benefit2="Benefit 2"
                                    benefit3="Benefit 3"
                                    benefit4="Benefit 4"
                                    benefit5="Benefit 5"
                                />
                            </div>

                            <div className="w-[28%]">
                                <OtherPlans
                                    planType="BASIC PLAN"
                                    amount="20"
                                    duration="Month"
                                    numOfProperties="5 properties"
                                    benefit1="Benefit 1"
                                    benefit2="Benefit 2"
                                    benefit3="Benefit 3"
                                    benefit4="Benefit 4"
                                    benefit5="Benefit 5"
                                />
                            </div>

                            <div className="w-[28%]">
                                <OtherPlans
                                    planType="BASIC PLAN"
                                    amount="20"
                                    duration="Month"
                                    numOfProperties="5 properties"
                                    benefit1="Benefit 1"
                                    benefit2="Benefit 2"
                                    benefit3="Benefit 3"
                                    benefit4="Benefit 4"
                                    benefit5="Benefit 5"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
