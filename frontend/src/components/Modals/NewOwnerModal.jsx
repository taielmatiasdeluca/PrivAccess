import { ModalTemplate } from "./ModalTemplate";
import { Label,Checkbox,TextInput,Button } from "flowbite-react";

export function NewOwnerModal({showModal,setOpenModal}) {

    

  return (
    <>
        <ModalTemplate showModal={showModal} setOpenModal={setOpenModal}>
            <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Nuevo Dueño</h3>
                <h6 className="text-xs">Crear un nuevo dueño con permisos de acceso a la plataforma.</h6>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="email" placeholder="name@company.com" required />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Referencia" />
                </div>
                <TextInput id="password" type="password" required />
                </div>
                <Button onClick={()=>{newOwner();}}>Crear acceso</Button>
                
            </div>
        </ModalTemplate>
    </>
  );
}
