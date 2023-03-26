import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import validationSchema from '../utils/validation';

type InitialValues = {
  login: string;
  password: string;
};

const isUserDataCorrect = ({ login, password }: InitialValues) => {
  const response = localStorage.getItem('users') as string;
  const USER_MOCK_DATA = JSON.parse(response)[0];

  const isLoginValid = login === USER_MOCK_DATA.username || login === USER_MOCK_DATA.email;
  const isPasswordValid = password === USER_MOCK_DATA.password;

  return { isDataCorrect: isLoginValid && isPasswordValid, token: USER_MOCK_DATA.token };
};

export const useLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (values: InitialValues, actions: any) => {
    try {
      actions.setSubmitting(true);
      // const response = await axios.post('URL', values)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { isDataCorrect, token } = isUserDataCorrect(values);

      if (isDataCorrect) {
        localStorage.setItem('token', JSON.stringify(token));
        navigate('/');
      } else {
        toast.error('Incorect email/username or password');
      }
    } catch (error) {
      toast.error('Something went wrong, try again later');
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const loginError = formik.touched.login && formik.errors.login;
  const passwordError = formik.touched.password && formik.errors.password;

  return { ...formik, loginError, passwordError, showPassword, setShowPassword };
};

export default useLogin;
