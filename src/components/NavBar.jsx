
import CartWidget from './CartWidget.jsx'
import logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Malaka Accesorios" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
