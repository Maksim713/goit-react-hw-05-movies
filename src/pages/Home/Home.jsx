import { fetchTrendingMovies } from 'services/themoviedbApi';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';
import { IMG_URL } from 'variables';
import css from './Home.module.css';
import { useEffect } from 'react';

function Home() {
  const { isLoading, data, error } = useQuery(
    'trendingMovies',
    fetchTrendingMovies
  );

  useEffect(() => {
    localStorage.setItem('previousPage', '/');
  }, []);

  if (error) return <h1>Error: {error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div style={{ margin: '15px 0' }}>
      <Container>
        <h1 className={css.visuallyHidden}>Home</h1>
        <ul className={css.container}>
          {data?.results?.map(({ id, title, poster_path }) => (
            <li key={id} className={css.catalogCard}>
              <div>
                <Link to={`/movies/${id}`}>
                  <img
                    src={`${IMG_URL}${poster_path}`}
                    alt="poster"
                    width={40}
                    height={40}
                    className={css.image}
                  />
                  <div className={css.catalogOverlay}></div>
                </Link>
                <div className={css.catalogInfo}>
                  <p className={css.title}>{title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Home;
