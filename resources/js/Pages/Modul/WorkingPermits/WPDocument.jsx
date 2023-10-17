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
                        <Text style={styles.subHeading}>Requestor Detail</Text>
                        <Text style={styles.textContent}>
                            Permit Number : {data.permit_number}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
