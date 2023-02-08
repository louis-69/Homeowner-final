/* eslint-disable react/no-unknown-property */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import BankInformation from "./bankInformation";
import BusinessInformation from "./businessInformation";
import EmergencyInformation from "./emergencyInformation";
import PersonalInformation from "./personalInformation";
import "react-tabs/style/react-tabs.css";

export default function Detail() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Client List</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header title={"User Registration"} number={5} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] xg:min-h-screen">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/View Details</span>
                        </div>
                        <Link href={"/views/userRegistration/formPage"}>
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-10">
                                Edit
                            </button>
                        </Link>
                    </div>

                    <Tabs>
                        <div className="flex items-end h-[4.6rem] justify-between px-[5rem]">
                            <TabList className="flex flex-row gap-x-[8rem] ">
                                <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                    Personal Information
                                </Tab>
                                <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                    Business Information
                                </Tab>
                                <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                    Bank Information
                                </Tab>
                                <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                    Emergency Information
                                </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <PersonalInformation />
                        </TabPanel>
                        <TabPanel>
                            <BusinessInformation />
                        </TabPanel>
                        <TabPanel>
                            <BankInformation />
                        </TabPanel>
                        <TabPanel>
                            <EmergencyInformation />
                        </TabPanel>
                    </Tabs>
                </main>
            </Layout>
        </>
    );
}
