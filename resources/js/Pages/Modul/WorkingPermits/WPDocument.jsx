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
        // flexDirection: "column",
        // justifyContent: "flex-end",
        backgroundColor: "#E4E4E4",
        // padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        // flexDirection: "row",
        // justifyContent: "flex-start",
        flexGrow: 1,
        // alignItems: "center",
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
        fontSize: 18,
        marginBottom: 10,
    },
    subSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    textContent: {
        fontSize: 12,
    },
    subHeading: { fontSize: 16, marginBottom: 10 },

    imageHeader: {
        width: 70,
        height: 70,
        marginRight: 20,
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
                    <Svg height="10" width="100%">
                        <Line
                            x1="0"
                            y1="5"
                            x2="1000"
                            y2="5"
                            strokeWidth={1}
                            stroke="rgb(0,0,0)"
                        />
                    </Svg>
                    {/* <Text style={styles.title}>{data.permit_number}</Text> */}

                    <View style={styles.section}>
                        <Text style={styles.subHeading}>
                            Requestor Information
                        </Text>
                        <Text style={styles.textContent}>
                            Permit Number : {data.permit_number}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer Name : {data.issuer.name}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer ID : {data.issuer.reference_id}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer Email : {data.issuer.email}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer Phone Number :
                        </Text>
                        <Text style={styles.textContent}>
                            Company Name : {data.company_name}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer Supervisor : {data.supervisor.name}
                        </Text>
                        <Text style={styles.textContent}>
                            Issuer Department : {data.permit_number}
                        </Text>
                        <Text style={styles.textContent}>
                            Equipment to Work On : {data.equipment_to_work}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
