import {SafeAreaView, StyleSheet, Text, View} from "react-native"
import {Link} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import MapView, {Marker} from 'react-native-maps';
import useLocation from "../hooks/useLocation";

export default function MapOverview() {
    const {latitude, longitude, errorMsg} = useLocation();

    if (latitude === null || longitude === null) {
        return (
            <View style={styles.container}>
                <Text style={{ padding: 20, textAlign: 'center' }}>{errorMsg}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.nav}>
                <Link href="/listOverview" style={styles.button}>
                    <Text style={styles.text}>Lijst</Text>
                </Link>
                <Link href="/mapOverview" style={styles.buttonActive}>
                    <Text style={styles.text}>Kaart</Text>
                </Link>
            </SafeAreaView>

            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                mapType={"hybridFlyover"}
            >
                <Marker coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                        title="Marker"
                        pinColor="blue"
                />
            </MapView>

            <View style={styles.footer}>
                <Link href="/" style={styles.link}>
                    <View style={styles.row}>
                        <FontAwesome name="arrow-left" size={30} color="#000"/>
                        <Text style={styles.linkText}>Terug</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    nav: {
        position: 'absolute',
        top: '5%',
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 10,
    },
    buttonActive: {
        backgroundColor: "#558B71",
        color: "#fff",
        fontWeight: 'bold',
        padding: 5,
        width: '35%',
        textAlign: 'center',
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        width: '35%',
        textAlign: 'center',
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
        height: '13%',
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
