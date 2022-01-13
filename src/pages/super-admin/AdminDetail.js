import React from "react";
import { useHistory, useParams } from "react-router";
import {Input, Label, Table, FormGroup, Form, Button, Col} from "reactstrap";

const DUMMY_ADMIN_DETAIL = [
  {
    id: 1,
    name: "Nama Admin",
    nip: "1996712001538",
    email: "admin@email.com",
    password: "password",
    gender: "P",
    statusAdmin: "merchant",
  },
];

const SantriDetail = (props) => {
  const [currentAdmin, setCurrentAdmin] = React.useState(null);
  const [currentIdAdmin, setCurrentIdAdmin] = React.useState("");
  const history = useHistory()
  let { id } = useParams();

    React.useEffect(() => {
        setCurrentIdAdmin(window.location.pathname)
        // setCurrentAdmin(JSON.parse(localStorage.getItem('data_admin'))[id])
        let currentAdminObject = JSON.parse(localStorage.getItem('data_admin')).find(obj => {
            return obj.id === parseInt(id)
        })
        setCurrentAdmin(currentAdminObject)
    }, [currentIdAdmin]);

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
                    <Input name="nama" id="nama" type="text" value={currentAdmin && currentAdmin.name} readOnly={true} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="nip" className="pr-3 mb-0">NIP:</Label>
                <Col sm={10}>
                    <Input name="nip" id="nip" type="text" value={currentAdmin && currentAdmin.nip} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="email" className="pr-3 mb-0">Email:</Label>
                <Col sm={10}>
                    <Input name="email" id="email" type="email" value={currentAdmin && currentAdmin.email} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="password" className="pr-3 mb-0">Password:</Label>
                <Col sm={10}>
                    <Input name="password" id="password" type="password" value={currentAdmin && currentAdmin.password} disabled={true} readOnly={true}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} htmlFor="jenis_kelamin" className="pr-3 mb-0">Jenis Kelamin:</Label>
                <Col sm={10}>
                    <Input name="jenis_kelamin" id="jenis_kelamin" type="select" readOnly={true}>
                        {
                            (currentAdmin?.gender != null) &&
                                (currentAdmin.gender == "L")
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
                            (DUMMY_ADMIN_DETAIL[0].statusAdmin.toLowerCase() === "smp")
                                ?
                                <option value="smp">SMP</option>
                                : (DUMMY_ADMIN_DETAIL[0].statusAdmin.toLowerCase() === "sma") ?
                                    <option value="sma">SMA</option>
                                    : (DUMMY_ADMIN_DETAIL[0].statusAdmin.toLowerCase() === "merchant") ?
                                        <option value="merchant">Merchant</option>
                                        : (DUMMY_ADMIN_DETAIL[0].statusAdmin.toLowerCase() === "bendahara") ?
                                            <option value="bendahara">Bendahara</option>
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
