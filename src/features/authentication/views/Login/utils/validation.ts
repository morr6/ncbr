import * as yup from 'yup';

const validationSchema = yup.object().shape({
  login: yup.string().required('Email or username is required'),
  password: yup
    .string()
    .min(8, 'Password is to short (min 8 characters)')
    .required('Password is required'),
});

export default validationSchema;
