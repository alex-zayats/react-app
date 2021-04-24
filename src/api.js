const apiUrl = 'http://localhost:4000';

async function getMovies(searchBy, sortBy, category) {
  const searchParams = new URLSearchParams({
    search: searchBy,
    searchBy: 'title',
    sortBy: sortBy,
    filter: category == 'All' ? '' : category,
    sortOrder: sortBy == 'title' ? 'asc' : 'desc'
  });
  const moviesResponse = await fetch(`${apiUrl}/movies?${searchParams}`);
  const movies = await moviesResponse.json();
  return movies.data;
}

async function getMovieDetails(id) {
  const movieDetailsResponse = await fetch(`${apiUrl}/movies/${id}`);
  const movieDetails = await movieDetailsResponse.json();
  return movieDetails;
}

async function updateMovieDetails(movieDetails) {
  const movieDetailsResponse = await fetch(`${apiUrl}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieDetails)
  });
  return movieDetailsResponse.status;
}

export default {
  getMovies,
  getMovieDetails,
  updateMovieDetails
}
