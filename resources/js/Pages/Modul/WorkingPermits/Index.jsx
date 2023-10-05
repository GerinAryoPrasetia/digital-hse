import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function WorkingPermits({ auth }) {
    return <Authenticated user={auth.user}>WorkingPermits</Authenticated>;
}
