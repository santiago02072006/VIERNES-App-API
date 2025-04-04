import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
    <>
   
        <nav className="c-menu">
            <Link to="/">Home</Link>
            <Link to="/favoritos">Favoritos</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/aleatorios">Aleatorios</Link>
            <Link to="/pokemon">Pokemons</Link>
            <Link to="/capturados">Capturados</Link>

        </nav>
    </>


    )
  }
  
  export default Menu