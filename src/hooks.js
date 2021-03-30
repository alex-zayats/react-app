import { useState, useEffect } from 'react';

export function useToggleModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return [isModalOpened, setIsModalOpened];
}

export function useGetMovieDetails(id, initiateLoading) {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    initiateLoading && (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setMovieDetails(data);
    })();
  }, [id, initiateLoading]);

  return movieDetails;
}
