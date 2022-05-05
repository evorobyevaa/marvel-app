import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <a href='#'>
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><a href="#">Characters</a></li>
          /
          <li className="menu__item"><a href="#">Comics</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;