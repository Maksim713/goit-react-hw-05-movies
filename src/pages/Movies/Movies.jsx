import { moviesSearchValueCtx } from 'context/moviesSearchValueCtx ';
import { useContext, useEffect, useState } from 'react';
import css from './Movies.module.css';
import Container from 'components/Container/Container';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';
import { useSearch } from './useSearch';

function Movies() {
  const { search, setTotalResults, setMoviesCount, updateMovies } =
    useContext(moviesSearchValueCtx);
  const { error, loading, page, setPage, movies, totalPages, totalResults } =
    useSearch({ search });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setPage(1);
  }, [search, setPage]);

  useEffect(() => {
    setMoviesCount(movies.length);
    setTotalResults(totalResults);
    setSearchResults(movies);
    updateMovies(movies);
  }, [
    searchResults,
    setMoviesCount,
    setTotalResults,
    totalResults,
    movies,
    updateMovies,
  ]);

  return (
    <div className={css.container}>
      <Container>
        {!error && searchResults?.length > 0 && (
          <MoviesSearchList movies={searchResults} />
        )}
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
