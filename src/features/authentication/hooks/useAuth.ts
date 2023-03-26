export const useAuth = () => {
  const userToken = localStorage.getItem('token');

  return !!userToken;
};

export default useAuth;
