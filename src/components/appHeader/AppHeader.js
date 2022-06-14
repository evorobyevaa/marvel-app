import { Link, NavLink } from 'react-router-dom';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><NavLink end style={({ isActive }) => ({color: isActive ? '#9F0013' : 'inherit'})} to="/">Characters</NavLink></li>
          /
          <li className="menu__item"><NavLink style={({ isActive }) => ({color: isActive ? '#9F0013' : 'inherit'})} to="/comics">Comics</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;