import { RootState } from 'store/rootReducer';
import { useFormik } from 'formik';
import { useAppDispatch } from 'hooks';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUser } from 'store/users/selectors';
import { addUser, editUser } from 'store/users/slice';

import validationSchema from '../utils/validation';
import { User } from 'store/users/reducers';

export type AddUserFormValues = {
  name: string;
  surname: string;
  dateOfBirth: Date;
  city: string;
  street: string;
  isActive: boolean;
};

export const useUserForm = (userId: number) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => getUser(state, userId));

  const onSubmit = async (values: User, actions: any) => {
    try {
      actions.setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (user) {
        dispatch(editUser(values));
        toast.success('User successfully edited');
      } else {
        dispatch(addUser(values));
        toast.success('User added successfully');
      }

      navigate('/');
    } catch (error) {
      toast.error('Something went wrong, try again later');
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: user ?? {
      id: 0,
      name: '',
      surname: '',
      dateOfBirth: new Date(),
      city: '',
      street: '',
      isActive: false,
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  const nameError = formik.touched.name && formik.errors.name;
  const surnameError = formik.touched.surname && formik.errors.surname;
  const cityError = formik.touched.city && formik.errors.city;
  const streetError = formik.touched.street && formik.errors.street;

  return { ...formik, nameError, surnameError, cityError, streetError };
};

export default useUserForm;
