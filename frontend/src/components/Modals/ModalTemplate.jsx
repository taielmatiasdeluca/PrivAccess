
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export function ModalTemplate({
    showModal,
    setOpenModal,
    children,
    modalTittle = ""
}) {
  return (
    <>
      <Modal show={showModal} size="md" popup onClose={setOpenModal}>
        <Modal.Header >
            <span className="font-bold text-lg">
                {modalTittle}
            </span>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
