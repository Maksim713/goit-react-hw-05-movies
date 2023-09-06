import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import css from './Searchbar.module.css';
import { moviesSearchValueCtx } from 'context/moviesSearchValueCtx ';

function Searchbar() {
  const { setSearch } = useContext(moviesSearchValueCtx);

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearch(e.target.elements['search'].value.toLowerCase().trim());
  };

  useEffect(() => () => setSearch(''), [setSearch]);

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
