
import { Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import useNeightbourhood from "../hooks/useNeightbourhood";



export const NeighbourhoodSelector = () =>{
    const { neightbourhoods, loading } = useNeightbourhood();
    console.log(loading)
    return (
        <div className="max-w-md">
            <Select id="neightbourhood" label="Selecciona tu barrio" placeholder="Selecciona tu barrio">
                { loading ? <option>Cargando...</option> :  neightbourhoods?.map(neighbourhood => (
                    <option key={neighbourhood.hash} value={neighbourhood.hash}>
                        {neighbourhood.name}
                    </option>

                    ))
                }     
            </Select>
        </div>
    )



}