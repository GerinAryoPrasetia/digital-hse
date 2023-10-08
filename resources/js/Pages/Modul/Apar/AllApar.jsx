import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import ListApar from "./ListApar";

export default function AllApar({ auth, items }) {
    return (
        <Authenticated user={auth.user}>
            <div>
                <ListApar items={items} />
            </div>
        </Authenticated>
    );
}
