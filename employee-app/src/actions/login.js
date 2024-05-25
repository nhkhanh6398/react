import {_getUserByIdAndPassword} from "../commonUltis/_DATA"

// Initial const action
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";
export const NOT_FOUND_AUTHED_USER = "NOT_FOUND_AUTHED_USER";

// Action for set authenticated user
export function setAuthedUser(login) {
    return {
        type: SET_AUTHED_USER,
        login,
    };
}

// Action to handle the case where an authenticated user cannot be found 
export function notFoundAuthedUser(login) {
    return {
        type: NOT_FOUND_AUTHED_USER,
        login,
    };
}

// Action for logout
export function logout() {
    return {
        type: LOGOUT_AUTHED_USER,
    };
}

// Process handle login account user
export function handleLogin(username, password) {
    return (dispatch) => {
        const status = localStorage.getItem('reLogin');
        
        if (status === 'false' || status === undefined || status === null) {
            localStorage.setItem('reLogin', 'true');
        }
        _getUserByIdAndPassword(username, password).then((user) => {
            if (!!user) {
                return dispatch(setAuthedUser(user));
            } else {
                return dispatch(notFoundAuthedUser(user));
            }
        })
    };
}

// Process handle logout account user
export function handleLogout() {
    return (dispatch) => {
        return dispatch(logout());
    };
}