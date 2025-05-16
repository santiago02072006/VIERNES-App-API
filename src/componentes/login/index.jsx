import { useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar esto

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Necesario para redirigir después del login

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Intentar iniciar sesión con el email y contraseña
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Usuario o contraseña no válido");
    } else {
      // Obtener el usuario logueado
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Verificar si el usuario tiene el rol de 'admin'
        const { data, error } = await supabase
          .from("usuario")
          .select("roll")
          .eq("id", user.id)
          .single();

        if (error || !data) {
          alert("Error al verificar los permisos");
          return;
        }

        // Si es admin, redirigir al panel de administrador
        if (data.roll === "admin") {
          navigate("/administrador");
        } else {
          // Si no es admin, redirigir a la página principal (o donde sea apropiado)
          navigate("/");
        }
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <h2>No tiene cuenta</h2>
      <button onClick={() => navigate(`/registro`)}>Regístrese</button>
    </div>
  );
}

export default Login;
