/* eslint-disable require-jsdoc */
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const customStyles = {
    control: (base) => ({
        ...base,
        height: 42,
        minHeight: 42,
        fontSize: 13,
    }),
};

function CountrySelector() {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
        setValue(value);
    };

    return (
        <Select
            id="country"
            styles={customStyles}
            required={true}
            placeholder={"--Select country--"}
            options={options}
            value={value}
            onChange={changeHandler}
        />
    );
}

export default CountrySelector;
