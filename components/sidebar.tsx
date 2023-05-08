/* eslint-disable require-jsdoc */
import React from "react";
import List, { Title, Title1 } from "./sidebarList";
import AccountSettingsProfile from "./accountSettingsProfile";
import Link from "next/link";

function SideBar() {
    return (
        <>
            <aside
                className="flex flex-col bg-[#FAFAFA] mt-20 h-[1197px] w-[21.25%] ml-20 flex-shrink-0"
                aria-label="Sidebar"
            >
                <aside className="bg-[#FAFAFA] overflow-x-visible overflow-y-scroll scroll-smooth no-scrollbar">
                    <AccountSettingsProfile
                        name="John Doe"
                        hostType="Verified host"
                    />

                    <div className="mt-6 pt-5 px-4 pb-5 rounded-t-lg border border-[#E9ECEF] bg-white ">
                        <ul className="space-y-2">
                            <Title1 name={"Account Settings"} />

                            <Link href={"/views/accountSettings/editProfile"}>
                                <List
                                    url={"/views/accountSettings/editProfile"}
                                    name={"Edit Profile"}
                                />
                            </Link>

                            <Link href={"/views/accountSettings/security"}>
                                <List
                                    name={"Security"}
                                    url={"/views/accountSettings/security"}
                                />
                            </Link>

                            <Link
                                href={"/views/accountSettings/socialProfiles"}
                            >
                                <List
                                    name={"Social Profiles"}
                                    url={
                                        "/views/accountSettings/socialProfiles"
                                    }
                                />
                            </Link>

                            <Link href={"/views/accountSettings/notifications"}>
                                <List
                                    name={"Notifications"}
                                    url={"/views/accountSettings/notifications"}
                                />
                            </Link>

                            <Link
                                href={
                                    "/views/accountSettings/DeleteProfile/deleteProfile"
                                }
                            >
                                <List
                                    name={"Delete Profile"}
                                    url={
                                        "/views/accountSettings/DeleteProfile/deleteProfile"
                                    }
                                />
                            </Link>

                            <Link href={"/"}>
                                <List name={"Sign Out"} />
                            </Link>

                            <Title name={"Manage Subscriptions"} />

                            <Link
                                href={
                                    "/views/manageSubscriptions/mySubscriptions"
                                }
                            >
                                {" "}
                                <List
                                    name={"My Subscriptions"}
                                    url={
                                        "/views/manageSubscriptions/mySubscriptions"
                                    }
                                />
                            </Link>

                            <Link
                                href={"/views/manageSubscriptions/billingInfo"}
                            >
                                {" "}
                                <List
                                    name={"Billing Info"}
                                    url={
                                        "/views/manageSubscriptions/billingInfo"
                                    }
                                />
                            </Link>

                            <Link href={"/views/manageSubscriptions/payment"}>
                                <List
                                    name={"Payment"}
                                    url={"/views/manageSubscriptions/payment"}
                                />
                            </Link>

                            <Link href={"/views/manageSubscriptions/invoice"}>
                                <List
                                    name={"Invoice"}
                                    url={"/views/manageSubscriptions/invoice"}
                                />
                            </Link>
                        </ul>
                    </div>
                </aside>
            </aside>
        </>
    );
}

export default SideBar;
