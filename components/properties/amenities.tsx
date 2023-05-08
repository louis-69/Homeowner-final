/* eslint-disable require-jsdoc */

import React from "react";
import {Field} from "formik";



export default function Amenities() {
    return (
       
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
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
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
                    className="flex border-t flex-wrap mx-5 pt-[1.375rem] h-[75%] border-b gap-y-6 mt-1 font-xs text-xs gap-x-6"
                >
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="swimming pool"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">Swimming Pool</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="Balcony"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">Balcony</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="wifi"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">wifi</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="personal meter"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">personal meter</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="boys quarters"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">boys quarters</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="tennis court"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">tennis court</label>
                    </div>

                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="air conditioning"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">Air conditioning</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="water heating"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">Water heating</label>
                    </div>
                    <div className="">
                        <Field
                            type="checkbox"
                            name="checked"
                            value="thermostat"
                            className="border-[#FA790F] text-[#FA790F] focus:ring-0"
                        />
                        <label className="pl-2">Thermostat</label>
                    </div>
                </section>

                <p
                    onClick={closeModal}
                    className="text-center cursor-pointer text-[#0173F9] text-sm leading-5 font-semibold align-bottom mt-6"
                >
                    Done
                </p>
            </div>
     
    );
}
