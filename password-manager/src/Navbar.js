import { NavLink } from 'react-router-dom'
import './NavBarElements.css'
import LoginPage from './LoginPage'
import AnotherPage from './'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/LoginPage">LoginPage</NavLink>
            </li>
            <li>
              <NavLink to="/AnotherPage">AnotherPage</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar