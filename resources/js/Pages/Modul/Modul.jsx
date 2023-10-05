import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Modul({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container w-full m-auto">
                <h1 className="text-center font-bold mt-4">Pilih Modul</h1>
                <Link href={route("working-permits.index")}>
                    <div className="m-auto p-4 bg-white my-4 rounded-lg mx-6">
                        <p className="text-center">Working Permits</p>
                    </div>
                </Link>
                <div className="m-auto p-4 bg-white my-4 rounded-lg mx-6">
                    <p className="text-center">APAR</p>
                </div>
                <div className="m-auto p-4 bg-white my-4 rounded-lg mx-6">
                    <p className="text-center">Incidents</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
