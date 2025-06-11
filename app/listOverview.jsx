import {ActivityIndicator, FlatList, SafeAreaView, Text, View} from "react-native";
import {Link} from "expo-router";
import React from "react";
import useAlerts from "../hooks/useAlerts";
import BackButton from "../components/BackButton";

export default function ListOverview() {
    const alerts = useAlerts();
    console.log(alerts);

    if (!alerts) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71"/>
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="absolute top-14 left-0 right-0 items-center z-10">
                <View className="flex flex-row rounded border border-stone-900  overflow-hidden">
                    <Link href="/listOverview" className="bg-[#558B71] py-2 px-10">
                        <Text className="text-white font-bold text-xl">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="bg-[#E8F7F4] py-2 px-10">
                        <Text className="text-black font-inter text-xl">Kaart</Text>
                    </Link>
                </View>
            </View>
            <View className="pt-[18%] pb-[20%]">
                <FlatList
                    data={alerts}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View className="bg-[#E8F7F4] border border-[#558B71] rounded-3xl p-6 mb-6 w-[90%] self-center">
                            <Text className="text-xl font-intersemibold text-gray-800 mb-2">{item.alert}</Text>
                            <Text className="text-lg font-intermedium text-gray-700">📍 Location: <Text
                                className="font-interbold">{item.location}</Text></Text>
                        </View>
                    )}
                />
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-6">
                <BackButton/>
            </View>
        </SafeAreaView>
    );
}