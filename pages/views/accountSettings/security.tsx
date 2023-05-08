/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React, {useState} from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Layout from "../../../components/layout";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type EmailProps = {
    email: string;
};

type PasswordProps = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};

export default function Security() {
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;





    return (
        <>
            <div className="bg-white h-[97px] w-[93%]">
                <div className="w-[75px] h-[74px] ml-[5.56%] mt-[29px]">
                    <Image src={logo} alt="" />
                </div>
            </div>

            <Layout>
                <Head>
                    <title>Security</title>
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
                    <div className="bg-white w-[93%] pr-5 border rounded-lg mt-20">
                        {/* Email Update form */}
                        <div className="">
                            <Formik<EmailProps>
                                initialValues={{
                                    email: "",
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string()
                                        .required("Required")
                                        .email("Invalid email"),
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
                                        className="bg-white pl-5"
                                    >
                                        <div className="border-b pb-4 ">
                                            <div className="border-b pb-[2.625rem] ">
                                                <h3 className="pl-4 text-[#FA790F] text-2xl font-semibold pt-5 ">
                                                    Security
                                                </h3>
                                                <p className="pl-4 text-[#58575F] text-sm leading-[140%] font-normal pt-2  ">
                                                    You can change your password
                                                    here
                                                </p>
                                            </div>

                                            <h3 className="pl-4 pt-4 font-semibold text-[#FA790F]">
                                                Email address
                                            </h3>

                                            <div className="mr-auto">
                                                <p className="font-normal pl-4  py-6 text-[#58575F] text-sm ">
                                                    Your current email address
                                                    is :{" "}
                                                    <span className="text-[#D30000]">
                                                        mahamahamida@gmail.com
                                                    </span>
                                                </p>

                                                <div className="mt-5 pl-4 ">
                                                    <label
                                                        htmlFor="email"
                                                        className="block mb-2 text-sm font-medium leading-[19px] text-[#04030F]"
                                                    >
                                                        New email address
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        id="email"
                                                        className="border border-gray-300 text-gray-900 mt-3 text-sm rounded block w-[50%] p-2.5"
                                                        placeholder="Enter email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="font-medium text-red-700">
                                                        <ErrorMessage name="email" />
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="text-[#FA790F] mt-7 border ml-4 border-[#FA790F] font-bold focus:outline-none rounded text-sm px-8 py-2.5 text-center mr-2 mb-2"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>

                        {/* Password Update form */}
                        <div className="mt-[2.625rem] mb-12">
                            <Formik<PasswordProps>
                                initialValues={{
                                    currentPassword: "",
                                    newPassword: "",
                                    confirmPassword: "",
                                }}
                                validationSchema={Yup.object({
                                    currentPassword:
                                        Yup.string().required("Required"),
                                    newPassword: Yup.string()
                                        .matches(passwordRules, {
                                            message:
                                                "Create a stronger password",
                                        })
                                        .required("Required"),
                                    confirmPassword: Yup.string()
                                        .oneOf(
                                            [Yup.ref("newPassword"), null],
                                            "Passwords do not match"
                                        )
                                        .required("Required"),
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
                                        className="bg-white pl-5"
                                    >
                                        <div>
                                            <h3 className="pl-4 font-semibold text-[#FA790F]">
                                                Change password
                                            </h3>
                                            <p className="font-normal pl-4 pt-2 text-[#58575F] text-sm ">
                                                Please keep an eye out for an
                                                email confirming your password
                                                change.
                                            </p>

                                            <div className="mt-[1.875rem] ml-4 ">
                                                <label
                                                    htmlFor="firstName"
                                                    className="block mb-3  text-[#04030F] text-sm font-medium"
                                                >
                                                    Current password
                                                </label>
                                                <Field
                                                    type="password"
                                                    id="currentPassword"
                                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[41%] p-2.5"
                                                    placeholder="Enter your current password"
                                                    value={
                                                        values.currentPassword
                                                    }
                                                    onChange={handleChange}
                                                />
                                                <p className="font-medium text-red-700">
                                                    <ErrorMessage name="currentPassword" />
                                                </p>
                                            </div>

                                            <div className="mt-5 ml-4">
                                                <label
                                                    htmlFor="firstName"
                                                    className="block mb-3 text-sm font-medium text-[#04030F]"
                                                >
                                                    New password
                                                </label>
                                                <Field
                                                    type="password"
                                                    id="newPassword"
                                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[41%] p-2.5"
                                                    placeholder="Enter your new password"
                                                    value={values.newPassword}
                                                    onChange={handleChange}
                                                />
                                                <p className="font-medium text-red-700">
                                                    <ErrorMessage name="newPassword" />
                                                </p>
                                            </div>

                                            <div className="mt-5 ml-4">
                                                <label
                                                    htmlFor="firstName"
                                                    className="block mb-3 font-medium text-sm text-[#04030F]"
                                                >
                                                    Confirm password
                                                </label>
                                                <Field
                                                     type={values.confirmPassword ? 'text' : 'password'}
                                                    id="confirmPassword"
                                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[41%] p-2.5"
                                                    placeholder="Enter password"
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    onChange={handleChange}
                                                />
                                                <p className="font-medium text-red-700">
                                                    <ErrorMessage name="confirmPassword" />
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                className="text-white leading-5 ml-4 mt-8 text-sm  bg-[#FA790F] font-normal rounded px-4 py-2 "
                                            >
                                                Save changes
                                            </button>
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