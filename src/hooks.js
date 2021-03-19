import { useState, useEffect } from 'react';

export function useToggleModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return [isModalOpened, setIsModalOpened];
}

export function useGetMovieDetails(id, initiateLoading) {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    initiateLoading && (async () => {
      const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts?id=${id}`);
      const data = await res.json();
      data[0].id = id;
      setMovieDetails(data);
    })();
  }, [id, initiateLoading]);

  return movieDetails;
}
