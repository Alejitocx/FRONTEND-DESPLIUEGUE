import './App.css';
import LoginPage from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosList from './components/productos.jsx';
import SignUpForm from './components/SingUp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useState } from 'react';

// Componente para mostrar un mensaje de error cuando la ruta no existe
function NotFound() {
  return (
    <div className="not-found">
      <h2>404: Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <button onClick={() => window.history.back()}>Volver</button>
    </div>
  );
}

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
        {/* Ruta para manejar URLs no existentes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
