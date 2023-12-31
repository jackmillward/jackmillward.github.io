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

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PageTitle title="Home">
                <Home />
            </PageTitle>
        )
    },
    {
        path: '/contact',
        element: (
            <PageTitle title="Contact">
                <Contact />
            </PageTitle>
        ),
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
          <Home />
      </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
