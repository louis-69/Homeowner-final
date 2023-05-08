/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../../assets/logo.png";
import Layout from "../../../../components/layout";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Link from "next/link";

type ReasonModel = {
    feedback?: string;
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

                    <div className="bg-white rounded-lg border w-[93%] pr-9 mt-20 pl-5">
                        <Formik<ReasonModel>
                            initialValues={{
                                feedback: "",
                            }}
                            validationSchema={Yup.object({})}
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
                                    className="bg-white pl-4 pt-5 pb-5 "
                                >
                                    <div className="">
                                        <h3 className="text-[#FA790F] text-xl font-medium">
                                            Delete your profile
                                        </h3>
                                        <p className="text-[#58575F] pt-2 text-xs  font-normal leading-[140%]  ">
                                            Oh no!😓 We're sorry to hear that
                                            you're considering closing your
                                            account! Before you do, please let
                                            us know if there's anything we can
                                            do to help. If you do decide to
                                            proceed with the account closure, we
                                            would be really grateful if you
                                            could share your thoughts on why
                                            you've made this decision
                                            (optional). Your feedback will help
                                            us improve our app and make it even
                                            better for future users. Thanks for
                                            your support and we hope to hear
                                            from you soon!
                                        </p>
                                    </div>

                                    <div className="mt-8 ">
                                        <textarea
                                            id="feedback"
                                            rows={6}
                                            className="block p-2.5 mb-auto w-full text-sm text-gray-900 bg-white rounded border border-gray-300  dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Your text here (This is optional)"
                                            value={values.feedback}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <Link
                                        href={
                                            "/views/accountSettings/DeleteProfile/confirm"
                                        }
                                    >
                                        <button
                                            type="button"
                                            className="text-[#D30000] mt-8 leading-5 text-sm   border-2 border-[#D30000] font-medium rounded px-6 py-2"
                                        >
                                            Continue
                                        </button>
                                    </Link>
                                </form>
                            )}
                        </Formik>
                    </div>
                </main>
            </Layout>
        </>
    );
}