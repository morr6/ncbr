import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginPage from 'features/authentication/views/Login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  { path: '*', element: <Navigate to="/" /> },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
