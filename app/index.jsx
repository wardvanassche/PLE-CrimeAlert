import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {Link} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {

    const clearStorage = async () => {
        await AsyncStorage.clear();
        const value = await AsyncStorage.getItem('viewedOnboarding');
        console.log('async storage cleared, viewedOnboarding: ', value);
    }

    const changeStorage = async () => {
        if (await AsyncStorage.getItem('viewedOnboarding') === 'true') {
            console.log('viewedOnboarding is already set to true');
        } else {
            await AsyncStorage.setItem('viewedOnboarding', 'true');
            const value = await AsyncStorage.getItem('viewedOnboarding');
            console.log('viewedOnboarding set to: ', value);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Link href="/onboarding" style={styles.helpLink}>
                <Text style={styles.text_bold}>Uitleg nodig?</Text>
                <Text style={styles.text_bold}>Druk hier</Text>
            </Link>
            <Link href="/listOverview" style={styles.link}>
                <Text style={styles.text}>
                    Ik wil meldingen
                    <Text style={styles.text_bold}> bekijken</Text>
                </Text>
            </Link>
            <Link href="/report" style={styles.link}>
                <Text style={styles.text}>
                    Ik wil een melding
                    <Text style={styles.text_bold}> maken</Text>
                </Text>
            </Link>

            <Button onPress={clearStorage} title="Wis async storage"/>
            <Button onPress={changeStorage} title="Set to true"/>

            <View style={styles.footer}>
                <Text style={styles.text}>Notificaties</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.footerText}>AAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.footerText}>UIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
    },
    link: {
        backgroundColor: '#fff',
        padding: 25,
        width: '70%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        margin: 5,
        textAlign: 'center',
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontFamily: "Inter_400Regular",
    },
    text_bold: {
        color: '#000',
        fontSize: 24,
        fontFamily: "Inter_700Bold",

    },
    helpLink: {
        borderWidth: 2,
        borderRadius: 100,
        width: '55%',
        padding: 10,
        marginBottom: 150,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        gap: 6,
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
    button: {
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: '#fff',
        padding: 10,
        width: '25%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
    },
    footerText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Inter_400'
    },
})