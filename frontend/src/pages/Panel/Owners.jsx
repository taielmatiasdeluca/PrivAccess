
import { Link } from "react-router-dom";
import { DefaultTable } from "../../components/Sidemenu/DefaultTable";
import { useState } from "react";
import { NewOwnerModal } from "../../components/Modals/NewOwnerModal";

export const Owners = () => {
  const [showModal,setShowModal] = useState(false);


  const owners_data = [
    {
      'name': 'Juan Perez',
      'email': 'juanperez@gmail.com',
      'phone': '+56 987654321',
    },
    {
      'name': 'Maria Perez',
      'email': 'mariaperez@gmail.com',
      'phone': '+56 789012345',
    },
    {
      'name': 'Pedro Perez',
      'email': 'pedroperez@gmail.com',
      'phone': '+56 123456789',
    },
  ]
  return (
    <>
     <h1 className="text-2xl font-bold">Panel de administracion de dueños</h1>
     <NewOwnerModal showModal={showModal} setOpenModal={()=>{setShowModal(!showModal);console.log("hola")}} />
     <DefaultTable data={owners_data} buttonText="Nuevo dueño" modalFunction={()=>{setShowModal(!showModal)}} />


   
    </>
  );
};
