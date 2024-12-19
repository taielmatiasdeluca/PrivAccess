import { ModalTemplate } from "./ModalTemplate";
import { Label,Checkbox,TextInput,Button } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useNeightbourhood from "../../hooks/useNeightbourhood";

export function DeleteNeightbourhoodModal({showModal,setOpenModal}) {

    const {deleteNeightbourhood} = useNeightbourhood();

    function deleteNeightbourhoodClick() {
        if (deleteNeightbourhood()){
            setOpenModal()
        }
    }
    
    return (
        <>
            <ModalTemplate showModal={showModal} setOpenModal={setOpenModal}>
                <div className="flex flex-col items-center justify-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5  text-gray-500 dark:text-gray-400">
                    ¿Estas seguro de eliminar el barrio seleccionado?
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={deleteNeightbourhoodClick}>
                        Si estoy seguro
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal()}>
                        No, cancelar
                    </Button>
                    </div>
                </div>
            </ModalTemplate>
        </>
    );
}
