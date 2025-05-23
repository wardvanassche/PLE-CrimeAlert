import {ScrollView, StyleSheet, Text, View, Image, SafeAreaView} from "react-native"
import {Link} from "expo-router";

const Onboarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={false}
                        contentContainerStyle={{ paddingBottom: 120 }}>
                <Text style={styles.title}>
                    Welkom
                </Text>
                <Text style={styles.subtitleBold}>
                    Ons doel
                </Text>
                <Text style={styles.body}>
                    Wij streven ernaar een gevoel van veiligheid en geborgenheid te creëren in de woonomgeving van ouderen.

                    Waarom speciaal voor ouderen?
                    Deze app is met zorg en aandacht ontwikkeld voor ouderen.
                </Text>
                <Text style={styles.body}>
                    Een eenvoudige en duidelijke opzet staat centraal, zodat iedereen er makkelijk mee aan de slag kan — ongeacht ervaring met technologie.
                    Toegankelijkheid en gebruiksgemak staan centraal, zodat u zich gehoord, gezien en ondersteund voelt.
                </Text>
                <Text style={styles.subtitleNormal}>
                    <Text style={styles.subtitleBold}>Bekijk </Text>
                    meldingen
                </Text>
                <View style={styles.row}>
                    <Image source={require('../assets/images/listOverview.png')} style={styles.image} />
                    <Image source={require('../assets/images/mapOverview.png')} style={styles.image} />
                </View>
                <Text style={[styles.body, {textAlign: 'center'}]}>
                    Bekijk meldingen in een lijst of direct op de kaart van uw locatie.
                </Text>
                <Text style={styles.subtitleNormal}>
                    <Text style={styles.subtitleBold}>Maak </Text>
                    meldingen
                </Text>
                <View style={styles.row}>
                    <Image source={require('../assets/images/alert.png')} style={styles.image} />
                    <Text style={styles.body}>
                        Lorem ipsum dolor.
                    </Text>
                </View>
                <Text style={[styles.body, {textAlign: 'center'}]}>
                    Maak zelf meldingen, gebruik het formulier om meldingen te maken.
                </Text>
            </ScrollView>
            <View style={styles.footer}>
                <Link href="/" style={styles.link}>
                    <Text style={styles.linkText}>Verder</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleBold: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
    },
    subtitleNormal: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        fontStyle: 'italic',
    },
    body: {
        color: '#000',
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 28,
        paddingVertical: 15,
    },
    row: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'center',
    },
    image: {
        width: '45%',
        height: 200,
        resizeMode: 'contain',
    },
    link: {
        padding: 10,
        width: '50%',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#000',
        textAlign: 'center',
    },
    linkText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
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
})