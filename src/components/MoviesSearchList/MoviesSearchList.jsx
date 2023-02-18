import { memo } from "react";
import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesSearchList/moviesSearchList.module.css';

const MoviesSearchList = ({ movies }) => {

  const location = useLocation();
  // console.log(location);

  const elements = movies.map(({ id, title }) => (
    <li className={css.link} key={id}><Link to={`/movies/${id}`} state={{from : location}}>{title}</Link></li> 
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default memo(MoviesSearchList);

MoviesSearchList.defaultProps = {
  movies: [],
};
