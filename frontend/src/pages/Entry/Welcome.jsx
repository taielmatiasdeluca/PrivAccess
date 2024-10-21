import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <main className="bg-gray-800 min-h-screen w-full p-3 py-16 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Bienvenido a PrivAccess</h1>
          <h2 className="text-2xl">
            Nuestro sistema te permite gestionar tu barrio de la mejor manera
          </h2>
        </div>

        <content className="flex flex-col items-center justify-center p-5">

            <div className="text-center w-80">
                <h2 className="text-3xl font-bold">¿Qué es PrivAccess?</h2>
                <p>
                    Implementamos una nueva manera manejar las entradas y salidas de tu
                    barrio, con sistema de trackeo de personal de seguridad, mediante
                    invitaciones de los propietarios del vecindario (QR) que favorecen
                    la seguridad y permiten generar diferentes graficas.
                </p>
            </div>
            
            <Link to='/starting'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded-full my-10">
                Comenzar a utilizar el sistema
            </button>
            </Link>

        </content>

      </main>
    </>
  );
};
