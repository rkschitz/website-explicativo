import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './auth/Context';
import React, { useEffect } from 'react';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import BreedFeed from './pages/Breeds';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Suggestion from './pages/Suggestion/index.jsx';

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
        <Route path="/feed" element={<BreedFeed />} />
        <Route path='/sugestion' element={<Suggestion />} />
        {user ? '' : <Route path="/login" element={<Login />} />}
        {user ? '' : <Route path="/register" element={<Register />} />}
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
