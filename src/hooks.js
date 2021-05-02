import { useState } from 'react';

export function useToggleModal() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const toggleModalOpened = (isModalOpened) => {
    setIsModalOpened(!isModalOpened);
  }

  return [isModalOpened, toggleModalOpened];
}

// export function useGetMovieDetails(id, initiateLoading) {
//   const [movieDetails, setMovieDetails] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     initiateLoading && (async () => {
//       setIsLoading(true);
//       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//       const data = await res.json();
//       setMovieDetails(data);
//       setIsLoading(false);
//     })();
//   }, [id, initiateLoading]);

//   return [movieDetails, isLoading];
// }
