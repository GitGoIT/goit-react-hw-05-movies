import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9d504f0d6629b3ea4ce96304b577daca',
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
    const { data } = await instance.get(`/trending/movie/day?page=1`);
    return data.results;
}

export const getMovieDetails = async (id) => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
}

export const getSearchMovies = async (search) => {
    const { data } = await instance.get(`search/movie?query=${search}&page=1&include_adult=false`);
    return data.results;
    
}

export const getMovieCast = async (id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data.cast;
}

export const getMovieReviews = async (id) => {
    const { data } = await instance.get(`/movie/${id}/reviews?page=1`);
    return data.results;
}