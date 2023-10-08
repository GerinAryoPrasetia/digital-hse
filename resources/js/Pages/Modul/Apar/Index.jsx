import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import ListApar from "./ListApar";
import { Select } from "antd";
import { router } from "@inertiajs/react";

export default function Apar({ auth, apar_report, area }) {
    // console.log(apar_report);
    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    const { items } = usePage().props;
    const [filters, setFilters] = useState("ID");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Initially load all items when the component mounts
        setFilteredItems(items);
    }, [items]);

    const applyFilters = () => {
        // Send a request to the server with the filter parameters using Inertia.get
        router.get(
            route("apar.index"),
            { area_id: filters },
            {
                preserveState: true,
            }
        );
        console.log("filter");
    };
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-2xl mt-4">
                    APAR Report
                </h2>
                <Link href={route("apar.create")}>
                    <div className="m-auto mt-4 mb-4 text-center">
                        <PrimaryButton>Submit Report</PrimaryButton>
                    </div>
                </Link>
                <p className="text-center mb-2">Choose Area</p>
                <div className="flex px-6 mb-4">
                    <Select
                        placeholder="Select Area"
                        showSearch
                        optionFilterProp="children"
                        filterOption={filterOption}
                        style={{
                            width: "100%",
                            height: 42,
                        }}
                        options={area.map((item) => ({
                            label: item.area_name,
                            value: item.id,
                        }))}
                        onChange={(e) => {
                            setFilters(e);
                            console.log(e);
                        }}
                        className="mr-2"
                    />
                    <PrimaryButton onClick={applyFilters}>Filter</PrimaryButton>
                </div>
                <div>
                    <p className="text-center font-bold">Your Report</p>
                    <ListApar items={filteredItems} />
                    {items.length == 0 || filteredItems == 0 ? (
                        <p className="text-center text-sm mb-4 mt-4 cursor-pointer">
                            No Data
                        </p>
                    ) : (
                        <Link href={route("listApprovals")}>
                            <div>
                                <p className="text-center text-sm mb-4 mt-4 text-blue-600">
                                    Show More
                                </p>
                            </div>
                        </Link>
                    )}
                </div>
                {/* <div>
                    <p className="text-center font-bold">Need Your Approval</p>
                    <ListApar items={apar_report} />
                </div> */}
            </div>
        </Authenticated>
    );
}
