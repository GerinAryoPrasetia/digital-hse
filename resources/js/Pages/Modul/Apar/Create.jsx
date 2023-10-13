import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { Collapse, DatePicker, Select } from "antd";
import React, { useEffect, useState } from "react";
import AparItemCondition from "./AparItemForm";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import AparItemRemarks from "./AparItemRemarksForm";

export default function Create({ auth, user, area, aparItem }) {
    // const [aparItemConditionData, setAparItemConditionData] = useState([]);
    const { data, setData, post } = useForm({
        area_id: "",
        pic_area_id: auth.user.id,
        checked_by_id: auth.user.id,
        acknowledged_by_id: "",
        apar_number: "",
        apar_production: "",
        apar_type: "",
        apar_jenis: "",
        apar_year_of_production: "",
        spec_control: "",
        hasil_ujitekan: "",
        tanggal_ujitekan: "",
        expired_ujitekan: "",
        control_ujitekan: "",
        keterangan: "",
        expired_at: "",

        hse_id: "",
        p2k_id: "",
        month_checked: "",
        year_checked: "",
        apar_weight: 0,
        //
        apar_item_condition: [],
        // apar_item_condition_remarks: [],
    });

    const addItemToFormData = () => {
        setData("apar_item_condition", [
            ...data.apar_item_condition,
            { item_id: "", status: "", checked: false },
        ]);
    };

    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    const items = [
        {
            key: "1",
            label: "APAR LIST CHECKING & MONITORING - APAR DETAIL",
            children: (
                <div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="checked_by_id"
                            value="Checked By"
                        />
                        <TextInput
                            id="checked_by_id"
                            type="text"
                            name="checked_by_id"
                            value={auth.user.name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            disabled={true}
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="acknowledged_by_id"
                            value="Acknowladge by"
                        />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={user.map((item) => ({
                                label: item.name,
                                value: item.id,
                            }))}
                            onChange={(e) => {
                                setData("acknowledged_by_id", e);
                            }}
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="area" value="Area" />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={area.map((item) => ({
                                label: item.area_name,
                                value: item.id,
                            }))}
                            onChange={(e) => {
                                setData("area_id", e);
                            }}
                        />
                    </div>
                    {/* SPESIFIKASI */}
                    <p className="text-center font-bold">Spesifikasi</p>
                    <div className="my-2">
                        <InputLabel htmlFor="apar_number" value="Apar Number" />
                        <TextInput
                            id="apar_number"
                            type="text"
                            name="checked_by_id"
                            value={data.apar_number}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("apar_number", e.target.value)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="apar_production"
                            value="Apar Production"
                        />
                        <TextInput
                            id="apar_production"
                            type="text"
                            name="apar_production"
                            value={data.apar_production}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("apar_production", e.target.value)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="apar_weight"
                            value="Apar Weight (Kg)"
                        />
                        <TextInput
                            id="apar_weight"
                            type="number"
                            name="checked_by_id"
                            value={data.apar_weight}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("apar_weight", e.target.value)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="apar_jenis" value="Jenis APAR" />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={[
                                { label: "CO2", value: "CO2" },
                                { label: "Powder", value: "Powder" },
                            ]}
                            onChange={(e) => {
                                setData("apar_jenis", e);
                            }}
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="apar_type" value="Apar Type" />
                        <TextInput
                            id="apar_type"
                            type="text"
                            name="apar_type"
                            value={data.apar_type}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("apar_type", e.target.value)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="apar_year_of_production"
                            value="Tahun Produksi"
                        />
                        <TextInput
                            id="apar_year_of_production"
                            type="text"
                            name="apar_year_of_production"
                            value={data.apar_year_of_production}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData(
                                    "apar_year_of_production",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    {/* REFFIL */}
                    <p className="text-center font-bold">Reffil</p>
                    <div className="my-2">
                        <InputLabel htmlFor="expired_at" value="Expired Date" />
                        <DatePicker
                            className="w-full mt-2"
                            onChange={(date, dateString) =>
                                setData("expired_at", dateString)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="spec_control" value="Control" />
                        <TextInput
                            id="spec_control"
                            type="text"
                            name="spec_control"
                            value={data.spec_control}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("spec_control", e.target.value)
                            }
                        />
                    </div>
                    {/* UJI TEKAN */}
                    <p className="text-center font-bold">Uji Tekan</p>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="pressure_control"
                            value="Control"
                        />
                        <TextInput
                            id="pressure_control"
                            type="text"
                            name="pressure_control"
                            value={data.pressure_control}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("hasil_ujitekan", e.target.value)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="expired_ujitekan"
                            value="Expired Date"
                        />
                        <DatePicker
                            className="w-full mt-2"
                            onChange={(date, dateString) =>
                                setData("expired_ujitekan", dateString)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="tanggal_ujitekan"
                            value="Tanggal Uji"
                        />
                        <DatePicker
                            className="w-full mt-2"
                            onChange={(date, dateString) =>
                                setData("tanggal_ujitekan", dateString)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="control_ujitekan"
                            value="Control"
                        />
                        <TextInput
                            id="control_ujitekan"
                            type="text"
                            name="control_ujitekan"
                            value={data.control_ujitekan}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("control_ujitekan", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="keterangan" value="Keterangan" />
                        <TextAreaInput
                            id="keterangan"
                            type="text"
                            name="keterangan"
                            value={data.keterangan}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("keterangan", e.target.value)
                            }
                        />
                    </div>
                </div>
            ),
        },

        {
            key: "2",
            label: "APAR ITEM CONDITION",
            children: (
                <div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="month_checked"
                            value="Month Checked"
                        />
                        <DatePicker
                            picker="month"
                            className="w-full mt-2"
                            onChange={(date, dateString) =>
                                setData("month_checked", dateString)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel
                            htmlFor="year_checked"
                            value="Year Checked"
                        />
                        <DatePicker
                            picker="year"
                            className="w-full mt-2"
                            onChange={(date, dateString) =>
                                setData("year_checked", dateString)
                            }
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="pic_hse_id" value="PIC HSE" />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={user.map((item) => ({
                                label: item.name,
                                value: item.id,
                            }))}
                            onChange={(e) => {
                                setData("hse_id", e);
                            }}
                        />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="pic_p2k_id" value="PIC P2K" />
                        <Select
                            showSearch
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={user.map((item) => ({
                                label: item.name,
                                value: item.id,
                            }))}
                            onChange={(e) => {
                                setData("p2k_id", e);
                            }}
                        />
                    </div>
                    {data.apar_item_condition?.map((item, index) => (
                        <div key={index}>
                            <AparItemCondition
                                // key={index}
                                index={index} // Pass the index to the component
                                formData={data}
                                setFormData={setData}
                                item={aparItem}
                            />
                        </div>
                    ))}
                    <div className="text-center">
                        <PrimaryButton onClick={addItemToFormData}>
                            Add Item
                        </PrimaryButton>
                    </div>
                </div>
            ),
        },
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route("apar.store"));
    };
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-xl my-4">
                    APAR Report Form
                </h2>
                <Collapse items={items} defaultActiveKey={[]} />
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="m-auto mt-4 mb-12 text-center">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
