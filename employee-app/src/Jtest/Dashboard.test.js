import Dashboard from '../components/Dashboard';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { testStore } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import {setAuthedUser} from "../actions/login";

describe("Dashboard", () => {
    it("Component Dashboard will render", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        const view = render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });
});