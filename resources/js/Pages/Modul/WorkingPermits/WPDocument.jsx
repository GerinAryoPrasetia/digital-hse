import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Svg,
    Line,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        paddingHorizontal: 20,
    },
    section: {
        margin: 10,
        padding: 10,
    },

    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        color: "#000",
        textAlign: "center",
        fontSize: 14,
        marginBottom: 10,
    },
    subSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    textContent: {
        fontSize: 8,
    },
    subHeading: {
        fontSize: 10,
        marginBottom: 5,
        fontWeight: "bold",
        marginTop: 10,
    },

    imageHeader: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    border: {
        border: "1px solid #000",
        padding: "10px 15px",
        alignContent: "center",
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColLarge: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColMedium: {
        width: "33,33%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColFull: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10,
    },
    tableCellLarge: {
        // margin: "auto",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 3,
        fontSize: 10,
    },
    tableTitle: {
        backgroundColor: "#cfcfcf",
    },
});
export default function WPDocument({ data }) {
    console.log(data);
    return (
        <Document creator="digital-hse" author="digital-hse">
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.header}>
                        <View>
                            <Image
                                src="/images/logo-k3.png"
                                style={styles.imageHeader}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Working Permit</Text>
                            <Text style={styles.subHeading}>
                                PT. Spycom Technology Indonesia
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={[styles.tableCell]}>Date</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Kamis, 20 August 2023
                            </Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Permit to Work</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Hot work</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Permit Number</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                WP-123019-PTSPYCOM{" "}
                            </Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Work Site</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Gudang</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>Requestor Information</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Requestor</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Rizky</Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Department</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>IT</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Phone Number</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>08212314212</Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Company</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>PT. XYZ</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>Work Detail</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColLarge, styles.tableTitle]}>
                            <Text style={[styles.tableCell]}>Work area</Text>
                        </View>

                        <View style={[styles.tableColLarge, styles.tableTitle]}>
                            <Text style={styles.tableCell}>
                                Nature of work to be performed
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableColLarge}>
                            <Text style={styles.tableCellLarge}>
                                Hazardous area
                            </Text>
                            <Text style={styles.tableCellLarge}>
                                Explosive atmosphere
                            </Text>
                            <Text style={styles.tableCellLarge}>
                                Isolated area
                            </Text>
                        </View>
                        <View style={styles.tableColLarge}>
                            <Text style={styles.tableCellLarge}>
                                Construction
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColFull, styles.tableTitle]}>
                            <Text style={styles.tableCell}>
                                Brief description of the work:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColFull]}>
                            <Text style={styles.tableCellLarge}>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Veniam eum totam illum
                                cupiditate quaerat incidunt numquam mollitia
                                libero, eius autem sint dolore animi itaque
                                architecto commodi. Iste consequuntur laudantium
                                ut.
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>
                    Safety precaution required for the work
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View
                            style={[styles.tableColMedium, styles.tableTitle]}
                        >
                            <Text style={styles.tableCell}>Procedure</Text>
                        </View>
                        <View
                            style={[styles.tableColMedium, styles.tableTitle]}
                        >
                            <Text style={styles.tableCell}>
                                Personal Protective
                            </Text>
                        </View>
                        <View
                            style={[styles.tableColMedium, styles.tableTitle]}
                        >
                            <Text style={styles.tableCell}>
                                Equipments Tools & Equipments
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColMedium]}>
                            <Text style={styles.tableCellLarge}>LOTO</Text>
                            <Text style={styles.tableCellLarge}>
                                Tool box meeting
                            </Text>
                            <Text style={styles.tableCellLarge}>
                                Client to inform
                            </Text>
                        </View>
                        <View style={[styles.tableColMedium]}>
                            <Text style={styles.tableCellLarge}>Helmet</Text>
                            <Text style={styles.tableCellLarge}>
                                Safety goggles
                            </Text>
                        </View>
                        <View style={[styles.tableColMedium]}>
                            <Text style={styles.tableCellLarge}>Lighting</Text>
                            <Text style={styles.tableCellLarge}>
                                Multi meter
                            </Text>
                            <Text style={styles.tableCellLarge}>
                                Blower/exhaust fan
                            </Text>
                            <Text style={styles.tableCellLarge}>Wrenches</Text>
                            <Text style={styles.tableCellLarge}>Lighting</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColFull, styles.tableTitle]}>
                            <Text style={styles.tableCell}>
                                Additional Comments
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColFull]}>
                            <Text style={styles.tableCellLarge}>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Veniam eum totam illum
                                cupiditate quaerat incidunt numquam mollitia
                                libero, eius autem sint dolore animi itaque
                                architecto commodi. Iste consequuntur laudantium
                                ut.
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>
                    Person(s) performing the work to be briefed
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={[styles.tableCell]}>Name</Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Company</Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Funtion</Text>
                        </View>
                        <View style={[styles.tableCol, styles.tableTitle]}>
                            <Text style={styles.tableCell}>Phone Number</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Gerin</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>PT. ABCDE</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>IT Dept</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>081212341234</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.subHeading}>
                    As the responsible person issuing the permit, am satisfied
                    that all the above precautions are adequate to ensure the
                    safety of the personnel involved in the work and other
                    people. I ensure that the person(s) performing the work
                    understand(s) his work scope and the procedure pertaining to
                    it.
                </Text>
                <View style={styles.table}>
                    {" "}
                    <View style={styles.tableRow}>
                        <View style={[styles.tableColFull]}>
                            <Text style={styles.tableCellLarge}>STATUS :</Text>
                            <Text style={styles.tableCellLarge}>
                                Approved by Supervisor (Agus Suherlan) at 24 Aug
                                2023 10:00
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
