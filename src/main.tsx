import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

//ErrorPage
// import ErrorPage from "./error-page"

//Routes
import Homepage from './routes/Homepage.jsx';
import Login from './routes/Login.tsx';
import PageLayout from './Layouts/PageLayout/PageLayout.js';
import WelcomeContent from './components/WelcomeContent/WelcomeContent.jsx';
import Profile from './components/Profile/Profile.js';
import Register from './routes/Register.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <PageLayout>
      <WelcomeContent/>
    </PageLayout>
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/homepage",
    element: (
      <PageLayout>
      <Homepage />
      </PageLayout>

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
  {
    path: "/register",
    element: (
    <Register />
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/:user",
    element: (
    <PageLayout>
      <Profile/>
    </PageLayout>
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
