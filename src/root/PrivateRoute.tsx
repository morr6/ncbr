import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from 'hooks';

export const PrivateRoute = () => {
  const isUserLogged = useAuth();

  return isUserLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
