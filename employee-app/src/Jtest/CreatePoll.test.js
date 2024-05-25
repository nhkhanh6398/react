import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreatePoll from '../components/CreatePoll';
import { Provider } from "react-redux";
import { testStore } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import {setAuthedUser} from "../actions/login";

describe("CreatePoll", () => {
    it("Component CreatePoll will render", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        const view = render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <CreatePoll />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("Can input to option 1 and 2", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <CreatePoll/>
                </BrowserRouter>
            </Provider>
        );

        const firstOptionInputElement = screen.getByTestId("optionOne");
        const secondOptionInputElement = screen.getByTestId("optionTwo");
        const submitButtonElement = screen.getByTestId("submit");

        expect(submitButtonElement.textContent).toBe(" Submit ");

        fireEvent.change(firstOptionInputElement, {target: {value: 'test option one'}});
        fireEvent.change(secondOptionInputElement, {target: {value: 'test option two'}});
        expect(firstOptionInputElement.value).toBe("test option one");
        expect(secondOptionInputElement.value).toBe("test option two");
    });

    it("Can input to option 1 but not input option 2", () => {
        testStore.dispatch(setAuthedUser({id: "khanhnh11", password: "s"}));
        render(
            <Provider store={testStore}>
                <BrowserRouter>
                    <CreatePoll/>
                </BrowserRouter>
            </Provider>
        );

        const firstOptionInputElement = screen.getByTestId("optionOne");
        const secondOptionInputElement = screen.getByTestId("optionTwo");
        const submitButtonElement = screen.getByTestId("submit");

        expect(submitButtonElement.textContent).toBe(" Submit ");

        fireEvent.change(firstOptionInputElement, {target: {value: 'test option one'}});
        fireEvent.change(secondOptionInputElement, {target: {value: ''}});
        fireEvent.click(submitButtonElement);
        expect(firstOptionInputElement.value).toBe("test option one");
        expect(secondOptionInputElement.value).toBe("");
    });
});