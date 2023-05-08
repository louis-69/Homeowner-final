/* eslint-disable require-jsdoc */

import React, { useState } from "react";
import Modal from "react-modal";


function AmenitiesModal() {
const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => {
    setModalIsOpen(true);
};

const closeModal = () => {
    setModalIsOpen(false);
};

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0",
        width: "610px",
        height: "355px",
        borderRadius: "8px 8px 0 0",
        backgroundColor: "white",
    },
};

return(
    <div>

        
    </div>

)};

export default AmenitiesModal