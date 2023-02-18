import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/fetchApi';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList'

export const TrendingMovies = () => {
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

    return <MoviesSearchList movies={movies} />;
};
