

import { Routes, Route, useNavigate } from 'react-router-dom';
import { EntryRoutes } from './EntryRoutes';
import { AdminRouter } from './Dashboard/AdminRouter';
import { AuthRoutes } from './AuthRoutes';
import useApi from '../hooks/useApi';
import { OwnerRouter } from './Dashboard/OwnerRouter';
import { GuardRouter } from './Dashboard/GuardRouter';

export const MainRouter = () => {
    const navigate = useNavigate();
    // Gets user from local storage
    const { user } = useApi();
  
   
    // Return dashboard router based on user role
    const DashboardSelectedRouter = () => {
      // If user is not logged in, redirect to login page
      if (!user) {
        window.location.href = '/login';
        return
      }
  
      if (user.role === 'admin') {
        return <AdminRouter />;
      }
      if (user.role === 'owner') {
        return <OwnerRouter />;
      }
      if (user.role === 'guard') {
        return <GuardRouter />;
      }

    }

    return (
        <>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/*" element={<EntryRoutes />} />
        <Route path="/dashboard/*" element={<DashboardSelectedRouter />} />
      </Routes>
        </>
    )
}