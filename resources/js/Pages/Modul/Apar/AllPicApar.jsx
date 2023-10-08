import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import ListApar from "./ListApar";

export default function AllPicApar({ auth, items }) {
    return (
        <Authenticated user={auth.user}>
            <div>
                <List items={items} />
            </div>
        </Authenticated>
    );
}
