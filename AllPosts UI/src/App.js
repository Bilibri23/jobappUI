import './App.css';
import Search from './components/Search';
import LoginForm from './Login';
import RegisterForm from './Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const [token, setToken] =  useState(localStorage.getItem('token') || null);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={token ? <Search /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
  };
  

export default App;
