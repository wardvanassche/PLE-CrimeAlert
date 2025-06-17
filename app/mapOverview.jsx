import {ActivityIndicator, StyleSheet, SafeAreaView, Text, View} from "react-native"
import {Link} from "expo-router";
import React from "react";
import MapView, {Marker, Callout} from 'react-native-maps';
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
                <View className="flex-row rounded-full border border-[#558B71] bg-white overflow-hidden">
                    <Link href="/listOverview" className="py-3 px-12">
                        <Text className="text-[#558B71] font-intermedium text-lg">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-[#558B71] py-3 px-12">
                        <Text className="text-white font-interbold text-lg">Kaart</Text>
                    </Link>
                </View>
            </View>
            <MapView
                style={{ ...StyleSheet.absoluteFillObject }}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{ latitude, longitude }}>
                    <View className="items-center">
                        <View className="bg-blue-700 w-8 h-8 rounded-full border-4 border-white" />
                        <Text className="text-sm text-blue-900 font-interbold mt-2">U bent hier</Text>
                    </View>
                </Marker>
                {alerts.map((alert, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: alert.latitude, longitude: alert.longitude }}
                    >
                        <View className="items-center">
                            <View className="bg-red-700 w-7 h-7 rotate-45 rounded-sm border-4 border-white" />
                            <Text className="text-sm text-red-900 font-intersemibold mt-2 text-center max-w-[120px]">
                                Melding
                            </Text>
                        </View>

                        <Callout tooltip>
                            <View className="bg-white p-4 rounded-2xl shadow-md w-64 max-w-xs">
                                <Text className="text-lg font-intersemibold text-red-800 mb-2">
                                    {alert.alert}
                                </Text>

                                <View>
                                    <Text className="text-xs font-inter text-gray-500 uppercase tracking-wide mb-1">
                                        Locatie
                                    </Text>
                                    <Text className="text-base font-intersemibold text-gray-800">
                                        {alert.location}
                                    </Text>
                                </View>

                                {alert.timestamp && (
                                    <View className="mt-2">
                                        <Text className="text-sm font-inter text-gray-500 uppercase tracking-wide">Tijdstip</Text>
                                        <Text className="text-base font-intersemibold text-gray-800">
                                            {(() => {
                                                try {
                                                    const date = alert.timestamp.toDate();
                                                    return date.toLocaleString('nl-NL', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    });
                                                } catch (e) {
                                                    return 'Onbekend';
                                                }
                                            })()}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </Callout>

                    </Marker>
                ))}
            </MapView>

            {/* Footer with BackButton */}
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-6">
                <BackButton />
            </View>
        </SafeAreaView>
    )
}