/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StyledDropzone from "../../../components/dropzone";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Dropdown from "../../../assets/arrow_down.png";
import Modal from "react-modal";

type PropertyModel = {
    name?: string;
    description?: string;
    address?: string;
    price?: number | string;
    availability: any;
    amenities?: string;
    checked: any;
};

type UploadModel = {
    documents?: any;
};

export default function AddPropertyForms() {
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
            width: "416px",
            height: "524px",
            borderRadius: "4px 4px 0 0",
            backgroundColor: "white",
        },
    };

    return (
        <div className="bg-[#FAFAFA]">
            <Header />
            {/* Form */}
            <div className="mt-10 mb-12 shadow mx-20">
                <Formik<PropertyModel>
                    initialValues={{
                        name: "",
                        description: "",
                        address: "",
                        price: "",
                        availability: "",
                        amenities: "",
                        checked: [],
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(20, "Must be 40 characters or less")
                            .required("Required field"),
                        description: Yup.string(),
                        address: Yup.string(),
                        price: Yup.string().required("Price required"),
                        amenities: Yup.string().required("Required field"),
                    })}
                    onSubmit={async (values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({
                        handleSubmit,
                        values,
                        handleChange,
                        setFieldValue,
                    }) => (
                        <Form
                            onSubmit={handleSubmit}
                            className="bg-white shadow-lg px-[2rem] pb-10"
                        >
                            <p className="text-sm font-extrabold leading-5 text-[#04030F] pt-10">
                                Property Details
                            </p>

                            <div className="mt-[1.875rem]">
                                <label
                                    htmlFor="propertyName"
                                    className="block mb-2 text-sm font-normal  text-gray-900"
                                >
                                    Property Name
                                    <span className="text-[#FF0000]">*</span>
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[88%] p-2.5"
                                    placeholder="Enter name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <p className="font-medium text-red-700">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>

                            <div className="mt-8  ">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-normal text-[#04030F] dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={8}
                                    className="block p-2.5 mb-auto w-[88%] text-sm text-gray-900 bg-white rounded border border-gray-300 focus:border dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D0650D] dark:focus:border-[#D0650D]"
                                    placeholder="Enter description"
                                    value={values.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="flex gap-x-[11%] mt-9 ">
                                <div className="w-[33%]">
                                    <p className="text-sm font-normal text-[#2E2D37]">
                                        Location address
                                    </p>
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 pt-2 text-sm font-normal text-[#818187]"
                                    >
                                        You can add the closest landmark for
                                        clarity
                                    </label>
                                    <Field
                                        type="text"
                                        id="address"
                                        className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5"
                                        placeholder="Enter address"
                                        value={values.address}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="w-[40%]">
                                    <p className="font-normal text-sm text-[#04030F]">
                                        Amenities
                                    </p>

                                    <label
                                        htmlFor="amenities"
                                        className="block mb-2 pt-2 text-sm font-normal text-[#818187] dark:text-white"
                                    >
                                        Please specify the type of amenities the
                                        property comes with
                                    </label>
                                    <Link href={""}>
                                        <button
                                            onClick={openModal}
                                            className="bg-white text-center text-sm font-medium leading-4 pl-5 inline-flex items-center border border-[#CDCDCF] w-[100%] py-3 rounded text-[#ABABAF] "
                                        >
                                            --Select option--
                                            <Image
                                                src={Dropdown}
                                                alt={"arrow"}
                                                className="ml-[70%]"
                                            />
                                        </button>

                                        <div className="flex flex-wrap cursor-auto w-[100%] text-sm mt-5 gap-y-3 gap-x-2">
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[0]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[1]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[2]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[3]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[4]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[5]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[6]}
                                            </div>
                                            <div className="flex items-center bg-[#FA790F] px-2 text-center text-white rounded-[5px] h-[25px] ">
                                                {values.checked[7]}
                                            </div>
                                        </div>

                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            ariaHideApp={false}
                                            shouldCloseOnOverlayClick={false}
                                            overlayClassName=""
                                            style={customStyles}
                                        >
                                            <div className="w-[25.875rem] h-[32.625rem] border ">
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none">
                                                        <svg
                                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="input-group-search"
                                                        className="block w-[60%] p-2 ml-5 mt-5 pl-9 text-sm text-gray-900 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Find amenity"
                                                    />
                                                </div>

                                                <section
                                                    role="group"
                                                    aria-labelledby="checkbox-group"
                                                    className="flex border-y flex-wrap mx-5 pt-[1.375rem] h-[75%] mt-1 font-xs text-xs gap-x-6"
                                                >
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="swimming pool"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            Swimming Pool
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="Balcony"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            Balcony
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="wifi"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            wifi
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="personal meter"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            personal meter
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="boys quarters"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            boys quarters
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="tennis court"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            tennis court
                                                        </label>
                                                    </div>

                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="air conditioning"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            Air conditioning
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="water heating"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            Water heating
                                                        </label>
                                                    </div>
                                                    <div className="">
                                                        <Field
                                                            type="checkbox"
                                                            name="checked"
                                                            value="thermostat"
                                                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                                                        />
                                                        <label className="pl-2">
                                                            Thermostat
                                                        </label>
                                                    </div>
                                                </section>

                                                <p
                                                    onClick={closeModal}
                                                    className="text-center cursor-pointer text-[#0173F9] text-sm leading-5 font-semibold align-bottom mt-6"
                                                >
                                                    Done
                                                </p>
                                            </div>
                                        </Modal>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex mt-12  gap-x-[9%]">
                                <div className="w-[35%]">
                                    <p className="text-sm font-normal text-[#2E2D37]">
                                        Pricing
                                    </p>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm pt-2 font-normal text-[#818187]"
                                    >
                                        Price is calculated per month for
                                        rentals
                                    </label>
                                    <Field
                                        type="text"
                                        id="price"
                                        className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5"
                                        placeholder="Enter price"
                                        value={values.price}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="price" />
                                    </p>
                                </div>

                                <div className="">
                                    <p className="font-normal text-sm text-[#2E2D37]">
                                        Availability
                                    </p>
                                    <p className="font-normal text-sm text-[#818187] mt-2">
                                        Please specify property purpose
                                    </p>
                                    <div className="flex items-center mt-3 mb-4">
                                        <Field
                                            id="forRent"
                                            type="radio"
                                            name="availability"
                                            className="w-5 h-5 border-[#FA790F] focus:ring-0 focus:outline-none text-[#FA790F]"
                                            value="for rent"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="forRent"
                                            className="block ml-2 text-sm font-medium text-gray-900"
                                        >
                                            For rent
                                        </label>
                                        <Field
                                            id="forPurchase"
                                            type="radio"
                                            name="availability"
                                            className="w-5 h-5 border-[#FA790F] focus:ring-0 focus:outline-none text-[#FA790F] ml-12 "
                                            value="for purchase"
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="forPurchase"
                                            className="block ml-2 text-sm font-medium text-gray-900"
                                        >
                                            For purchase
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="ml-20  mr-20">
                <Formik<UploadModel>
                    initialValues={{
                        documents: "",
                    }}
                    validationSchema={Yup.object({
                        documents: Yup.string().required("Required field"),
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
                        <Form
                            onSubmit={handleSubmit}
                            className="bg-white shadow-lg px-[2rem] pb-20"
                        >
                            <div>
                                <h5 className="text-[#04030F] text-sm font-extrabold leading-5 pt-[57px] ">
                                    Legal Information
                                </h5>
                                <p className="text-[#000000] font-normal text-sm leading-5 pt-8">
                                    Upload property documents
                                </p>
                                <p className="text-[#818187] font-normal text-sm leading-5 pt-2 pb-3">
                                    This is to verify whether you have legal
                                    ownership to this property
                                </p>

                                <Field
                                    type="file"
                                    id="documents"
                                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[38%]"
                                    value={values.documents}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mt-5">
                                <p className="text-sm text-[#000000] font-normal leading-5">
                                    Upload your images and videos
                                </p>
                                <p className="text-sm text-[#818187] mt-3 mb-4 font-normal leading-5">
                                    PNG, JPEG, GIF and MP4 are allowed
                                </p>
                                <StyledDropzone />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="flex mb-[12.625rem] justify-end mt-10 mr-20 gap-x-8">
                <Link href={"/views/homeowner"}>
                    <button
                        type="button"
                        className="text-[#ABABAF] border leading-[125%] text-base bg-white focus:ring-0 font-medium rounded px-11 py-2 "
                    >
                        Cancel
                    </button>
                </Link>

                <button
                    type="button"
                    className="text-white leading-[125%] text-base bg-[#ABABAF] focus:ring-0 font-medium rounded px-11 py-2"
                >
                    Save
                </button>
            </div>

            <Footer />
        </div>
    );
}
