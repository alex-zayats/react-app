import * as Yup from 'yup';

const EditMovieFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required')
    .min(2, 'Too short')
    .max(20, 'Too long'),
  description: Yup.string()
    .required("Required")
});

export default EditMovieFormSchema;