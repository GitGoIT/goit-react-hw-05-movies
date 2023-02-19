import css from '../MoviesPage/moviesPage.module.css'
import { useState, useEffect, useCallback } from 'react';
import MoviesSearchbar from 'components/MoviesSearchbar/MoviesSearchbar';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';
import { getSearchMovies } from 'api/fetchApi';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);
        const data = await getSearchMovies(query);
        console.log(data);
        if (data.length === 0) {
          alert('There are no movies matching your request.');
        }
        setMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [query]);

  const searchMovies = useCallback(
    ({ query }) => {
      if (query.trim() === '') {
        alert('Enter a search movies');
        return;
      }
      if (query === searchParams.get('query')) {
        alert('Same request. Enter a new search movies');
        return;
      }
      setMovies([]);
      setSearchParams({ query });
    },
    [setSearchParams]
  );

   return (
     <div>
       <MoviesSearchbar onSubmit={searchMovies} />
       <ThreeDots
         height="80"
         width="80"
         radius="9"
         color="#FF0000"
         ariaLabel="three-dots-loading"
         wrapperStyle={{ marginLeft: '45%' }}
         visible={loading && true}
       />
       {error && (<p
           style={{
             fontSize: '24px',
             textAlign: 'center',
             color: 'red',
           }}>Something goes wrong. Please try again later.</p>)}
       {movies.length > 0 && <MoviesSearchList movies={movies} />}
     </div>
   );
};

export default MoviesPage;
