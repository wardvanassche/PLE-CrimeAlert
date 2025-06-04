import {Text, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Link} from "expo-router";
import React from "react";

export default function backButton() {
    return (
        <Link href="/" asChild>
            <TouchableOpacity className="border-2 border-white bg-white rounded-full px-6 py-3 mb-2 w-4/5 items-center flex-row justify-center space-x-4 shadow-md">
                <FontAwesome name="arrow-left" size={24} color="#558B71" />
                <Text className="text-[#558B71] text-xl font-interbold">Terug</Text>
            </TouchableOpacity>
        </Link>
    )
}