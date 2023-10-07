import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Modul({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container w-full m-auto">
                <h1 className="text-center font-bold mt-4">Pilih Modul</h1>
                <Link href={route("working-permits.index")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Working Permits</p>
                    </div>
                </Link>
                <Link href={route("apar.index")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">APAR</p>
                    </div>
                </Link>
                <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                    <p className="text-center font-bold">Incidents</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
