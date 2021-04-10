import React from 'react';
import { connect } from 'react-redux';
import './Home.scss';

import { setSortAction, setCategoryAction } from 'src/actions';
import { Content } from 'src/components/Common/Content';
import { Header } from 'src/components/Common/Header';
import { SearchInput } from 'src/components/Common/SearchInput';
import { MoviesCategories } from 'src/components/Movie/MoviesCategories';
import { MoviesSort } from 'src/components/Movie/MoviesSort';
import { MoviesList } from 'src/components/Movie/MoviesList';
import { Button } from 'src/components/Common/Button';
import { AddMovieModal  } from 'src/components/Movie/AddMovieModal';
import { useToggleModal } from 'src/hooks.js';

function Home({setSort, setСategory}) {
  setSort('title');
  setСategory('All');

  const [isAddModalOpened, setIsAddModalOpened] = useToggleModal();

  return (
    <>
      <Header>
        <Content>
          <h3 className="title">Find Your Movie</h3>
          <SearchInput/>
          <Button className="add-movie-btn" onClick={() => setIsAddModalOpened(true)}>Add Movie</Button>
          <AddMovieModal isModalOpened={isAddModalOpened} closeModal={() => setIsAddModalOpened(false)}></AddMovieModal>
        </Content>
      </Header>
      <Content>
        <div className="movies-header">
          <MoviesCategories updateCategory={setСategory}/>
          <MoviesSort updateSort={setSort}/>
        </div>
        <MoviesList/>
      </Content>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSort: (sort) => dispatch(setSortAction(sort)),
  setСategory: (category) => dispatch(setCategoryAction(category))
});

const connectedHome = connect(null, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
export {connectedHome as Home};
