import React, { useState } from 'react';
import { Input, Label, FormGroup, Form, Button, Col, Modal, ModalBody } from "reactstrap";

const UbahPin = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [nomorInduk, setNomorInduk] = useState("");
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [newPinConfirmation, setNewPinConfirmation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccessModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={successModalOpen} toggle={() => setSuccessModalOpen(prev => !prev)} centered={true}>
        <ModalBody>
          <div className="p-4">
            <p className="h2 text-center"><strong>Pin Telah Berhasil Diubah</strong></p>
            <img src={require('../../images/checked.png')} className="d-block w-25 mx-auto my-4" alt="logout" />
          </div>
        </ModalBody>
      </Modal>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label md={12} htmlFor="nomor_induk" className="pr-3 mb-0">Nomor Induk</Label>
          <Col md={12}>
            <Input name="nomor_induk" id="nomor_induk" type="text" onChange={event => setNomorInduk(event.target.value)} value={nomorInduk} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="old_pin" className="pr-3 mb-0">Pin Lama</Label>
          <Col md={12}>
            <Input name="old_pin" id="old_pin" type="text" onChange={event => setOldPin(event.target.value)} value={oldPin} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="new_pin" className="pr-3 mb-0">Pin Baru</Label>
          <Col md={12}>
            <Input name="new_pin" id="new_pin" type="text" onChange={event => setNewPin(event.target.value)} value={newPin} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="new_pin_confirmation" className="pr-3 mb-0">Konfirmasi Pin Baru</Label>
          <Col md={12}>
            <Input name="new_pin_confirmation" id="new_pin_confirmation" type="text" onChange={event => setNewPinConfirmation(event.target.value)} value={newPinConfirmation} />
          </Col>
        </FormGroup>
        <Button color="dark" type="submit" className="d-block mx-auto mt-4">Ubah Pin</Button>
      </Form>
    </>
  );
};

export default UbahPin;