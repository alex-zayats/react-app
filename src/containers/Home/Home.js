import React from 'react';

import { Content } from 'src/components/Content';
import { Header } from 'src/components/Header';
import { SearchInput } from 'src/components/SearchInput';
import { MoviesCategories } from 'src/components/MoviesCategories';
import { MoviesList } from 'src/components/MoviesList';

const movieCategories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export function Home() {
  return (
    <>
      <Header>
        <Content>
          <h3 className="title">Find Your Movie</h3>
          <SearchInput/>
        </Content>
      </Header>
      <Content>
        <MoviesCategories categories={movieCategories}/>
        <MoviesList/>
      </Content>
    </>
  );
}
