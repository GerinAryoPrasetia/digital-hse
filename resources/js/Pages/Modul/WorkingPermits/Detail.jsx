import formatDateToDDMMYYYYHHMM from "@/Helper/ParseDate";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { Collapse, Image, Steps, Table } from "antd";
import React, { useEffect, useState } from "react";

export default function Detail({ auth, permit, flash }) {
    // console.log("auth", auth.user.id);
    console.log(permit);
    const [activeKey, setActiveKey] = useState(0);
    const [isSupervisor, setIsSupervisor] = useState(false);
    const [isOfficer, setIsOfficer] = useState(false);
    const [showFlash, setShowFlash] = useState(true);
    const [clicked, setClicked] = useState(false);
    const handleFlashClose = () => {
        setShowFlash(false);
    };
    const { data, setData, post, processing, errors, reset } = useForm({});
    const apporve = () => {
        post(route("working-permits.approve", permit.id));
    };

    const reject = () => {
        post(route("working-permits.reject", permit.id));
    };

    // const dataSource = [
    //     {
    //         key: "1",
    //         name: "Mike",
    //         company: 32,
    //         function: "10 Downing Street",
    //     },
    //     {
    //         key: "2",
    //         name: "John",
    //         age: 42,
    //         address: "10 Downing Street",
    //     },
    // ];
    const dataSourceBrief = permit.user_brief?.map((item, index) => ({
        key: index,
        name: item.name,
        company: item.company_name,
        function: item.function_name,
    }));

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Company Name",
            dataIndex: "company",
            key: "company",
        },
        {
            title: "Function",
            dataIndex: "function",
            key: "function",
        },
    ];

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
                            <span className="font-bold">Issuer Email : </span>
                            {permit.issuer.email}
                        </p>
                        <p>
                            <span className="font-bold">
                                Issuer Phone Number :{" "}
                            </span>
                            {permit.issuer.name}
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
                        {/* <p>
                            <span className="font-bold">Work Area : </span>
                        </p> */}
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
                        <p>
                            <span className="font-bold mt-4">
                                Brief description of the work: :{" "}
                            </span>
                        </p>
                        <p>{permit.brief_of_work}</p>
                    </div>
                    <div>
                        <p className="font-bold">User Needed to Brief</p>
                        <Table
                            dataSource={dataSourceBrief}
                            columns={columns}
                            pagination={false}
                        />
                    </div>
                </div>
            ),
        },
        {
            key: 3,
            label: "Safety Precautions Required For The Work",
            children: (
                <div>
                    <div>
                        <p>
                            <span className="font-bold">Procedure : </span>
                        </p>

                        <ul>
                            {permit.safety_procedure.map((item, index) => (
                                <li>
                                    {" "}
                                    {index + 1} . {item.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold">
                                Personal Protective :{" "}
                            </span>
                        </p>

                        <ul>
                            {permit.safety_personal.map((item, index) => (
                                <li>
                                    {" "}
                                    {index + 1} . {item.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold">
                                Equipments Tools & Equipments :{" "}
                            </span>
                        </p>

                        <ul>
                            {permit.safety_equipment.map((item, index) => (
                                <li>
                                    {" "}
                                    {index + 1} . {item.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold mt-4">
                                Additional Comments: :{" "}
                            </span>
                        </p>
                        <p>{permit.additional_comments}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 4,
            label: "Approval",
            children: (
                <div>
                    <div className="mb-4">
                        <p className="font-bold">
                            1. First Step Approval by Supervisor :
                        </p>
                        {permit.is_approved_first_step == 1 ? (
                            <p>Approved by {permit.supervisor.name}</p>
                        ) : (
                            <p>
                                Waiting Approval From {permit.supervisor.name}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <p className="font-bold">
                            2. Second Step Approval by Safety Officer :
                        </p>
                        {permit.is_approved_second_step == 1 ? (
                            <p>Approved by {permit.officer.name}</p>
                        ) : (
                            <p>Waiting Approval From {permit.officer.name}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <p className="font-bold">3. Finish Work Approval :</p>
                        {permit.is_done_by_officer == 1 ? (
                            <p>
                                Approved by {permit.officer.name} (Safety
                                Officer)
                            </p>
                        ) : (
                            <p>
                                Waiting Approval From {permit.officer.name}{" "}
                                (Safety Officer)
                            </p>
                        )}
                        {permit.is_done_by_supervisor == 1 ? (
                            <p>
                                Approved by {permit.supervisor.name}{" "}
                                (Supervisor)
                            </p>
                        ) : (
                            <p>
                                Waiting Approval From {permit.supervisor.name}{" "}
                                (Supervisor)
                            </p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key: 5,
            label: "Attachments",
            children: (
                <div>
                    {permit.attachments.map((item, index) =>
                        item.attachment_type.indexOf("image/") === 0 ? (
                            <Image
                                key={index} // Remember to add a unique key for each rendered element
                                width={200}
                                src={`/storage/working_permit_attachments/${item.attachment_path}`}
                            />
                        ) : null
                    )}
                </div>
            ),
        },
    ];

    // let step = permit./
    useEffect(() => {
        if (permit.is_approved_first_step == 1) {
            setActiveKey(1);
        }
        if (permit.is_approved_second_step == 1) {
            setActiveKey(2);
        }
        if (permit.is_done_by_officer == 1 && permit.is_done_by_supervisor) {
            setActiveKey(3);
        }

        if (permit.supervisor_id == auth.user.id) {
            setIsSupervisor(true);
        }
        if (permit.officer_id == auth.user.id) {
            setIsOfficer(true);
        }
    }, [clicked, activeKey]);

    return (
        <Authenticated user={auth.user}>
            <div>
                <div>
                    <h3 className="text-center font-bold text-2xl mt-4">
                        Permit {permit.permit_number}
                    </h3>
                    <p className="text-center text-sm mb-4">
                        issued at :{" "}
                        {formatDateToDDMMYYYYHHMM(permit.created_at)} WIB
                    </p>
                    {permit.is_rejected == 1 && (
                        <div>
                            <p className="text-center text-red-600 mb-4">
                                This Permit is Rejected
                            </p>
                        </div>
                    )}
                    <div className="container mx-auto w-[80%] items-center">
                        <div>
                            <Steps
                                direction="vertical"
                                current={activeKey}
                                size="small"
                                items={[
                                    {
                                        title: "First Step Approval",
                                        description:
                                            "Approval from Supervisor " +
                                            permit.supervisor.name,
                                    },
                                    {
                                        title: "Second Step Approval",
                                        description:
                                            "Approval from Safety Officer " +
                                            permit.officer.name,
                                    },
                                    {
                                        title: "Work Done Approval",
                                        description: "Work Done Approval",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <Collapse defaultActiveKey={[]} items={items} />

                {isSupervisor && permit.is_approved_first_step == 0 && (
                    <div>
                        <div className="flex justify-evenly my-4">
                            <button
                                className={
                                    `bg-red-500 text-white px-4 py-2 rounded-lg ` +
                                    (permit.is_rejected == 1 ? "hidden" : "")
                                }
                                onClick={reject}
                            >
                                Reject
                            </button>

                            <button
                                className={
                                    `bg-green-500 text-white px-4 py-2 rounded-lg ` +
                                    (permit.is_rejected == 1 ? "hidden" : "")
                                }
                                onClick={apporve}
                            >
                                Approve First Approval
                            </button>
                        </div>
                        <div className="flex justify-center my-4"></div>
                    </div>
                )}
                {isOfficer &&
                    permit.is_approved_second_step == 0 &&
                    permit.is_approved_first_step == 1 && (
                        <div>
                            <div className="flex justify-evenly my-4">
                                <button
                                    className={
                                        `bg-green-500 text-white px-4 py-2 rounded-lg ` +
                                        (permit.is_rejected == 1
                                            ? "hidden"
                                            : "")
                                    }
                                    onClick={reject}
                                >
                                    Reject
                                </button>
                                <button
                                    className={
                                        `bg-green-500 text-white px-4 py-2 rounded-lg ` +
                                        (permit.is_rejected == 1
                                            ? "hidden"
                                            : "")
                                    }
                                    onClick={apporve}
                                >
                                    Approve Second Approval
                                </button>
                            </div>
                            <div className="flex justify-center my-4"></div>
                        </div>
                    )}
                {isOfficer &&
                    isSupervisor &&
                    permit.is_approved_second_step == 1 &&
                    permit.is_approved_first_step == 1 &&
                    (permit.is_done_by_officer == 0 ||
                        permit.is_done_by_supervisor == 0) && (
                        <div>
                            <div className="flex justify-evenly my-4">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    onClick={reject}
                                >
                                    Reject
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    onClick={apporve}
                                >
                                    Approve Work Done
                                </button>
                            </div>
                            <div className="flex justify-center my-4"></div>
                        </div>
                    )}
            </div>
        </Authenticated>
    );
}
