import css from '../MoviesSearchList/moviesSearchList.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesSearchList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title }) => (
    <li className={css.link} key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default memo(MoviesSearchList);

MoviesSearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
}
