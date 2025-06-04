import {FlatList, SafeAreaView, Text, View} from "react-native";
import {Link} from "expo-router";
import React from "react";
import useAlerts from "../hooks/useAlerts";
import BackButton from "../components/BackButton";

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
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute top-12 left-0 right-0 items-center z-10">
                <View className="flex flex-row justify-center bg-white rounded overflow-hidden">
                    <Link href="/listOverview" className="bg-[#558B71] py-2 px-10">
                        <Text className="text-white font-bold text-xl">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-gray-200 py-2 px-10">
                        <Text className="text-black font-medium text-xl">Kaart</Text>
                    </Link>
                </View>
            </View>
            <FlatList
                className="mb-20 px-5 pt-16 bg-white"
                data={alerts}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View className="bg-white rounded-2xl shadow-md p-4 mb-4 border border-gray-200">
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
    );
}