import {useState} from "react";

export default function useLocationAutocomplete() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(null);

    const fetchSuggestions = async (q) => {
        setQuery(q);
        if (q.length < 3) {
            return setSuggestions([]);
        }

        try {
            const res = await fetch(
                `https://api.locationiq.com/v1/autocomplete?key=${process.env.EXPO_PUBLIC_LOCATIONIQ_API_KEY}&q=${encodeURIComponent(q)}&limit=5&countrycodes=nl&format=json`
            );
            const data = await res.json();
            setSuggestions(data);
        } catch (error) {
            console.error("Autocomplete error:", error);
        }
    };

    const formatAddress = (item) => {
        const address = item.address || {};
        const name = item.name || ''; // LocationIQ provides this when it's a POI

        const road = address.road || '';
        const houseNumber = address.house_number || '';
        const postcode = address.postcode || '';
        const city = address.city || address.town || address.village || '';

        const parts = [];

        // If it's a business/place, include name
        if (name) parts.push(name);

        // Add street + number
        if (road || houseNumber) parts.push(`${road} ${houseNumber}`.trim());

        // Add postcode + city
        if (postcode || city) parts.push(`${postcode} ${city}`.trim());

        return parts.join(', ');
    };

    const selectSuggestion = (item) => {
        const location = {
            name: formatAddress(item),
            latitude: parseFloat(item.lat),
            longitude: parseFloat(item.lon),
        };
        setQuery(formatAddress(item));
        setSuggestions([]);
        setSelected(location);
    };

    return {
        query,
        setQuery: fetchSuggestions,
        suggestions,
        selectSuggestion,
        selected,
        formatAddress,
    };
}