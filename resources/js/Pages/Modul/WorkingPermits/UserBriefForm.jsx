import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function UserBriefForm({ index, formData, setFormData }) {
    const userBriefData = formData.userBrief[index];
    const handleChangeName = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.name = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeCompany = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.companyName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeFunction = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.functionName = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    const handleChangeNoTelp = (e) => {
        // Update the 'checked' field in the specific item
        userBriefData.noTelp = e.target.value;

        // Update the form data with the modified item
        setFormData((prevData) => ({
            ...prevData,
            userBrief: [...prevData.userBrief],
        }));
    };

    return (
        <div className="my-4">
            <p className="font-bold">User {index + 1}</p>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Name"
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
                    value="Company Name"
                />
                <TextInput
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company-name"
                    value={userBriefData.companyName}
                    onChange={handleChangeCompany}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="Function Name"
                />
                <TextInput
                    type="text"
                    name="function"
                    id="function"
                    autoComplete="function-name"
                    value={userBriefData.functionName}
                    onChange={handleChangeFunction}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div>
                <InputLabel
                    className="block text-sm font-medium text-gray-700"
                    value="No Telp"
                />
                <TextInput
                    type="text"
                    name="function"
                    id="function"
                    autoComplete="function-name"
                    value={userBriefData.noTelp}
                    onChange={handleChangeNoTelp}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
}
