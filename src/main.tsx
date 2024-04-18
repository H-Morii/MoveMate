import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

//ErrorPage
import ErrorPage from "./error-page"

//Routes
import Homepage from './routes/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
