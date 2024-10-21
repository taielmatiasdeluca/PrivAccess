


import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../../pages/Panel/Dashboard';
import { Sidemenu } from '../../components/Sidemenu/Sidemenu';
import { NotFound } from '../../pages/Panel/NotFound';



export const DashboardRouter = () => {
    return (
        <div className='flex h-screen w-full'>
            <Sidemenu />
            <main className='overflow-scroll w-full min-h-full p-3'>
                <Routes>
                    <Route path='' element={<Dashboard />} />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </main>
        </div>
    )
}