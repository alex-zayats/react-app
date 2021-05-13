import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from 'src/utils/testRender';
import { MoviesList } from './MoviesList';

jest.mock('src/components/Movie/MovieCard', () => {
  return { MovieCard: (props) => <div className="movie-card">{props.movie.title}</div> };
});

jest.mock('src/components/Common/Spinner', () => {
  return { Spinner: (props) => <div className="spinner">{props.isLoading ? 'loading' : 'ready'}</div> };
});

fdescribe('MovieList component', () => {
  it('should render not found warning for empty movies list', () => {
    render(<MoviesList></MoviesList>);
    expect(document.querySelector('h4').textContent).toBe('Sorry, not found movies for such category');
  });

  it('should render movies list', () => {
    const initialState = {
      movies: {
        list: [
          {
            title: 'test1'
          },
          {
            title: 'test2'
          }
        ]
      }
    }
    render(<MoviesList></MoviesList>, { initialState });
    expect(document.querySelectorAll('.movie-card').length).toBe(2);
  });

  it('should hide movies list while loading', () => {
    const initialState = {
      movies: {
        list: [
          {
            title: 'test1'
          },
          {
            title: 'test2'
          }
        ],
        isLoading: true
      }
    }
    render(<MoviesList></MoviesList>, { initialState });
    expect(document.querySelector('.spinner').textContent).toBe('loading');
    expect(document.querySelectorAll('.movie-card').length).toBe(0);
  });

  it('should hide spinner when movies list ready', () => {
    const initialState = {
      movies: {
        list: [],
        isLoading: false
      }
    }
    render(<MoviesList></MoviesList>, { initialState });
    expect(document.querySelector('.spinner').textContent).toBe('ready');
  });
});
