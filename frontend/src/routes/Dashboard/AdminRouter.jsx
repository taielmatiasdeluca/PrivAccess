


import { Routes, Route } from 'react-router-dom';

//Auth
import { Logout } from '../../pages/Auth/Logout';

//Components
import { Sidemenu } from '../../components/Sidemenu/Sidemenu';

//Pages
import { Dashboard } from '../../pages/Panel/Dashboard';
import { NotFound } from '../../pages/Panel/NotFound';
import { Owners } from '../../pages/Panel/Owners';
import { Guards } from '../../pages/Panel/Guards';
import { Admins } from '../../pages/Panel/Admins';
import { Movements } from '../../pages/Panel/Movements';
import { Configuration } from '../../pages/Panel/Configuration';




export const AdminRouter = () => {
    return (
        <div className='flex h-screen w-full'>
            <Sidemenu />
            <main className='overflow-scroll w-full min-h-full p-3'>
                <Routes>
                    <Route path='' element={<Dashboard />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='guards' element={<Guards />} />
                    <Route path='owners' element={<Owners />} />
                    <Route path='admins' element={<Admins />} />
                    <Route path='movements' element={<Movements />} />
                    <Route path='settings' element={<Configuration />} />

                </Routes>
            </main>
        </div>
    )
}