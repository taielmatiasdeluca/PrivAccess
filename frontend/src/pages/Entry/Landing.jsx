

import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <>
            <main className='bg-gray-200 min-h-screen w-full p-3'>
                <div className='d-flex text-center w-full justify-center align-middle'>
                    <h1 className="text-5xl font-bold">PrivAccess</h1>
                    <h2>Tu software de gestion de barrios</h2>
                </div>
                <div className='flex w-full justify-center align-middle'>
                    
                    <div className="bg-slate-800 font-bold text-xl  text-white rounded-full px-4 py-2 m-2">
                        <Link to="/welcome">Quiero gestionar mi barrio</Link>
                    </div>
                    

                </div>

            </main>
           
        </>
    )
}