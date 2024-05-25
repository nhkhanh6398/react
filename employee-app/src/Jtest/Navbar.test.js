import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Navbar';
import { Provider } from "react-redux";
import { testStore } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import {setAuthedUser} from "../actions/login";

describe("Nav", () => {
    it("Component Nav will render", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        const view = render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("should display username of logged in user", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));

        render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Nav/>
                </BrowserRouter>
            </Provider>
        );

        const userSpanElement = screen.getByTestId("user-information");
        expect(userSpanElement.textContent).toBe("khanhnh11");

    });
});