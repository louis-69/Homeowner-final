/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../components/layout";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type SocialModel = {
    twitter?: string;
    facebook?: string;
    linkedIn?: string;
    instagram?: string;
};

export default function SocialProfiles() {
    return (
        <>
            <div className="bg-white h-[97px] w-full">
                <div className="w-[75px] h-[74px] ml-[5.56%] mt-[29px]">
                    <Image src={logo} alt="" />
                </div>
            </div>

            <Layout>
                <Head>
                    <title>Social Profiles</title>
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
                    <div className="bg-white border border-[#E9ECEF] w-[93%] pb-5 rounded-lg mt-20">
                        <div className="">
                            <Formik<SocialModel>
                                initialValues={{
                                    twitter: "",
                                    facebook: "",
                                    linkedIn: "",
                                    instagram: "",
                                }}
                                validationSchema={Yup.object({
                                    twitter: Yup.string(),
                                    facebook: Yup.string(),
                                    linkedIn: Yup.string(),
                                    instagram: Yup.string(),
                                })}
                                onSubmit={(values) => {
                                    alert(JSON.stringify(values));
                                }}
                            >
                                {({
                                    handleSubmit,
                                    values,
                                    handleChange,
                                    setFieldValue,
                                }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="bg-white rounded-lg pl-9"
                                    >
                                        <div className="mt-[]">
                                            <h3 className="text-[#FA790F] pt-5 text-2xl font-semibold leading-[2.04875rem] pl- ">
                                                Social Profiles
                                            </h3>

                                            <div className="border-t w-[98%] mt-[3.75rem]">
                                                <div className="mt-4 ">
                                                    <label
                                                        htmlFor="twitter"
                                                        className="block mb-2 text-sm font-medium  text-[#04030F]"
                                                    >
                                                        Twitter
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="twitter"
                                                        className="border border-gray-300 text-gray-900 text-sm rounded block w-[47.7%] p-2.5"
                                                        placeholder="Twitter profile URL"
                                                        value={values.twitter}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="font-medium text-red-700">
                                                        <ErrorMessage name="twitter" />
                                                    </p>
                                                </div>

                                                <div className="mt-[1.875rem]">
                                                    <label
                                                        htmlFor="facebook"
                                                        className="block mb-2 text-sm font-medium text-[#04030F]"
                                                    >
                                                        Facebook
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="facebook"
                                                        className="border border-gray-300 text-gray-900 text-sm rounded block w-[47.7%] p-2.5"
                                                        placeholder="Facebook profile URL"
                                                        value={values.facebook}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="font-medium text-red-700">
                                                        <ErrorMessage name="facebook" />
                                                    </p>
                                                </div>

                                                <div className="mt-[1.875rem]">
                                                    <label
                                                        htmlFor="linkedIn"
                                                        className="block mb-2 text-sm font-medium text-[#04030F]"
                                                    >
                                                        LinkedIn
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="linkedIn"
                                                        className="border border-gray-300 text-gray-900 text-sm rounded block w-[47.7%] p-2.5"
                                                        placeholder="LinkedIn URL"
                                                        value={values.linkedIn}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="font-medium text-red-700">
                                                        <ErrorMessage name="linkedIn" />
                                                    </p>
                                                </div>

                                                <div className="mt-[1.875rem]">
                                                    <label
                                                        htmlFor="instagram"
                                                        className="block mb-2 text-sm font-medium text-[#04030F]"
                                                    >
                                                        Instagram
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="instagram"
                                                        className="border border-gray-300 text-gray-900 text-sm rounded block w-[47.7%] p-2.5"
                                                        placeholder="Instagram profile name"
                                                        value={values.instagram}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="font-medium text-red-700">
                                                        <ErrorMessage name="firstName" />
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="text-white leading-5 mt-12 text-base bg-[#ABABAF] font-normal rounded px-4 py-2 "
                                                >
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
