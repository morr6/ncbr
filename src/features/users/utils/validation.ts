import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  city: yup.string().required('City is required'),
  street: yup.string().required('Street is required'),
});

export default validationSchema;
