import classes from "../asset/styles/Video.module.css";

export default function Video({ video }) {
    // eslint-disable-next-line no-unused-vars
    const { title, noq, youtubeID } = video;
    return (
        <div className={classes.video}>
            <img src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`} alt={title} />
            <p className={classes.title}>{title}</p>
            <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total point: {noq * 5}</p>
            </div>
        </div>
    );
}
