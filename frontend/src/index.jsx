import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  } 
from "react-router-dom";
import './style.css';
import './App.css';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Signup from './routes/Signup';
import { Profile } from './routes/Profile';
import Logout from './routes/Logout';
import LoginForm from './routes/LoginForm';
import MyGDPortalPage from './routes/MyGDPortalPage';
import Index from './routes/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/home",
        element: <MyGDPortalPage />,
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
