import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import { Provider } from "react-redux";
import { testStore, persistor } from "./testStore";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

it("Component app will render", () => {
    const view = render(
        <Provider store={testStore}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
});

