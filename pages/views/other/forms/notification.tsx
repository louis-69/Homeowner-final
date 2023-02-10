/* eslint-disable require-jsdoc */
import React from "react";

export default function Notification() {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    console.log(isChecked);

    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <div className="bg-white px-[2.5rem] pb-20">
                    <div className="border-b pb-5">
                        <p className="font-bold py-6">General</p>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive messages from Homehub</div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        checked={isChecked}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive messages about your account</div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive updates on new policies</div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Receive notifications when clients send messages
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Always ask for password when going to perform an
                                action
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="border-b pb-5">
                        <p className="font-bold py-6">Reminders</p>
                        <div className="flex flex-row justify-between mb-5">
                            <div>Receive reminders for appointments</div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Receive reminders when billings are overdue a
                                week after
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Receive reminders when loans are due 3 days
                                before
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="1 boy"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-16 h-6 bg-gray-200 rounded-full peer 
                                peer-checked:after:translate-x-11 peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-0.5  after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
