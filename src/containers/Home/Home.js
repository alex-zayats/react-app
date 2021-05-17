import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Home.scss';

import { getMovies } from 'src/actions';
import { Content } from 'src/components/Common/Content';
import { Header } from 'src/components/Common/Header';
import { MovieSearchInput } from 'src/components/Movie/MovieSearchInput';
import { MoviesCategories } from 'src/components/Movie/MoviesCategories';
import { MoviesSort } from 'src/components/Movie/MoviesSort';
import { MoviesList } from 'src/components/Movie/MoviesList';
import { Button } from 'src/components/Common/Button';
import { AddMovieModal  } from 'src/components/Movie/AddMovieModal';
import { useToggleModal } from 'src/utils/hooks.js';

function Home({getMovies}) {
  const [isAddModalOpened, setIsAddModalOpened] = useToggleModal();

  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <>
      <Header>
        <Content>
          <h3 className="title">Find Your Movie</h3>
          <MovieSearchInput/>
          <Button className="add-movie-btn" onClick={() => setIsAddModalOpened(true)}>Add Movie</Button>
          <AddMovieModal isModalOpened={isAddModalOpened} closeModal={() => setIsAddModalOpened(false)}></AddMovieModal>
        </Content>
      </Header>
      <Content>
        <div className="movies-header">
          <MoviesCategories/>
          <MoviesSort/>
        </div>
        <MoviesList/>
      </Content>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies())
});

const connectedHome = connect(null, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
export {connectedHome as Home};
