import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HTML from './views/Html';
import Node from './views/Node';
import CSS from './views/Css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Inicio /</div>,
  },
  {
    path: "/html",
    element: <HTML />,
  },
  {
    path: "/css",
    element: <CSS />
  },
  {
    path: "/node",
    element: <Node />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

