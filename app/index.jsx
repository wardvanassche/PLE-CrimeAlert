import {SafeAreaView, Text, TouchableOpacity, View} from "react-native"
import {Link} from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white px-4 items-center">
            <Link href="/onboarding" className="border-2 rounded-full w-11/20 py-2 mb-36 text-center">
                <Text className="text-black text-2xl font-bold">Uitleg nodig?</Text>
                <Text className="text-black text-2xl font-bold">Druk hier</Text>
            </Link>

            <Link href="/listOverview" className="bg-white p-6 w-7/10 items-center shadow-sm mb-1">
                <Text className="text-black text-2xl font-normal">
                    Ik wil meldingen
                    <Text className="font-bold"> bekijken</Text>
                </Text>
            </Link>
            <Link href="/report" className="bg-white p-6 w-7/10 items-center shadow-sm mb-1">
                <Text className="text-black text-2xl font-normal">
                    Ik wil een melding
                    <Text className="font-bold"> maken</Text>
                </Text>
            </Link>
            <View className="absolute bottom-0 left-0 right-0 bg-[#558B71] p-2 h-[15%] justify-center items-center">
                <Text className="text-black text-lg">Notificaties</Text>

                <View className="flex-row items-center justify-center w-full space-x-1.5 mt-2">
                    <TouchableOpacity className="rounded-full border-2 bg-white w-1/4 py-2 items-center shadow-sm">
                        <Text className="text-black text-lg font-bold">AAN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-full border-2 bg-white w-1/4 py-2 items-center shadow-sm">
                        <Text className="text-black text-lg font-bold">UIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}