import css from '../HomePage/homePage.module.css';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/fetchApi';
import { ThreeDots } from 'react-loader-spinner';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';

const HomePage = () => {

const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchTrendingMovies = async () => {
    try {
      setLoading(true);
      const data = await getTrendingMovies();
      // console.log(data);
      setMovies(data);
    } catch (error) {
      setError(error.massage);
    } finally {
      setLoading(false);
    }
  };
  fetchTrendingMovies();
}, []);

  return (
    <main>
      <div>
        <h2 className={css.title}>Trending today</h2>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#FF0000"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ marginLeft: '45%' }}
          visible={loading && true}
        />
        {error && (
          <p className={css.error}>
            Something goes wrong. Please try again later.
          </p>
        )}
        <MoviesSearchList movies={movies} />
      </div>
    </main>
  ); 
};

export default HomePage;