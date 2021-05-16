import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { AddMovieModal } from './AddMovieModal';

jest.mock('src/components/Common/Modal', () => {
  return { Modal: (props) => <div className="modal">{props.title}</div> };
});

jest.mock('src/components/Movie/AddMovieForm', () => {
  return { AddMovieForm: () => <div className="form"></div> };
});

describe('AddMovieModal component', () => {
  it('should render component', () => {
    const closeModal = () => false;
    const { asFragment } = render(<AddMovieModal isModalOpened={true} closeModal={closeModal}></AddMovieModal>);
    expect(asFragment).toMatchSnapshot();
  });
});
