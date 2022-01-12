import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-3">E-Santri</h1>
      <Card className="d-block w-75 mx-auto" style={{ maxWidth: "600px" }}>
        <CardBody>
          <h4 className="mb-3 text-center">Login</h4>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input name="email" id="email" type="email" />
            </FormGroup>
            <FormGroup>
              <div className="d-flex justify-content-between">
                <Label for="password">Password</Label>
                <Link to="#" className="mb-0 text-right d-block">Lupa password?</Link>
              </div>
              <Input name="password" id="password" type="password" />
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
    </div>
  );
};

export default Login;
