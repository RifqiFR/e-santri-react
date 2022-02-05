import axios from "axios";
import { BENDAHARA, SUPER_ADMIN, ADMIN_SANTRI } from "constants/roles";
import { LOGIN_API } from "constants/urls";
import { AuthContext } from "context/auth_context";
import useGuestGuard from "hooks/use_guest_guard";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { parseLoginToken, saveToken } from "utils/auth";

const Login = () => {
  const { setIsLogin } = useContext(AuthContext);
  const history = useHistory();
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const loginSwal = withReactContent(Swal);

  useGuestGuard();

  const loginHandler = (event) => {
    event.preventDefault();

    setIsLoggingIn(true);

    axios.post(LOGIN_API, {
      nip,
      password
    }).then((response) => {
      const token = response.data.token;

      saveToken(token);

      const loginData = parseLoginToken();
      const userRole = loginData.role;

      loginSwal.fire({
        title: "Login Berhasil",
        text: 'Login Berhasil',
        icon: "success",
        confirmButtonText: 'Ok',
      }).then(() => {
        setIsLogin(true);
        if (userRole === ADMIN_SANTRI) {
          history.replace('/admin');
        } else if (userRole === SUPER_ADMIN){
          history.replace('/super-admin/dashboard');
        } else if (userRole === BENDAHARA){
          history.replace('/bendahara/dashboard');
        }
      });
    }).catch((error) => {
      let errorMessage = "Gagal login. Silakan coba beberapa saat kembali.";

      if (error.response) {
        const status = error.response.status;
        if (status  === 401) {
          errorMessage = "Pastikan NIP dan Password benar.";
        } else if (status === 422) {
          errorMessage = "Isi NIP dan Password.";
        }
      }

      loginSwal.fire({
        title: "Login Gagal",
        text: errorMessage,
        icon: "error",
        confirmButtonText: 'Ok',
      });
    }).finally(() => {
      setIsLoggingIn(false);
    });
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
            <Button color="success" className="mx-auto" disabled={isLoggingIn}>{!isLoggingIn ? 'Masuk' : 'Loading'}</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Login;
