import { useFormik } from 'formik';
import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUser } from 'store/users/slice';

import validationSchema from '../utils/validation';

export type AddUserFormValues = {
  name: string;
  surname: string;
  dateOfBirth: Date;
  city: string;
  street: string;
  isActive: boolean;
};

export const useAddUserForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: AddUserFormValues, actions: any) => {
    try {
      actions.setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // generate random id only for testing purpose
      dispatch(addUser({ id: Math.floor(Math.random() * 99999), ...values }));
      toast.success('User added successfully');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong, try again later');
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      dateOfBirth: new Date(),
      city: '',
      street: '',
      isActive: false,
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const nameError = formik.touched.name && formik.errors.name;
  const surnameError = formik.touched.surname && formik.errors.surname;
  const cityError = formik.touched.city && formik.errors.city;
  const streetError = formik.touched.street && formik.errors.street;

  return { ...formik, nameError, surnameError, cityError, streetError };
};

export default useAddUserForm;
