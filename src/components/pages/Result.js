import _ from "lodash";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
    const { videoID } = useParams();

    const { location } = useHistory();
    const { qna } = location.state;

    const { loading, error, answers } = useAnswers(videoID);

    function scoreCalculate() {
        let score = 0;

        answers.forEach((question, index1) => {
            const correctAnsIndexes = [];
            const checkedAnsIndexes = [];
            question.options.forEach((option, index2) => {
                if (option.correct) correctAnsIndexes.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedAnsIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(correctAnsIndexes, checkedAnsIndexes)) {
                score += 5;
            }
        });

        return score;
    }

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Something wrong! Please try again.</div>}
            {!loading && !error && answers && answers.length > 0 && (
                <>
                    <Summary score={scoreCalculate} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}
