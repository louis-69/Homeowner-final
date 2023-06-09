/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../../assets/logo.png";
import Layout from "../../../../components/layout";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type ReasonModel = {
    password: string;
};

export default function DeleteProfile() {
    return (
        <>
            <div className="bg-white h-[97px] w-full">
                <div className="w-[75px] h-[74px] ml-[5.56%] mt-[29px]">
                    <Image src={logo} alt="" />
                </div>
            </div>

            <Layout>
                <Head>
                    <title>Delete Profile</title>
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

                    <div className="bg-white mt-20 w-[93%] rounded-lg">
                        <Formik<ReasonModel>
                            initialValues={{
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                password: Yup.string().required(
                                    "Password is required"
                                ),
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
                                    className="bg-white border rounded-lg pl-5 pb-5"
                                >
                                    <div className="">
                                        <h3 className="pt-4 font-semibold text-2xl leading-[2.0625rem] text-[#FA790F]">
                                            Delete your profile
                                        </h3>
                                        <p className="text-[#58575F] text-sm w-[424px] pt-2 font-normal leading-[140%] ">
                                            If you are unsure, we suggest you
                                            deactivate your account instead. To
                                            confirm deletion, enter your
                                            password below:
                                        </p>
                                    </div>

                                    <div className="my-8 ">
                                        <Field
                                            type="password"
                                            id="password"
                                            className="border border-gray-300 text-gray-900 text-sm rounded block w-[48%] p-2.5"
                                            placeholder="Confirm password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <p className="font-medium text-red-700">
                                            <ErrorMessage name="password" />
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="text-[#ABABAF] leading-5 text-xs border border-[#ABABAF] font-normal rounded px-6 py-2"
                                    >
                                        Confirm
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </main>
            </Layout>
        </>
    );
}
