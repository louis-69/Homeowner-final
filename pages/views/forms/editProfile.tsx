/* eslint-disable require-jsdoc */
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";

import CountrySelector from "../../../components/countrySelector";

type EditProfileProps = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    countryOfResidence: string;
    address1: string;
    address2?: string;
    city: string;
    zipcode: string;
};

export default function AddPropertyForms() {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        overlay: {
            background: "#262626A6",
        },

        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            width: "160px",
            height: "40px",
            border: 0,
            borderRadius: "5px 5px 5px 5px",
            backgroundColor: "#535151",
        },
    };

    return (
        <div className="bg-[#FAFAFA]">
            {/* Form */}
            <div className="mt-10 mb-5">
                <Formik<EditProfileProps>
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        dateOfBirth: "",
                        countryOfResidence: "",
                        address1: "",
                        address2: "",
                        city: "",
                        zipcode: "",
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(20, "Must be 40 characters or less")
                            .required("Required field"),
                        lastName: Yup.string()
                            .max(20, "Must be 40 characters or less")
                            .required("Required field"),
                        phone: Yup.string()
                            .matches(phoneRegExp, "Invalid Phone number")
                            .required("Required Field"),
                        email: Yup.string()
                            .email("Invalid email")
                            .required("Required field"),
                        dateOfBirth: Yup.string().required("Required field"),
                        countryOfResidence:
                            Yup.string().required("Required field"),
                        address1: Yup.string().required("Required field"),
                        address2: Yup.string(),
                        city: Yup.string().required("Required field"),
                        zipcode: Yup.string().required("Required field"),
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
                            className="grid grid-cols-2 gap-0 bg-white"
                        >
                            <div className="">
                                <label
                                    htmlFor="firstName"
                                    className="block mb-2 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    First Name
                                </label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[90%] p-2.5"
                                    placeholder="Enter first name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="firstName" />
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="lastName"
                                    className="block mb-2 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Last Name
                                </label>
                                <Field
                                    type="text"
                                    id="lastName"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[95%] p-2.5"
                                    placeholder="Enter last name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="lastName" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="phone"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Phone
                                </label>
                                <Field
                                    type="text"
                                    id="phone"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[90%] p-2.5"
                                    placeholder="Enter phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="phone" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="email"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Email address
                                </label>
                                <Field
                                    type="text"
                                    id="email"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[95%] p-2.5"
                                    placeholder="Enter email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="dateOfBirth"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Date of birth
                                </label>
                                <Field
                                    type="text"
                                    id="dateOfBirth"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[90%] p-2.5"
                                    placeholder="dd/mm/yyyy"
                                    value={values.dateOfBirth}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="dateOfBirth" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="platform"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F] dark:text-white"
                                >
                                    Country of residence
                                </label>
                                <div className="w-[94.8%]">
                                    <CountrySelector />
                                </div>
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="countryOfResidence" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="address1"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Address 1
                                </label>
                                <Field
                                    type="text"
                                    id="address1"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[90%] p-2.5"
                                    placeholder="Enter address"
                                    value={values.address1}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="address1" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="address2"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Address 2 (optional)
                                </label>
                                <Field
                                    type="text"
                                    id="address2"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[95%] p-2.5"
                                    placeholder="Enter address 2 (optional)"
                                    value={values.address2}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="address2" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="city"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    City
                                </label>
                                <Field
                                    type="text"
                                    id="city"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[90%] p-2.5"
                                    placeholder="Enter your city"
                                    value={values.city}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="city" />
                                </p>
                            </div>

                            <div className="mt-[1.25rem]">
                                <label
                                    htmlFor="zipcode"
                                    className="block mb-3 text-sm font-medium leading-[1.195rem] text-[#04030F]"
                                >
                                    Country zipcode
                                </label>
                                <Field
                                    type="text"
                                    id="zipcode"
                                    className="border border-gray-300 text-gray-900 text-sm rounded block w-[95%] p-2.5"
                                    placeholder="Country zipcode"
                                    value={values.zipcode}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="zipcode" />
                                </p>
                            </div>

                            <div className="mt-8 gap-x-8">
                                <Link href={""}>
                                    <button
                                        type="button"
                                        onClick={openModal}
                                        className="text-white leading-5 text-sm  bg-[#ABABAF] font-medium rounded px-5 py-2.5 "
                                    >
                                        Save changes
                                    </button>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        ariaHideApp={false}
                                        shouldCloseOnOverlayClick={true}
                                        overlayClassName=""
                                        style={customStyles}
                                    >
                                        <div className="flex justify-center pt-2 items-center" role="status">
                                            <svg
                                                aria-hidden="true"
                                                className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="text-white text-sm ">
                                            Saving changes
                                            </span>
                                        </div>
                                        
                                    </Modal>
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
