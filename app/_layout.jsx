import { Stack } from 'expo-router';
import "../global.css";
import { View, ActivityIndicator } from 'react-native';
import {
    useFonts,
    Inter_400Regular,
    Inter_400Regular_Italic,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_700Bold_Italic
} from '@expo-google-fonts/inter';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_400Regular_Italic,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71" />
            </View>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }} />
    );
}