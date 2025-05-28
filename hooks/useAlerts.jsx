import {useState, useEffect} from "react";
import {db} from "../firebase.config";
import {collection, getDocs} from "firebase/firestore";

export default function useAlerts() {
    const [alerts, setAlerts] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const snapshot = await getDocs(collection(db, "alerts"));
                const alertsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setAlerts(alertsData);
            } catch (error) {
                console.log("Error fetching alerts: ", error);
                setAlerts([]);
            }
        })();
    }, []);

    return {alerts};
}