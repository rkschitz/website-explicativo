import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HTML from './views/Html';
import Node from './views/Node';
import CSS from './views/Css';
import Javascript from './views/Javascript';  
import ReactPage from './views/React';
import Devops from './views/Devops';



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
    path: "/javascript",
    element: <Javascript />,
  },
  {
    path: "/react",
    element: <ReactPage />,
  },
  {
    path: "/node",
    element: <Node />
  },
  {
    path: "/devops",
    element: <Devops />,
  },
  {

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

