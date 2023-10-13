import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { Col, Divider, Row } from "antd";
import React from "react";

// const style = {
//     background: "#0092ff",
//     padding: "8px 0",
// };
export default function Modul({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div>
                <div className=" bg-green-700 rounded-b-xl p-4">
                    <h3 className=" text-white text-xl">
                        Welcome back,{" "}
                        <span className=" font-bold"> {auth.user.name} </span> !
                    </h3>
                </div>
            </div>
            <div className="container px-6">
                <Divider orientation="left">
                    <p className="font-bold">Choose Modul</p>
                </Divider>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <Link href={route("working-permits.index")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Working Permits
                                </p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("apar.index")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">APAR</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("incident.index")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Incidents
                                </p>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">JSA</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Laporan UPTD
                                </p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Safety patrol
                                </p>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Safety talk
                                </p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">Hiradc</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Legal HSE
                                </p>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Laporan Dinkes
                                </p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">CSR</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Safety Riding
                                </p>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    Evakuasi drill
                                </p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Link href={route("coming-soon")}>
                            <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                                <p className="text-center text-white">
                                    APD control
                                </p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        </AuthenticatedLayout>
    );
}
