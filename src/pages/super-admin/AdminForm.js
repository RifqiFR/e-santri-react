import React from "react";
import { Input, Label, FormGroup, Form, Button, Col } from "reactstrap";
import { useHistory  } from "react-router-dom";

const AdminForm = (props) => {
  const [lastPath, setLastPath] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nip, seNip] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [statusAdmin, setStatusAdmin] = React.useState("");

  const history = useHistory()

  React.useEffect(() => {
    let splittedPath = window.location.pathname.split("/");
    setLastPath(splittedPath[splittedPath.length - 2])
  }, [lastPath]);

  const formSubmitAdmin = e => {
    e.preventDefault()

    if(localStorage.getItem('data_admin') != null) {
      let newAdmin = {
        id: JSON.parse(localStorage.getItem('data_admin')).length + 1,
        name: name,
        nip: nip,
        email: email,
        password: password,
        gender: gender,
        statusAdmin: statusAdmin
      }
      let arrayCurrentAdmin = JSON.parse(localStorage.getItem('data_admin'))
      arrayCurrentAdmin.push(newAdmin)
      localStorage.setItem('data_admin', JSON.stringify(arrayCurrentAdmin))

      let currentPath = window.location.pathname.split("/create")
      history.push(currentPath[0])
      // return <Redirect to={`${currentPath}`}/>
    }

  }

  return (
    <>
      <p className="text-center">Tambah Data {lastPath.replace(/-/g, " ").toUpperCase()} Pondok Pesantren Tambak Beras Jombang</p>
      <div className="w-100 cursor-pointer">
        <img className="d-block mx-auto w-25 mb-2" src={require('../../images/user-icon.png')} alt="" />
        <p className="text-center font-weight-bold">Upload Foto</p>
      </div>
      <Form onSubmit={formSubmitAdmin}>
        <FormGroup row>
          <Label sm={2} htmlFor="name" className="pr-3 mb-0">Nama Admin:</Label>
          <Col sm={10}>
            <Input name="name" id="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nip" className="pr-3 mb-0">NIP:</Label>
          <Col sm={10}>
            <Input name="nip" id="nip" type="text" value={nip} onChange={(e) => {seNip(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="email" className="pr-3 mb-0">Email:</Label>
          <Col sm={10}>
            <Input name="email" id="email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="password" className="pr-3 mb-0">Password:</Label>
          <Col sm={10}>
            <Input name="password" id="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="gender" className="pr-3 mb-0">Jenis Kelamin:</Label>
          <Col sm={10}>
            <Input name="gender" id="gender" type="select" value={gender} onChange={(e) => {setGender(e.target.value)}}>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="status_admin" className="pr-3 mb-0">Status Admin:</Label>
          <Col sm={10}>
            <Input name="status_admin" id="status_admin" type="select" value={statusAdmin} onChange={(e) => {setStatusAdmin(e.target.value)}}>
              <option value="smp">SMP</option>
              <option value="sma">SMA</option>
              <option value="merchant">Merchant</option>
              <option value="bendahara">Bendahara</option>
              <option value="guru">Guru</option>
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
