import { Navigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Wrapper, StyledInputButton } from './Login.styled';
import { useAuth } from 'hooks';
import useLogin from 'features/authentication/hooks/useLogin';
import { TextField } from 'components';

export const Login = () => {
  const isUserLogged = useAuth();

  const {
    values,
    errors,
    isSubmitting,
    loginError,
    passwordError,
    showPassword,
    setShowPassword,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useLogin();

  if (isUserLogged) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <TextField
          name="login"
          placeholder="Email or username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login}
          errorMessage={loginError}
          icon={<PersonIcon />}
        />

        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          errorMessage={passwordError}
          icon={<LockIcon />}
          endAdornment={
            <InputAdornment position="end">
              <StyledInputButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </StyledInputButton>
            </InputAdornment>
          }
        />

        <LoadingButton
          loading={isSubmitting}
          disabled={Object.keys(errors).length !== 0}
          type="submit"
          variant="contained"
        >
          Login
        </LoadingButton>
      </Wrapper>
    </form>
  );
};

export default Login;
