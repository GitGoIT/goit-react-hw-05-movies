import css from '../MovieDetailsPage/movieDetailsPage.module.css';
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, NavLink, Outlet, useLocation, } from 'react-router-dom';
import { getMovieDetails } from 'api/fetchApi';
import { GoChevronLeft } from 'react-icons/go';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const  from  = location.state?.from || "/";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(Number(id));
        setMovie(data);
      } catch ({ response }) {
        console.log(response.data.status_message);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [from, navigate]);  // onClick={()=> navigate(-1) alternative goBack()

  return (
    <div>
      <button onClick={goBack} className={css.button}>
        <GoChevronLeft className={css.buttonIcon} />
      </button>
      <div className={css.movieContainer}>
        <img
          className={css.img}
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'https://ik.imagekit.io/znpvmcgoy/img.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676670364760'
          }
          alt={movie.title}
        />
        <div className={css.movieInfo}>
          <h2>
            {movie.title ? movie.title : 'There is no title yet'}(
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : ' '}
            )
          </h2>
          <p>
            User Score:{' '}
            {movie.vote_average
              ? Math.fround(movie.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>
        </div>
      </div>
      <div>
        <div className={css.addInfoContainer}>
          <p className={css.addInfoTitle}>Additional information</p>
          <ul className={css.addInfolist}>
            <li>
              <NavLink
                to={`/movies/${id}/cast`}
                state={{ from }}
                className={css.addInfolink}
              >
                Cast
              </NavLink>
            </li>
            <li className={css.addInfolink}>
              <NavLink
                to={`/movies/${id}/reviews`}
                state={{ from }}
                className={css.addInfolink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;


