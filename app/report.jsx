import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import React, {useState} from "react";
import {Link} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import {db} from "../firebase.config";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import useLocation from "./hooks/useLocation";

export default function Report() {
    const [alert, setAlert] = useState('');
    const [location, setLocation] = useState('');
    const {latitude, longitude} = useLocation();

    const handleSubmit = async () => {
        if (!alert || !location) {
            Alert.alert("Lege velden", "Gelieve alle velden in te vullen.");
            return;
        }

        // Log alert input that's being submitted
        console.log("Submitting alert:", {alert, location});

        try {
            // Add form data to db
            await addDoc(collection(db, "alerts"), {
                alert: alert,
                location: location,
                latitude: latitude,
                longitude: longitude,
                timestamp: Timestamp.now()
            });

            // Redirect or navigate
            Alert.alert("Success", "Melding succesvol verstuurd!");

            // Empty form data
            setAlert('');
            setLocation('');
        } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert("Error", "Melding versturen is mislukt.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Melding maken</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Melding</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Melding..."
                    value={alert}
                    onChangeText={setAlert}
                />
                <Text style={styles.label}>Locatie</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Locatie..."
                    value={location}
                    onChangeText={setLocation}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Versturen</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Link href="/" style={styles.link}>
                    <View style={styles.row}>
                        <FontAwesome name="arrow-left" size={30} color="#000"/>
                        <Text style={styles.linkText}>Terug</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 50,
        marginBottom: 100,
        fontFamily: "Inter_700Bold",
    },
    form: {
        paddingHorizontal: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        fontFamily: "Inter_400Regular",
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 14,
        marginBottom: 26,
        fontSize: 16,
        fontFamily: "Inter_400Regular",
    },
    button: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 100,
        alignItems: "center",
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#558B71',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
    },
    link: {
        padding: 10,
        width: '50%',
        borderRadius: 100,
        borderWidth: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        gap: 6,
    },
    linkText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
});