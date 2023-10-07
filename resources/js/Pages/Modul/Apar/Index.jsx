import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Apar({ auth }) {
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
            </div>
        </Authenticated>
    );
}
