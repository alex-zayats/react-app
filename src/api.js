async function getMovies(searchBy, sortBy, category) {
  const searchParams = new URLSearchParams({
    search: searchBy,
    searchBy: 'title',
    sortBy: sortBy,
    filter: category == 'All' ? '' : category,
    sortOrder: sortBy == 'title' ? 'asc' : 'desc'
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