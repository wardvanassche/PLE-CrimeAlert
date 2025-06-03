import {Stack, useRouter} from 'expo-router';
import "../global.css";
import { View, ActivityIndicator } from 'react-native';
import {
    useFonts,
    Inter_400Regular,
} from '@expo-google-fonts/inter'

export default function RootLayout() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
    })

    if (!fontsLoaded) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71" />
            </View>
        );
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    );
}