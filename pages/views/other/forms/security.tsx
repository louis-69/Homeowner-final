/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

type FormModel = {
    currentPassword: string;
    securityQuestion: string;
    newPassword: string;
    confirmPassword: string;
    verification: string;
};

export default function Security() {
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <Formik<FormModel>
                    initialValues={{
                        currentPassword: "",
                        securityQuestion: "",
                        newPassword: "",
                        confirmPassword: "",
                        verification: "",
                    }}
                    validationSchema={Yup.object({
                        currentPassword: Yup.string()
                            .required("Password is required")
                            .min(
                                8,
                                "Password must be at least 8 characters long"
                            )
                            .matches(
                                /[a-z]/,
                                "Password must contain at least one lowercase letter"
                            )
                            .matches(
                                /[A-Z]/,
                                "Password must contain at least one uppercase letter"
                            )
                            .matches(
                                /\d/,
                                "Password must contain at least one number"
                            )
                            .matches(
                                /[!@#$%^&*(),.?":{}|<>]/,
                                "Password must contain at least one special character"
                            ),
                        securityQuestion: Yup.string(),
                        newPassword: Yup.string()
                            .required("Password is required")
                            .min(
                                8,
                                "Password must be at least 8 characters long"
                            )
                            .matches(
                                /[a-z]/,
                                "Password must contain at least one lowercase letter"
                            )
                            .matches(
                                /[A-Z]/,
                                "Password must contain at least one uppercase letter"
                            )
                            .matches(
                                /\d/,
                                "Password must contain at least one number"
                            )
                            .matches(
                                /[!@#$%^&*(),.?":{}|<>]/,
                                "Password must contain at least one special character"
                            ),
                        confirmPassword: Yup.string()
                            .required("Password is required")
                            .min(
                                8,
                                "Password must be at least 8 characters long"
                            )
                            .matches(
                                /[a-z]/,
                                "Password must contain at least one lowercase letter"
                            )
                            .matches(
                                /[A-Z]/,
                                "Password must contain at least one uppercase letter"
                            )
                            .matches(
                                /\d/,
                                "Password must contain at least one number"
                            )
                            .matches(
                                /[!@#$%^&*(),.?":{}|<>]/,
                                "Password must contain at least one special character"
                            ),
                        verification: Yup.string(),
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
                            className="bg-white px-[2.5rem] pb-20"
                        >
                            {/* Basic */}
                            <p className="font-bold py-6">Password</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="currentPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Current Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="currentPassword"
                                        value={values.currentPassword}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="currentPassword" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="securityQuestion"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Security Question
                                    </label>
                                    <Field
                                        type="text"
                                        id="securityQuestion"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Your mother's name"
                                        value={values.securityQuestion}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="text" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="newPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        New Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="newPassword"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        value={values.newPassword}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="newPassword" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Confirm New Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        className="bg-[#CDCDCF] border border-gray-300 text-[#58575F] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="confirmPassword" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="verification"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Two Step Verification
                                    </label>
                                    <select
                                        id="verification"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.verification}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Enabled</option>
                                        <option>#</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="verification" />
                                    </p>
                                </div>
                            </div>

                            <p className="font-bold py-6">
                                Devices You&apos;re Logged Into
                            </p>
                            <div className="flex-col">
                                <div className="flex items-center border-b pb-5">
                                    <div className="mr-5">
                                        <div className="border border-slate-300 w-14 h-14 rounded-md"></div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-thin mb-1">
                                            01 April 2022 at 06:25PM
                                        </div>
                                        <div className="text-base font-semibold">
                                            MAC OS Safari 15.1
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center border-b pb-5 pt-5">
                                    <div className="mr-5">
                                        <div className="border border-slate-300 w-14 h-14 rounded-md"></div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-thin mb-1">
                                            19 Oct 2022 at 06:30AM
                                        </div>
                                        <div className="text-base font-semibold">
                                            IOS Safari 15.1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
