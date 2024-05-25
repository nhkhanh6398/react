import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {_getQuestions, _getUsers} from "../commonUltis/_DATA";

// Initial const action
export const SET_ITEM_NAV = "SET_ITEM_NAV";
export const HOME = "home";

// Process handle initial data show
export function handleInitialData() {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {users, questions, nav} = getState();
        if (Object.keys(users).length === 0 && Object.keys(questions).length === 0 && Object.keys(nav).length === 0) {
            return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch({type: SET_ITEM_NAV, itemNav: HOME});
                dispatch(hideLoading());
                localStorage.setItem('reLogin', 'false');
            })
        }
    };
}