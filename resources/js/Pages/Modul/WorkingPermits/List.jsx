import formatDateToDDMMYYYYHHMM from "@/Helper/ParseDate";
import React from "react";
import { Link } from "@inertiajs/react";

export default function List({ items = [], ...props }) {
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
                                {item.permit_number}
                            </p>
                            <p className="text-sm">
                                Created At : {""}
                                {formatDateToDDMMYYYYHHMM(item.created_at)} WIB
                            </p>
                            <p className="text-sm">
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
                            </p>
                        </div>
                        <div>
                            <Link href={route("working-permits.show", item.id)}>
                                <p className=" text-blue-600">Open</p>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
