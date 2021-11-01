import { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import classes from "../asset/styles/MiniPlayer.module.css";

export default function MiniPlayer({ videoID, title }) {
    const [status, setStatus] = useState(false);
    const buttonRef = useRef();
    const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;
    function toggleMiniPlayer() {
        if (status) {
            buttonRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        } else {
            buttonRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        }
    }
    return (
        <div
            ref={buttonRef}
            onClick={toggleMiniPlayer}
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
        >
            <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
            <span onClick={toggleMiniPlayer} className={`material-icons-outlined ${classes.close}`}>
                close
            </span>
            <ReactPlayer
                url={videoUrl}
                playing={status}
                controls
                width="300px"
                height="168px"
                className={classes.player}
            />
            <p>{title}</p>
        </div>
    );
}
