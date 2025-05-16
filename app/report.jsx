import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

const Report = () => {
    const [alertText, setAlertText] = useState('');

    const handleSubmit = () => {
        if (!alertText || !location) {
            Alert.alert("Lege velden", "Vul a.u.b. alle velden in.");
            return;
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
                    value={alertText}
                    onChangeText={setAlertText}
                />
                <Text style={styles.label}>Locatie</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Locatie..."
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Bevestig</Text>
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

export default Report;

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
    },
    form: {
        paddingHorizontal: 20,
    },
    label: {
      fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 14,
        marginBottom: 26,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 100,
        alignItems: "center",
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 16,
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