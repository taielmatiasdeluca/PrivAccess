

import { Routes, Route } from 'react-router-dom';
import { EntryRoutes } from './EntryRoutes';
import { DashboardRouter } from './Dashboard/DashboardRouter';
import { AuthRoutes } from './AuthRoutes';

export const MainRouter = () => {
    return (
        <>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/*" element={<EntryRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Routes>
        </>
    )
}