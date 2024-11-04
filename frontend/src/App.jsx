// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/Context";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Suggestion from "./pages/Suggestion";
import ManagerUsers from "./pages/Users";
import Html from "./pages/Html"; 
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";
import ReactPage from "./pages/React"; 
import Node from "./pages/Node"; 
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />} >
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/users" element={<ManagerUsers />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<JavaScript />} /> 
        <Route path="/react" element={<ReactPage />} /> 
        <Route path="/node" element={<Node />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "50%" }}
      />
      <Footer />
    </AuthProvider>
  );
}

export default App;
