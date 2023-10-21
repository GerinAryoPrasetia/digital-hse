import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function PersonInvolvedForm({ index, formData, setFormData }) {
    const userBriefData = formData.personInvolved[index];
    const handleChangeName = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.name = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInvolved: [...prevData.personInvolved],
        }));
    };

    const handleChangeCompany = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.idNumber = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInvolved: [...prevData.personInvolved],
        }));
    };

    const handleChangeFunction = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.saksi = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInvolved: [...prevData.personInvolved],
        }));
    };

    const handleChangeNoTelp = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.idNumberSaksi = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            personInvolved: [...prevData.personInvolved],
        }));
    };

    return (
        <div className="my-4">
            <p className="font-bold">Karyawan {index + 1}</p>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nama Karyawan"
                />
                <TextInput
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    value={userBriefData.name}
                    onChange={handleChangeName}
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
                    value={userBriefData.idNum}
                    onChange={handleChangeCompany}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nama Saksi"
                />
                <TextInput
                    type="text"
                    name="function"
                    id="function"
                    autoComplete="function-name"
                    value={userBriefData.namaSaksi}
                    onChange={handleChangeFunction}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Nomor ID Saksi"
                />
                <TextInput
                    type="text"
                    name="function"
                    id="function"
                    autoComplete="function-name"
                    value={userBriefData.idSaksi}
                    onChange={handleChangeNoTelp}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
}
