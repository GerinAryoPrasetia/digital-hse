import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Select, Steps, TimePicker, Upload, theme } from "antd";
import { router, useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";

import datas from "./data.json";
import SecondaryButton from "@/Components/SecondaryButton";
import PersonInvolvedForm from "./PersonInvolvedForm";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PersonInjuredForm from "./PersonInjuredForm";
import RecommendationForm from "./RecommendationForm";

export default function Create({ auth }) {
    const formatTime = "HH:mm";
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [value, setValue] = useState(null);
    const timeRef = useRef(null);
    const [content, setContent] = useState("");
    const [fileList, setFileList] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        personInvolved: [],
        personInjured: [],
        attachments: [],
        klasifikasi: [],
        divisi: "",
        departement: "",
        seksi: "",
        tanggalKejadian: "",
        waktuKejadian: "",
        tanggalDilaporkan: "",
        jamDilaporkan: "",
        jamMulaiKerja: "",
        jamAkhirKerja: "",
        lokasiKejadian: "",
        namaPengawasKerja: "",
        kerugianMaterial: "",
        kategoriTingkatPenyelidikan: "",
        keterangan: "",
        uraianKejadian: "",
        fotoPendukungUraianKejadian: "",
        penyebabLangsungKecelakaan: [],
        rekomendasi: [],
    });

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setContent(data);
    };

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await router.post("/image-upload", formData);
            const imageUrl = response.data.url;

            // Insert the uploaded image into the CKEditor content
            ClassicEditor.editors.default.insertHtml(
                `<img src="${imageUrl}" alt="Uploaded Image" />`
            );
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = () => {
        // Send content to the Laravel backend to save in the database
        Inertia.post("/save-content", { content }).then(() => {
            // Handle success or error
        });
    };
    const onChange = (time, timeString) => {
        setValue(time);
    };

    const handleChangetime = (key, timeString) => {
        setData(key, timeString);
    };
    const handleCancel = () => setPreviewOpen(false);

    const handleModal = () => {
        setPreviewOpen(true);
    };

    const addItemToFormData = () => {
        setData("personInvolved", [
            ...data.personInvolved,
            {
                name: "",
                idNumber: "",
                saksi: "",
                idNumberSaksi: "",
                natureInjury: [],
                bodyInjury: [],
                mechanism: [],
                keparahan: "",
            },
        ]);
    };

    const addItemPersonInjuredToFormData = () => {
        setData("personInjured", [
            ...data.personInjured,
            {
                name: "",
                idNumber: "",
                tanggalLahir: "",
                idNumberSaksi: "",
                kelamin: "",
                jabatan: "",
                lamaBekerja: "",
                bagian: "",
                seksi: "",
                isKaryawanPT: "",
                namaPerusahaan: "",
                namaPengawasKerja: "",
                natureInjury: [],
                bodyPart: [],
                mechanism: [],
                keparahan: "",
            },
        ]);
    };

    const addItemToRecomedation = () => {
        setData("rekomendasi", [
            ...data.rekomendasi,
            {
                rekomendasi: "",
                pic: "",
                dueDate: "",
                actualDueDate: "",
            },
        ]);
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
    const handleCancelUploadImage = () => setPreviewOpen(false);
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

    const submit = (e) => {
        e.preventDefault();
        post(route("incident.store"));
    };

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
                        <TimePicker
                            format={formatTime}
                            onChange={onChange}
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
                        <TimePicker
                            format={formatTime}
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Jam Mulai Kerja" />
                        <TimePicker
                            format={formatTime}
                            onChange={(time, timeString) =>
                                handleTimeChange("mulai_kerja", timeString)
                            }
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Jam Akhir Kerja" />
                        <TimePicker
                            format={formatTime}
                            onChange={onChange}
                            className="mt-1 block w-full text-black"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="divisi" value="Lokasi Kejadian" />
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
                            value="Nama Pengawas Kerja"
                        />
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
                            value="Karyawan yang terlibat"
                        />
                        {data.personInvolved?.map((item, index) => (
                            <div key={index}>
                                <PersonInvolvedForm
                                    index={index} // Pass the index to the component
                                    formData={data}
                                    setFormData={setData}
                                />
                            </div>
                        ))}
                        <div>
                            <PrimaryButton
                                onClick={addItemToFormData}
                                className=""
                            >
                                Add Person
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "URAIAN KEJADIAN / DESCRIPTION OF INCIDENT",
            content: (
                <div className="mx-5 my-4 text-left">
                    <div>
                        <InputLabel value={"Uraian Kejadian"} />
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onInit={(editor) => {
                                editor.plugins.get(
                                    "FileRepository"
                                ).createUploadAdapter = (loader) => {
                                    return {
                                        upload: handleImageUpload,
                                    };
                                };
                            }}
                            config={{
                                ckfinder: {
                                    // Upload the images to the server using the CKFinder QuickUpload command
                                    // You have to change this address to your server that has the ckfinder php connector
                                    uploadUrl:
                                        "/ckfinder/connector?command=QuickUpload&type=Images&responseType=json",
                                },
                            }}
                            onChange={handleEditorChange}
                        />
                    </div>
                    <div>
                        <InputLabel value={"Foto Pendukung Uraian Kejadian"} />
                        <div className="">
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
                                onCancel={handleCancelUploadImage}
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
                    </div>
                </div>
            ),
        },
        {
            title: "PENYEBAB KECELAKAAN / CAUSE OF ACCIDENT",
            content: (
                <div className="mx-5 my-4 text-left">
                    <h2>
                        PENYEBAB LANGSUNG KECELAKAAN / IMMEDIATE CAUSES
                        (SUBSTANDARD ACTIONS & CONDITIONS)
                    </h2>
                    <div className="mb-4">
                        <InputLabel value={"Machine/Equipment Condition"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={datas.data.klasifikasi?.map((data) => ({
                                label: data.value,
                                value: data.value,
                            }))}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel value={"Body Condition"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={datas.data.body?.map((data) => ({
                                label: data.value,
                                value: data.value,
                            }))}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel value={"Working Hour"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={datas.data.working_hour?.map((data) => ({
                                label: data.value,
                                value: data.value,
                            }))}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel value={"Document / System"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={datas.data.document?.map((data) => ({
                                label: data.value,
                                value: data.value,
                            }))}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel value={"PPE / Other Safety Equipment"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={datas.data.ppe?.map((data) => ({
                                label: data.value,
                                value: data.value,
                            }))}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <h2>Perkiraan Kerugian</h2>
                    <div>
                        <InputLabel value={"Kerugian Material"} />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={[
                                {
                                    label: "< US$ 1,000",
                                    value: "< US$ 1,000",
                                },
                                {
                                    label: "US$1,001 - US$5,000",
                                    value: "US$1,001 - US$5,000",
                                },
                                {
                                    label: "US$5,001 - US$20,000",
                                    value: "US$5,001 - US$20,000",
                                },
                                {
                                    label: "US$20,001 - US$100,000",
                                    value: "US$20,001 - US$100,000",
                                },
                                {
                                    label: "> US$100,001",
                                    value: "> US$100,001",
                                },
                            ]}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                    <div>
                        <InputLabel
                            value={
                                "Kategori tingkat penyelidikan ( INVESTIGATION LEVEL CATEGORY )"
                            }
                        />
                        <Select
                            style={{
                                width: "100%",
                                height: 42,
                            }}
                            options={[
                                {
                                    label: "Berat Sekali (Catasthropic)",
                                    value: "Berat Sekali (Catasthropic)",
                                },
                                {
                                    label: "Berat (Major)",
                                    value: "Berat (Major)",
                                },
                                {
                                    label: "Sedang (Moderate)",
                                    value: "Sedang (Moderate)",
                                },
                                {
                                    label: "Ringan (Minor)",
                                    value: "Ringan (Minor)",
                                },
                                {
                                    label: "Ringan Sekali (Insignificant)",
                                    value: "Ringan Sekali (Insignificant)",
                                },
                            ]}
                            onChange={(e) => {
                                // setData("safetyOfficerId", e);
                            }}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "ORANG YANG CEDERA / PERSON INJURED",
            content: (
                <div className="mx-5 my-4 text-left">
                    <div>
                        <InputLabel
                            htmlFor="divisi"
                            value="Orang yang cedera"
                        />
                        {data.personInjured?.map((item, index) => (
                            <div key={index}>
                                <PersonInjuredForm
                                    index={index} // Pass the index to the component
                                    formData={data}
                                    setFormData={setData}
                                    datas={datas}
                                />
                            </div>
                        ))}
                        <div>
                            <PrimaryButton
                                onClick={addItemPersonInjuredToFormData}
                                className=""
                            >
                                Add Person
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Penyebab Lengkap dan Rekomendasi",
            content: (
                <div className="mx-5 my-4 text-left">
                    <div>
                        <InputLabel
                            className="mb-2"
                            value={
                                "Penyebab Langung Kecelakaan (Tindakan & Kondisi Tidak Standar)"
                            }
                        />
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onInit={(editor) => {
                                editor.plugins.get(
                                    "FileRepository"
                                ).createUploadAdapter = (loader) => {
                                    return {
                                        upload: handleImageUpload,
                                    };
                                };
                            }}
                            config={{
                                ckfinder: {
                                    // Upload the images to the server using the CKFinder QuickUpload command
                                    // You have to change this address to your server that has the ckfinder php connector
                                    uploadUrl:
                                        "/ckfinder/connector?command=QuickUpload&type=Images&responseType=json",
                                },
                            }}
                            onChange={handleEditorChange}
                        />
                    </div>
                    <div>
                        <InputLabel
                            value={"Rekomendasi / Recommendation"}
                            className="mt-5"
                        />
                        {data.rekomendasi?.map((item, index) => (
                            <div key={index}>
                                <RecommendationForm
                                    index={index} // Pass the index to the component
                                    formData={data}
                                    setFormData={setData}
                                    datas={datas}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <PrimaryButton
                            onClick={addItemToRecomedation}
                            className=""
                        >
                            Add Recommendation
                        </PrimaryButton>
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
                    <form onSubmit={submit}>
                        <PrimaryButton type="primary">Done</PrimaryButton>
                    </form>
                )}
            </div>
            <div>
                <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <div className="flex flex-col items-center">
                        <div className=" w-1/2 mb-4">
                            <img
                                src="/images/coming-soon.svg"
                                alt=""
                                className=""
                            />
                        </div>
                        <p className="font-bold text-center">
                            Opps Sorry... This Feature is Still Under
                            Development.
                        </p>
                        <p>
                            Call us, if you want to try it as soon as possible.
                        </p>
                    </div>
                </Modal>
            </div>
        </Authenticated>
    );
}
