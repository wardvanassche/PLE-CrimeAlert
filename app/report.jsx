import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import React, {useState} from "react";
import {db} from "../firebase.config";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import BackButton from "../components/BackButton";
import useLocationAutocomplete from "../hooks/useLocationAutocomplete";

export default function Report() {
    const [alert, setAlert] = useState("");
    const {
        query,
        setQuery,
        suggestions,
        selectSuggestion,
        selected,
    } = useLocationAutocomplete();

    const handleSubmit = async () => {
        if (!alert || !selected) {
            Alert.alert("Lege velden", "Gelieve alle velden in te vullen.");
            return;
        }

        try {
            await addDoc(collection(db, "alerts"), {
                alert,
                location: selected.name,
                latitude: selected.latitude,
                longitude: selected.longitude,
                timestamp: Timestamp.now(),
            });

            Alert.alert("Succes", "Melding succesvol verstuurd!");
            setAlert("");
            setQuery("");
            Keyboard.dismiss();
        } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert("Error", "Melding versturen is mislukt.");
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView className="flex-1 items-center">
                    <Text className="text-3xl font-interbold text-[#558B71] mb-16 mt-8">
                        Melding maken
                    </Text>
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
                            className="border border-gray-300 rounded-xl p-4 text-lg font-inter"
                            style={{
                                lineHeight: 22,
                            }}
                            placeholder="Typ hier de locatie..."
                            value={query}
                            onChangeText={setQuery}
                            autoCorrect={false}
                        />
                        {suggestions.length > 0 && (
                            <View className="bg-white border border-gray-300 rounded-xl max-h-40 mt-1 mb-3">
                                <FlatList
                                    keyboardShouldPersistTaps="handled"
                                    data={suggestions}
                                    keyExtractor={(item, index) => `${item.place_id}-${index}`}
                                    renderItem={({item}) => (
                                        <TouchableOpacity
                                            onPress={() => selectSuggestion(item)}
                                            className="px-4 py-4 border-b border-gray-300"
                                        >
                                            <Text className="font-inter">
                                                {item.display_name}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        )}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            className="bg-[#558B71] py-4 rounded-full items-center shadow-md shadow-black/20 mt-4"
                        >
                            <Text className="text-white text-xl font-interbold">Versturen</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                <BackButton/>
            </View>
        </SafeAreaView>
    );
}