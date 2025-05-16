import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {Link} from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
    return (
        <View style={styles.container}>
            <Link href="/onboarding" style={styles.helpLink}>
                <View style={styles.row}>
                    <FontAwesome name="question-circle" size={30} color="#000"/>
                    <Text style={styles.text_bold}>Help</Text>
                </View>
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
        </View>
    )
}

export default Home

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
    },
    text_bold: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    helpLink: {
        borderWidth: 2,
        borderRadius: 100,
        width: '40%',
        padding: 10,
        marginBottom: 150,
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    footerText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
})