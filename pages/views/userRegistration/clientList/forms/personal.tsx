/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

type FormModel = {
    clientName: string;
    email: string;
    education: string;
    phoneNumber: string;
    gender: string;
    maritalStatus: string;
    country: string;
    city: string;
    region: string;
    digitalAddress: string;
    zipCode: string | number;
    postalAddress: string;
    residentialAddress: string;
    yes: string;
    no: string;
    condition: string;
    allergies: string;
    medicalHistory: string;
    school: string;
    dateCommenced: Date | string;
    dateCompleted: Date | string;
    certificate: any;
    highesteducation: string;
};

export default function PersonalForm() {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <Formik<FormModel>
                    initialValues={{
                        clientName: "",
                        email: "",
                        education: "",
                        phoneNumber: "",
                        gender: "",
                        maritalStatus: "",
                        country: "",
                        city: "",
                        region: "",
                        digitalAddress: "",
                        zipCode: "",
                        postalAddress: "",
                        residentialAddress: "",
                        yes: "",
                        no: "",
                        condition: "",
                        allergies: "",
                        medicalHistory: "",
                        school: "",
                        dateCommenced: "",
                        dateCompleted: "",
                        certificate: "",
                        highesteducation: "",
                    }}
                    validationSchema={Yup.object({
                        clientName: Yup.string()
                            .max(5, "Must be 40 characters or less")
                            .required("Required field"),
                        email: Yup.string()
                            .email("Invalid email")
                            .required("required"),
                        phoneNumber: Yup.string()
                            .matches(phoneRegExp, "Phone number is not valid")
                            .required("required"),
                        education: Yup.string().required("required"),
                        gender: Yup.string().required("required"),
                        maritalStatus: Yup.string().required("required"),
                        country: Yup.string().required("required"),
                        city: Yup.string().required("required"),
                        region: Yup.string().required("required"),
                        digitalAddress: Yup.string().required("required"),
                        zipCode: Yup.string().required("required"),
                        postalAddress: Yup.string().required("required"),
                        residentialAddress: Yup.string().required("required"),
                        condition: Yup.string(),
                        allergies: Yup.string(),
                        medicalHistory: Yup.string(),
                        highesteducation: Yup.string().required("required"),
                        school: Yup.string().required("required"),
                        dateCommenced: Yup.string().required("required"),
                        dateCompleted: Yup.string().required("required"),
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
                            <p className="font-bold py-6">Basic:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="clientName"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Client Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="clientName"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter name"
                                        value={values.clientName}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="clientName" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Client email
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="education"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Highest Level of Education
                                    </label>
                                    <select
                                        id="education"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.education}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Primary</option>
                                        <option>Tetiary</option>
                                        <option>Bsc</option>
                                        <option>PhD</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="education" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Phone
                                    </label>
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2"
                                        placeholder="+233"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="phoneNumber" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="gender"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.gender}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Binary</option>
                                        <option>Other</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="gender" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="maritalStatus"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Marital Status
                                    </label>
                                    <select
                                        id="maritalStatus"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.maritalStatus}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorced</option>
                                        <option>Complicated</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="maritalStatus" />
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <p className="font-bold py-6">Address:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.country}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Ghana</option>
                                        <option>Gambia</option>
                                        <option>Holand</option>
                                        <option>Hungary</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="country" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        City
                                    </label>
                                    <Field
                                        type="text"
                                        id="city"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter city"
                                        value={values.city}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="city" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="region"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Region
                                    </label>
                                    <select
                                        id="region"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.region}
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
                                        <ErrorMessage name="region" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="digitalAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Digital Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="digitalAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your digital address here"
                                        value={values.digitalAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="digitalAddress" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="zipCode"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Zipcode
                                    </label>
                                    <Field
                                        type="number"
                                        id="zipCode"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your zipcode here"
                                        value={values.zipCode}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="zipCode" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="postalAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Postal Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="postalAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your postal address here"
                                        value={values.postalAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="postalAddress" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="residentialAddress"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Residential Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="residentialAddress"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter your residential address here"
                                        value={values.residentialAddress}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="residentialAddress" />
                                    </p>
                                </div>
                            </div>

                            {/* Health */}
                            <p className="font-bold py-6">Health:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div className="flex items-center mb-4">
                                    <p className="mr-6">Any Health issues?</p>
                                    <Field
                                        id="yes"
                                        type="radio"
                                        className="w-4 h-4 border-[#FA790F] focus:ring-2"
                                        value={values.yes}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="yes"
                                        className="block ml-2 text-sm font-medium text-gray-900"
                                    >
                                        Yes
                                    </label>
                                    <Field
                                        id="no"
                                        type="radio"
                                        className="w-4 h-4 border-[#FA790F] focus:ring-2 ml-10"
                                        value={values.no}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor="no"
                                        className="block ml-2 text-sm font-medium text-gray-900"
                                    >
                                        No
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor="condition"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Condition
                                    </label>
                                    <Field
                                        type="text"
                                        id="condition"
                                        className="bg-[#CDCDCF] border border-gray-300 text-[#58575F] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Name of condition"
                                        value={values.condition}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="condition" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="allergies"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Allergies
                                    </label>
                                    <Field
                                        type="text"
                                        id="allergies"
                                        className="bg-[#CDCDCF] border border-gray-300 text-[#58575F] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="List allergies"
                                        value={values.allergies}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="allergies" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="medicalHistory"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Medical History
                                    </label>
                                    <Field
                                        type="file"
                                        id="medicalHistory"
                                        className="bg-[#CDCDCF] border border-gray-300 text-[#58575F] w-full text-sm rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                        placeholder="Name of medicalHistory"
                                        value={values.medicalHistory}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="medicalHistory" />
                                    </p>
                                </div>
                            </div>

                            {/* Education */}
                            <p className="font-bold py-6">Education:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="highesteducation"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Highest Level of Education
                                    </label>
                                    <select
                                        id="highesteducation"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.highesteducation}
                                        onChange={handleChange}
                                    >
                                        <option selected>
                                            ·· Select option ··
                                        </option>
                                        <option>Primary</option>
                                        <option>Tetiary</option>
                                        <option>Bsc</option>
                                        <option>PhD</option>
                                    </select>
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="highesteducation" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="school"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        School
                                    </label>
                                    <Field
                                        type="text"
                                        id="school"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter school"
                                        value={values.school}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="school" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="dateCommenced"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date Commenced
                                    </label>
                                    <Field
                                        type="date"
                                        id="dateCommenced"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.dateCommenced}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="dateCommenced" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="dateCompleted"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date Completed
                                    </label>
                                    <Field
                                        type="date"
                                        id="dateCompleted"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        value={values.dateCompleted}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="dateCompleted" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="certificate"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Certificate
                                    </label>
                                    <Field
                                        type="file"
                                        id="certificate"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12"
                                        value={values.certificate}
                                        onChange={handleChange}
                                    />
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
