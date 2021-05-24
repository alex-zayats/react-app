import * as Yup from 'yup';

const MovieFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required')
    .min(2, 'Too short')
    .max(20, 'Too long')
});

export default MovieFormSchema;
