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
                <View className="flex-row rounded-full border border-[#558B71] bg-white overflow-hidden">
                    <Link href="/listOverview" className="bg-[#558B71] py-3 px-12">
                        <Text className="text-white font-interbold text-lg">Lijst</Text>
                    </Link>
                    <Link href="/mapOverview" className="py-3 px-12">
                        <Text className="text-[#558B71] font-intermedium text-lg">Kaart</Text>
                    </Link>
                </View>
            </View>
            <View className="pt-[18%] pb-[20%]">
                <FlatList
                    data={alerts}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View className="bg-white rounded-xl shadow-lg p-5 mb-4 w-[90%] self-center border border-[#558B71]">
                            <Text className="text-xl font-intersemibold text-[#2C3E50] mb-1">{item.alert}</Text>
                            <View className="mt-2">
                                <Text className="text-sm font-inter text-gray-500 uppercase tracking-wide">Locatie</Text>
                                <Text className="text-base font-intersemibold text-gray-800">{item.location}</Text>
                            </View>

                        </View>
                    )}
                />
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                <BackButton/>
            </View>
        </SafeAreaView>
    );
}