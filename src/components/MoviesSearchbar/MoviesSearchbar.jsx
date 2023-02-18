import { useState, memo } from 'react';
import css from '../MoviesSearchbar/moviesSearchbar.module.css';
import PropTypes from 'prop-types';

const initialState = {
  query: '',
};

const MoviesSearchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState }); // reset function
  };

  const { query } = state;

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          className={css.SearchForm_input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type movie title"
          required
        />
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>
      </form>
    </div>
  );
};

export default memo(MoviesSearchbar); // add optimization memo

MoviesSearchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
