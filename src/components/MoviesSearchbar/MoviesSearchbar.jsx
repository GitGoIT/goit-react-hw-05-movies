import css from '../MoviesSearchbar/moviesSearchbar.module.css';
import PropTypes from 'prop-types';
import { useState, memo } from 'react';

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
    <div className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type movie title"
          required
        />
        <button type="submit" className={css.button}>Search
        </button>
      </form>
    </div>
  );
};

export default memo(MoviesSearchbar); // add optimization memo

MoviesSearchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
