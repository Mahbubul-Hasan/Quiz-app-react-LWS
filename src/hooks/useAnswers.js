import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const answersRef = ref(db, `answers/${videoID}/questions`);

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(answersRef);

                if (snapshot.exists()) {
                    setAnswers(snapshot.val());

                    setLoading(false);
                } else {
                    console.log("No data available");
                }
            } catch (exception) {
                setLoading(false);
                setError(true);
                console.log(exception);
            }
        }

        fetchAnswers();
    }, [videoID]);

    return { loading, error, answers };
}
