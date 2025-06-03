import {Stack, useRouter, usePathname} from 'expo-router';
import "../global.css";
import {View, ActivityIndicator} from 'react-native';
import {
    useFonts,
    Inter_400Regular,
} from '@expo-google-fonts/inter'
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const pathname = usePathname()

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
    })

    useEffect(() => {
        const checkViewed = async () => {
            try {
                const value = await AsyncStorage.getItem('viewedOnboarding')
                console.log("AsyncStorage value: ", value)
                if (value === null && pathname !== '/onboarding') {
                    console.log("Router replace to onboarding");
                    router.replace('/onboarding');
                }
            } catch (e) {
                console.log('error reading data', e)
            } finally {
                setLoading(false)
            }
        }
        checkViewed()
    }, []);

    if (!fontsLoaded || loading) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <ActivityIndicator size="large" color="#558B71"/>
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