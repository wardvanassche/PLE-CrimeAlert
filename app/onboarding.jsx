import {ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

export default function Onboarding() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-6 mb-20">
                <Text className="text-3xl font-interbold text-center mt-8">Welkom</Text>

                <Text className="text-2xl font-intersemibold text-center mt-14 leading-6">Ons doel</Text>
                <Text className="text-lg font-inter text-black mt-2 leading-7">
                    Wij streven ernaar een gevoel van veiligheid en geborgenheid te creëren in de woonomgeving van ouderen.
                </Text>
                <Text className="text-lg font-inter text-black mt-2 leading-7">
                    Waarom speciaal voor ouderen? Deze app is met zorg en aandacht ontwikkeld voor ouderen.
                    Een eenvoudige en duidelijke opzet staat centraal, zodat iedereen er makkelijk mee aan de slag kan — ongeacht ervaring met technologie.
                    Toegankelijkheid en gebruiksgemak staan centraal, zodat u zich gehoord, gezien en veilig voelt.
                </Text>

                <Text className="text-2xl font-intersemibold text-center mt-14">Bekijk meldingen</Text>
                <View className="flex-row justify-center space-x-4 mt-4">
                    <Image source={require("../assets/images/listOverview.png")} className="w-[45%] h-48" resizeMode="contain" />
                    <Image source={require("../assets/images/mapOverview.png")} className="w-[45%] h-48" resizeMode="contain" />
                </View>
                <Text className="text-lg font-inter text-black text-center mt-4 leading-6">
                    Bekijk meldingen in een lijst of direct op de kaart van uw locatie.
                </Text>

                <Text className="text-2xl font-intersemibold text-center mt-14">Maak meldingen</Text>
                <View className="flex-row justify-center space-x-4 mt-4 items-center">
                    <Image source={require("../assets/images/alert.png")} className="w-[45%] h-48" resizeMode="contain" />
                    <Text className="text-lg font-inter text-black leading-6 w-[45%]">
                        Gebruik het formulier om zelf meldingen te maken.
                    </Text>
                </View>
                <Text className="text-lg font-inter text-black text-center mt-4 mb-8 leading-6">
                    U heeft altijd controle over wat u meldt en waar. Hierna wordt uw melding gelijk zichtbaar in het overzicht.
                </Text>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] justify-center items-center px-4">
                <Link href="/" asChild>
                    <TouchableOpacity className="bg-white mb-2 px-6 py-3 rounded-full w-4/5 items-center shadow-md shadow-black/20">
                        <Text className="text-[#558B71] text-xl font-interbold">Alles duidelijk? Druk hier</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}