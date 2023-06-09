/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import googlelogo from "../../../assets/googlelogo.png";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

type SignUpProp = {
    fullName: string;
    phoneNumber: string;
    email?: string;
    password?: string;
    confirmPassword: string;
};

export default function SignUp(props: SignUpProp) {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    return (
        <>
            <Head>
                <title>Sign Up</title>
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
            <main className="bg-[#FAFAFA] w-full xg:min-h-screen">
                {/* Bottom menu */}
                <section className="flex w-full">
                    <div className="mr-auto w-[59%] h-screen">
                        <Formik<SignUpProp>
                            initialValues={{
                                fullName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                                phoneNumber: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email("Invalid email")
                                    .required("Required field"),
                                password: Yup.string()
                                    .matches(passwordRules, {
                                        message: "Create a stronger password",
                                    })
                                    .required("Required"),
                                confirmPassword: Yup.string()
                                    .oneOf(
                                        [Yup.ref("password"), null],
                                        "Passwords do not match"
                                    )
                                    .required("Required"),
                                fullName:
                                    Yup.string().required("Required field"),
                                phoneNumber: Yup.string()
                                    .matches(
                                        phoneRegExp,
                                        "Phone number is not valid"
                                    )
                                    .required("Required Field"),
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
                                <Form onSubmit={handleSubmit}>
                                    <div>
                                        <Image
                                            className="w-[4.1875rem] h-[2.5625rem] mt-[2%] ml-[8%] "
                                            src={logo}
                                            alt="Logo"
                                        />

                                        <p className="font-extrabold text-[2.5rem] leading-[3.75rem] text-center mt-[%] text-[#181818] ">
                                            Hi there!
                                        </p>
                                        <p className="text-[#747A80] text-center font-light text-sm mt-[] leading-[140%]">
                                            Sign up with us here
                                        </p>

                                        <div className="ml-[25%] mt-[2%] mb-2">
                                            <Field
                                                type="text"
                                                id="fullName"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 placeholder:text-[#ABABAF] dark:focus:border-blue-500"
                                                placeholder="Enter full name"
                                                onChange={handleChange}
                                                value={values.fullName}
                                            />

                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="fullName" />
                                            </p>
                                        </div>

                                        <div className="ml-[25%] mb-2">
                                            <Field
                                                type="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 placeholder:text-[#ABABAF] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={values.email}
                                                onChange={handleChange}
                                                placeholder="Enter email"
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>

                                        <div className="ml-[25%] mb-2">
                                            <Field
                                                type="text"
                                                id="phoneNumber"
                                                className="bg-gray-50 border border-gray-300 placeholder:text-[#ABABAF] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="+233"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="phoneNumber" />
                                            </p>
                                        </div>

                                        <div className=" ml-[25%] mb-2">
                                            <Field
                                                type="password"
                                                id="password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 placeholder:text-[#ABABAF] dark:focus:border-blue-500"
                                                placeholder="Enter Password here"
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="password" />
                                            </p>
                                        </div>

                                        <div className=" ml-[25%] mb-0">
                                            <Field
                                                type="password"
                                                id="confirmPassword"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 placeholder:text-[#ABABAF] dark:focus:border-blue-500"
                                                placeholder="Enter Password here"
                                                onChange={handleChange}
                                                value={values.confirmPassword}
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="confirmPassword" />
                                            </p>
                                        </div>

                                        <div className="flex mt-[1%]">
                                            <div className="flex items-center mr-auto ml-[25%] h-5">
                                                <input
                                                    id="terms-and-conditions"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4 border focus:ring-0 cursor-pointer text-[#FA790F] border-[#FA790F] rounded-sm   bg-gray-50 dark:bg-gray-700 dark:border-gray-600  dark:text-[#FA790F]"
                                                    required
                                                />
                                                <label
                                                    htmlFor="remember"
                                                    className="ml-2 text-xs leading-[18px] font-normal  text-[#58575F] dark:text-gray-300"
                                                >
                                                    By clicking this you hereby
                                                    accept our{" "}
                                                    <a
                                                        className="text-[#FA790F] underline "
                                                        href=""
                                                    >
                                                        terms & conditions
                                                    </a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex mt-[1%]">
                                            <div className="flex items-center mr-auto ml-[25%] h-5">
                                                <input
                                                    id="orange-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4 cursor-pointer  text-[#FA790F] bg-gray-100 border-[#FA790F] rounded-sm dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                                                />

                                                <label
                                                    htmlFor="update"
                                                    className="ml-2 text-xs lead-[18px] font-normal  text-[#58575F] dark:text-gray-300"
                                                >
                                                    Yes, I would love to receive
                                                    emails with great content
                                                    and updates. (optional)
                                                </label>
                                            </div>
                                        </div>

                                        <Link href={"/"}>
                                            <button
                                                type="button"
                                                className="focus:outline-none text-[1.25rem] text-white bg-[#FA790F] font-medium rounded px- py-2 ml-[25%] w-[52.5%] mb-2 mt-[2%]"
                                            >
                                                Sign Up
                                            </button>
                                        </Link>

                                        <p className="text-[#818187] mt-[] text-center text-sm">
                                            Already have an account?{" "}
                                            <Link
                                                href="/"
                                                className="text-[#FA790F] hover:underline"
                                            >
                                                Sign In
                                            </Link>
                                        </p>

                                        <button
                                            type="button"
                                            className="text-black ml-[25%] border rounded-tl-lg mt- rounded-br-lg w-[52.5%] border-[#FA790F] focus:outline-none text-xs px-5 py-2.5 text-center inline-flex justify-center font-normal items-center mr-2 my-2"
                                        >
                                            <Image
                                                className="mr-[14px]"
                                                src={googlelogo}
                                                alt={"google logo"}
                                            />
                                            Sign in with Google
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="bg-signup bg-cover w-[41%] bg-no-repeat h-screen ">
                        <p className="text-[64px] ml-[15%] leading-[94%] mt-[33%] w-[70%] text-white font-bold ">
                            You are sure to love it. Book now.
                        </p>
                        <p className="text-white w-[70%] pt-6 ml-[15%] font-medium text-base leading-[1.4rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fring
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
