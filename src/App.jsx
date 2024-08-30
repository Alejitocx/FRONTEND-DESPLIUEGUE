import './App.css';
import LoginPage from './components/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosList from './components/productos.jsx';
import SignUpForm from './components/SingUp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Redirige a la página de inicio de sesión por defecto */}
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        
        {/* Ruta para la página de inicio de sesión */}
        <Route 
          path="/LoginPage" 
          element={<LoginPage onLogin={handleLogin} />} 
        />

        {/* Ruta para el formulario de registro */}
        <Route path="/SignUpForm" element={<SignUpForm />} />
        
        {/* Ruta protegida para la lista de productos */}
        <Route
          path="/ProductosList"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProductosList />
            </ProtectedRoute>
          }
        />
        
        {/* Redirigir rutas no encontradas a la página de inicio de sesión */}
        <Route path="*" element={<Navigate to="/LoginPage" />} />
      </Routes>
    </Router>
  );
}

export default App;