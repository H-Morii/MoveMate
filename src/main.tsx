import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  Navigate,
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

//firebase
import useAuthStore from './store/authStore'

//Chakra
import { ChakraProvider } from '@chakra-ui/react'



const App = () => {
  const authUser = useAuthStore(state => state.user);

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
return (
  <RouterProvider router={router} />
);
}

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);