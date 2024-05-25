import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import login from "./login";
import questions from "./questions";
import users from "./users";
import nav from "./nav";


// Use redux-persist to allow you to store and reload the state of your Redux store from localStorage, sessionStorage, or other storage sources.
export const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducer = combineReducers({
    login,
    users,
    questions,
    nav
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);