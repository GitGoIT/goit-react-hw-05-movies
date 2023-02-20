import css from '../Reviews/reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/fetchApi';
import { ThreeDots } from 'react-loader-spinner';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(Number(id));
        setReviews(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.item}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
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
            color: 'red',}}
      >Something goes wrong. Please try again later.</p>)}
      
      {reviews.length > 0 && <ul className={css.list}>{elements}</ul>}
      {reviews.length === 0 && !error && !loading && (
        <p className={css.comment}>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
