/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

type FormModel = {
    phoneNumber: string;
    country: string;
    branch: string;
    region: string;
    digitalAddress: string;
    zipCode: string | number;
    postalAddress: string;
    admin: string;
    bankName: string;
};

export default function Profile() {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <Formik<FormModel>
                    initialValues={{
                        phoneNumber: "",
                        country: "",
                        branch: "",
                        region: "",
                        digitalAddress: "",
                        zipCode: "",
                        postalAddress: "",
                        admin: "",
                        bankName: "",
                    }}
                    validationSchema={Yup.object({
                        bankName: Yup.string().max(
                            20,
                            "Must be 40 characters or less"
                        ),
                        phoneNumber: Yup.string().matches(
                            phoneRegExp,
                            "Phone number is not valid"
                        ),
                        country: Yup.string().required("Required field"),
                        branch: Yup.string(),
                        region: Yup.string(),
                        digitalAddress: Yup.string().required("Required field"),
                        zipCode: Yup.string(),
                        postalAddress: Yup.string(),
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
                            <p className="font-bold py-6">Bank Information</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="bankName"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Bank Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="bankName"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Zenith Bank"
                                        value={values.bankName}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="bankName" />
                                    </p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="admin"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Admin Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="admin"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Admin"
                                        value={values.admin}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="admin" />
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
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="+233"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="phoneNumber" />
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <p className="font-bold py-6">Address:</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500"
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
                                        htmlFor="branch"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Branch
                                    </label>
                                    <Field
                                        type="text"
                                        id="branch"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
                                        placeholder="Enter branch"
                                        value={values.branch}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="branch" />
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
                                        className="block mb-2 text-sm font-medium text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500"
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
                                        Zip code
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
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
