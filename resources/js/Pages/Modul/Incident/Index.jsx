import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
// import List from "./List";

export default function Incidents({ auth, works, approval }) {
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-2xl mt-4">
                    Accident Report
                </h2>
                <Link href={route("incident.create")}>
                    <div className="m-auto mt-4 mb-4 text-center">
                        <PrimaryButton>Create Accident Report</PrimaryButton>
                    </div>
                </Link>
                <div>
                    <h3 className="text-center font-bold">Your Work</h3>
                    {/* <List items={works} /> */}

                    <p className="text-center text-sm mb-4 mt-4 cursor-pointer">
                        No Data
                    </p>
                </div>
                <hr />
                <div className="mt-4">
                    <h3 className="text-center font-bold">
                        Need Your Approval
                    </h3>
                    {/* <List items={approval} /> */}
                    <p className="text-center text-sm mb-4 mt-4 cursor-pointer">
                        No Data
                    </p>
                </div>
            </div>
        </Authenticated>
    );
}
