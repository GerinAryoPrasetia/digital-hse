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
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Incidents</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">JSA</p>
                    </div>
                </Link>
                {/* COMING SOON MODUL */}
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Laporan UPTD</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Safety patrol</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Safety talk</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Hiradc</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Legal HSE</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Laporan Dinkes</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">CSR</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Safety Riding</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Safety Driving</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">Evakuasi drill</p>
                    </div>
                </Link>
                <Link href={route("coming-soon")}>
                    <div className="m-auto p-4 bg-gray-100 my-4 rounded-lg mx-6">
                        <p className="text-center font-bold">APD control</p>
                    </div>
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}
