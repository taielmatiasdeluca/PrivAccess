import { useRef } from "react";
import { ModalTemplate } from "./ModalTemplate";
import { Label,Checkbox,TextInput,Button } from "flowbite-react";
import useNeighbourhood from "../../hooks/useNeightbourhood";

export function NeightbourhoodModal({showModal,setOpenModal}) {
    const { newNeightbourhood } = useNeighbourhood();

    const nameRef = useRef();


    function createNeight() {
        if(newNeightbourhood(nameRef.current.value)){
            setOpenModal(false);
        }
    }


    return (
        <>
            <ModalTemplate showModal={showModal} setOpenModal={setOpenModal}>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Nuevo Barrio</h3>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Nombre" />
                    </div>
                    <TextInput id="name" placeholder="Barrio..." ref={nameRef} required />
                    </div>
                    <Button onClick={()=>{createNeight();}}>Crear barrio</Button>
                    
                </div>
            </ModalTemplate>
        </>
    );
}
