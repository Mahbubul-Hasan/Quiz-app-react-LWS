import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            const db = getDatabase();
            const quizRef = ref(db, `quiz/${videoID}/questions`);
            const quizQuery = query(quizRef, orderByKey());

            try {
                setLoading(true);
                setError(false);

                const snapshot = await get(quizQuery);

                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions(snapshot.val());

                    // Alternative
                    // setQuestions((prevQuestions) => [
                    //     ...prevQuestions,
                    //     ...Object.values(snapshot.val()),
                    // ]);
                } else {
                    console.log("No data available");
                }
            } catch (exception) {
                setLoading(false);
                setError(true);
                console.log(exception);
            }
        }

        fetchQuestions();
    }, [videoID]);

    return { loading, error, questions };
}
