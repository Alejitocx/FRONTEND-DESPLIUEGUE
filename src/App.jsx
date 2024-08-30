import './App.css';
import LoginPage from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosList from './components/productos.jsx';
import SignUpForm from './components/SignUp.jsx'; // Asegúrate de que este es el nombre correcto
import ProtectedRoute from './components/ProtectedRoute.jsx';
import NotFoundPage from './components/NotFoundPage.jsx'; // Componente 404
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route 
          path="/LoginPage" 
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route
          path="/ProductosList"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<ProductosList />}
            />
          }
        />
        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
