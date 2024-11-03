import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/Context';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Suggestion from './pages/Suggestion';
import ManagerUsers from './pages/Users';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/users" element={<ManagerUsers />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
