export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'ed09967e9bf31329d6569d428f9992af';

const baseOptions = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};
const getParamsString = (options = {}) => {
  return Object.entries({
    ...baseOptions,
    ...options,
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?${getParamsString()}`
  );
}

export function fetchDetailMovie(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?${getParamsString()}`);
}

export function fetchMovieCredits(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?${getParamsString()}`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?${getParamsString()}`
  );
}

export function searchMovie(query, page) {
  if (query === '') return;
  const options = { query, page };
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?${getParamsString(options)}`
  );
}
