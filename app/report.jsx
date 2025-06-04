import {Text, TextInput, TouchableOpacity, View, Alert, SafeAreaView} from "react-native";
import React, { useState } from "react";
import { db } from "../firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import useLocation from "../hooks/useLocation";
import backButton from "../components/backButton";

export default function Report() {
    const [alert, setAlert] = useState('');
    const [location, setLocation] = useState('');
    const { latitude, longitude } = useLocation();

    const handleSubmit = async () => {
        if (!alert || !location) {
            Alert.alert("Lege velden", "Gelieve alle velden in te vullen.");
            return;
        }

        try {
            await addDoc(collection(db, "alerts"), {
                alert,
                location,
                latitude,
                longitude,
                timestamp: Timestamp.now()
            });

            Alert.alert("Success", "Melding succesvol verstuurd!");
            setAlert('');
            setLocation('');
        } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert("Error", "Melding versturen is mislukt.");
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white items-center">
            <Text className="text-3xl font-interbold text-[#558B71] mb-16 mt-8">Melding maken</Text>

            <View className="w-[90%]">
                <Text className="text-xl font-interbold mb-2">Melding</Text>
                <TextInput
                    className="border border-gray-300 rounded-xl p-4 mb-6 text-lg font-inter"
                    style={{
                        lineHeight: 22,
                    }}
                    placeholder="Typ hier de melding..."
                    value={alert}
                    onChangeText={setAlert}
                />

                <Text className="text-xl font-interbold mb-2">Locatie</Text>
                <TextInput
                    className="border border-gray-300 rounded-xl p-4 mb-4 text-lg font-inter"
                    style={{
                        lineHeight: 22,
                }}
                    placeholder="Typ hier de locatie..."
                    value={location}
                    onChangeText={setLocation}
                />

                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-[#558B71] py-4 rounded-full items-center shadow-md shadow-black/20 mt-4"
                >
                    <Text className="text-white text-xl font-interbold">Versturen</Text>
                </TouchableOpacity>
            </View>

            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                {backButton()}
            </View>
        </SafeAreaView>
    );
}