import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Collapse, Modal, Select, Upload } from "antd";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import Dropdown from "@/Components/Dropdown";
// import Select from "@/Components/Select";
import Checkbox from "@/Components/Checkbox";

import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

export default function WorkingPermitForm({ auth, issuer, permit, users }) {
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
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

    const safetyProcedureOptions = [
        { id: "LOTO", label: "LOTO" },
        {
            id: "Tool box meeting",
            label: "Tool box meeting",
        },
        {
            id: "Client to inform",
            label: "Client to inform",
        },
        {
            id: "Client authorization",
            label: "Client authorization",
        },
        {
            id: "Public address announcement",
            label: "Public address announcement",
        },
        {
            id: "First aid assistance",
            label: "First aid assistance",
        },
        {
            id: "Stand-by man",
            label: "Stand-by man",
        },
        {
            id: "Clearing the area",
            label: "Clearing the area",
        },
        {
            id: "Restricting the area",
            label: "Restricting the area",
        },
        {
            id: "Installing barrier",
            label: "Installing barrier",
        },
        {
            id: "Venting the system",
            label: "Venting the system",
        },
        {
            id: "Grounding",
            label: "Grounding",
        },
        {
            id: "Shutdown (machine/process)",
            label: "Shutdown (machine/process)",
        },
        {
            id: "Other",
            label: "Other",
        },
    ];
    const safetyPersonalOptions = [
        { id: "Safety helmet", label: "Safety helmet" },
        { id: "Safety goggles", label: "Safety goggles" },
        { id: "Welding mask", label: "Welding mask" },
        { id: "SCBA", label: "SCBA" },
        { id: "Ear protection", label: "Ear protection" },
        { id: "Rubber gloves", label: "Rubber gloves" },
        { id: "Leather gloves", label: "Leather gloves" },
        { id: "Heat resistance gloves", label: "Heat resistance gloves" },
        { id: "Rubber apron", label: "Rubber apron" },
        { id: "Rubber apron", label: "Rubber apron" },
        { id: "Welder suit", label: "Welder suit" },
        { id: "Safety harness", label: "Safety harness" },
        { id: "Fall arrester", label: "Fall arrester" },
        { id: "Work vest", label: "Work vest" },
        { id: "Safety shoes", label: "Safety shoes" },
        { id: "Other", label: "Other" },
    ];
    const safetyEquipmentOptions = [
        { id: "Fire extinguisher", label: "Fire extinguisher" },
        { id: "Gas detector", label: "Gas detector" },
        { id: "Fire detector", label: "Fire detector" },
        { id: "Blower/exhaust fan", label: "Blower/exhaust fan" },
        { id: "Scaffoldings/ladder", label: "Scaffoldings/ladder" },
        { id: "Cutting/welding torches", label: "Cutting/welding torches" },
        { id: "Hand-held radio", label: "Hand-held radio" },
        { id: "Crane", label: "Crane" },
        { id: "Forklift", label: "Forklift" },
        { id: "Lighting", label: "Lighting" },
        { id: "Multi meter", label: "Multi meter" },
        { id: "Pressure gauge", label: "Pressure gauge" },
        { id: "Wrenches", label: "Wrenches" },
        { id: "Other", label: "Other" },
    ];
    const [checkedItemsWorkArea, setCheckedItemsWorkArea] = useState([]);
    const [checkedItemsNatureofWork, setCheckedItemsNatureofWork] = useState(
        []
    );
    const [checkedItemsSafetyProcedure, setCheckedItemsSafetyProcedure] =
        useState([]);
    const [checkedItemsSafetyPersonal, setCheckedItemsSafetyPersonal] =
        useState([]);
    const [checkedItemsSafetyEquipment, setCheckedItemsSafetyEquipment] =
        useState([]);

    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

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

    const handleCheckboxChangeSafetyProcedure = (event) => {
        const { id, checked } = event.target;

        // Clone the current state array to avoid mutating it directly
        const updatedCheckedItems = [...checkedItemsSafetyProcedure];

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
        setCheckedItemsSafetyProcedure(updatedCheckedItems);
        setData("safetyProcedure", updatedCheckedItems);
    };

    const handleCheckboxChangeSafetyPersonal = (event) => {
        const { id, checked } = event.target;

        // Clone the current state array to avoid mutating it directly
        const updatedCheckedItems = [...checkedItemsSafetyPersonal];

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
        setCheckedItemsSafetyPersonal(updatedCheckedItems);
        setData("safetyPersonal", updatedCheckedItems);
    };

    const handleCheckboxChangeSafetyEquipment = (event) => {
        const { id, checked } = event.target;

        // Clone the current state array to avoid mutating it directly
        const updatedCheckedItems = [...checkedItemsSafetyEquipment];

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
        setCheckedItemsSafetyEquipment(updatedCheckedItems);
        setData("safetyEquipment", updatedCheckedItems);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
    };
    const handleChangeImage = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setData("attachments", newFileList);
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        permitToWork: "",
        workSite: "",
        workArea: [],
        issuerID: auth.user.reference_id,
        issuerName: auth.user.name,
        issuerFunction: auth.user.departement,
        issuerSupervisor: issuer.name,
        issuerDepartement: auth.user.departement,
        companyName: "",
        equipmentToWorkOn: "",
        permitNumber: permit.form_number,
        briefDescriptionOfWork: "",
        natureOfWork: [],
        safetyProcedure: [],
        safetyPersonal: [],
        safetyEquipment: [],
        supervisorId: "",
        safetyOfficerId: "",
        attachments: [],
    });

    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    const items = [
        {
            key: "1",
            label: "Requestor Information",
            children: (
                <div>
                    <div>
                        <InputLabel
                            htmlFor="issuerID"
                            value="Issuer Reference ID"
                            className=" font-bold"
                        />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            value={data.issuerID}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("issuerID", e.target.value)
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="issuerName" value="Issuer Name" />
                        <TextInput
                            id="issuerName"
                            type="text"
                            name="issuerName"
                            value={data.issuerName}
                            className="mt-1 block w-full"
                            autoComplete=""
                            isFocused={true}
                            onChange={(e) =>
                                setData("issuerName", e.target.value)
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="issuerSupervisor"
                            value="Issuer Supervisor"
                        />
                        <TextInput
                            id="issuerSupervisor"
                            type="text"
                            name="issuerSupervisor"
                            value={data.issuerSupervisor}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("issuerSupervisor", e.target.value)
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="issuerDepartement"
                            value="Issuer Departement"
                        />
                        <TextInput
                            id="issuerDepartement"
                            type="text"
                            name="issuerDepartement"
                            value={data.issuerDepartement}
                            className="mt-1 block w-full"
                            autoComplete=""
                            isFocused={true}
                            onChange={(e) =>
                                setData("issuerDepartement", e.target.value)
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="eequipmentToWorkOnmail"
                            value="Equipment to Work On"
                        />
                        <TextAreaInput
                            id="equipmentToWorkOn"
                            type="text"
                            name="equipmentToWorkOn"
                            value={data.equipmentToWorkOn}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("equipmentToWorkOn", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="companyName"
                            value="Company Name"
                        />
                        <TextInput
                            id="companyName"
                            type="text"
                            name="companyName"
                            value={data.companyName}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("companyName", e.target.value)
                            }
                        />
                    </div>
                </div>
            ),
        },
        {
            key: "2",
            label: "Working Permit Detail",
            children: (
                <div>
                    <div>
                        <InputLabel
                            htmlFor="permitNumber"
                            value="Permit Number"
                        />
                        <TextInput
                            id="permitNumber"
                            type="text"
                            name="permitNumber"
                            value={data.permitNumber}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("permitNumber", e.target.value)
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="permitToWork"
                            value="Permit to Work"
                        />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={[
                                {
                                    label: "Hot Work",
                                    value: "Hot Work",
                                },
                                {
                                    label: "Cold work permit",
                                    value: "Cold work permit",
                                },
                                {
                                    label: "Work at height permit",
                                    value: "Work at height permit",
                                },
                                {
                                    label: "Burning permit",
                                    value: "Burning permit",
                                },
                                {
                                    label: "Confined space entry permit",
                                    value: "Confined space entry permit",
                                },
                                {
                                    label: "Electrical work permit",
                                    value: "Electrical work permit",
                                },
                                {
                                    label: "New work",
                                    value: "New work",
                                },
                                {
                                    label: "Continuation",
                                    value: "Continuation",
                                },
                            ]}
                            onChange={(e) => {
                                setData("permitToWork", e);
                            }}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="workSite" value="Work Site" />
                        <TextInput
                            id="workSite"
                            type="text"
                            name="workSite"
                            value={data.workSite}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("workSite", e.target.value)
                            }
                            // disabled={true}
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="workArea" value="Work Area" />
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
                            htmlFor="natureOfWork"
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
                    <div>
                        <InputLabel
                            htmlFor="briefDescriptionOfWork"
                            value="Brief description of the work"
                        />
                        <TextAreaInput
                            id="briefDescriptionOfWork"
                            type="text"
                            name="briefDescriptionOfWork"
                            value={data.briefDescriptionOfWork}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData(
                                    "briefDescriptionOfWork",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
            ),
        },
        {
            key: "3",
            label: "Safety Precautions Required For The Work",
            children: (
                <div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="safetyPersonal"
                            value="Personal Protective"
                        />
                        {safetyPersonalOptions.map((item) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                        // // checked={data.remember}

                                        checked={checkedItemsSafetyPersonal.includes(
                                            item.id
                                        )}
                                        onChange={
                                            handleCheckboxChangeSafetyPersonal
                                        }
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
                            htmlFor="safetyProcedure"
                            value="Procedure"
                        />
                        {safetyProcedureOptions.map((item) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                        // // checked={data.remember}

                                        checked={checkedItemsSafetyProcedure.includes(
                                            item.id
                                        )}
                                        onChange={
                                            handleCheckboxChangeSafetyProcedure
                                        }
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
                            htmlFor="safetyEquipment"
                            value="Equipments Tools & Equipments"
                        />
                        {safetyEquipmentOptions.map((item) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                        // // checked={data.remember}

                                        checked={checkedItemsSafetyEquipment.includes(
                                            item.id
                                        )}
                                        onChange={
                                            handleCheckboxChangeSafetyEquipment
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
            key: "4",
            label: "Requestor Aggereement",
            children: (
                <div>
                    <div>
                        <InputLabel
                            className="mb-4"
                            htmlFor="supervisor"
                            value="PIC Supervisor"
                        />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={users?.map((user) => ({
                                label: user.name,
                                value: user.id,
                            }))}
                            onChange={(e) => {
                                setData("supervisorId", e);
                            }}
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            className="mb-4"
                            htmlFor="safetyOfficer"
                            value="PIC Safety Officer"
                        />
                        <Select
                            showSearch
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            filterOption={filterOption}
                            options={users?.map((user) => ({
                                label: user.name,
                                value: user.id,
                            }))}
                            onChange={(e) => {
                                setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                </div>
            ),
        },
        {
            key: "5",
            label: "Attachments",
            children: (
                <div>
                    <Upload
                        beforeUpload={() => false}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChangeImage}
                    >
                        {fileList.length >= 999 ? null : uploadButton}
                    </Upload>
                    <Modal
                        open={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <img
                            alt="example"
                            style={{
                                width: "100%",
                            }}
                            src={previewImage}
                        />
                    </Modal>
                </div>
            ),
        },
    ];
    const onChange = (key) => {
        // console.log(key);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("working-permits.store"));
    };
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-xl my-4">
                    Working Permit Form
                </h2>
                <form onSubmit={submit} encType="multipart/form-data">
                    <Collapse
                        items={items}
                        defaultActiveKey={["1"]}
                        onChange={onChange}
                    />
                    <div className="m-auto mt-4 mb-12 text-center">
                        <PrimaryButton disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
