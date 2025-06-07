import {ActivityIndicator, Text, View} from "react-native"
import {Link} from "expo-router";
import React from "react";
import MapView, {Marker} from 'react-native-maps';
import useLocation from "../hooks/useLocation";
import useAlerts from "../hooks/useAlerts";
import BackButton from "../components/BackButton";

export default function MapOverview() {
    const {latitude, longitude, errorMsg} = useLocation();
    const {alerts} = useAlerts();

    if (!alerts || latitude === null || longitude === null) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71"/>
            </View>
        )
    }

    // if (latitude === null || longitude === null) {
    //     return (
    //         <View className="flex-1 justify-center items-center bg-white">
    //             <Text>{errorMsg}</Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <View className="absolute top-16 left-0 right-0 items-center z-10">
                <View className="flex flex-row rounded">
                    <Link href="/listOverview" className="bg-gray-100 py-2 px-10">
                        <Text className="text-black font-inter text-xl">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-[#558B71] py-2 px-10">
                        <Text className="text-white font-interbold text-xl">Kaart</Text>
                    </Link>
                </View>
            </View>
            <MapView
                style={{height: '100%'}}
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
                        title="Je bent hier"
                        pinColor="lightblue"
                />
                {alerts.map((alert, index) => (
                    <View key={index}>
                        <Marker coordinate={{
                            latitude: alert.latitude,
                            longitude: alert.longitude,
                        }}
                                title={alert.alert}
                                description={alert.location}
                                pinColor="red"
                        />
                    </View>
                ))}
            </MapView>

            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[14%] justify-center items-center px-4">
                <BackButton/>
            </View>
        </View>
    )
}