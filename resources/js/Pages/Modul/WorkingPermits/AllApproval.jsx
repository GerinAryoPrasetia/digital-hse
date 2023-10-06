import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import List from "./List";

export default function AllApproval({ auth, items }) {
    console.log("aoo");
    return (
        <Authenticated user={auth.user}>
            <div>
                <List items={items} />
            </div>
        </Authenticated>
    );
}
