import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useHasViewedOnboarding() {
    const [hasViewed, setHasViewed] = useState(false)

    useEffect(() => {
        const checkIfHasViewed = async () => {
            try {
                const value = await AsyncStorage.getItem('viewedOnboarding')
                if (value === 'true') {
                    setHasViewed(true)
                } else {
                    setHasViewed(false)
                }
            } catch (e) {
                console.error('Error reading onboarding status', e);
                setHasViewed(false);
            }
        }
        checkIfHasViewed()
    }, []);

    return hasViewed
}