import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import List from "./List";

export default function WorkingPermits({ auth, works }) {
    console.log(works);
    // const dummyWorks = [
    //     {
    //         id: "ec0ff09a-baa8-40c8-99b1-0f53e2979cd2",
    //         formNumber: "FORM-1231-XXX",
    //         status: "pending",
    //         workArea: [],
    //         natureOfWork: [],
    //         safetyProcedure: [],
    //         safetyPersonal: [],
    //         safetyEquipment: [],
    //     },
    //     {
    //         id: "ec0ff09a-baa8-40c8-99b1-0f53e2979cd2",
    //         formNumber: "FORM-1233-YYY",
    //         status: "done",
    //         workArea: [],
    //         natureOfWork: [],
    //         safetyProcedure: [],
    //         safetyPersonal: [],
    //         safetyEquipment: [],
    //     },
    //     {
    //         id: "ec0ff09a-baa8-40c8-99b1-0f53e2979cd2",
    //         formNumber: "FORM-1233-YYY",
    //         status: "rejected",
    //         workArea: [],
    //         natureOfWork: [],
    //         safetyProcedure: [],
    //         safetyPersonal: [],
    //         safetyEquipment: [],
    //     },
    // ];
    return (
        <Authenticated user={auth.user}>
            <div className="container m-auto">
                <h2 className="text-center font-bold text-2xl mt-4">
                    Working Permits
                </h2>
                <Link href={route("working-permits.create")}>
                    <div className="m-auto mt-4 mb-4 text-center">
                        <PrimaryButton>Submit Working Permit</PrimaryButton>
                    </div>
                </Link>
                <div>
                    <h3 className="text-center font-bold">Your Work</h3>
                    <List items={works} />
                    <p className="text-center text-sm mb-4 text-blue-600">
                        Show More
                    </p>
                </div>
                <hr />
                <div className="mt-4">
                    <h3 className="text-center font-bold">
                        Need Your Approval
                    </h3>
                    <List items={works} />
                    <p className="text-center text-sm mb-4 text-blue-600">
                        Show More
                    </p>
                </div>
            </div>
        </Authenticated>
    );
}
