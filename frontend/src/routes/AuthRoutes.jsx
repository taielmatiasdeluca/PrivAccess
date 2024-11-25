

import { Routes, Route } from 'react-router-dom';

// Pages
import { Logout } from '../pages/Auth/Logout';

export const AuthRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='logout' element={<Logout />} />
        </Routes>
        </>
    )
}