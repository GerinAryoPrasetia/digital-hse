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
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("working-permits.index")}>
                                <p className="text-center text-white">
                                    Working Permits
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("apar.index")}>
                                <p className="text-center text-white">APAR</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("incident.index")}>
                                <p className="text-center text-white">
                                    Incidents
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">JSA</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Laporan UPTD
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Safety patrol
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Safety talk
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">Hiradc</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Legal HSE
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Laporan Dinkes
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">CSR</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Safety Riding
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="mb-4">
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    Evakuasi drill
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="p-2 bg-green-700 rounded-lg h-24 flex items-center justify-center">
                            <Link href={route("coming-soon")}>
                                <p className="text-center text-white">
                                    APD control
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </AuthenticatedLayout>
    );
}
