import React from 'react';
import { Formik, Form } from 'formik';
import MovieFormSchema from './MovieFormSchema';
import PropTypes from 'prop-types';
import './MovieForm.scss';

import { Button } from '/src/components/Common/Button';
import { FormField } from '/src/components/Common/FormField';

export function MovieForm({movieDetails, onFormSubmit}) {
  const {id, title, body} = movieDetails;
  const initialValues = {id, title, description: body};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={MovieFormSchema}
      onSubmit={onFormSubmit}>
        <Form className="movie-form">
          <FormField id="movie-id" name="id" title="ID" readOnly disabled></FormField>
          <FormField id="movie-title" name="title" title="Title" validate></FormField>
          <FormField id="movie-category" name="category" title="Category" validate></FormField>
          <Button type="submit" className="submit-btn">Save</Button>
        </Form>
    </Formik>
  );
}

MovieForm.propTypes = {
  movieDetails: PropTypes.object,
  onFormSubmit: PropTypes.func.isRequired
}
