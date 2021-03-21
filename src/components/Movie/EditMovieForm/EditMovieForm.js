import React from 'react';
import { Formik, Form } from 'formik';
import EditMovieFormSchema from './EditMovieFormSchema';
import PropTypes from 'prop-types';
import './EditMovieForm.scss';

import { FormField } from '/src/components/Common/FormField';

export function EditMovieForm({movieDetails}) {
  const {id, title, body} = movieDetails;
  const initialValues = {id, title, description: body};

  const onFormSubmit = (values ) => {
    console.log('submit:' + values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditMovieFormSchema}
      onSubmit={onFormSubmit}>
        <Form className="edit-form">
          <FormField id="movie-id" name="id" title="ID" readOnly disabled></FormField>
          <FormField id="movie-title" name="title" title="Title" validate></FormField>
          <FormField id="movie-category" name="category" title="Category" validate></FormField>
          <button type="submit" className="submit-btn">Save</button>
        </Form>
    </Formik>
  );
}

EditMovieForm.propTypes = {
  movieDetails: PropTypes.object.isRequired
}
