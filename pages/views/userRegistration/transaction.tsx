/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import zenith from "../../../assets/zenith.jpg";
import "react-tabs/style/react-tabs.css";
import fidelity from "../../../assets/fidelity.png";
import HM from "../../../assets/HM.png";
import pdf from "../../../assets/pdf.png";
import print from "../../../assets/print.png";
import Modal from "react-modal";
import transact from "../../../assets/transaction.png";

export default function ClientList() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            width: "500px",
            height: "auto",
            borderRadius: "8px 8px 8px 8px",
            backgroundColor: "white",
        },
    };
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

                <Header title={"Transactions"} number={5} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA]  grow pb-10">
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
                            <div className="flex items-end  h-[4.6rem] justify-between border-b-2">
                                <TabList className="flex flex-row gap-x-20">
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-8 focus:none">
                                        All Transaction
                                    </Tab>
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                        Sent
                                    </Tab>
                                    <Tab selectedClassName="text-[#FA790F] underline underline-offset-8">
                                        Received
                                    </Tab>
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

                            {/* Modal */}
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                ariaHideApp={false}
                                overlayClassName=""
                                style={customStyles}
                            >
                                <div className="flex items-center justify-between p-2 px-4 h-12 font-medium w-full text-white bg-[#D0650D]">
                                    <h2>Transaction receipt</h2>
                                    <button
                                        className="border rounded-full w-5 h-5 bg-[#FA790F]"
                                        onClick={closeModal}
                                    >
                                        <p className="absolute top-[0.69rem] right-[1.34rem] font-normal">
                                            X
                                        </p>
                                    </button>
                                </div>
                                <div className="flex flex-col items-center justify-center mt-4">
                                    <Image
                                        src={transact}
                                        alt={""}
                                        className="w-52 h-52 mb-2"
                                    />
                                    <h1>GHC 2000.00 to Kofi Ansah</h1>
                                    <p className="text-[#828187] text-sm mb-2">
                                        Completed Friday, 28th April
                                    </p>
                                </div>
                                <div className="bg-[#D0650D] flex flex-col gap-y-4 px-4 text-white h-auto text-sm">
                                    <div className="flex items-center mt-4 justify-between">
                                        <p>Transfer</p>
                                        <p>#233394</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Sent to</p>
                                        <p>Kofi Ansah</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Account number</p>
                                        <p>2100034454</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Card number</p>
                                        <p>********43531</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Amount sent</p>
                                        <p>GHC 104,800.00</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Amount return</p>
                                        <p>GHC 105,100.00</p>
                                    </div>
                                    <div className="flex flex-row justify-between py-4">
                                        <button className="flex gap-x-1">
                                            <Image
                                                src={pdf}
                                                alt={""}
                                                className="mt-1"
                                            />
                                            <span>Download</span>
                                        </button>
                                        <button className="flex gap-x-1">
                                            <Image
                                                src={print}
                                                alt={""}
                                                className="mt-1"
                                            />
                                            <span>Print</span>
                                        </button>
                                    </div>
                                </div>
                            </Modal>

                            <TabPanel>
                                <p className="text-[#ABABAF] mt-7 mb-2.5">
                                    30th April
                                </p>
                                <button
                                    className="flex flex-row items-center justify-between w-full border  min-h-[5.62rem] bg-white px-4"
                                    onClick={openModal}
                                >
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Kofi Ansah
                                            </p>
                                            <p className="text-[#828187] flex">
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
                                </button>
                                <div className="flex flex-row items-center justify-between border  min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={HM}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Hamida Mahama
                                            </p>
                                            <p className="text-[#828187]">
                                                Cash
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

                                {/* Second section */}
                                <p className="text-[#ABABAF] mt-7 mb-2.5">
                                    30th April
                                </p>
                                <div className="flex flex-row items-center justify-between border  min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={fidelity}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Ama Yeboah
                                            </p>
                                            <p className="text-[#828187]">
                                                Quickpay fidelity
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
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-row items-center justify-between border  min-h-[5.62rem] bg-white px-4 mt-8">
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                                        <div>
                                            <Image
                                                src={zenith}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
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
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-row items-center justify-between border mt-8 min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={HM}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Hamida Mahama
                                            </p>
                                            <p className="text-[#828187]">
                                                Cash
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
                                        <div>
                                            <Image
                                                src={fidelity}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Ama Yeboah
                                            </p>
                                            <p className="text-[#828187]">
                                                Quickpay fidelity
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
                                <div className="flex flex-row items-center justify-between border min-h-[5.62rem] bg-white px-4">
                                    <div className="flex flex-row">
                                        <div>
                                            <Image
                                                src={HM}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Hamida Mahama
                                            </p>
                                            <p className="text-[#828187]">
                                                Cash
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
                                        <div>
                                            <Image
                                                src={fidelity}
                                                alt={""}
                                                className="w-10 mr-2 mt-1"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Money transfer to Ama Yeboah
                                            </p>
                                            <p className="text-[#828187]">
                                                Quickpay fidelity
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
                            </TabPanel>
                        </Tabs>
                    </div>
                </main>
            </Layout>
        </>
    );
}
