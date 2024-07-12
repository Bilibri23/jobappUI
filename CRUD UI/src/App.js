import { Search } from '@mui/icons-material';
import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token); // Save the token to local storage
  };

  return (
  <>
   <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllPosts/>}/>
   <Route path="/create" element={<Create />} />
   <Route path="/edit" element={<Edit />} />
   <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
   <Route path="/register" element={<RegisterForm />} />
   </Routes>
   </BrowserRouter> 
  </>
  );
}

export default App;
