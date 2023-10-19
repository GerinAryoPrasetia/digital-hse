import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { DatePicker, Select } from "antd";
import React from "react";

export default function PersonInjuredForm({ index, formData, setFormData }) {
    const data = formData.personInjured[index];
    const handleChangeName = (e) => {
        // Update the 'checked' field in the specific item
        data.name = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeCompany = (e) => {
        // Update the 'checked' field in the specific item
        data.companyName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeFunction = (e) => {
        // Update the 'checked' field in the specific item
        data.functionName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeNoTelp = (e) => {
        // Update the 'checked' field in the specific item
        data.noTelp = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
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
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Penyebab Kecelakaan"
                />
                {/* <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                /> */}
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Rekomendasi"
                />
                {/* <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                /> */}
            </div>
        </div>
    );
}
