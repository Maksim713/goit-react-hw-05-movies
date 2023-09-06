import { NavLink, Routes, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.container}>
      <Container>
        <div className={css.navContainer}>
          <nav className={css.nav}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/movies">
              Movies
            </NavLink>
          </nav>
        </div>
      </Container>
      <Routes>
        <Route path="/" element={false} />
        <Route path="/movies" element={<Searchbar />} />
        <Route path="*" element={false} />
      </Routes>
    </header>
  );
}

export default Header;
