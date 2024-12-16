import { useState, useEffect } from "react";
import { useMainContext } from "../context/MainContext";

const useOwners = (apiUrl) => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchOwners = async () => {
    setLoading(true);
    setError(null);
    try {

      setSocios([
        {'nombre':'Juan Perez','apellido':'Perez','dni':'12345678Z','email':'juan@perez.com','telefono':'123456789','direccion':'Calle 123, Piso 123, Ciudad 123','fecha':'2023-01-01','tipo':'Propietario'},
        {'nombre':'Maria Perez','apellido':'Perez','dni':'12345678Z','email':'maria@perez.com','telefono':'123456789','direccion':'Calle 123, Piso 123, Ciudad 123','fecha':'2023-01-01','tipo':'Propietario'},
        {'nombre':'Pedro Perez','apellido':'Perez','dni':'12345678Z','email':'pedro@perez.com','telefono':'123456789','direccion':'Calle 123, Piso 123, Ciudad 123','fecha':'2023-01-01','tipo':'Propietario'},
        {'nombre':'Luis Perez','apellido':'Perez','dni':'12345678Z','email':'luis@perez.com','telefono':'123456789','direccion':'Calle 123, Piso 123, Ciudad 123','fecha':'2023-01-01','tipo':'Propietario'},
      ])
      // const response = await fetch(apiUrl);
      // if (!response.ok) {
      //   throw new Error("Error al obtener socios");
      // }
      // const data = await response.json();
      // setSocios(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Crear un nuevo socio
  const createOwner = async (newSocio) => {
    console.log('create owners')
  };

  // Actualizar un socio
  const updateOwner = async (id, updatedSocio) => {
    console.log('update owners')
  };

  // Eliminar un socio
  const deleteOwner = async (id) => {
    console.log('delete owners')
  };

  // Cargar socios al inicio
  useEffect(() => {
    fetchOwners();
  }, [apiUrl]);

  return { owners, loading, error, fetchOwners, createOwner, updateOwner, deleteOwner };
};

export default useSocios;
