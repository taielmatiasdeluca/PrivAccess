

import { Routes, Route } from 'react-router-dom';

// Pages
import { Logout } from '../pages/Auth/Logout';
import { Login } from '../pages/Auth/Login';

export const AuthRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='logout' element={<Logout />} />
            <Route path='login' element={<Login />} />
        </Routes>
        </>
    )
}