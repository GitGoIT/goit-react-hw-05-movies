import css from '../MovieDetailsPage/movieDetailsPage.module.css';
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link, Outlet, useLocation} from "react-router-dom";
import { getMovieDetails } from 'api/fetchApi';


const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const  from  = location.state?.from || "/";
  // console.log({ movie });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(Number(id));
        // console.log(data);
        setMovie(data);
      } catch ({ response }) {
        console.log(response.data.status_message);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [navigate]);  // onClick={()=> navigate(-1) alternative goBack()

  return (
    <div>
      <button onClick={goBack}>Go back</button> {}
      <div className={css.movieInfo}>
        <img
          className={css.img}
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'https://ik.imagekit.io/znpvmcgoy/img.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676670364760'
          }
          alt={movie.title}
        />
        <div>
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
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`} state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`} state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
