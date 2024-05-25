import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";
import {persistedReducer} from '../reducers/index'
import { createStore } from "redux";
import { persistStore } from 'redux-persist';

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger)
);

export const persistor = persistStore(store);
