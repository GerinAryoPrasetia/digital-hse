import React from "react";
import { Select } from "antd";

export default function SelectDropdown({ options, ...props }) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <Select
            defaultValue=""
            style={{
                width: "100%",
                height: 42,
            }}
            onChange={handleChange}
            options={options}
        />
    );
}
