import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import List from "./List";

export default function AllWorks({ auth, items }) {
    console.log("TE");
    return (
        <Authenticated user={auth.user}>
            <div>
                <List items={items} />
            </div>
        </Authenticated>
    );
}
