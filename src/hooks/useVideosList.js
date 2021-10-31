import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideosList(pagination) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();

            const videosRef = ref(db, "videos");

            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt(`${pagination}`),
                limitToFirst(15)
            );

            try {
                setLoading(true);
                setError(false);

                const snapshot = await get(videoQuery);

                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((previousVideos) => [
                        ...previousVideos,
                        ...Object.values(snapshot.val()),
                    ]);
                } else {
                    setHasMore(false);
                    console.log("No data available");
                }
            } catch (exception) {
                setLoading(false);
                setError(true);
                console.log(exception);
            }
        }

        fetchVideos();
    }, [pagination]);

    return { loading, error, videos, hasMore };
}
