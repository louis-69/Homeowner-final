/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../components/layout";
import profilepic from "../../../assets/profilepic.png";
import EditProfile from "../forms/editProfile";

type editProp = {
    name?: string;
    hostType?: string;
    joinDate?: string;
};

export default function EditProfiles(props: editProp) {
    return (
        <>
            <div className="bg-white h-[97px] w-full">
                <div className="w-[75px] h-[74px] ml-[5.56%] mt-[29px]">
                    <Image src={logo} alt="" />
                </div>
            </div>

            <Layout>
                <Head>
                    <title>Edit Profile</title>
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
                    <div className="bg-white pl-5 border border-[#E9ECEF]  rounded-lg w-[93%] mt-20">
                        <h3 className="text-[#FA790F] pt-5 text-2xl font-semibold ">
                            Profile Details
                        </h3>
                        <p className="text-[#58575F] text-sm  mt-2">
                            You have full control over your profile
                        </p>

                        <div className="flex items-center mt-[2.625rem] pl-4 mr-[4.130625rem] pr-5  h-[133px] border border-x-0 ">
                            <Image
                                src={profilepic}
                                alt="profilepic"
                                className="rounded-full justify-center h-[101px] w-[101px]"
                            />
                            <div className="mr-auto ml-6">
                                <p className="text-[#FA790F] text-xl font-semibold ">
                                    Your avatar
                                </p>
                                <p className="text-sm font-normal pt-2 leading-[1.225rem] text-[#58575F]  ">
                                    Please use the .jpg or .png file format for
                                    your photo.
                                </p>
                            </div>
                            <div className="flex gap-x-4 ">
                                <button
                                    type="button"
                                    className="text-[#FA790F] border border-[#FA790F] font-black focus:outline-none rounded text-sm px-8 py-1.5 text-center mr-2 mb-2"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    className="text-[#E3000F] border-none border-red-700 font-black rounded text-sm text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        <section>
                            <h3 className="pt-[2.625rem] text-[#FA790F] text-xl font-semibold ">
                                Personal Details
                            </h3>
                            <p className="pt-2 text-[#58575F] font-normal text-sm leading-[1.225rem] ">
                                Edit your personal information
                            </p>

                            <EditProfile />
                        </section>
                    </div>
                </main>
            </Layout>
        </>
    );
}
