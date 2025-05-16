import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {Link} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import MapView, {Marker} from 'react-native-maps';
import useLocation from "../hooks/useLocation";

const MapOverview = () => {
    const {latitude, longitude, errorMsg} = useLocation();

    if (latitude === null || longitude === null) {
        return (
            <View style={styles.container}>
                <Text style={{ padding: 20, textAlign: 'center' }}>Can't load your location...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link href="/listOverview" style={styles.button}>
                    <Text style={styles.text}>Lijst</Text>
                </Link>
                <Link href="/mapOverview" style={styles.button}>
                    <Text style={styles.text}>Kaart</Text>
                </Link>
            </View>

            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                        title={"Je bent hier"}
                        pinColor={"blue"}
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

export default MapOverview

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
        top: '7%',
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 10,
    },
    button: {
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        borderWidth: 1,
        width: '45%',
        textAlign: 'center',
        padding: 5
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