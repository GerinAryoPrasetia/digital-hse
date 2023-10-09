import formatDateToDDMMYYYYHHMM from "@/Helper/ParseDate";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ListApar({ items = [], ...props }) {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6 justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold">
                                {item.apar_report_number}
                            </p>
                            <p className="text-sm">
                                Created At : {""}
                                {formatDateToDDMMYYYYHHMM(item.created_at)} WIB
                            </p>
                            <p className="text-sm">
                                Checked by : {""}
                                {item.checked_by.name}
                            </p>
                            <p className="text-sm">
                                Area : {""}
                                {item.apar_area.area_name}
                            </p>
                            {/* <p className="text-sm">
                                Status :{" "}
                                <span
                                    className={`text-sm font-bold ${
                                        item.is_done_by_officer === 0 &&
                                        item.is_done_by_supervisor === 0
                                            ? "text-yellow-500"
                                            : "text-green-500"
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </p> */}
                        </div>
                        <div>
                            <Link href={route("apar.show", item.id)}>
                                <p className=" text-blue-600">Open</p>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
