import {Image, Pressable, SafeAreaView, Text, View} from "react-native";
import {Link} from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white items-center">
            <Link href="/onboarding" asChild>
                <Pressable
                    className="bg-[#558B71] px-6 py-3 rounded-full shadow-md shadow-black/20 w-4/5 items-center absolute top-16">
                    <Text className="text-white text-2xl font-interbold">Uitleg nodig?</Text>
                    <Text className="text-white text-xl font-inter">Druk hier</Text>
                </Pressable>
            </Link>
            <View className="flex-1 justify-center space-y-8 w-full items-center">
                <Link href="/listOverview" asChild>
                    <Pressable
                        className="bg-white px-6 py-5 rounded-2xl shadow-md shadow-black/20 w-4/5 items-center border border-[#558B71]">
                        <Text className="text-3xl text-black font-intersemibold text-center">
                            Ik wil meldingen <Text className="text-[#558B71] font-interbold">zien</Text>
                        </Text>
                    </Pressable>
                </Link>
                <Link href="/report" asChild>
                    <Pressable
                        className="bg-white px-6 py-5 rounded-2xl shadow-md shadow-black/20 w-4/5 items-center border border-[#558B71]">
                        <Text className="text-3xl text-black font-intersemibold text-center">
                            Ik wil meldingen <Text className="text-[#558B71] font-interbold">maken</Text>
                        </Text>
                    </Pressable>
                </Link>
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] h-[15%] items-center pt-3">
                <Image source={require("../assets/images/logo.png")} className="h-20 w-20 rounded-xl"/>
            </View>
        </SafeAreaView>
    );
}