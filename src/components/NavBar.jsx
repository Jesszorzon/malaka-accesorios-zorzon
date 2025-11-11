import CartWidget from './CartWidget.jsx'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo.png" alt="Malaka Accesorios" />
        <h1>Malaka Accesorios</h1>
      </div>

      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;


