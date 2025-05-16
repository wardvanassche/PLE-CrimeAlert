import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let {coords} = await Location.getCurrentPositionAsync({});

        if (coords) {
            const {latitude, longitude} = coords;
            console.log(latitude, longitude);
            setLatitude(latitude);
            setLongitude(longitude);
            let response = await Location.reverseGeocodeAsync({
                latitude, longitude
            });

            console.log('user location is:', response);
        }
    }

    useEffect(() => {
        (async () => {
            await getUserLocation();
        })();
    }, []);

    return {latitude, longitude, errorMsg}
}

export default useLocation;