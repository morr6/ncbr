import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from 'features/authentication/views/Login';
import PrivateRoute from './PrivateRoute';
import useAuth from 'features/authentication/hooks/useAuth';
import UserTable from 'features/users';

const RootRouter = () => {
  const isUserLogged = useAuth();

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UserTable />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route path="/login" element={isUserLogged ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
