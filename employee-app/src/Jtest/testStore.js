import { createStore } from "redux";
import {persistedReducer} from '../reducers/index'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

export const testStore = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(testStore);