import React from "react";
import { Input, Label, FormGroup, Form, Button, Col } from "reactstrap";

const AdminForm = (props) => {
  const [lastPath, setLastPath] = React.useState("");

  React.useEffect(() => {
    let splittedPath = window.location.pathname.split("/");
    setLastPath(splittedPath[splittedPath.length - 2])
  }, [lastPath]);

  return (
    <>
      <p className="text-center">Tambah Data {lastPath.replace(/-/g, " ").toUpperCase()} Pondok Pesantren Tambak Beras Jombang</p>
      <div className="w-100 cursor-pointer">
        <img className="d-block mx-auto w-25 mb-2" src={require('../../images/user-icon.png')} alt="" />
        <p className="text-center font-weight-bold">Upload Foto</p>
      </div>
      <Form>
        <FormGroup row>
          <Label sm={2} htmlFor="nama" className="pr-3 mb-0">Nama Admin:</Label>
          <Col sm={10}>
            <Input name="nama" id="nama" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nip" className="pr-3 mb-0">NIP:</Label>
          <Col sm={10}>
            <Input name="nip" id="nip" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="email" className="pr-3 mb-0">Email:</Label>
          <Col sm={10}>
            <Input name="email" id="email" type="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="password" className="pr-3 mb-0">Password:</Label>
          <Col sm={10}>
            <Input name="password" id="password" type="password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="jenis_kelamin" className="pr-3 mb-0">Jenis Kelamin:</Label>
          <Col sm={10}>
            <Input name="jenis_kelamin" id="jenis_kelamin" type="select">
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="status_admin" className="pr-3 mb-0">Status Admin:</Label>
          <Col sm={10}>
            <Input name="status_admin" id="status_admin" type="select">
              <option value="smp">SMP</option>
              <option value="sma">SMA</option>
              <option value="merchant">Merchant</option>
            </Input>
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-end">
          <Button color="success">Simpan</Button>
        </div>
      </Form>
    </>
  );
};

export default AdminForm;
