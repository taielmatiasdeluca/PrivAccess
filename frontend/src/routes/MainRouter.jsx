

import { Routes, Route } from 'react-router-dom';
import { EntryRoutes } from './EntryRoutes';
import { DashboardRouter } from './Dashboard/DashboardRouter';

export const MainRouter = () => {
    return (
        <>
      <Routes>
        <Route path="/*" element={<EntryRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Routes>
        </>
    )
}