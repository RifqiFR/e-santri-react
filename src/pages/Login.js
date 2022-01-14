import { CREDENTIALS } from "constants/dummies";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const history = useHistory();
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const loginSwal = withReactContent(Swal);

  const loginHandler = (event) => {
    event.preventDefault();
    const matched = CREDENTIALS.find(cr => cr.nip === nip && cr.password === password);

    if (matched) {
      loginSwal.fire({
        title: "Login Berhasil",
        text: 'Login Berhasil',
        icon: "success",
        confirmButtonText: 'Ok',
      }).then(() => {
        if (matched.role === 'ADMIN') {
          history.replace('/admin');
        } else {
          history.replace('/super-admin');
        }
      });
    } else {
      loginSwal.fire({
        title: "Login Gagal",
        text: 'Pastikan email dan password benar!',
        icon: "error",
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-3">E-Santri</h1>
      <Card className="d-block w-75 mx-auto" style={{ maxWidth: "600px" }}>
        <CardBody>
          <h4 className="mb-3 text-center">Login</h4>
          <Form onSubmit={loginHandler}>
            <FormGroup>
              <Label for="nip">NIP</Label>
              <Input name="nip" id="nip" type="text" onChange={(event) => setNip(event.target.value)} value={nip} />
            </FormGroup>
            <FormGroup>
              <div className="d-flex justify-content-between">
                <Label for="password">Password</Label>
                <Link to="#" className="mb-0 text-right d-block">Lupa password?</Link>
              </div>
              <Input name="password" id="password" type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
            </FormGroup>
            <FormGroup check className="mb-3">
              <Label check>
                <Input type="checkbox" name="remember_me" id="remember_me" />{' '}
                Ingat saya
              </Label>
            </FormGroup>
            <Button color="success" className="mx-auto">Masuk</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Login;
