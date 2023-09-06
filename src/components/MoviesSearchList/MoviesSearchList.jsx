import { useOriginPath } from 'hooks/useOriginPath';
import { NavLink } from 'react-router-dom';
import css from './MoviesSearchList.module.css';

function MoviesSearchList({ movies }) {
  const originPath = useOriginPath();
  return (
    <ul className={css.catalogFilms}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.catalogCard}>
          <NavLink to={`${originPath}/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesSearchList;
