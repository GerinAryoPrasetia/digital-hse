import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { DatePicker, Select } from "antd";
import { useState } from "react";

const AparItemRemarks = ({ index, formData, setFormData, item }) => {
    const aparItemConditionRemarks =
        formData.apar_item_condition_remarks[index];

    const handleSelectChange = (value) => {
        // Update the 'status' field in the specific item
        aparItemConditionRemarks.status = value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    const handleSelectChangeItem = (value) => {
        // Update the 'status' field in the specific item
        aparItemConditionRemarks.item_id = value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    const handleCheckboxChange = (checked) => {
        // Update the 'checked' field in the specific item
        aparItemConditionRemarks.checked = checked;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    const handleChangeStatus = (e) => {
        // Update the 'checked' field in the specific item
        aparItemConditionRemarks.status = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    const handleChangeCause = (e) => {
        // Update the 'checked' field in the specific item
        aparItemConditionRemarks.possible_cause = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    const hanldeChangeDate = (date, dateString) => {
        // Update the 'checked' field in the specific item
        aparItemConditionRemarks.tanggal = dateString;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            apar_item_condition_remarks: [
                ...prevData.apar_item_condition_remarks,
            ],
        }));
    };

    return (
        <div>
            {/* Render your Select and Checkbox components here */}
            <p className="font-bold">Remarks {index + 1}</p>
            <div className="my-2">
                <InputLabel htmlFor="area_id" value="Bagian Apar" />
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
                    value={aparItemConditionRemarks.item_id}
                />
            </div>
            <div className="mb-2">
                <InputLabel htmlFor="status" value="Status" />
                <TextInput
                    id="status"
                    type="text"
                    name="status"
                    value={aparItemConditionRemarks.status}
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
                <TextInput
                    id="possible_cause"
                    type="text"
                    name="possible_cause"
                    value={aparItemConditionRemarks.possible_cause}
                    className="mt-1 block w-full"
                    isFocused={true}
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
    );
};

export default AparItemRemarks;
