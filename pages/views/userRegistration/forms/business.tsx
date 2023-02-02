/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

type FormModel = {
    company: string;
    companyEmail: string;
    position: string;
    companyAddress: string;
    employer: string;
    employerNumber: string;
    dateJoined: Date | string;
    employmentProof: any;
    company2: string;
    companyEmail2: string;
    position2: string;
    companyAddress2: string;
    employer2: string;
    employerNumber2: string;
    dateJoined2: Date | string;
    employmentProof2: any;
};

export default function BusinessForm() {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <Formik<FormModel>
                    initialValues={{
                        company: "",
                        companyEmail: "",
                        position: "",
                        companyAddress: "",
                        employer: "",
                        employerNumber: "",
                        dateJoined: "",
                        employmentProof: "",
                        company2: "",
                        companyEmail2: "",
                        position2: "",
                        companyAddress2: "",
                        employer2: "",
                        employerNumber2: "",
                        dateJoined2: "",
                        employmentProof2: "",
                    }}
                    validationSchema={Yup.object({
                        company: Yup.string()
                            .max(20, "Must be 40 characters or less")
                            .required("Required field"),
                        company2: Yup.string()
                            .max(20, "Must be 40 characters or less")
                            .required("Required field"),
                        companyEmail: Yup.string()
                            .email("Invalid email")
                            .required("required"),
                        companyEmail2: Yup.string()
                            .email("Invalid email")
                            .required("required"),
                        employerNumber: Yup.string().matches(
                            phoneRegExp,
                            "Phone number is not valid"
                        ),
                        employerNumber2: Yup.string().matches(
                            phoneRegExp,
                            "Phone number is not valid"
                        ),
                        position: Yup.string(),
                        position2: Yup.string(),
                        companyAddress: Yup.string(),
                        companyAddress2: Yup.string(),
                        employer: Yup.string(),
                        employer2: Yup.string(),
                        dateJoined: Yup.string(),
                        dateJoined2: Yup.string(),
                        employmentProof: Yup.string(),
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
                            {/* Employment */}
                            <p className="font-bold py-6">Employment:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="company"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter name"
                                        value={values.company}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="company" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="companyEmail"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company Email
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Field
                                        type="email"
                                        id="companyEmail"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter email"
                                        value={values.companyEmail}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="companyEmail" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="position"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Position Held
                                    </label>
                                    <select
                                        id="position"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.position}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>#</option>
                                        <option>#</option>
                                        <option>#</option>
                                        <option>#</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="position" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="companyAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="companyAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        placeholder="Enter Address"
                                        value={values.companyAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="companyAddress" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="employer"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Employer's Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="employer"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter name"
                                        value={values.employer}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="employer" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="employerNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Employer's Phone
                                    </label>
                                    <Field
                                        type="text"
                                        id="employerNumber"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="+233"
                                        value={values.employerNumber}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="employerNumber" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="dateJoined"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date Joined
                                    </label>
                                    <Field
                                        type="date"
                                        id="dateJoined"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.dateJoined}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="dateJoined" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="employmentProof"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Proof of Employment
                                    </label>
                                    <Field
                                        type="file"
                                        id="employmentProof"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12"
                                        value={values.employmentProof}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Other */}
                            <p className="font-bold py-6">Other:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="company2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        id="company2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter name"
                                        value={values.company2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="company2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="companyEmail2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company Email
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Field
                                        type="email"
                                        id="companyEmail2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter email"
                                        value={values.companyEmail2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="companyEmail2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="position"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Position Held
                                    </label>
                                    <Field
                                        type="text"
                                        id="position2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        placeholder="Enter Position"
                                        value={values.position2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="position2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="companyAddress2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Company Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="companyAddress2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        placeholder="Enter Address"
                                        value={values.companyAddress2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="companyAddress2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="employer2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Employer's Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="employer2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter name"
                                        value={values.employer2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="employer2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="employerNumber2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Employer's Phone
                                    </label>
                                    <Field
                                        type="text"
                                        id="employerNumber2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="+233"
                                        value={values.employerNumber2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="employerNumber2" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="dateJoined2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date Joined
                                    </label>
                                    <Field
                                        type="date"
                                        id="dateJoined2"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.dateJoined2}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="dateJoined2" />
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
