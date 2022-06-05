import React, { useState } from 'react';
import { Input, Label, FormGroup, Form, Button, Col } from "reactstrap";

const UbahSandi = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const submitHandler = () => {

  };

  return (
    <>
      <div className="w-100">
        <img className="d-block mx-auto w-25 mb-2" src={require('../../images/user-icon.png')} alt="" />
      </div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label md={12} htmlFor="old_password" className="pr-3 mb-0">Kata Sandi Lama</Label>
          <Col md={12}>
            <Input name="old_password" id="old_password" type="password" onChange={event => setOldPassword(event.target.value)} value={oldPassword} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="new_password" className="pr-3 mb-0">Kata Sandi Baru</Label>
          <Col md={12}>
            <Input name="new_password" id="new_password" type="password" onChange={event => setNewPassword(event.target.value)} value={newPassword} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="confirm_new_password" className="pr-3 mb-0">Konfirmasi Kata Sandi</Label>
          <Col md={12}>
            <Input name="confirm_new_password" id="confirm_new_password" type="password" onChange={event => setConfirmNewPassword(event.target.value)} value={confirmNewPassword} />
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-center mt-4">
          <Button color="success" type="submit" onCLick={submitHandler}>Simpan</Button>
        </div>
      </Form>
    </>
  );
};

export default UbahSandi;