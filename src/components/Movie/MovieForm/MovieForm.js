import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { Button } from 'src/components/Common/Button';
import { FormField } from 'src/components/Common/FormField';
import MovieFormSchema from './MovieFormSchema';

import styles from './MovieForm.module.scss';

export function MovieForm({ movieDetails, onFormSubmit }) {
  return (
    <Formik
      initialValues={movieDetails}
      validationSchema={MovieFormSchema}
      onSubmit={onFormSubmit}
    >
      <Form className={styles['movie-form']}>
        <FormField id="movie-id" name="id" title="ID" readOnly disabled />
        <FormField id="movie-title" name="title" title="Title" validate />
        <FormField id="movie-rating" name="vote_average" title="Rating" validate />
        <Button type="submit" className={styles['submit-btn']}>Save</Button>
      </Form>
    </Formik>
  );
}

MovieForm.propTypes = {
  movieDetails: PropTypes.object,
  onFormSubmit: PropTypes.func.isRequired
};
