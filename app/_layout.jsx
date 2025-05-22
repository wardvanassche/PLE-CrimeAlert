import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                title: '',
            }}
        >
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="index" />
            <Stack.Screen name="listOverview" />
            <Stack.Screen name="mapOverview" options={{animation: 'none'}}/>
            <Stack.Screen name="report" />
        </Stack>
    );
};

export default RootLayout;