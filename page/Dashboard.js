import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet } from "react-native";

export default (props) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.userInfo}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={styles.userImage}
                            />
                            <Text style={styles.userName}>
                                {"Hai, Revalina Fitriani!"}
                            </Text>
                            <View style={styles.flex1} />
                            <View style={styles.notificationContainer}>
                                <View style={styles.notificationBox} />
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={styles.notificationIcon}
                                />
                                <View style={styles.notificationBackground} />
                            </View>
                        </View>
                        <View style={styles.separator} />
                        <Text style={styles.sectionTitle}>{"Recent Views"}</Text>
                        <View style={styles.recentViewContainer}>
                            <View style={styles.recentViewHeader}>
                                <View style={styles.recentViewImageContainer} />
                                <View style={styles.recentViewTextContainer}>
                                    <Text style={styles.recentViewTitle}>{"Materi: DDL SQL Server"}</Text>
                                    <Text style={styles.recentViewSubtitle}>{"Program: Database Engineering"}</Text>
                                </View>
                                <Image
                                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                    resizeMode={"stretch"}
                                    style={styles.recentViewArrow}
                                />
                            </View>
                            <View style={styles.recentViewFooter}>
                                <Text style={styles.recentViewAuthor}>{"Author: Riesta Pinky"}</Text>
                                <Text style={styles.recentViewDate}>{"20 Maret 2022"}</Text>
                            </View>
                        </View>
                        <Text style={styles.savedMaterialTitle}>{"Materi tersimpan"}</Text>
                    </View>
                    <View style={styles.showAllButtonContainer}>
                        <View style={styles.showAllButton}>
                            <Image
                                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                                resizeMode={"stretch"}
                                style={styles.showAllIcon}
                            />
                            <Text style={styles.showAllText}>{"Show All"}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.programTitle}>{"Program Keilmuan"}</Text>
                <View style={styles.programContainer}>
                    <View style={styles.programBox}>
                        <Text style={styles.programBoxText}>{"Manajemen Informatika"}</Text>
                    </View>
                    <Text style={styles.showMoreText}>{"Show more..."}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{"Data Science"}</Text>
                    <View style={styles.cardSeparator} />
                    <Text style={styles.cardDescription}>{"Penjelasan data science data science data sci..."}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{"Full Stack Developer"}</Text>
                    <View style={styles.cardSeparator} />
                    <Text style={styles.cardDescription}>{"Penjelasan data science data science data sci..."}</Text>
                </View>
                <View style={styles.programContainer}>
                    <View style={styles.programBox}>
                        <Text style={styles.programBoxText}>{"Mekatronika"}</Text>
                    </View>
                    <Text style={styles.showMoreText}>{"Show more..."}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{"Control System"}</Text>
                    <View style={styles.cardSeparator} />
                    <Text style={styles.cardDescription}>{"Penjelasan data science data science data sci..."}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{"Mekanika Sistem"}</Text>
                    <View style={styles.cardSeparator} />
                    <Text style={styles.cardDescription}>{"Penjelasan data science data science data sci..."}</Text>
                </View>
                <View style={styles.programContainer}>
                    <View style={styles.programBox}>
                        <Text style={styles.programBoxText}>{"Teknik Produksi dan Proses Manufaktur"}</Text>
                    </View>
                    <Text style={styles.showMoreText}>{"Show more..."}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{"Manufacturing Management"}</Text>
                    <View style={styles.cardSeparator} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        paddingBottom: -20,
    },
    container: {
        marginBottom: 22,
    },
    header: {
        backgroundColor: "#CCDDED",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingVertical: 15,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 11,
        marginHorizontal: 19,
    },
    userImage: {
        width: 25,
        height: 25,
        marginRight: 13,
    },
    userName: {
        color: "#000000",
        fontSize: 14,
    },
    flex1: {
        flex: 1,
        alignSelf: "stretch",
    },
    notificationContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    notificationBox: {
        width: 12,
        height: 17,
        borderColor: "#000000",
        borderRadius: 3,
        borderWidth: 2,
    },
    notificationIcon: {
        position: "absolute",
        top: 9,
        right: 0,
        width: 10,
        height: 6,
    },
    notificationBackground: {
        position: "absolute",
        top: 7,
        right: 3,
        width: 5,
        height: 10,
        backgroundColor: "#CCDDED",
    },
    separator: {
        height: 1,
        marginBottom: 18,
        marginHorizontal: 19,
    },
    sectionTitle: {
        color: "#555555",
        fontSize: 12,
        marginBottom: 11,
        marginLeft: 20,
    },
    recentViewContainer: {
        backgroundColor: "#0056A6",
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 12,
        marginBottom: 22,
        marginHorizontal: 19,
    },
    recentViewHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 13,
    },
    recentViewImageContainer: {
        width: 37,
        height: 37,
        borderColor: "#FFFFFF",
        borderRadius: 4,
        borderWidth: 1,
        marginRight: 13,
    },
    recentViewTextContainer: {
        flex: 1,
        marginRight: 4,
    },
    recentViewTitle: {
        color: "#FFFFFF",
        fontSize: 13,
        marginBottom: 8,
    },
    recentViewSubtitle: {
        color: "#FFFFFF",
        fontSize: 9,
    },
    recentViewArrow: {
        width: 11,
        height: 16,
    },
    recentViewFooter: {
        flexDirection: "row",
        alignItems: "center",
    },
    recentViewAuthor: {
        color: "#FFFFFF",
        fontSize: 9,
        marginRight: 4,
        flex: 1,
    },
    recentViewDate: {
        color: "#FFFFFF",
        fontSize: 9,
    },
    savedMaterialTitle: {
        color: "#141414",
        fontSize: 10,
        marginLeft: 56,
    },
    showAllButtonContainer: {
        position: "absolute",
        bottom: -9,
        right: 60,
    },
    showAllButton: {
        width: 108,
        height: 35,
        backgroundColor: "#0056A6",
        borderRadius: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    showAllIcon: {
        width: 11,
        height: 16,
    },
    showAllText: {
        color: "#FFFFFF",
        fontSize: 12,
    },
    programTitle: {
        color: "#555555",
        fontSize: 12,
        marginBottom: 13,
        marginLeft: 20,
    },
    programContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 20,
    },
    programBox: {
        width: 105,
        alignItems: "center",
        backgroundColor: "#0056A6",
        borderRadius: 5,
        paddingVertical: 3,
    },
    programBoxText: {
        color: "#FFFFFF",
        fontSize: 8,
    },
    showMoreText: {
        color: "#555555",
        fontSize: 8,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 11,
        paddingHorizontal: 13,
        marginBottom: 14,
        marginHorizontal: 19,
        shadowColor: "#00000033",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        elevation: 5,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 13,
        marginBottom: 3,
    },
    cardSeparator: {
        width: 88,
        height: 1,
        marginBottom: 8,
    },
    cardDescription: {
        color: "#111111",
        fontSize: 9,
    }
});
