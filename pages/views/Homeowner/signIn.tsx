/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/logo.png";
import googlelogo from "../../../assets/googlelogo.png";
import Link from "next/link";

type SignInProp = {
    email?: string;
    password?: string;
};

export default function SignIn(props: SignInProp) {
    return (
        <>
            <Head>
                <title>Sign In</title>
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
            <main className="bg-[#FAFAFA] xg:min-h-screen">
                {/* Bottom menu */}
                <section className="flex w-full">
                    <div className="w-[60%] mr-auto h-screen border">
                        <Formik<SignInProp>
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string()
                                    .email("Invalid email")
                                    .required("Required"),
                                password: Yup.string().required("Required"),
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
                                <form onSubmit={handleSubmit}>
                                    <div className="">
                                        <Image
                                            className="w-[4.1875rem] h-[2.5625rem] mt-[5%] ml-[4.5rem] "
                                            src={logo}
                                            alt="Logo"
                                        />

                                        <p className="font-extrabold text-[2.5rem] leading-[3.75rem] pt-[6%] text-center mt-[1%] text-[#181818] ">
                                            Welcome Back!
                                        </p>
                                        <p className="text-[#747A80] text-center font-light text-sm mt-[1%] leading-[140%]">
                                            Sign into your account
                                        </p>

                                        <div className="mt-[3%] ml-[25%]">
                                            <Field
                                                type="email"
                                                id="email"
                                                className="border placeholder:text-[#ABABAF] border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[67%] p-2.5"
                                                placeholder="Enter email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>

                                        <div className="ml-[25%] mt-[1%] ">
                                            <Field
                                                type="password"
                                                id="password"
                                                className="border placeholder:text-[#ABABAF] border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[67%] p-2.5"
                                                placeholder="Enter password here"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <p className="font-medium text-xs text-red-700">
                                                <ErrorMessage name="password" />
                                            </p>
                                        </div>

                                        <div className="flex mt-[2%]">
                                            <div className="flex items-center mr-auto ml-[25%] h-5">
                                                <Field
                                                    id="remember"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800"
                                                />
                                                <label
                                                    htmlFor="remember"
                                                    className="ml-2 text-sm font-normal text-[#818187] dark:text-gray-300"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <Link
                                                href="/views/Homeowner/forgotPassword"
                                                className="underline underline-offset-2 text-xs mr-[25%] text-[#0129F9]"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>

                                        <Link href={"/views/homeowner"}>
                                            <button
                                                type="button"
                                                className="focus:outline-none text-[1.25rem] text-white bg-[#FA790F] font-medium rounded py-2 ml-[25%] w-[50%] mb-2 mt-10"
                                            >
                                                Sign In
                                            </button>

                                            <p className="text-[#818187] mt-[2%] text-center text-sm">
                                                Don’t have an account?{" "}
                                                <Link
                                                    href="/views/Homeowner/signUp"
                                                    className="text-[#0129F9] hover:underline"
                                                >
                                                    Sign Up
                                                </Link>
                                            </p>
                                        </Link>

                                        <div className="">
                                            <button
                                                type="button"
                                                className="text-black border rounded-tl-lg mt-[2%] rounded-br-lg w-[50%] border-[#DADADA] focus:outline-none text-xs py-2.5 text-center inline-flex justify-center font-normal items-center ml-[25%] mr-2 mb-2"
                                            >
                                                <Image
                                                    className="mr-[14px]"
                                                    src={googlelogo}
                                                    alt={""}
                                                />
                                                Sign in with Google
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                    <div className="bg-signin w-[40%] bg-contain bg-no-repeat h-screen">
                        <p className="text-[64px] mt-[42%] ml-[10%] leading-[3.75rem] text text-white font-bold w-[70%]">
                            Let us guide you home.
                        </p>
                        <p className="text-white pt-4 w-[70%] font-medium text-base ml-[10%] leading-[1.4rem]">
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
