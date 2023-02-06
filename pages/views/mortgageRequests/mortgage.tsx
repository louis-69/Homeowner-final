/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import Link from "next/link";

export default function MortgageForm() {
    // Form
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        interest: Yup.number()
            .required("Interest is required")
            .positive("Interest must be a positive number")
            .max(100, "Interest must be less than or equal to 100"),
        APR: Yup.number()
            .required("APR is required")
            .positive("APR must be a positive number")
            .max(100, "APR must be less than or equal to 100"),
    });
    return (
        <>
            <Formik
                initialValues={{ name: "", interest: "", APR: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting, errors, touched, values, handleChange }) => (
                    <Form>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            className="w-full rounded-lg border border-gray-300"
                            onChange={handleChange}
                            value={values.name}
                        />
                        {errors.name && touched.name ? (
                            <div className="font-medium text-red-700">
                                {errors.name}
                            </div>
                        ) : null}

                        <div className="flex flex-row justify-between mt-5">
                            <div>
                                <label
                                    htmlFor="interest"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Interes rate
                                </label>
                                <Field
                                    type="number"
                                    name="interest"
                                    placeholder="%"
                                    className="rounded-lg border border-gray-300"
                                    onChange={handleChange}
                                    value={values.interest}
                                />
                                {errors.interest && touched.interest ? (
                                    <div className="font-medium text-red-700">
                                        {errors.interest}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="APR"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    APR
                                </label>
                                <Field
                                    type="number"
                                    name="APR"
                                    placeholder=" %"
                                    className="rounded-lg border border-gray-300"
                                    onChange={handleChange}
                                    value={values.APR}
                                />
                                {errors.APR && touched.APR ? (
                                    <div className="font-medium text-red-700">
                                        {errors.APR}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="mt-10 float-right">
                            <Link href={""}>
                                <button className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-4 mr-2 hover:text-orange-300">
                                    Cancel
                                </button>
                                <button className="bg-[#D0650D] text-white rounded-md p-1 px-5 mr-2 hover:shadow-md hover:shadow-[#D0650D]">
                                    Save
                                </button>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export function PasswordForm() {
    // Form
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .matches(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .matches(/\d/, "Password must contain at least one number")
            .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one special character"
            ),
    });
    return (
        <>
            <Formik
                initialValues={{ password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting, errors, touched, values, handleChange }) => (
                    <Form>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 text-center"
                        >
                            Enter Password below to confirm
                        </label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full rounded-lg border border-gray-300"
                            onChange={handleChange}
                            value={values.password}
                        />
                        {errors.password && touched.password ? (
                            <div className="font-medium text-red-700">
                                {errors.password}
                            </div>
                        ) : null}

                        <div className="mt-2 overflow-visible">
                            <hr className="my-5 bg-[#CDCDCF] w-full" />
                            <Link href={""} className="float-right">
                                <button className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-4 mr-2 hover:text-orange-300">
                                    Cancel
                                </button>
                                <button className="bg-[#D0650D] text-white rounded-md p-1 px-5 mr-2 hover:shadow-md hover:shadow-[#D0650D]">
                                    Confirm
                                </button>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export function APR() {
    // Form
    const validationSchema = Yup.object().shape({
        APR: Yup.number()
            .required("APR is required")
            .positive("APR must be a positive number")
            .max(100, "APR must be less than or equal to 100"),
    });
    return (
        <>
            <Formik
                initialValues={{ APR: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting, errors, touched, values, handleChange }) => (
                    <Form>
                        <Field
                            type="number"
                            name="APR"
                            placeholder="%"
                            className=" border border-gray-300 w-16 ml-[255%]"
                            onChange={handleChange}
                            value={values.APR}
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
}

export function InterestRate() {
    // Form
    const validationSchema = Yup.object().shape({
        interest: Yup.number()
            .required("APR is required")
            .positive("APR must be a positive number")
            .max(100, "APR must be less than or equal to 100"),
    });
    return (
        <>
            <Formik
                initialValues={{ interest: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting, errors, touched, values, handleChange }) => (
                    <Form>
                        <Field
                            type="number"
                            name="interest"
                            placeholder="%"
                            className=" border border-gray-300 w-16 ml-[20%]"
                            onChange={handleChange}
                            value={values.interest}
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
}
