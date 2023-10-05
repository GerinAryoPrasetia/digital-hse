import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Collapse } from "antd";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import Dropdown from "@/Components/Dropdown";
import Select from "@/Components/Select";
import Checkbox from "@/Components/Checkbox";

export default function WorkingPermits({ auth }) {
    const checkboxData = [
        //work area
        { id: "Hazardous area", label: "Hazardous area" },
        { id: "Confined space", label: "Confined space" },
        { id: "Contaminated atmosphere", label: "Contaminated atmosphere" },
        { id: "Explosive atmosphere", label: "Explosive atmosphere" },
        {
            id: "Hostile environment/weather",
            label: "Hostile environment/weather",
        },
        { id: "Near/over water", label: "Near/over water" },
        { id: "Isolated area", label: "Isolated area" },
        { id: "Elevated area", label: "Elevated area" },
        { id: "Other area", label: "Other area" },
    ];

    const checkboxDataNatureofWork = [
        //nature of work
        { id: "Construction", label: "Construction" },
        { id: "Erection", label: "Erection" },
        { id: "Using hazardous chemical", label: "Using hazardous chemical" },
        { id: "Modification", label: "Modification" },
        { id: "Hot work", label: "Hot work" },
        { id: "Electrical work", label: "Electrical work" },
        { id: "Repair", label: "Repair" },
        { id: "Removal", label: "Removal" },
        { id: "Personnel lifting", label: "Personnel lifting" },
        { id: "Maintenance", label: "Maintenance" },
        { id: "Deviation from Procedure", label: "Deviation from Procedure" },
        { id: "Pressurized operation", label: "Pressurized operation" },
        {
            id: "Working on safety equipments",
            label: "Working on safety equipments",
        },
        { id: "Demolition", label: "Demolition" },
        { id: "Using explosives", label: "Using explosives" },
        { id: "Excavation", label: "Excavation" },
        { id: "Other activity", label: "Other activity" },
    ];
    const [checkedItemsWorkArea, setCheckedItemsWorkArea] = useState([]);
    const [checkedItemsNatureofWork, setCheckedItemsNatureofWork] = useState(
        []
    );
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;

        // Clone the current state array to avoid mutating it directly
        const updatedCheckedItems = [...checkedItemsWorkArea];

        if (checked) {
            // If the checkbox is checked, add the ID to the array
            updatedCheckedItems.push(id);
        } else {
            // If the checkbox is unchecked, remove the ID from the array
            const index = updatedCheckedItems.indexOf(id);
            if (index !== -1) {
                updatedCheckedItems.splice(index, 1);
            }
        }

        // Update the state with the new array
        setCheckedItemsWorkArea(updatedCheckedItems);
        setData("workArea", updatedCheckedItems);
    };

    const handleCheckboxChangeNatureofWork = (event) => {
        const { id, checked } = event.target;

        // Clone the current state array to avoid mutating it directly
        const updatedCheckedItems = [...checkedItemsNatureofWork];

        if (checked) {
            // If the checkbox is checked, add the ID to the array
            updatedCheckedItems.push(id);
        } else {
            // If the checkbox is unchecked, remove the ID from the array
            const index = updatedCheckedItems.indexOf(id);
            if (index !== -1) {
                updatedCheckedItems.splice(index, 1);
            }
        }

        // Update the state with the new array
        setCheckedItemsNatureofWork(updatedCheckedItems);
        setData("natureOfWork", updatedCheckedItems);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        workArea: [],
        natureOfWork: [],
    });
    const text = ``;

    const items = [
        {
            key: "1",
            label: "Requestor Information",
            children: (
                <div>
                    <div>
                        <InputLabel htmlFor="email" value="Issuer ID" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Issuer Name" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Issuer Supervisor" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="email"
                            value="Issuer Departement"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                            // disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="email"
                            value="Equipment to Work On"
                        />
                        <TextAreaInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>

                    {/* <InputError message={errors.email} className="mt-2" /> */}
                </div>
            ),
        },
        {
            key: "2",
            label: "Working Permit Detail",
            children: (
                <div>
                    <div>
                        <InputLabel htmlFor="email" value="Permit Number" />
                        <TextInput
                            className="mt-1 block w-full"
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Permit to Work" />
                        <Select />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Work Site" />
                        <Select />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Work Area" />
                        {checkboxData.map((item) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                        // // checked={data.remember}

                                        checked={checkedItemsWorkArea.includes(
                                            item.id
                                        )}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        {item.label}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="email"
                            value="Nature of work to be performed"
                        />
                        {checkboxDataNatureofWork.map((item) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                        checked={checkedItemsNatureofWork.includes(
                                            item.id
                                        )}
                                        onChange={
                                            handleCheckboxChangeNatureofWork
                                        }
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        {item.label}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            key: "3",
            label: "Safety Precautions Required For The Work",
            children: <p>{text}</p>,
        },
        {
            key: "4",
            label: "Requestor Aggereement",
            children: <p>{text}</p>,
        },
    ];
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-xl my-4">
                    Working Permit Form
                </h2>

                <Collapse
                    items={items}
                    defaultActiveKey={["1"]}
                    onChange={onChange}
                />
            </div>
        </Authenticated>
    );
}
