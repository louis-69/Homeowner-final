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
import percent from "../assets/percent.png";
import Link from "next/link";

function SideBar() {
    return (
        <>
            <aside
                className="fixed h-screen w-[16rem] flex-shrink-0"
                aria-label="Sidebar"
            >
                <aside className="sidecolor py-4 overflow-y-scroll scroll-smooth lg:h-full no-scrollbar">
                    <div className="h-11 w-20 ml-20 mt-14 mb-10">
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
                        <Link href={"/views/mortgageRequests/pendingApprovals"}>
                            {" "}
                            <List icon={Pending} name={"Pending Approval"} />
                        </Link>
                        <Link href={"/views/mortgageRequests/loanProcessing"}>
                            {" "}
                            <List icon={loan} name={"Loan Processing"} />
                        </Link>
                        <Link href={"/views/mortgageRequests/reports"}>
                            <List icon={Report} name={"Report"} />
                        </Link>
                        <Link href={"/views/mortgageRequests/rates"}>
                            <List icon={percent} name={"Rates"} />
                        </Link>
                        <Title name={"Other"} />
                        <Link href={"/views/other/settings"}>
                            <List icon={Settings} name={"Settings"} />
                        </Link>
                        <Link href={""}>
                            <List icon={Integration} name={"Integrations"} />
                        </Link>
                        <Link href={""}>
                            {" "}
                            <List icon={Support} name={"Support"} />
                        </Link>
                        <div>
                            <Link href={""}>
                                <List icon={Logout} name={"Logout"} />
                            </Link>
                        </div>
                    </ul>
                </aside>
            </aside>
        </>
    );
}

export default SideBar;
