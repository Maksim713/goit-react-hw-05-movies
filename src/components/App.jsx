import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Reviews from '../pages/Reviews';
import Cast from '../pages/Cast';
import MoviesSearchValueCtx, {
  moviesSearchValueCtx,
} from 'context/moviesSearchValueCtx ';

const App = () => {
  return (
    <MoviesSearchValueCtx value={moviesSearchValueCtx}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path={'reviews'} element={<Reviews />} />
            <Route path={'cast'} element={<Cast />} />
          </Route>
        </Routes>
      </div>
    </MoviesSearchValueCtx>
  );
};

export default App;
