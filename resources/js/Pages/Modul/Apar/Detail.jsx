import PrimaryButton from "@/Components/PrimaryButton";
import { formatDateToDDMMYYYY } from "@/Helper/ParseDate";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { Collapse } from "antd";
import React, { useState } from "react";

export default function Detail({ auth, apar }) {
    console.log(apar);

    const verifyAparP2K = (e) => {
        // setData({ hse_id: "", p2k_id: auth.user.id, ...data });
        router.post(route("apar.verify"), {
            apar_report_id: apar.id,
            verified_by_hse: false,
            verified_by_p2k: true,
        });
    };
    const verifyAparHSE = (e) => {
        router.post(route("apar.verify"), {
            apar_report_id: apar.id,
            verified_by_hse: true,
            verified_by_p2k: false,
        });
    };
    const items = [
        {
            key: 1,
            label: "APAR Report Detail",
            children: (
                <div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Report Number :</p>
                        <p>{apar.apar_report_number}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Area :</p>
                        <p>{apar.apar_area.area_name}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Checked By :</p>
                        <p>{apar.checked_by.name}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Acknowladge By :</p>
                        <p>{apar.acknowladge_user.name}</p>
                    </div>
                    {/* APAR DETAIL */}
                    <h3 className="font-bold text-center mt-4">
                        Spesifikasi APAR
                    </h3>
                    <div className="flex">
                        <p className="font-semibold mr-1">Production : </p>
                        <p>{apar.apar_production}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Type : </p>
                        <p>{apar.apar_type}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Jenis : </p>
                        <p>{apar.apar_jenis}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Tahun Produksi : </p>
                        <p>{apar.apar_year_of_production}</p>
                    </div>
                    <h3 className="font-bold text-center mt-4">Reffil</h3>
                    <div className="flex">
                        <p className="font-semibold mr-1">Expired At : </p>
                        <p>{formatDateToDDMMYYYY(apar.expired_at)}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Control : </p>
                        <p>{apar.spec_control}</p>
                    </div>
                    <h3 className="font-bold text-center  mt-4">Uji Tekan</h3>
                    <div className="flex">
                        <p className="font-semibold mr-1">Control : </p>
                        <p>{apar.checked_pressure_control}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Tanggal Uji : </p>
                        <p>{formatDateToDDMMYYYY(apar.pressure_control_at)}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">
                            Expire Tanggal Uji :{" "}
                        </p>
                        <p>
                            {formatDateToDDMMYYYY(
                                apar.pressure_control_expired_at
                            )}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Hasil : </p>
                        <p>{apar.pressure_control}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 2,
            label: "APAR Item Condition",
            children: (
                <div>
                    <div className="flex">
                        <p className="font-semibold mr-1">
                            Tahun Pengecekan :{" "}
                        </p>
                        <p>{apar.apar_condition[0]?.year_checked}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">
                            Bulan Pengecekan :{" "}
                        </p>
                        <p>{apar.apar_condition[0]?.month_checked}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">PIC HSE : </p>
                        <p>{apar.apar_condition[0]?.hse?.name}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">PIC P2K : </p>
                        <p>{apar.apar_condition[0]?.p2k?.name}</p>
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Verified by HSE : </p>
                        {apar.apar_condition[0]?.verified_by_hse == 0 ? (
                            <p className=" text-yellow-500">
                                Waiting for verification
                            </p>
                        ) : (
                            <p className="text-green-500">Verified</p>
                        )}
                    </div>
                    <div className="flex">
                        <p className="font-semibold mr-1">Verified by P2K : </p>
                        {apar.apar_condition[0]?.verified_by_p2k == 0 ? (
                            <p className=" text-yellow-500">
                                Waiting for verification
                            </p>
                        ) : (
                            <p className="text-green-500">Verified</p>
                        )}
                    </div>
                    <h3 className="font-bold text-center">Item Condition</h3>
                    {apar.apar_condition.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" border p-2 rounded-md my-2"
                            >
                                <div className="flex">
                                    <p className="font-semibold mr-1">
                                        Item :{" "}
                                    </p>
                                    <p>
                                        {
                                            item.apar_item_condition.apar_item
                                                .item_name
                                        }
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="font-semibold mr-1">
                                        Condition :{" "}
                                    </p>
                                    <p>{item.apar_item_condition.condition}</p>
                                </div>
                                {item.apar_item_condition.condition ==
                                    "NOT OK" && (
                                    <div>
                                        <h3 className="font-bold text-center">
                                            Remarks
                                        </h3>
                                        <div className="">
                                            <p className="font-semibold mr-1">
                                                Keterangan :{" "}
                                            </p>
                                            <p>
                                                {
                                                    item.apar_item_condition
                                                        .status_remarks
                                                }
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="font-semibold mr-1">
                                                Penyebab Kemungkinan :{" "}
                                            </p>
                                            <p>
                                                {
                                                    item.apar_item_condition
                                                        .possible_cause
                                                }
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold mr-1">
                                                Tanggal Remarks :{" "}
                                            </p>
                                            <p>
                                                {formatDateToDDMMYYYY(
                                                    item.apar_item_condition
                                                        .tanggal_remarks
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ),
        },
    ];
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h4 className="text-center my-4  text-xl">
                    APAR <span className="font-bold">{apar.apar_number}</span>{" "}
                    on Area{" "}
                    <span className="font-bold">
                        {apar.apar_area.area_name}
                    </span>
                </h4>
                <p className="text-center mb-4">
                    Report No. {apar.apar_report_number}
                </p>
                <Collapse items={items} />
                {apar.apar_condition[0]?.p2k_id == auth.user.id &&
                    apar.apar_condition[0]?.verified_by_p2k == 0 && (
                        <div className="flex mt-4">
                            <PrimaryButton onClick={verifyAparP2K}>
                                Verify P2K
                            </PrimaryButton>
                        </div>
                    )}
                {apar.apar_condition[0]?.hse_id == auth.user.id &&
                    apar.apar_condition[0]?.verified_by_hse == 0 && (
                        <div className="mt-4 items-center flex">
                            <PrimaryButton onClick={verifyAparHSE}>
                                Verify HSE
                            </PrimaryButton>
                        </div>
                    )}
            </div>
        </Authenticated>
    );
}
