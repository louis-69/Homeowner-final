/* eslint-disable require-jsdoc */
import React from "react";
import world from "../public/images/world.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="fixed bottom-0 p-4 text-black font-bold bg-white border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6 lg:w-full">
                <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            License
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            API
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Help Center
                        </Link>
                    </li>
                    <li>
                        <p className="text-gray-500 font-normal">
                            © 2023 All rights reserved
                        </p>
                    </li>
                </ul>
                <span className="flex gap-2 text-sm object-contain sm:text-center">
                    English <Image src={world} alt="" />
                </span>
            </footer>
        </>
    );
}

export default Footer;
