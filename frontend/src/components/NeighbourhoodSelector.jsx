
import { Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import useNeightbourhood from "../hooks/useNeightbourhood";
import { NeightbourhoodModal } from "../components/Modals/NewNeightbourhood";
import { useMainContext } from "../context/MainContext";


export const NeighbourhoodSelector = () =>{

    const { neightbourhood, setNeightbourhood } = useNeightbourhood();
    const [selectedNeightbourhood, setSelectedNeightbourhood] = useState(neightbourhood.selected || "");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (neightbourhood.selected === false && neightbourhood.neightbourhoods.length > 0) {
            const firstNeighbourhood = neightbourhood.neightbourhoods[0].hash;
            setSelectedNeightbourhood(firstNeighbourhood);
            setNeightbourhood({
                selected: firstNeighbourhood,
                neightbourhoods: neightbourhood.neightbourhoods
            });
        }
    }, [neightbourhood.selected, neightbourhood.neightbourhoods]);

    const selectNeightbourhood = (e) => {
        const selectedValue = e.target.value;
        setSelectedNeightbourhood(selectedValue);
        if (selectedValue === 'new') {
            setShowModal(true);
        } else {
            setNeightbourhood({
                ...neightbourhood,
                selected: selectedValue,
            });
        }
    };

    return (

        <div className="max-w-md">
            <NeightbourhoodModal 
                showModal={showModal} 
                setOpenModal={()=>{ setShowModal(!showModal)}}
            />
            <Select 
            label="Selecciona tu barrio"
            value={selectedNeightbourhood}
            onChange={selectNeightbourhood}
            placeholder="Selecciona tu barrio"
            >
                {neightbourhood.neightbourhoods?.map(neighbourhood => (
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