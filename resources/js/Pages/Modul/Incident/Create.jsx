import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Button, Collapse, Modal, Select, Steps, Upload, theme } from "antd";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import Dropdown from "@/Components/Dropdown";
// import Select from "@/Components/Select";
import Checkbox from "@/Components/Checkbox";

import datas from "./data.json";

export default function Create({ auth }) {
    console.log(datas.data);
    const steps = [
        {
            title: "KLASIFIKASI KECELAKAAN / ACCIDENT CLASSIFICATION",
            content: (
                <div className="mx-5 my-4 text-left">
                    <div>
                        <InputLabel value="Klasifikasi Kecelakaan" />
                        {datas.data.klasifikasi.map((item, index) => (
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        key={item.id}
                                        id={item.id}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        {item.value}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Divisi" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Departement" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Seksi" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Tanggal Kejadian" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Waktu Kejadian" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="divisi"
                            value="Tanggal Dilaporkan"
                        />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Jam Dilaporkan" />
                        <TextInput
                            id="issuerID"
                            type="text"
                            name="issuerID"
                            className="mt-1 block w-full"
                        />
                    </div>
                </div>
            ),
        },
    ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        // lineHeight: "260px",
        // textAlign: "center",
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <Authenticated user={auth.user}>
            {" "}
            <Steps current={current} items={items} className="mx-5 mt-4" />
            <div style={contentStyle} className="mx-5">
                {steps[current].content}
            </div>
            <div
                style={{
                    marginTop: 24,
                    marginBottom: 24,
                }}
                className="flex justify-end mx-5"
            >
                {current > 0 && (
                    <SecondaryButton
                        style={{
                            margin: "0 8px",
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </SecondaryButton>
                )}
                {current < steps.length - 1 && (
                    <PrimaryButton type="primary" onClick={() => next()}>
                        Next
                    </PrimaryButton>
                )}
                {current === steps.length - 1 && (
                    <PrimaryButton
                        onClick={route("incident.index")}
                        type="primary"
                    >
                        Done
                    </PrimaryButton>
                )}
            </div>
        </Authenticated>
    );
}
