async function getMovies(sortBy, category) {
  const searchParams = new URLSearchParams({
    sortBy: sortBy,
    filter: category == 'All' ? '' : category,
    sortOrder: 'desc'
  });
  const moviesResponse = await fetch(`http://localhost:4000/movies?${searchParams}`);
  const movies = await moviesResponse.json();
  return movies.data;
}

async function getMovieDetails(id) {
  const movieDetailsResponse = await fetch(`http://localhost:4000/movies/${id}`);
  const movieDetails = await movieDetailsResponse.json();
  return movieDetails;
}

export default {
  getMovies,
  getMovieDetails
}