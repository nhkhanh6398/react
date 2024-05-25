// Initial const action
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";

// Action object for receiving a list of user
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

// Action for associating a user with a answer
export function createAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}

// Action for associating a user with a question
export function createQuestionUser({author, qid }) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid,
    };
}