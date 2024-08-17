import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import * as ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import Root from './Root/Root';
import ErrorPage from './Pages/ErrorPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Provider/AuthProvider';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
