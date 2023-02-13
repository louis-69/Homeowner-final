/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, { useRef, useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Editor } from "@tinymce/tinymce-react";

const adminOptions = ["Add new admin", "Duplicate", "Edit", "Delete"];

// const limitOptions = ["Duplicate", "Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function Administration() {
    const editorRef = useRef();
    const [body, setBody] = useState("");

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Form */}
            <div className="mt-10 px-[5rem]">
                <div className="bg-white px-[2.5rem] pb-20">
                    <div className="border-b pb-5">
                        <p className="font-bold py-6">Payment Limits</p>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Online transactions
                                <b className="text-[#FA790F]"> GHC 40,000.00</b>
                                <span className="text-[#b1b1b1a4]">/ day</span>
                            </div>
                            <div>
                                <input
                                    min={0}
                                    max={100}
                                    type="range"
                                    className="w-52 h-1 rounded bg-orange-500 appearance-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Withdrawals
                                <b className="text-[#FA790F]">
                                    {" "}
                                    GHC 200,000.00
                                </b>
                                <span className="text-[#b1b1b1a4]">/ day</span>
                            </div>
                            <div>
                                <input
                                    min={0}
                                    max={100}
                                    type="range"
                                    className="w-52 h-1 rounded bg-orange-500 appearance-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-5">
                            <div>
                                Private transactions
                                <b className="text-[#FA790F]">
                                    {" "}
                                    GHC 200,000.00
                                </b>
                                <span className="text-[#b1b1b1a4]">/ day</span>
                            </div>
                            <div>
                                <input
                                    min={0}
                                    max={100}
                                    type="range"
                                    className="w-52 h-1 rounded bg-orange-500 appearance-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-b pb-10">
                        <p className="font-bold py-6">Roles and Permissions</p>
                        <div className="grid grid-cols-5 gap-4">
                            <div className="flex justify-center text-gray-500">
                                Name
                            </div>
                            <div className="flex justify-center text-gray-500">
                                User type
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Role
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Status
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Action
                            </div>
                            <div className="flex justify-center">Admin</div>
                            <div className="flex justify-center">Stuff</div>
                            <div className="flex justify-center">IT</div>
                            <div className="flex justify-center">
                                <span className="px-3 h-5 rounded-full bg-sky-100 text-blue-800 font-semibold text-xs flex items-center cursor-pointer">
                                    <span
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            marginRight: 5,
                                        }}
                                        className="bg-blue-800"
                                    ></span>{" "}
                                    Active
                                </span>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                            open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                                position: "absolute",
                                            },
                                        }}
                                    >
                                        {adminOptions.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b pb-10">
                        <p className="font-bold py-6">User Statuses</p>
                        <div className="grid grid-cols-5 gap-4">
                            {/* Table Head Start */}

                            <div className="flex justify-center text-gray-500">
                                Status
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Description
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Color
                            </div>
                            <div className="flex justify-center text-gray-500">
                                No. of users
                            </div>
                            <div className="flex justify-center text-gray-500">
                                Action
                            </div>

                            {/* Table Row 1*/}

                            <div className="flex justify-center">
                                Approved/Unpaid
                            </div>
                            <div className="flex justify-center text-sm">
                                For users whose loan has been approved
                            </div>
                            <div className="flex justify-center">
                                <div
                                    style={{
                                        background: "brown",
                                        width: "3rem",
                                        height: "1rem",
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-center">30</div>
                            <div className="flex justify-center">
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                            open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                            },
                                        }}
                                    >
                                        {adminOptions.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            </div>

                            {/* Table Row 2*/}

                            <div className="flex justify-center">
                                Rejected/Overdue
                            </div>
                            <div className="flex justify-center text-sm">
                                For users whose loan have been rejected
                            </div>
                            <div className="flex justify-center">
                                <div
                                    style={{
                                        background: "red",
                                        width: "3rem",
                                        height: "1rem",
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-center">30</div>
                            <div className="flex justify-center">
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                            open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                            },
                                        }}
                                    >
                                        {adminOptions.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            </div>

                            {/* Table Row 3*/}

                            <div className="flex justify-center">Paid</div>
                            <div className="flex justify-center text-sm">
                                For users who have paid their loans
                            </div>
                            <div className="flex justify-center">
                                <div
                                    style={{
                                        background: "green",
                                        width: "3rem",
                                        height: "1rem",
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-center">30</div>
                            <div className="flex justify-center">
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                            open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                            open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                            },
                                        }}
                                    >
                                        {adminOptions.map((option) => (
                                            <MenuItem
                                                key={option}
                                                selected={option === "Pyxis"}
                                                onClick={handleClose}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="flex-col">
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <p className="font-bold py-6">
                                        Customize Email Message
                                    </p>
                                </div>
                                <div>
                                    <button className="text-[#D0650D] hover:text-orange-700 text-sm font-bold">
                                        + Add New Message
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className="border border-gray-300 text-gray-900 text-sm bg-slate-50 rounded-sm block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 mt-5 text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    className="border border-gray-300 text-gray-900 text-sm bg-slate-50 rounded-sm block w-full h-16 p-2.5"
                                />
                            </div>
                            <div>
                                <div className="relative z-0">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 mt-5 text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <Editor
                                        onEditorChange={(newText) => {
                                            setBody(newText);
                                        }}
                                        init={{
                                            height: 400,
                                            min_width: 900,
                                            menubar: false,
                                            statusbar: false,
                                            // The link in the toolbar doesn't show
                                            toolbar:
                                                "bold underline italic" +
                                                " | " +
                                                "alignjustify  alignleft aligncenter " +
                                                " | " +
                                                " link ",
                                            toolbar_location: "bottom",
                                            skin: "outside",
                                        }}
                                    />
                                    <div className="absolute bottom-2 right-8 z-10">
                                        <Link href={"/"}>
                                            <button className="border border-[#D0650D] text-[#D0650D] rounded-md p-1 px-9 mr-2 hover:text-orange-300">
                                                Cancel
                                            </button>
                                            <button className="bg-[#D0650D] text-white rounded-md p-1 px-10 hover:shadow-md hover:shadow-[#D0650D]">
                                                Save
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-evenly mt-10 mb-20 py-10 border-b">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-gray-500">
                                        Message type
                                    </div>
                                    <div className="text-[#D0650D] text-sm">
                                        Loan Rejection
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-gray-500 mb-2">
                                        Description
                                    </div>
                                    <div className="text-xs font-normal">
                                        For users whose loan request was not
                                        succesful
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-gray-500">Action</div>
                                    <div>
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={
                                                open ? "long-menu" : undefined
                                            }
                                            aria-expanded={
                                                open ? "true" : undefined
                                            }
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                "aria-labelledby":
                                                    "long-button",
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight:
                                                        ITEM_HEIGHT * 4.5,
                                                    width: "20ch",
                                                },
                                            }}
                                        >
                                            {adminOptions.map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={
                                                        option === "Pyxis"
                                                    }
                                                    onClick={handleClose}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
