import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Collapse } from "antd";
import React from "react";

export default function Detail({ auth, permit }) {
    console.log(permit);
    const items = [
        {
            key: 1,
            label: "Requestor Information",
            children: (
                <div>
                    <div>
                        <p>
                            <span className="font-bold">Issuer Name : </span>
                            {permit.issuer.name}
                        </p>
                        <p>
                            <span className="font-bold">Issuer ID : </span>
                            {permit.issuer.reference_id}
                        </p>
                        <p>
                            <span className="font-bold">Company Name : </span>
                            Company Name
                        </p>
                        <p>
                            <span className="font-bold">
                                Issuer Supervisor :{" "}
                            </span>
                            {permit.supervisor.name}
                        </p>
                        <p>
                            <span className="font-bold">
                                Issuer Department :{" "}
                            </span>
                            {permit.issuer.departement}
                        </p>
                        <p>
                            <span className="font-bold">
                                Equipment to Work On :{" "}
                            </span>
                            {permit.equipment_to_work}
                        </p>
                    </div>
                </div>
            ),
        },
        {
            key: 2,
            label: "Working Permit Detail",
            children: (
                <div>
                    <div>
                        <p>
                            <span className="font-bold">Permit to Work : </span>
                            {permit.permit_to_work}
                        </p>
                        <p>
                            <span className="font-bold">Work Site : </span>
                            {permit.work_site}
                        </p>
                        <p>
                            <span className="font-bold">Work Area : </span>
                        </p>
                        {/* TODO: add WOrk area */}
                        {/* {permit.permit_to_work.map((item, index) => (
                            <p>{item.data}</p>
                        ))} */}
                        <p>
                            <span className="font-bold">
                                Nature of work to be performed :{" "}
                            </span>
                        </p>

                        <ul>
                            {permit.nature_of_work.map((item, index) => (
                                <li>
                                    {" "}
                                    {index + 1} . {item.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <Authenticated user={auth.user}>
            <div>
                <Collapse defaultActiveKey={[1, 2]} items={items} />
            </div>
        </Authenticated>
    );
}
