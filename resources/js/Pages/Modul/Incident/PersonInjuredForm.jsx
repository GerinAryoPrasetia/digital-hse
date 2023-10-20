import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { DatePicker, Select } from "antd";
import React from "react";
import InjuryDetailForm from "./RecommendationForm";
import PrimaryButton from "@/Components/PrimaryButton";
import datas from "./data.json";

export default function PersonInjuredForm({ index, formData, setFormData }) {
    const data = formData.personInjured[index];
    const handleChangeName = (e) => {
        // Update the 'checked' field in the specific item
        data.name = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInjured: [...prevData.personInjured],
        }));
    };

    const handleChangeCompany = (e) => {
        // Update the 'checked' field in the specific item
        data.companyName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInjured: [...prevData.personInjured],
        }));
    };

    const handleChangeFunction = (e) => {
        // Update the 'checked' field in the specific item
        data.functionName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInjured: [...prevData.personInjured],
        }));
    };

    const handleChangeNoTelp = (e) => {
        // Update the 'checked' field in the specific item
        data.noTelp = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInjured: [...prevData.personInjured],
        }));
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="my-4">
            <p className="font-bold">Orang {index + 1}</p>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nama Lengkap"
                />
                <TextInput
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="ID Number"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Tanggal Lahir"
                />
                <DatePicker className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Jenis Kelamin"
                />
                <Select
                    options={[
                        { label: "Laki-laki", value: "Laki-laki" },
                        { label: "Perempuan", value: "Perempuan" },
                    ]}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Jabatan"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Lama Bekerja"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Bagian"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Seksi"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Karyawan PT"
                />
                <Select
                    options={[
                        { label: "Ya", value: true },
                        { label: "Tidak", value: false },
                    ]}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nama Perusahaan"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nama Lengkap Pengawas Kerja"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <h2 className="block text-xl font-medium text-gray-700">
                    Rincian Luka
                </h2>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="WUJUD CIDERA (NATURE OF INJURY)"
                />
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: "100%",
                    }}
                    placeholder="Please select"
                    defaultValue={[]}
                    onChange={(value) => {
                        data.natureInjury = value;
                        setFormData((prevData) => ({
                            ...prevData,
                            personInjured: [...prevData.personInjured],
                        }));
                    }}
                    options={datas?.data.nature_injury_detail?.map((item) => ({
                        label: item.value,
                        value: item.value,
                    }))}
                />
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="BAGIAN TUBUH YANG LUKA (PART OF BODY INJURED)"
                />
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: "100%",
                    }}
                    placeholder="Please select"
                    defaultValue={[]}
                    onChange={(value) => {
                        data.bodyPart = value;
                        setFormData((prevData) => ({
                            ...prevData,
                            personInjured: [...prevData.personInjured],
                        }));
                    }}
                    options={datas?.data.body_injury_detail?.map((item) => ({
                        label: item.value,
                        value: item.value,
                    }))}
                />
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="MEKANISME CIDERA (MECHANISM OF INJURY)"
                />
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: "100%",
                    }}
                    placeholder="Please select"
                    defaultValue={[]}
                    onChange={(value) => {
                        data.mechanism = value;
                        setFormData((prevData) => ({
                            ...prevData,
                            personInjured: [...prevData.personInjured],
                        }));
                    }}
                    options={datas?.data.mechanism_injury_detail?.map(
                        (item) => ({
                            label: item.value,
                            value: item.value,
                        })
                    )}
                />
            </div>
        </div>
    );
}
