import React, { useState, useEffect } from 'react';

import { Content } from 'src/components/Content';
import { Header } from 'src/components/Header';
import { SearchInput } from 'src/components/SearchInput';
import { MoviesCategories } from 'src/components/MoviesCategories';
import { MoviesSort } from 'src/components/MoviesSort';
import { MoviesList } from 'src/components/MoviesList';

import './Home.scss';

export function Home() {
  const [currentSort, setСurrentSort] = useState('title');
  const [currentCategory, setСurrentCategory] = useState('All');

  const updateSort = (updatedSort) => {
    setСurrentSort(updatedSort);
    console.log('sortBy set: ' + updatedSort);
  }

  const updateCategory = (updatedCategory) => {
    setСurrentCategory(updatedCategory);
    console.log('Category set: ' + updatedCategory);
  }

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
          <MoviesCategories updateCategory={updateCategory}/>
          <MoviesSort updateSort={updateSort}/>
        </div>
        <MoviesList sortBy={currentSort} category={currentCategory}/>
      </Content>
    </>
  );
}
