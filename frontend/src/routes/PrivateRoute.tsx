import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface IPrivateRoute {
  children: ReactNode;
}
const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }
  return <>{children}</>;
};

export { PrivateRoute };
