import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import './index.scss';
import App from './App';
import {CategoriesProvider} from "./context/categories.context";
import {CartProvider} from "./context/cart.context";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                    <CategoriesProvider>
                        <CartProvider>
                            <App/>
                        </CartProvider>
                    </CategoriesProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
