import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormField.scss';

export function FormField({name, id, title, type = 'text', validate, ...props}) {
  return (
    <div className="form-field-wrapper">
      <label htmlFor={id} className="form-field-label">{title}</label>
      <Field id={id} type={type} name={name} className="form-field" {...props}></Field>
      {validate && <ErrorMessage name={name} component="p" className="form-field-error" />}
    </div>
  );
}
