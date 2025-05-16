import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'expo-router';

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {backgroundColor: '#558B71'},
            headerBackVisible: false,
            title: '',
        }}>
            <Stack.Screen name="onboarding"/>
            <Stack.Screen name="index"/>
            <Stack.Screen name="listOverview" options={{headerShown: false}}/>
            <Stack.Screen name="mapOverview" options={{headerShown: false}}/>
            <Stack.Screen name="report"/>
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})