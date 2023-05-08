/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import edit from "../../assets/Edit.png";
import remove from "../../assets/Remove.png";
import { Formik, Field } from "formik";

type AddressProp = {
    postalCode?: string;
    region?: string;
    digitalAddress?: string;
    location: string;
};

function BillingAddress(props: AddressProp) {
    return (
        <div className="border-b mt-7 py-5 pl-4 items-center">
            <Formik
                initialValues={{
                    address: "",
                    location: "",
                    region: "",
                    digitalAddress: "",
                    postalCode: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ handleSubmit, values, handleChange, setFieldValue }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg"
                    >
                        <div className="flex">
                            <div className="">
                                <Field
                                    id="address"
                                    type="radio"
                                    name="address"
                                    className="w-5 h-5 text-[#FA790F] border-[#FA790F] focus:ring-0"
                                    value="address"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="ml-2 mt-1 mr-auto">
                                <p className="text-[#58575F] font-medium  text-sm leading-[140%]">
                                    {props.location}
                                </p>
                                <p className="font-normal text-sm leading-[140%] text-[#818187] ">
                                    {props.postalCode}
                                </p>
                                <p className="font-normal text-sm leading-[140%] text-[#818187]">
                                    {props.region}
                                </p>
                                <p className="font-normal text-sm leading-[140%]  text-[#818187]">
                                    {props.digitalAddress}
                                </p>
                            </div>

                            <div className="flex mr-8 gap-x-2">
                                <div className="h-8 w-8">
                                    <Image src={edit} alt="edit button" />
                                </div>
                                <div className="h-8 w-8">
                                    <Image
                                        src={remove}
                                        alt="delete button"
                                        className="h-8 w-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default BillingAddress;
