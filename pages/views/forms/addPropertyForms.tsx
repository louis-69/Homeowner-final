/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import StyledDropzone from "../../../components/dropzone";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Amenities from "../../../components/properties/amenities";

type PropertyModel = {
    name?: string;
    description?: string;
    address?: string;
    price?: number | string;
    forRent?: string;
    forPurchase?: string;
    amenities?: string;
    documents?: string;
};


export default function AddPropertyForms() {
    // const phoneRegExp =
    //     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
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
                        forRent: "",
                        forPurchase: "",
                        amenities: "",
                        documents: "",
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
                            className="bg-white shadow-lg px-[2rem] pb-10"
                        >
                            
                            <p className="text-sm font-extrabold leading-5 text-[#04030F] pt-10">Property Details</p>

                            <div className="mt-[1.875rem]">
                                    <label
                                        htmlFor="propertyName"
                                        className="block mb-2 text-sm font-normal  text-gray-900"
                                    >
                                        Property Name<span className="text-[#FF0000]">*</span>
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
                            <label htmlFor="description" className="block mb-2 text-sm font-normal text-[#04030F] dark:text-white">Description</label>
                            <textarea id="description" rows={8} className="block p-2.5 mb-auto w-[88%] text-sm text-gray-900 bg-white rounded border border-gray-300 focus:border-[#D0650D] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D0650D] dark:focus:border-[#D0650D]" placeholder="Enter description" value={values.description} onChange={handleChange}>
                            </textarea>
                            </div>

                                <div className="flex gap-x-32   mt-9 ">
                                    <div>
                                <div>
                                    <p className="text-sm font-normal text-[#2E2D37]">Location address</p>
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 pt-2 text-sm font-normal text-[#818187]"
                                    >
                                        You can add the closest landmark for clarity
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

                                <div>
                                    <p className="text-sm pt-8 font-normal text-[#2E2D37]">Pricing</p>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm pt-2 font-normal text-[#818187]"
                                    >
                                        Price is calculated per month for rentals
                                    </label>
                                    <Field
                                        type="text"
                                        id="price"
                                        className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[390px] p-2.5"
                                        placeholder="Enter price"
                                        value={values.price}
                                        onChange={handleChange}
                                    />
                                    <p className="font-medium text-red-700">
                                        <ErrorMessage name="price" />
                                    </p>                                
                                </div>
                                </div>



<div>
                                <div>
<p className="font-normal text-sm text-[#04030F]">Amenities</p>

<label htmlFor="amenities" className="block mb-2 pt-2 text-sm font-normal text-[#818187] dark:text-white">Please specify the type of amenities the property comes with</label>
<Amenities />
</div>

                                
                                <div className="mt-6">
                                <p className="font-normal text-sm text-[#2E2D37]">Availability</p>
                                <p className="font-normal text-sm text-[#818187] mt-2">Please specify property purpose</p>
                                <div className="flex items-center mt-3 mb-4">
                                    
                                    <Field
                                        id="forRent"
                                        type="radio"
                                        className="w-4 h-4 border-[#FA790F] focus:ring-2"
                                        value={values.forRent}
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
                                        className="w-4 h-4 border-[#FA790F] focus:ring-2 ml-12 "
                                        value={values.forPurchase}
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
                                </div>
                                </form>


                        
                    )}
                </Formik>

                
            </div>

            <div className="ml-20  mr-20">
            <Formik<PropertyModel>
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
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white shadow-lg px-[2rem] pb-20"
                        >
                            <div>
                                        <h5 className="text-[#04030F] text-sm font-extrabold leading-5 pt-[57px] ">Legal Information</h5>
                                        <p className="text-[#000000] font-normal text-sm leading-5 pt-8">Upload property documents</p> 
                                        <p className="text-[#818187] font-normal text-sm leading-5 pt-2 pb-3">This is to verify whether you have legal ownership to this property</p>
    
                                    <Field
                                        type="file"
                                        id="documents"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[38%]"
                                        value={values.documents}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mt-5">
                                <p className="text-sm text-[#000000] font-normal leading-5">Upload your images and videos</p>
                                <p className="text-sm text-[#818187] mt-3 mb-4 font-normal leading-5">PNG, JPEG, GIF and MP4 are allowed</p>
                                <StyledDropzone />
                                </div>
                        </form>
 )}
 </Formik>

 
                        </div>
                        

                        <div className="flex mb-[12.625rem] mt-10 ml-20 gap-x-8">
                        <button type="button" className="text-[#ABABAF] border leading-[125%] text-base bg-white focus:ring-0 font-medium rounded px-11 py-2 ">Cancel</button>
                        
                        <button type="button" className="text-white leading-[125%] text-base bg-[#ABABAF] focus:ring-0 font-medium rounded px-11 py-2">Save</button>
                        </div>

                        <Footer />

        </div>
    );
}