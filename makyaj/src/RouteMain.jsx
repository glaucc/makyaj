import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Shop from './Shop'
import './index.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

export default function RouteMain() {
    
    const home = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/shop",
            element: <Shop />
        }]);
    
    return (
        // <App />
        <RouterProvider router={home} />
    )
}