/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.png"

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type ResetPasswordProp = {
    password: string;
    confirmPassword: string;
}

export default function ResetPassword(props:ResetPasswordProp) {
    return (
        <>
        
                <Head>
                    <title>Reset Password</title>
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
                    <section className="flex">
                    <div className="w-[40%] mr-auto h-[1024px] border">
                    <Formik<ResetPasswordProp>
                    initialValues={{
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={Yup.object({
                        
                        password: Yup.string()
                            .required("Required field"),
                        confirmPassword: Yup.string()
                            .required("Required field"),
                        
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
                    >
                    <Image className="w-[4.1875rem] h-[2.5625rem] mt-[5%] ml-[4.5rem] " src={logo} alt="Logo" />

                    <p className="font-extrabold text-[2.5rem] leading-[3.75rem] text-center mt-[32%] text-[#181818] ">Reset Password</p>
                    <p className="text-[#747A80] text-center font-light text-sm mt-[1.125rem] leading-[140%]">Please enter your new password</p>

                    
                    <div className="ml-[15%] mt-[3%] mb-1">
                     <Field type="password" id="password" className="bg-gray-50 border border-gray-300 placeholder:text-[#ABABAF] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter new password" onChange={handleChange} value={values.password} />
                     <p className="font-normal text-red-700">
                        <ErrorMessage name="password" />
                     </p>
                    </div>

                    <div className="ml-[15%] mt-[3%] mb-6">
                     <Field type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 placeholder:text-[#ABABAF] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm password" onChange={handleChange} value={values.confirmPassword} />
                     <p className="font-normal text-red-700">
                        <ErrorMessage name="confirmPassword" />
                     </p>
                    </div>


                    <button type="button" className="focus:outline-none text-[1.25rem] text-white bg-[#FA790F] font-medium rounded px-7 py-2 ml-[15%] w-[68%] mb-2 mt-10">Submit</button>
                    </form>
                    )}
                    </Formik>
                    </div>
                    

<div className="bg-signin bg-cover h-[1024px] w-[60%] bg-no-repeat">
    <p className="text-[64px] ml-[15%] pt-[35%] leading-[3.75rem] text-white font-bold w-[32.25rem]">Let us guide you home.</p>
    <p className="text-white font-medium ml-[15%] pt-2 w-[512px] text-base leading-[1.4rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fring</p>
</div>



                    </section>
                </main>
        </>
    );
}
