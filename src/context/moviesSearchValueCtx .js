import { createContext, useMemo, useState } from 'react';

const initContext = {
  search: '',
  totalResults: 0,
  moviesCount: 0,
  updateMovies: () => {},
};

export const moviesSearchValueCtx = createContext(initContext);

export default function MoviesSearchValueCtx({ children }) {
  const [search, setSearch] = useState(initContext.search);
  const [totalResults, setTotalResults] = useState(initContext.totalResults);
  const [moviesCount, setMoviesCount] = useState(initContext.moviesCount);
  const [searchResults, setSearchResults] = useState([]);

  const updateMovies = newMovies => {
    setMoviesCount(newMovies.length);
  };

  const providerValue = useMemo(
    () => ({
      search,
      setSearch,
      totalResults,
      setTotalResults,
      moviesCount,
      setMoviesCount,
      updateMovies,
      searchResults,
      setSearchResults,
    }),
    [moviesCount, search, totalResults, searchResults, setSearchResults]
  );

  return (
    <moviesSearchValueCtx.Provider value={providerValue}>
      {children}
    </moviesSearchValueCtx.Provider>
  );
}
