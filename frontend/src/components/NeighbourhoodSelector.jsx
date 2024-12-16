
import { Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import useNeightbourhood from "../hooks/useNeightbourhood";
import { NeightbourhoodModal } from "../components/Modals/NewNeightbourhood";


export const NeighbourhoodSelector = () =>{
    const { neightbourhoods, loading } = useNeightbourhood();
    const [selectedNeightbourhood, setSelectedNeightbourhood] = useState(null);
    const [showModal, setShowModal] = useState(false);

     // Establece automáticamente el primer valor del select
    useEffect(() => {
        if (neightbourhoods.length > 0) {
            setSelectedNeightbourhood(neightbourhoods[0].hash);
        }
    }, [neightbourhoods]);

    const selectNeightbourhood = (e) => {
        e.preventDefault();

        if (e.target.value === 'new') {
            setShowModal(true);
            
        }
     
    }
    return (

        <div className="max-w-md">
            <NeightbourhoodModal showModal={showModal} setOpenModal={()=>{ setShowModal(!showModal)}} />
            <Select 
            label="Selecciona tu barrio"
            value={selectedNeightbourhood}
            onChange={selectNeightbourhood}

            placeholder="Selecciona tu barrio"
            >
                { loading ? <option>Cargando...</option> :  neightbourhoods?.map(neighbourhood => (
                    <option key={neighbourhood.hash} value={neighbourhood.hash}>
                        {neighbourhood.name}
                    </option>
                    ))
                } 
                <option value='new'>Nuevo Barrio</option>
            </Select>
        </div>
    )
}