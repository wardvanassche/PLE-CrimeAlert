import {ActivityIndicator, StyleSheet, SafeAreaView, Text, View} from "react-native"
import {Link} from "expo-router";
import React from "react";
import MapView, {Marker} from 'react-native-maps';
import useLocation from "../hooks/useLocation";
import useAlerts from "../hooks/useAlerts";
import BackButton from "../components/BackButton";

export default function MapOverview() {
    const {latitude, longitude} = useLocation();
    const alerts = useAlerts();
    console.log(alerts);

    if (!alerts || !latitude || !longitude) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71"/>
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute top-14 left-0 right-0 items-center z-10">
                <View className="flex flex-row rounded border border-stone-900 overflow-hidden">
                    <Link href="/listOverview" className="bg-[#E8F7F4] py-2 px-10">
                        <Text className="text-black font-inter text-xl">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-[#558B71] py-2 px-10">
                        <Text className="text-white font-interbold text-xl">Kaart</Text>
                    </Link>
                </View>
            </View>
            <MapView
                style={{...StyleSheet.absoluteFillObject}}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                        title="U bent hier"
                        pinColor="blue"
                />
                {alerts.map((alert, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: alert.latitude,
                            longitude: alert.longitude
                        }}
                        title={alert.alert}
                        description={alert.location}
                        pincolor='red'
                    />
                ))}
            </MapView>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                <BackButton/>
            </View>
        </SafeAreaView>
    )
}