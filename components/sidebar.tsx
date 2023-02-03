/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import List, { Title } from "./sidebarList";
import Logo from "../assets/logo.png";
import Client from "../assets/client.png";
import Integration from "../assets/integration.png";
import Logout from "../assets/logout.png";
import Pending from "../assets/pending.png";
import Report from "../assets/reports.png";
import Settings from "../assets/settings.png";
import Support from "../assets/support.png";
import Transaction from "../assets/transactions.png";
import loan from "../assets/loan.svg";
import dashboard from "../assets/dashboard.svg";
import Link from "next/link";

function SideBar() {
    return (
        <>
            <aside
                className="fixed h-full w-[16rem] flex-shrink-0 basis-[16rem] "
                aria-label="Sidebar"
            >
                <aside className="px-3 py-4 overflow-y-auto bg-[#d0650d]  lg:h-full no-scrollbar">
                    <div className="h-11 w-20 ml-14 my-14">
                        <Link href={"/"}>
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <ul className="space-y-2 text-white">
                        <Link href={"/views/dashboard"} as="">
                            <List icon={dashboard} name={"Dashboard"} />
                        </Link>
                        <Title name={"User Registration"} />
                        <Link
                            href={"/views/userRegistration/clientList"}
                            as="/clientList"
                        >
                            <List icon={Client} name={"Client List"} />
                        </Link>
                        <Link href={"/views/userRegistration/transaction"}>
                            <List icon={Transaction} name={"Transaction"} />
                        </Link>
                        <Title name={"Morgage Requests"} />
                        <Link href={""}>
                            {" "}
                            <List icon={Pending} name={"Pending Approval"} />
                        </Link>
                        <Link href={""}>
                            {" "}
                            <List icon={loan} name={"Loan Processing"} />
                        </Link>
                        <Link href={""}>
                            <List icon={Report} name={"Report"} />
                        </Link>
                        <Title name={"Other"} />
                        <Link href={""}>
                            <List icon={Settings} name={"Settings"} />
                        </Link>
                        <Link href={""}>
                            <List icon={Integration} name={"Integrations"} />
                        </Link>
                        <Link href={""}>
                            {" "}
                            <List icon={Support} name={"Support"} />
                        </Link>
                        <Link href={""}>
                            <List icon={Logout} name={"Logout"} />
                        </Link>
                    </ul>
                </aside>
            </aside>
        </>
    );
}

export default SideBar;
