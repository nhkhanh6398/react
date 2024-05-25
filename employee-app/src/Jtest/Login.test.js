import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';
import { Provider } from "react-redux";
import { testStore } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import {handleInitialData} from "../actions/shared";

describe("Login", () => {
    it("Component login will render", () => {
        const view = render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it('Input elements will clear after clicking submit button', async () => {
        await testStore.dispatch(handleInitialData());

        render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        const loginHeadingElement = screen.getByTestId("login-heading");
        const userNameInputElement = screen.getByTestId("username");
        const passwordInputElement = screen.getByTestId("password");
        const submitButtonElement = screen.getByTestId("submit");
        expect(loginHeadingElement).toBeInTheDocument();
        expect(userNameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
        expect(submitButtonElement).toBeInTheDocument();

        fireEvent.change(userNameInputElement, {target: {value: 'khanhnh11'}});
        fireEvent.change(passwordInputElement, {target: {value: 'abc123'}});
        expect(userNameInputElement.value).toBe("khanhnh11");
        expect(passwordInputElement.value).toBe("abc123");
        fireEvent.click(submitButtonElement);
        expect(loginHeadingElement).toBeInTheDocument();
        expect(userNameInputElement.value).toBe("");
        expect(passwordInputElement.value).toBe("");
    });
});