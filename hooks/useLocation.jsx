import * as Location from 'expo-location';
import {useState, useEffect} from "react";

export default function useLocation() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const getCurrentLocation = async () => {
        try {
            let {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let {coords} = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            if (coords) {
                const {latitude, longitude} = coords;
                setLatitude(latitude);
                setLongitude(longitude);
                let response = await Location.reverseGeocodeAsync({
                    latitude, longitude
                });

                console.log('user location is:', response);
            }
        } catch (error) {
            console.log('error getting user location', error);
        }
    }

    useEffect(() => {
        (async () => {
            await getCurrentLocation();
        })();
    }, []);

    return {latitude, longitude}
}