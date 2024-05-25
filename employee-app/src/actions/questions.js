import { createAnswerUser, createQuestionUser } from "./users";
import { _saveQuestion, _saveQuestionAnswer } from '../commonUltis/_DATA';
import { hideLoading } from "react-redux-loading-bar";

// Initial const action
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

// Action object for receiving a list of question
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

// Action object for adding a new question
function createQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

// Action object for adding an answer to a question
function createAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

// Process handle add questions
export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { login } = getState();
        _saveQuestion({optionOneText: firstOption, optionTwoText: secondOption, author: login.id})
        .then((question) => {
            dispatch(createQuestion(question));
            dispatch(createQuestionUser({author: login.id, qid: question.id}));
        })
        .then(() => dispatch(hideLoading()));
    }
}

// Process handle add answers
export function handleAddAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { login } = getState();
        console.log("qid: " + qid);
        console.log("answer: " + answer);
        return _saveQuestionAnswer({authedUser: login.id, qid: qid, answer: answer})
        .then(() => {
            
            dispatch(createAnswerQuestion(login.id, qid, answer));
            dispatch(createAnswerUser(login.id, qid, answer));
        })
        .then(() => dispatch(hideLoading()))
        .catch((e) => console.log("Error from handleAddAnswer: ", e));
    };
}


