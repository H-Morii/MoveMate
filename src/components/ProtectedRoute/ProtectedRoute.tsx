// rimport { ReactNode } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Navigate } from 'react-router-dom';

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!currentUser) {
//     console.log('Redirecting to login...');
//     return <Navigate to="/login" replace />;
//   }
//   return <>{children}</>;
// };

// export default ProtectedRoute;
