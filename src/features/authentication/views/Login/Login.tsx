import { Navigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Wrapper, StyledTextField, StyledInputButton } from './Login.styled';
import useLogin from 'features/authentication/hooks/useLogin';
import useAuth from 'features/authentication/hooks/useAuth';

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
        <StyledTextField
          name="login"
          type="text"
          placeholder="Email or username"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.login}
          error={!!loginError}
          helperText={loginError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />

        <StyledTextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={!!passwordError}
          helperText={passwordError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <StyledInputButton onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </StyledInputButton>
              </InputAdornment>
            ),
          }}
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
