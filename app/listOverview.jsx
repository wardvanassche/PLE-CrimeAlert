import {ActivityIndicator, FlatList, SafeAreaView, Text, View} from "react-native";
import {Link} from "expo-router";
import React from "react";
import useAlerts from "../hooks/useAlerts";
import BackButton from "../components/BackButton";

export default function ListOverview() {
    const {alerts} = useAlerts();

    if (!alerts) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71" />
            </View>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute top-16 left-0 right-0 items-center z-10">
                <View className="flex flex-row justify-center rounded">
                    <Link href="/listOverview" className="bg-[#558B71] py-2 px-10">
                        <Text className="text-white font-bold text-xl">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-gray-100 py-2 px-10">
                        <Text className="text-black font-inter text-xl">Kaart</Text>
                    </Link>
                </View>
            </View>
            <FlatList
                className="mb-20 pt-10 mt-10 px-5 bg-white"
                data={alerts}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View className="bg-gray-200 rounded-2xl shadow-md p-4 mb-4 border border-gray-200">
                        <Text className="text-lg font-semibold text-gray-800 mb-1">{item.alert}</Text>
                        <Text className="text-sm text-gray-600">📍 Location: {item.location}</Text>
                        <Text className="text-sm text-gray-600">🌐 Latitude: {item.latitude}</Text>
                        <Text className="text-sm text-gray-600">🌐 Longitude: {item.longitude}</Text>
                    </View>
                )}
            />

            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                <BackButton/>
            </View>
        </SafeAreaView>
    )
}