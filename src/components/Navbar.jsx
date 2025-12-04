import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🛍️ FakeStore Shop
        </Link>
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Products
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            List
          </NavLink>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
