import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { DatePicker, Select } from "antd";
import React from "react";

export default function RecommendationForm({ index, formData, setFormData }) {
    const data = formData.rekomendasi[index];
    return (
        <div>
            <p className="font-bold">Rekomendasi {index + 1}</p>
            <div className="mb-2">
                <InputLabel value={"Rekomendasi"} />
                <TextInput
                    type="text"
                    value={data.rekomendasi}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                        data.rekomendasi = e.target.value;

                        setFormData((prevData) => ({
                            ...prevData,
                            rekomendasi: [...prevData.rekomendasi],
                        }));
                    }}
                />
            </div>
            <div className="mb-2">
                <InputLabel value={"PIC"} />
                <TextInput
                    type="text"
                    value={data.pic}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                        data.pic = e.target.value;

                        setFormData((prevData) => ({
                            ...prevData,
                            rekomendasi: [...prevData.rekomendasi],
                        }));
                    }}
                />
            </div>
            <div className="mb-2">
                <InputLabel value={"Plan Tanggal Selesai"} />
                <DatePicker
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(date, dateString) => {
                        data.dueDate = dateString;

                        setFormData((prevData) => ({
                            ...prevData,
                            rekomendasi: [...prevData.rekomendasi],
                        }));
                    }}
                />
            </div>
            <div className="mb-2">
                <InputLabel value={"Actual Tanggal Selesai"} />
                <DatePicker
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(date, dateString) => {
                        data.actualDueDate = dateString;

                        setFormData((prevData) => ({
                            ...prevData,
                            rekomendasi: [...prevData.rekomendasi],
                        }));
                    }}
                />
            </div>
        </div>
    );
}
