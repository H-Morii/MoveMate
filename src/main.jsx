import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';
import {mode} from "@chakra-ui/theme-tools"
import useAuthStore from './store/authStore'

//ErrorPage
// import ErrorPage from "./error-page"

//Routes
import Homepage from './routes/Homepage.jsx';
import Login from './routes/Login.tsx';
import PageLayout from './Layouts/PageLayout/PageLayout.js';
import WelcomeContent from './components/WelcomeContent/WelcomeContent.js';
import Profile from './components/Profile/Profile.js';
import Register from './routes/Register.tsx';

// 3. extend the theme
const theme = extendTheme({ config, styles });
const authUser = useAuthStore(state => state.user)

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      authUser ? 
    <PageLayout>
      <WelcomeContent/>
    </PageLayout> : <Navigate to='/homepage'/>
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/homepage",
    element: (
      !authUser ?
      <PageLayout>
      <Homepage />
      </PageLayout> : <Navigate to="/"/>

    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/login",
    element: (
    !authUser ?
    <Login /> : <Navigate to='/'/>
    ),
    errorElement: <div className=' font-light text-red-500'><h1>404 Not Found</h1></div>
  },
  {
    path: "/register",
    element: (
      <ChakraProvider>
        <Register/>
      </ChakraProvider>
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



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
