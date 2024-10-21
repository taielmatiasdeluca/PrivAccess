import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
      <main>
        <h1>Lo siento no encontramos esa página</h1>
       
          <button onClick={()=>{
            navigate("/dashboard")
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded-full my-10">
            Volver al inicio
          </button>

      </main>
    </>
  );
};
