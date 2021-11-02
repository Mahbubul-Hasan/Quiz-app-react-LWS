import defaultImage from "../asset/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../asset/styles/Summary.module.css";

export default function Summary({ score, noq }) {
    // eslint-disable-next-line no-unused-vars
    function getKeyword() {
        if ((score() / (noq * 5)) * 100 < 50) return "failed";
        if ((score() / (noq * 5)) * 100 > 75) return "good";
        if ((score() / (noq * 5)) * 100 > 100) return "very good";
        if ((score() / (noq * 5)) * 100 === 100) return "excellent";
    }
    const url = `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`;
    const header = { Authorization: process.env.REACT_APP_PEXELS_API_KEY };
    // eslint-disable-next-line no-unused-vars
    const { loading, error, result } = useFetch(url, "GET", header);

    const image = result ? result?.photos[0]?.src.large2x : defaultImage;

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score()} out of {noq * 5}
                </p>
            </div>
            {loading && <div className={classes.badge}>Loading...</div>}
            {error && <div className={classes.badge}>Something went wrong</div>}
            {!loading && !error && result && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
}
