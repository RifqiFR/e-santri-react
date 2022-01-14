import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Input, Label, FormGroup, Form, Button, Col, FormFeedback } from "reactstrap";
import { useHistory  } from "react-router-dom";
import axios from "axios";
import {JWT_HEADER, POST_NEW_ADMIN, SEARCH_HEALTH_AGENCY_NAME} from "../../constants/urls";

const JENIS_KELAMIN_VALUE = ["Laki-Laki", "Perempuan"]

const AdminForm = (props) => {
  const createSwal = withReactContent(Swal);
  const [lastPath, setLastPath] = React.useState("");
  const [name, setName] = React.useState("");
  const [nameFeedback, setNameFeedback] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailFeedback, setEmailFeedback] = React.useState("");
  const [role, setRole] = React.useState("");
  const [roleFeedback, setRoleFeedback] = React.useState("");
  const [nip, setNip] = React.useState("");
  const [nipFeedback, setNipFeedback] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordFeedback, setPasswordFeedback] = React.useState("");
  const [jenis_kelamin, setJenisKelamin] = React.useState("");
  const [jenis_kelamin_feedback, setJenisKelaminFeedback] = React.useState("");
  const [statusAdmin, setStatusAdmin] = React.useState("");

  const history = useHistory()

  React.useEffect(() => {
    let splittedPath = window.location.pathname.split("/");
    setLastPath(splittedPath[splittedPath.length - 2])

    if (splittedPath[splittedPath.length - 2] === 'admin-smp' || splittedPath[splittedPath.length - 2] === 'admin-sma') {
      setRole('admin_santri')
    } else if (splittedPath[splittedPath.length - 2] === 'admin-merchant') {
      setRole('admin_merchant')
    } else if (splittedPath[splittedPath.length - 2] === 'bendahara') {
      setRole('bendahara')
    }

    //select jenis_kelamin option in first render
    setJenisKelamin(JENIS_KELAMIN_VALUE[0])
  }, [lastPath]);

  const formSubmitAdminAPI = async (e) => {
    e.preventDefault()
    let newAdmin = {
      nama: name,
      nip: nip,
      email: email,
      password: password,
      jenis_kelamin: jenis_kelamin,
      role: role
    }

    await axios
      .post(
          POST_NEW_ADMIN(), newAdmin,{ headers: { Authorization: `Bearer ${JWT_HEADER}` } }
      )
      .then((res) => {
        // show success SWAL toast and if redirect to index
        createSwal.fire({
          icon: 'success',
          title: 'User berhasil ditambahkan!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        history.push('/super-admin/'+lastPath)
      })
      .catch((err) => {
        console.log(JSON.parse(err.response.data.error.message));
        let errorMessages = JSON.parse(err.response.data.error.message)

        // empty message form
        setNameFeedback("")
        setNipFeedback("")
        setEmailFeedback("")
        setRoleFeedback("")
        setPasswordFeedback("")
        setJenisKelaminFeedback("")

        // set error message
        Object.entries(errorMessages).forEach(
            ([key, value]) => {
              if (key == 'nama')
                setNameFeedback(...value)
              else if (key == 'nip')
                setNipFeedback(...value)
              else if (key == 'email')
                setEmailFeedback(...value)
              else if (key == 'role')
                setRoleFeedback(...value)
              else if (key == 'password')
                setPasswordFeedback(...value)
              else if (key == 'jenis_kelamin')
                setJenisKelaminFeedback(...value)
            }
        );
      });
  }

  const formSubmitAdminDummy = e => {
    if(localStorage.getItem('data_admin') != null) {
      let newAdmin = {
        id: JSON.parse(localStorage.getItem('data_admin')).length + 1,
        name: name,
        nip: nip,
        email: email,
        password: password,
        jenis_kelamin: jenis_kelamin,
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
      <Form onSubmit={formSubmitAdminAPI}>
        <FormGroup row>
          <Label sm={2} htmlFor="name" className="pr-3 mb-0">Nama Admin:</Label>
          <Col sm={10}>
            <Input invalid={nameFeedback !== ""} name="name" id="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <FormFeedback>
              {nameFeedback}
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nip" className="pr-3 mb-0">NIP:</Label>
          <Col sm={10}>
            <Input invalid={nipFeedback !== ""} name="nip" id="nip" type="text" value={nip} onChange={(e) => {setNip(e.target.value)}} />
            <FormFeedback>
              {nipFeedback}
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="email" className="pr-3 mb-0">Email:</Label>
          <Col sm={10}>
            <Input invalid={emailFeedback !== ""} name="email" id="email" type="email" value={name.replace(/\s+/g, '').toLowerCase()+'@email.com'} onChange={(e) => {setEmail(e.target.value)}} readOnly={true} />
            <FormFeedback>
              {emailFeedback}
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="password" className="pr-3 mb-0">Password:</Label>
          <Col sm={10}>
            <Input invalid={passwordFeedback !== ""} name="password" id="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <FormFeedback>
              {passwordFeedback}
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="jenis_kelamin" className="pr-3 mb-0">Jenis Kelamin:</Label>
          <Col sm={10}>
            <Input invalid={jenis_kelamin_feedback !== ""} name="jenis_kelamin" id="jenis_kelamin" type="select" value={jenis_kelamin} onInput={(e) => {setJenisKelamin(e.target.value)}}>
              {/*<option value="L">Laki-laki</option>*/}
              {/*<option value="P">Perempuan</option>*/}
              <option value={JENIS_KELAMIN_VALUE[0]}>Laki-laki</option>
              <option value={JENIS_KELAMIN_VALUE[1]}>Perempuan</option>
            </Input>
            <FormFeedback>
              {jenis_kelamin_feedback}
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="role" className="pr-3 mb-0">Status Admin:</Label>
          <Col sm={10}>
            <Input name="role" id="role" type="select" value={role} onChange={(e) => {setRole(e.target.value)}} disabled={true}>
              <option value="admin_santri">{lastPath.replace(/-/g, ' ')}</option>
              <option value="admin_merchant">Admin Merchant</option>
              <option value="bendahara">Bendahara</option>
            </Input>
          </Col>
        </FormGroup>
        {/*<FormGroup row>*/}
        {/*  <Label sm={2} htmlFor="status_admin" className="pr-3 mb-0">Status Admin:</Label>*/}
        {/*  <Col sm={10}>*/}
        {/*    <Input name="status_admin" id="status_admin" type="select" value={statusAdmin} onChange={(e) => {setStatusAdmin(e.target.value)}}>*/}
        {/*      <option value="smp">SMP</option>*/}
        {/*      <option value="sma">SMA</option>*/}
        {/*      <option value="merchant">Merchant</option>*/}
        {/*      <option value="bendahara">Bendahara</option>*/}
        {/*      <option value="guru">Guru</option>*/}
        {/*    </Input>*/}
        {/*  </Col>*/}
        {/*</FormGroup>*/}
        <div className="d-flex justify-content-end">
          <Button color="success">Simpan</Button>
        </div>
      </Form>
    </>
  );
};

export default AdminForm;
