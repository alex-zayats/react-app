import React, { useState } from 'react';

import { Content } from 'src/components/Common/Content';
import { Header } from 'src/components/Common/Header';
import { SearchInput } from 'src/components/Common/SearchInput';
import { MoviesCategories } from 'src/components/Movie/MoviesCategories';
import { MoviesSort } from 'src/components/Movie/MoviesSort';
import { MoviesList } from 'src/components/Movie/MoviesList';

import './Home.scss';

export function Home() {
  const [currentSort, setСurrentSort] = useState('title');
  const [currentCategory, setСurrentCategory] = useState('All');

  return (
    <>
      <Header>
        <Content>
          <h3 className="title">Find Your Movie</h3>
          <SearchInput/>
        </Content>
      </Header>
      <Content>
        <div className="movies-header">
          <MoviesCategories updateCategory={setСurrentCategory}/>
          <MoviesSort updateSort={setСurrentSort}/>
        </div>
        <MoviesList sortBy={currentSort} category={currentCategory}/>
      </Content>
    </>
  );
}
