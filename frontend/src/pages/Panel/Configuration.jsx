
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";
import { Button } from "flowbite-react";
import { useState } from "react";
import { DeleteNeightbourhoodModal } from "../../components/Modals/DeleteNeightbourhood";
export const Configuration = () => {

  const [showDeleteNeight, setShowDeleteNeight] = useState(false);





  return (
    <div className="">
      <DeleteNeightbourhoodModal showModal={showDeleteNeight} setOpenModal={() => setShowDeleteNeight(!showDeleteNeight)} />
      <h1 className="text-2xl font-bold">Panel de ajustes</h1>
      <div className="mt-10">
        <Button color="failure" onClick={()=>{setShowDeleteNeight(!showDeleteNeight)}}>Eliminar barrio</Button>
      </div>
    </div>

  );
};
