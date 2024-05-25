import { LOGOUT_AUTHED_USER, SET_AUTHED_USER, NOT_FOUND_AUTHED_USER } from "../actions/login";

export default function login(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.login;
        case NOT_FOUND_AUTHED_USER:
            alert ('Username or password is incorrect');
            return null;
        case LOGOUT_AUTHED_USER:
            return null;
        default:
            return state;
    }
}