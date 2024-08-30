import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404: Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default NotFoundPage;
