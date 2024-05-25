import Leaderboard from '../components/Leaderboard';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { testStore } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import {setAuthedUser} from "../actions/login";

describe("Leaderboard", () => {
    it("Component Leaderboard will render", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        const view = render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Leaderboard />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });
});