import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from 'services/themoviedbApi';
import { IMG_URL } from 'variables';
import NotFound from 'pages/NotFound/NotFound';
import css from './Cast.module.css';
import img from '../../img/No-Image.png';

function Cast() {
  const { movieId } = useParams();
  const { isLoading, data, error } = useQuery(['movies', movieId, 'cast'], () =>
    fetchMovieCredits(movieId)
  );

  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading && (
        <div>
          <h2 className={css.visuallyHidden}>Cast</h2>
          {data.cast && data.cast.length > 0 ? (
            <ul className={css.castList}>
              {data.cast.map(({ id, character, name, profile_path }) => (
                <li key={id} className={css.castItem}>
                  {profile_path ? (
                    <img
                      src={`${IMG_URL}${profile_path}`}
                      alt="poster"
                      width={200}
                      height={140}
                    />
                  ) : (
                    <img src={`${img}`} alt="" width={200} height={140} />
                  )}
                  <div className={css.castCard}>
                    <h3 className={css.name}>{name}</h3>
                    <p className={css.text}>Character: {character}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <NotFound />
          )}
        </div>
      )}
    </div>
  );
}

export default Cast;
