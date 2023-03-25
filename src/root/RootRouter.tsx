import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>,
  },
  { path: '*', element: <Navigate to="/" /> },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
