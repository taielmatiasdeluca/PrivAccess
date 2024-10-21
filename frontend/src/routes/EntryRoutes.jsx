

import { Routes, Route } from 'react-router-dom';

// ENTRY PAGES
import { Landing } from '../pages/Entry/Landing';
import { Welcome } from '../pages/Entry/Welcome';
import { Starting } from '../pages/Entry/Starting';


export const EntryRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/starting' element={<Starting />} />
        </Routes>
        </>
    )
}