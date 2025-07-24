
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePage from './components/CreatePage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CreateUserPage from './components/CreateUserPage';

function App() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Navigate to={'/home'} /> : <LoginPage />} />
        <Route path="/create" element={token ? <Navigate to={'/home'} /> : <CreatePage />} />
        <Route path="/home" element={!token ? <Navigate to={'/'} /> : <HomePage />} />
        <Route path="/user-create" element={!token ? <Navigate to={'/'} /> : <CreateUserPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
