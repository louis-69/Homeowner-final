/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import zenith from "../../../assets/zenith.jpg";

export default function ClientList() {
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
                <main className="bg-[#FAFAFA] ">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-3">
                        <div className="text-[#FA790F]">
                            User registration
                            <span className="text-black">/Transaction</span>
                        </div>
                        <Link
                            href={"/views/userRegistration/details"}
                            className="text-[#0052FF]"
                        >
                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-2">
                                +Add User
                            </button>
                        </Link>
                    </div>

                    <div className="px-[5rem]">
                        <Tabs>
                            <div className="flex items-end  h-[4.6rem] justify-between">
                                <TabList className="flex flex-row gap-x-20">
                                    <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                        All Transaction
                                    </Tab>
                                    <Tab className="active:border-b focus:underline focus:decoration-[#FA790F] focus:text-[#FA790F]">
                                        Sent
                                    </Tab>
                                    <Tab>Received</Tab>
                                </TabList>

                                <div>
                                    <form className="flex items-center gap-x-4">
                                        {/* First search field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-gray-500">
                                                Sort:
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                                placeholder="Name(a-z)"
                                                required
                                            />
                                        </div>

                                        {/* Second search Field */}
                                        <label
                                            htmlFor="simple-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="simple-search"
                                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search Item"
                                                required
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <TabPanel>
                                <p className="text-[#ABABAF] mt-7 mb-2.5">
                                    30th April
                                </p>
                                <div className="flex flex-row items-center justify-between border  min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <Image
                                            src={zenith}
                                            alt={""}
                                            className="w-10 mr-2"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Kofi Ansah
                                            </p>
                                            <p className="text-[#828187]">
                                                Bank transfer
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            - GHC 10,480.00
                                        </p>
                                        <p className="text-[#828187] text-sm">
                                            30 Aug, 3:01pm
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-between border  min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <Image
                                            src={zenith}
                                            alt={""}
                                            className="w-10 mr-2"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                Money received from Hamida
                                                Mahama
                                            </p>
                                            <p className="text-[#828187]">
                                                Cash
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            + GHC 10,480.00
                                        </p>
                                        <p className="text-[#828187] text-sm">
                                            28 Aug, 3:01pm
                                        </p>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>3</TabPanel>
                        </Tabs>
                    </div>
                </main>
            </Layout>
        </>
    );
}