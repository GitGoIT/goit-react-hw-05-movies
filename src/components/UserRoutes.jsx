import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const HomePage  = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage  = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const UserRoutes = () => {
    return (
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FF0000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ marginLeft: '45%' }}
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    );
};