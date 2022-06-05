import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label, FormGroup, Form, Button, Col } from "reactstrap";

const Pengaturan = () => {
  const fileInput = useRef(null);
  const [name, setName] = useState('');
  const [nip, setNip] = useState('');
  const [sex, setSex] = useState('L');
  const [birthPlaceDate, setBirthPlaceDate] = useState('');
  const [address, setAddress] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(require('../../images/user-icon.png'));

  const submitHandler = () => {
    // TODO : don't forget to attach image file
  };

  const openFileDialog = () => {
    fileInput.current.click();
  }

  const onFileChange = (event) => {
    const fileObj = URL.createObjectURL(event.target.files[0]);
    setAvatarPreview(fileObj);
  };

  return (
    <>
      <div className="w-100 cursor-pointer" onClick={openFileDialog}>
        <img className="d-block mx-auto w-25 mb-2" src={avatarPreview} alt="" />
        <p className="text-center font-weight-bold">Ubah Foto</p>
      </div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label md={12} htmlFor="nama" className="pr-3 mb-0">Nama</Label>
          <Col md={12}>
            <Input name="nama" id="nama" type="text" onChange={event => setName(event.target.value)} value={name} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="nip" className="pr-3 mb-0">NIP</Label>
          <Col md={12}>
            <Input name="nip" id="nip" type="text" onChange={event => setNip(event.target.value)} value={nip} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="sex" className="pr-3 mb-0">Jenis Kelamin</Label>
          <Col md={12}>
            <Input name="sex" id="sex" type="select" onChange={event => setSex(event.target.value)} value={sex}>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="birthPlaceDate" className="pr-3 mb-0">Tempat Tanggal Lahir</Label>
          <Col md={12}>
            <Input name="birthPlaceDate" id="birthPlaceDate" type="text" onChange={event => setBirthPlaceDate(event.target.value)} value={birthPlaceDate} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12} htmlFor="address" className="pr-3 mb-0">Alamat</Label>
          <Col md={12}>
            <Input name="address" id="address" type="text" onChange={event => setAddress(event.target.value)} value={address} />
          </Col>
        </FormGroup>
        <input type="file" name="profile_photo" ref={fileInput} hidden onChange={onFileChange} />
        <div className="d-flex justify-content-between mt-4">
          <Button color="warning" onCLick={submitHandler}>Simpan</Button>
          <Link className="btn btn-dark" color="dark" to="/merchant/pengaturan/sandi">Ubah Sandi</Link>
        </div>
      </Form>
    </>
  );
};

export default Pengaturan;