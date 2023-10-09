import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ComingSoon({ auth }) {
    return (
        <Authenticated user={auth.user}>
            <div className="flex flex-col items-center h-screen align-middle justify-center">
                <div className=" w-1/2 mb-4">
                    <img src="/images/coming-soon.svg" alt="" className="" />
                </div>

                <p className="text-center mb-4">
                    This Modul is Still Under Development. We Will Coming Soon!
                </p>
                <Link href={route("modul")}>
                    <PrimaryButton>Back to Home</PrimaryButton>
                </Link>
            </div>
        </Authenticated>
    );
}
