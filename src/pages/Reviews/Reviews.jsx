import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieReviews } from 'services/themoviedbApi';
import css from './Reviews.module.css';
import NotFound from 'pages/NotFound/NotFound';

function Reviews() {
  const { movieId } = useParams();
  const { isLoading, data, error } = useQuery(
    ['movies', movieId, 'reviews'],
    () => fetchMovieReviews(movieId)
  );

  return (
    <div className={css.container}>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading && (
        <div className={css.reviews}>
          <h2 className={css.visuallyHidden}>Reviews</h2>
          {data.results && data.results > 0 ? (
            <ul className={css.contentList}>
              {data.results.map(({ id, author, content }) => (
                <li key={id} className={css.contentItem}>
                  <h3 className={css.title}>Author: {author}</h3>
                  <p>{content}</p>
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

export default Reviews;
