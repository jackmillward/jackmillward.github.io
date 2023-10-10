import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import Contact from "./Contact";
import reportWebVitals from './reportWebVitals';
import PageTitle from "./PageTitle";
import RootLayout from "./components/Layout";

const getRouteComponent = (children, pageTitle) => (
    <RootLayout>
        <PageTitle title={pageTitle}>
            {children}
        </PageTitle>
    </RootLayout>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: getRouteComponent(<Home/>, "Home"),
    },
    {
        path: '/contact',
        element: getRouteComponent(<Contact/>, "Contact"),
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
