import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import css from './Searchbar.module.css';
import { moviesSearchValueCtx } from 'context/moviesSearchValueCtx ';
import { useLocation, useNavigate } from 'react-router-dom';

function Searchbar() {
  const { setSearch, setSearchResults } = useContext(moviesSearchValueCtx);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQueryParam = queryParams.get('search');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQueryParam) {
      setSearch(searchQueryParam.toLowerCase().trim());
    }
  }, [setSearch, searchQueryParam]);

  useEffect(() => () => setSearch(''), [setSearch]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const newSearch = e.target.elements['search'].value.toLowerCase().trim();
    setSearch(newSearch);

    setSearchResults([]);
    navigate(`/movies?search=${newSearch}`);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
