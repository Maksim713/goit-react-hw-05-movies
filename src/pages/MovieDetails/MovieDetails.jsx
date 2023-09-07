import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchDetailMovie } from '../../services/themoviedbApi';
import { IMG_URL } from '../../variables';
import { useOriginPath } from '../../hooks/useOriginPath';
import Container from 'components/Container/Container';
import css from './MovieDetails.module.css';
import BackButton from 'components/BackButton/BackButton';
import img from '../../img/No-Image.png';

export default function MovieDetails() {
  const originPath = useOriginPath();
  const { movieId } = useParams();
  const { isLoading, data, error } = useQuery(['movies', movieId], () =>
    fetchDetailMovie(movieId)
  );

  if (error) return <h1>Error: {error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  const { title, overview, backdrop_path } = data;
  return (
    <div className={css.container}>
      <Container>
        <h1 className={css.visuallyHidden}>MovieDetails</h1>
        <BackButton />
        {error && <h1>Error: {error}</h1>}
        {isLoading && <h1>Loading...</h1>}
        {!error && !isLoading && (
          <div className={css.data}>
            <div className={css.dataMovies}>
              {backdrop_path ? (
                <img
                  src={`${IMG_URL}${backdrop_path}`}
                  alt="poster"
                  width={'50%'}
                  height={'auto'}
                />
              ) : (
                <img src={`${img}`} alt="" width={200} height={140} />
              )}
              <ul className={css.infoMovies}>
                <li>
                  <h2>{title}</h2>
                </li>
                <li>
                  <p>{overview}</p>
                </li>
              </ul>
            </div>
            <ul className={css.listLink}>
              <li>
                <NavLink to={`${originPath}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${originPath}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        )}
      </Container>
    </div>
  );
}
