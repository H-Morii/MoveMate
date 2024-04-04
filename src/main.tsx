import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

//ErrorPage
// import ErrorPage from "./error-page"

//Routes
import Homepage from './routes/Homepage.jsx';
import Login from './routes/Login.jsx';
import PageLayout from './Layouts/PageLayout/PageLayout.js';
import UserPage from './routes/UserPage/UserPage.js';
import WelcomeContent from './components/WelcomeContent/WelcomeContent.js';
import Map from './components/Map/Map.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <PageLayout>
      <UserPage/>
      <WelcomeContent/>
    </PageLayout>
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/homepage",
    element: (
      <Homepage />
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/login",
    element: (
    <Login />
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
