import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Collapse } from "antd";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import Dropdown from "@/Components/Dropdown";
import Select from "@/Components/Select";

export default function WorkingPermits({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
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
