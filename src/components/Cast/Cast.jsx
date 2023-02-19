import css from '../Cast/cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/fetchApi';
import { ThreeDots } from 'react-loader-spinner';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCast(Number(id));
          console.log(data);
        setActors(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);

  const elements = actors.map(({ cast_id, name, profile_path, character }) => (
    <li key={cast_id} className={css.item}>
      <img
        src={
          profile_path
            ? 'https://image.tmdb.org/t/p/w500' + profile_path
            : 'https://ik.imagekit.io/znpvmcgoy/img.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676670364760'
        }
        alt={name}
        width={120}
        height={150}
      />
      <p className={css.name}>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <div>
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
        
        {actors.length > 0 && !error && (
          <ul className={css.list}>{elements}</ul>
        )}
        {actors.length === 0 && !error && !loading && (
          <p className={css.comment}>We don't have any actors for this movie</p>
        )}
      </>
    </div>
  );
};

export default Cast;
