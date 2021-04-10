async function getMovies(sortBy) {
  const moviesResponse = await fetch('http://localhost:4000/movies', {sortBy});
  const movies = await moviesResponse.json();
  return movies.data;
}

async function getMovieDetails(id) {
  const movieDetailsResponse = await fetch(`http://localhost:4000/movies/${id}`);
  const movieDetails = await movieDetailsResponse.json();
  return movieDetails.data;
}

export default {
  getMovies,
  getMovieDetails
}