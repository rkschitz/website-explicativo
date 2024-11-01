import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './auth/Context';
import PrivateRoute from './components/PrivateRoute';
import React, { useEffect } from 'react';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import BreedFeed from './pages/Breeds';

function App() {

  const [user, setUser] = React.useState(null)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setUser(token)
    }
  }, [])

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route element={<PrivateRoute />}>
          <Route path="/feed" element={<BreedFeed />} />
        </Route>
        {user ? '' : <Route path="/login" element={<Login />} />}
        {user ? '' : <Route path="/register" element={<Register />} />}
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
