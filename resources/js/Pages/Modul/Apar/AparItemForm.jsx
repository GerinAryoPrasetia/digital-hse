import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import { DatePicker, Select } from "antd";
import { useState } from "react";

const AparItemCondition = ({ index, formData, setFormData, item }) => {
    const aparItemCondition = formData.apar_item_condition[index];
    const handleSelectChange = (value) => {
        // Update the 'status' field in the specific item
        aparItemCondition.status = value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    const handleSelectChangeItem = (value) => {
        // Update the 'status' field in the specific item
        aparItemCondition.item_id = value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    const handleCheckboxChange = (checked) => {
        // Update the 'checked' field in the specific item
        aparItemCondition.checked = checked;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    const handleChangeStatus = (e) => {
        // Update the 'checked' field in the specific item
        aparItemCondition.status_remarks = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    const handleChangeCause = (e) => {
        // Update the 'checked' field in the specific item
        aparItemCondition.possible_cause = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    const hanldeChangeDate = (date, dateString) => {
        // Update the 'checked' field in the specific item
        aparItemCondition.tanggal_remarks = dateString;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition: [...prevData.apar_item_condition],
        }));
    };

    return (
        <div>
            {/* Render your Select and Checkbox components here */}
            <p className="font-bold">Item {index + 1}</p>
            <div className="my-2">
                <InputLabel htmlFor="area_id" value="Item Name" />
                <Select
                    style={{
                        width: "100%",
                        height: 42,
                    }}
                    options={item.map((d) => ({
                        label: d.item_name,
                        value: d.id,
                    }))}
                    onChange={handleSelectChangeItem}
                    value={aparItemCondition.id}
                />
            </div>
            <div className="mb-2">
                <InputLabel htmlFor="area_id" value="Status" />
                <Select
                    style={{
                        width: "100%",
                        height: 42,
                    }}
                    options={[
                        {
                            label: "OK",
                            value: "OK",
                        },
                        {
                            label: "NOT OK",
                            value: "NOT OK",
                        },
                    ]}
                    onChange={handleSelectChange}
                    value={aparItemCondition.status}
                />
            </div>
            {aparItemCondition.status === "NOT OK" && (
                <div className="mb-2">
                    <div className="mb-2">
                        <InputLabel htmlFor="status_remarks" value="Status" />
                        <TextAreaInput
                            id="status"
                            type="text"
                            name="status"
                            value={aparItemCondition.status_remarks}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={handleChangeStatus}
                        />
                    </div>

                    <div className=" mb-2">
                        <InputLabel
                            htmlFor="possible_cause"
                            value="Kemungkinan Penyebab"
                        />
                        <TextAreaInput
                            id="possible_cause"
                            type="text"
                            name="possible_cause"
                            value={aparItemCondition.possible_cause}
                            className="mt-1 block w-full"
                            onChange={handleChangeCause}
                        />
                    </div>
                    <div className="mb-2">
                        <InputLabel htmlFor="possible_cause" value="Tanggal" />
                        <DatePicker
                            className="w-full mt-2"
                            onChange={hanldeChangeDate}
                        />
                    </div>
                </div>
            )}

            <div className="items-center flex mb-2">
                <Checkbox
                    checked={aparItemCondition.checked}
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Checked</span>
            </div>
        </div>
    );
};

export default AparItemCondition;
