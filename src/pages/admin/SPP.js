import React from "react";
import { Row, Col, Container, Form, FormGroup, Input, Label, Button } from "reactstrap";

const SPP = () => {
  return (
    <div>
      <Form>
        <FormGroup row>
          <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Angkatan:</Label>
          <div sm={10}>
            <Input name="angkatan" id="angkatan" type="select">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </Input>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Nominal SPP:</Label>
          <div sm={10}>
            <Input name="pendidikan" id="pendidikan" type="number" placeholder="Masukkan nominal SPP bulanan" />
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button color="danger">Buat tagihan</Button>
        </div>
      </Form>
    </div>
  );
};

export default SPP;
