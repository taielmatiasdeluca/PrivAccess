



import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Starting = () => {
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return (
 
            <main className="bg-gray-800 min-h-screen w-full p-3 py-16 text-white">
                <h1>Gracias por elegir PrivAccess</h1>
                <h2>Ahora solo faltan unos pequeños pasos para comenzar</h2>
                <div className="flex flex-col items-center justify-center p-5">
                    <form action="" onSubmit={formSubmit}>
                        
                        <label htmlFor="" className="flex flex-col items-start">
                            Nombre del barrio
                            <input type="text" />
                        </label>

                        <label htmlFor="" className="flex flex-col items-start">
                            Su usuario
                            <input type="text" />
                            <h4 className='text-xs'>Esta cuenta gestionara el barrio</h4>
                        </label>

                        <label htmlFor="" className="flex flex-col items-start">
                            Contraseña
                            <input type="text" />
                        </label>

                        <label htmlFor="" className="flex flex-col items-start">
                            Repetir Contraseña
                            <input type="text" />
                        </label>
                        <button className='bg-gray-200  my-3 w-full p-2 text-black'>
                            Empezar
                        </button>

                    </form>
                </div>


          

            </main>
           
   
    )
}