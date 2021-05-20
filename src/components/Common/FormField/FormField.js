import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormField.module.scss';

export function FormField({name, id, title, type = 'text', validate, ...props}) {
  return (
    <div className={styles['form-field-wrapper']}>
      <label htmlFor={id} className={styles['form-field-label']}>{title}</label>
      <Field id={id} type={type} name={name} className={styles['form-field']} {...props}></Field>
      {validate && <ErrorMessage name={name} component="p" className={styles['form-field-error']} />}
    </div>
  );
}
