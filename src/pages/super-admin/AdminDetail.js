import React from "react";
import { useHistory } from "react-router";
import {Input, Label, Table, FormGroup, Form, Button, Col} from "reactstrap";

const DUMMY_ADMIN_DETAIL = [
  {
    id: 1,
    name: "Nama Admin",
    nip: "1996712001538",
    email: "admin@email.com",
    password: "password",
    gender: "P",
    status_admin: "merchant",
  },
];

const SantriDetail = (props) => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      <img src={require('../../images/avatar.png')} alt="" className="w-25 mx-auto d-block" />
        <Form>
            <FormGroup row>
                <Label sm={2} htmlFor="nama" className="pr-3 mb-0">Nama Admin:</Label>
                <Col sm={10}>
                    <Input name="nama" id="nama" type="text" value={DUMMY_ADMIN_DETAIL[0].name} readOnly={true} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="nip" className="pr-3 mb-0">NIP:</Label>
                <Col sm={10}>
                    <Input name="nip" id="nip" type="text" value={DUMMY_ADMIN_DETAIL[0].nip} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="email" className="pr-3 mb-0">Email:</Label>
                <Col sm={10}>
                    <Input name="email" id="email" type="email" value={DUMMY_ADMIN_DETAIL[0].email} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="password" className="pr-3 mb-0">Password:</Label>
                <Col sm={10}>
                    <Input name="password" id="password" type="password" value={DUMMY_ADMIN_DETAIL[0].password} disabled={true} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="jenis_kelamin" className="pr-3 mb-0">Jenis Kelamin:</Label>
                <Col sm={10}>
                    <Input name="jenis_kelamin" id="jenis_kelamin" type="select" readOnly={true}>
                        {
                            (DUMMY_ADMIN_DETAIL[0].gender == "L")
                            ?
                                <option value="L">Laki-laki</option>
                            :
                                <option value="P">Perempuan</option>
                        }
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="status_admin" className="pr-3 mb-0">Status Admin:</Label>
                <Col sm={10}>
                    <Input name="status_admin" id="status_admin" type="select" readOnly={true}>
                        {
                            (DUMMY_ADMIN_DETAIL[0].status_admin == "smp")
                                ?
                                <option value="smp">SMP</option>
                                : (DUMMY_ADMIN_DETAIL[0].status_admin == "sma") ?
                                    <option value="sma">SMA</option>
                                : (DUMMY_ADMIN_DETAIL[0].status_admin == "merchant") ?
                                        <option value="merchant">Merchant</option>
                                : (true)
                        }
                    </Input>
                </Col>
            </FormGroup>
        </Form>
      <div className="d-flex justify-content-start">
        <Button color="secondary" onClick={goBack}>Kembali</Button>
      </div>
      {/*<div className="d-flex justify-content-between">*/}
      {/*  <Button color="secondary">Ubah data</Button>*/}
      {/*  <Link to="/admin/santri"><Button color="success">Kembali</Button></Link>*/}
      {/*</div>*/}
    </div>
  );
};

export default SantriDetail;
