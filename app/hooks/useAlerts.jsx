import {useState, useEffect} from "react";
import {db} from "../../firebase.config";
import {collection, getDocs, query, orderBy} from "firebase/firestore";

export default function useAlerts() {
    const [alerts, setAlerts] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const q = query(collection(db, "alerts"), orderBy("timestamp", "desc"));
                const snapshot = await getDocs(q);
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