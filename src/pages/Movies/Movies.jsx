import { moviesSearchValueCtx } from 'context/moviesSearchValueCtx ';
import { useContext, useEffect } from 'react';
import css from './Movies.module.css';
import Container from 'components/Container/Container';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';
import { useSearch } from './useSearch';

function Movies() {
  const { search, setTotalResults, setMoviesCount } =
    useContext(moviesSearchValueCtx);
  const { error, loading, page, setPage, movies, totalPages, totalResults } =
    useSearch({ search });

  useEffect(() => {
    setMoviesCount(movies.length);
    setTotalResults(totalResults);
  }, [movies.length, setMoviesCount, setTotalResults, totalResults]);

  return (
    <div className={css.container}>
      <Container>
        {!error && movies?.length > 0 && <MoviesSearchList movies={movies} />}
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {!loading && !error && page < totalPages && (
          <button className={css.moreBtn} onClick={() => setPage(p => p + 1)}>
            More {page}/{totalPages}
          </button>
        )}
      </Container>
    </div>
  );
}

export default Movies;
