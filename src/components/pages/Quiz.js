import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            const { questionID, optionsIndex, value } = action;
            questions[questionID].options[optionsIndex].checked = value;
            return questions;
        default:
            return state;
    }
};

export default function Quiz() {
    const { videoID } = useParams();

    const { loading, error, questions } = useQuestions(videoID);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [qna, dispatch] = useReducer(reducer, initialState);

    const { currentUser } = useAuth();

    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    function handleAnswerChange(e, index) {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionsIndex: index,
            value: e.target.checked,
        });
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        }
    }

    const percentage = questions.length ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    async function submit() {
        const { uid } = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [videoID]: qna,
        });

        history.push({
            pathname: `/result/${videoID}`,
            state: { qna },
        });
    }

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Something wrong! Please try again.</div>}
            {!loading && !error && qna && qna.length > 0 ? (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={previousQuestion}
                        submit={submit}
                        percentage={percentage}
                    />
                    <MiniPlayer />{" "}
                </>
            ) : (
                <p className="error">Question not found</p>
            )}
        </>
    );
}
