import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import classes from "../asset/styles/Videos.module.css";
import useVideosList from "../hooks/useVideosList";
import Video from "./Video";

export default function Videos() {
    const [pagination, setPagination] = useState(1);
    const { loading, error, videos, hasMore } = useVideosList(pagination);
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll dataLength={videos.length} next={() => setPagination(pagination + 15)} hasMore={hasMore} className={classes.videos}>
                    {videos.map((video) => (
                        <Link to="quiz" key={video.youtubeID}>
                            <Video video={video} />
                        </Link>
                    ))}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No data found !</div>}
            {error && <div>Something wrong !</div>}
            {loading && <div>Loading...</div>}
        </div>
    );
}
