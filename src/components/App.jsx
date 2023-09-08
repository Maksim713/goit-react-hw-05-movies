import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './Header';
import Home from '../pages/Home';
import MoviesSearchValueCtx, {
  moviesSearchValueCtx,
} from 'context/moviesSearchValueCtx ';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Cast = lazy(() => import('../pages/Cast'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesSearchValueCtx value={moviesSearchValueCtx}>
        <div>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="reviews" element={<Reviews />} />
                <Route path="cast" element={<Cast />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </MoviesSearchValueCtx>
    </QueryClientProvider>
  );
};

export default App;
