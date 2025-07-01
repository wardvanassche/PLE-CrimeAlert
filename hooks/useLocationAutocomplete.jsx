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

    const selectSuggestion = (item) => {
        const location = {
            name: item.display_name,
            latitude: parseFloat(item.lat),
            longitude: parseFloat(item.lon),
        };
        setQuery(item.display_name);
        setSuggestions([]);
        setSelected(location);
    };

    return {
        query,
        setQuery: fetchSuggestions,
        suggestions,
        selectSuggestion,
        selected,
    };
}