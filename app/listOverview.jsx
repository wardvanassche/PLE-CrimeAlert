import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native"
import {Link} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import useAlerts from "../hooks/useAlerts";

export default function ListOverview() {
    const {alerts} = useAlerts();

    if (!alerts) {
        return (
            <View className="flex-1 bg-white items-center justify-center">
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <Link href="/listOverview" style={styles.buttonActive}>
                    <Text style={styles.text}>Lijst</Text>
                </Link>
                <Link href="/mapOverview" style={styles.button}>
                    <Text style={styles.text}>Kaart</Text>
                </Link>
            </View>

            <FlatList
                className="mb=[25%]"
                data={alerts}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
                renderItem={({ item }) => (
                    <View className="bg-white rounded-2xl shadow-md p-4 mb-4 border border-gray-200">
                        <Text className="text-lg font-semibold text-gray-800 mb-1">{item.alert}</Text>
                        <Text className="text-sm text-gray-600">📍 Location: {item.location}</Text>
                        <Text className="text-sm text-gray-600">🌐 Latitude: {item.latitude}</Text>
                        <Text className="text-sm text-gray-600">🌐 Longitude: {item.longitude}</Text>
                    </View>
                )}
            />


            <View style={styles.footer}>
                <Link href="/" style={styles.link}>
                    <View style={styles.row}>
                        <FontAwesome name="arrow-left" size={30} color="#000"/>
                        <Text style={styles.linkText}>Terug</Text>
                    </View>
                </Link>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    nav: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    items: {
        flex: 1,
        paddingTop: 10,
        marginBottom: '15%',
    },
    item: {
        backgroundColor: "#558B71",
        marginHorizontal: 30,
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 10,
    },
    buttonActive: {
        backgroundColor: "#558B71",
        color: "#fff",
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
        width: '35%',

        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 3,
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        textAlign: 'center',
        width: '35%',

        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 3,
    },

    text: {
        fontSize: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#558B71',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
    },
    link: {
        padding: 10,
        width: '50%',
        borderRadius: 100,
        borderWidth: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        gap: 6,
    },
    linkText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
})