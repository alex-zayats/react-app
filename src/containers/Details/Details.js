import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Content } from 'src/components/Common/Content';
import { MovieDetailsHeader } from 'src/components/Movie/MovieDetailsHeader';
import { MovieDetails } from 'src/components/Movie/MovieDetails';
import { MoviesList } from 'src/components/Movie/MoviesList';
import { Button } from 'src/components/Common/Button';

import './Details.scss';

export function Details() {
  const { id } = useParams();
  const currentSort = 'title';
  const currentCategory = 'All';

  return (
    <>
      <MovieDetailsHeader>
        <Content>
          <Link to="/">
            <Button className="home-btn">Go to Home</Button>
          </Link> 
          <MovieDetails movieId={+id}></MovieDetails>
        </Content>
      </MovieDetailsHeader>
      <Content>
        <h4 className="more-banner">Other movies</h4>
        <MoviesList sortBy={currentSort} category={currentCategory}/>
      </Content>
    </>
  );
}
