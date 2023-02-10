/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Link from "next/link";
import MortgageHeader from "../../../components/mortgageheader";
import MortgageForm, { PasswordForm } from "./mortgage";
import Modal from "react-modal";

export default function Rates() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
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
            width: "643px",
            height: "348px",
            borderRadius: "8px 8px 0 0",
            backgroundColor: "white",
        },
    };

    const customStyles2 = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            width: "643px",
            height: "250px",
            borderRadius: "8px 8px 0 0",
            backgroundColor: "white",
        },
    };
    return (
        <>
            <Layout>
                <Head>
                    <title>Rates</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Header title={"Mortgage Requests"} number={5} />
                {/* Code goes into the main tag */}
                <main className="bg-[#FAFAFA] grow pb-10">
                    {/* Bottom menu */}
                    <div className="flex items-center bg-white justify-between border-b px-[5rem] py-2">
                        <div className="text-[#FA790F]">
                            Morgage Requests
                            <span className="text-black">/Rates</span>
                        </div>
                        <Link href={""}>
                            <button
                                className="bg-[#D0650D] text-white rounded-md p-1 px-3 mr-2 hover:shadow-md hover:shadow-[#D0650D]"
                                onClick={openModal}
                            >
                                + Add Project
                            </button>
                            {/* First Modal */}
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                ariaHideApp={false}
                                shouldCloseOnOverlayClick={false}
                                overlayClassName=""
                                style={customStyles}
                            >
                                <div className="flex items-center justify-between p-2 px-4 h-12 font-medium w-full text-white bg-[#D0650D]">
                                    <h2>Add product</h2>
                                    <button
                                        className="border rounded-full w-5 h-5 bg-[#FA790F]"
                                        onClick={closeModal}
                                    >
                                        <p className="absolute top-[0.69rem] right-[1.34rem] font-normal">
                                            X
                                        </p>
                                    </button>
                                </div>
                                <div className="mt-10 px-16">
                                    <MortgageForm />
                                </div>
                            </Modal>
                            <button
                                className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-9 mr-2 hover:text-orange-300"
                                onClick={openModal2}
                            >
                                Edit
                            </button>
                            {/* Second Modal */}
                            <Modal
                                isOpen={modalIsOpen2}
                                onRequestClose={closeModal2}
                                ariaHideApp={false}
                                shouldCloseOnOverlayClick={false}
                                overlayClassName=""
                                style={customStyles2}
                            >
                                <div className="flex items-center justify-between p-2 px-4 h-12 font-medium w-full text-white bg-[#D0650D]">
                                    <h2>Password</h2>
                                    <button
                                        className="border rounded-full w-5 h-5 bg-[#FA790F]"
                                        onClick={closeModal2}
                                    >
                                        <p className="absolute top-[0.69rem] right-[1.34rem] font-normal">
                                            X
                                        </p>
                                    </button>
                                </div>
                                <div className="mt-10 px-16">
                                    <PasswordForm />
                                </div>
                            </Modal>
                        </Link>
                    </div>

                    {/* Bottom Menu */}
                    <div className="mt-[30px] px-[5rem]">
                        <div className="grid grid-cols-3 items-center h-16 bg-[#FDF2EA]">
                            <p className="text-[#747A80] text-sm font-bold pl-[15%]">
                                Product
                            </p>
                            <p className="text-[#747A80] text-sm font-bold pl-[20%]">
                                Interest rate
                            </p>
                            <p className="text-[#747A80] text-sm font-bold flex justify-center pl-[20%]">
                                Annual Percentage Rate
                            </p>
                        </div>

                        <MortgageHeader
                            product={"30-year fixed-rate"}
                            modified={"Last modified: 23/01/2023"}
                            interest={6.09}
                            percentage={6.23}
                        />
                        <MortgageHeader
                            product={"20-year fixed-rate"}
                            modified={"Last modified: 23/01/2023"}
                            interest={5.64}
                            percentage={5.82}
                        />
                        <MortgageHeader
                            product={"15-year fixed-rate"}
                            modified={"Last modified: 23/01/2023"}
                            interest={5.25}
                            percentage={5.33}
                        />
                        <MortgageHeader
                            product={"10-year fixed-rate"}
                            modified={"Last modified: 23/01/2023"}
                            interest={4.8}
                            percentage={4.87}
                        />
                    </div>
                </main>
            </Layout>
        </>
    );
}
