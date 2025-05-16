import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import { supabase } from './supabase';
import Menu from './componentes/menu';
import Aleatorios from './componentes/aleatorios';
import Listas from './componentes/listas';
import Capturados from './componentes/capturados';
import Favoritos from './componentes/favoritos';
import Usuarios from './componentes/usuarios';
import Pokemon from './componentes/pokemon';
import Login from './componentes/login';
import Registro from './componentes/registro';
import Administrador from './componentes/admistrador';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    // Escucha cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}
        <Routes>
          <Route path="/" element={usuario ? <Listas /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/administrador" element={<Administrador />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
