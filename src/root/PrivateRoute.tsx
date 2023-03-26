import { Outlet, Navigate } from 'react-router-dom';

import useAuth from 'features/authentication/hooks/useAuth';

export const PrivateRoute = () => {
  const isUserLogged = useAuth();

  return isUserLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
