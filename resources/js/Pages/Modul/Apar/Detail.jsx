import { formatDateToDDMMYYYY } from "@/Helper/ParseDate";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Collapse } from "antd";
import React from "react";

export default function Detail({ auth, apar }) {
    console.log(apar);
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
                    <h3 className="font-bold text-center">Item Condition</h3>
                    {apar.apar_condition.map((item, index) => {
                        console.log("item", item, index);
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
                <h3 className="text-center my-4 font-bold text-xl">
                    {apar.apar_report_number}
                </h3>
                <Collapse items={items} />
            </div>
        </Authenticated>
    );
}
