import { ANGKATAN } from "constants/dummies";
import { SANTRI } from "constants/local_storage_keys";
import React, { useState } from "react";
import { useHistory } from "react-router";
import logoUser from "../../images/user-avatar.jpg";
import { Input, Label, FormGroup, Form, Button, Col, Tooltip } from "reactstrap";

const SantriForm = (props) => {
  const history = useHistory();
  const [nama, setNama] = useState('');
  const [noInduk, setNoInduk] = useState('');
  const [alamat, setAlamat] = useState('');
  const [sex, setSex] = useState('L');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [angkatan, setAngkatan] = useState('2020');
  const [namaOrtu, setNamaOrtu] = useState('');
  const [statusOrtu, setStatusOrtu] = useState('ayah');
  const [nomorOrtu, setNomorOrtu] = useState('');
  const [emailOrtu, setEmailOrtu] = useState('');
  const [alamatOrtu, setAlamatOrtu] = useState('');
  const [userImage, setUserImage] = React.useState(null);
  const [fileName, setFileName] = React.useState("");
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const submitHandler = (event) => {
    event.preventDefault();

    const current = localStorage.getItem(SANTRI);
    let data = [];

    if (current) {
      data = JSON.parse(current);
    }

    data.push({
      id: Math.floor(Math.random() * 10001),
      nama,
      noInduk,
      alamat,
      sex,
      tempatLahir,
      tanggalLahir,
      angkatan,
      namaOrtu,
      statusOrtu,
      nomorOrtu,
      emailOrtu,
      alamatOrtu,
      pendidikan: "SMA", // dummy purpose
    });
    
    localStorage.setItem(SANTRI, JSON.stringify(data));
    history.push('/admin/santri');
  }

  const handleChange = (e) => {
    if (e.target.files.length) {
      let file = e.target.files[0];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        setFileName(reader.result)
        setUserImage(reader.result)
      }.bind(this);
      console.log(url) // Would see a path?
    }
  }

  return (
    <>
      <p className="text-center">Tambah Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      {/*<div className="w-100 cursor-pointer">*/}
      {/*  <img className="d-block mx-auto w-25 mb-2" src={require('../../images/user-icon.png')} alt="" />*/}
      {/*  <p className="text-center font-weight-bold">Upload Foto</p>*/}
      {/*</div>*/}
      <div className="pb-2 d-flex justify-content-center">
        <label htmlFor="upload-button" id="labelImage">
          {userImage == null ? (
              <img
                src={logoUser}
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style={{
                  width: "180px",
                  cursor: "pointer",
                }}
                alt={logoUser.alt}
              />
          ) : (
              <>
                <img
                  src={fileName}
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                  style={{
                    width: "180px",
                    cursor: "pointer",
                  }}
                  alt={fileName}
                />
              </>
          )}
        </label>
        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          target="labelImage"
          toggle={toggle}
        >
          Change your profil image
        </Tooltip>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      <Form onSubmit={submitHandler}>
        <FormGroup row>
          <Label sm={2} htmlFor="nama" className="pr-3 mb-0">Nama Santri:</Label>
          <Col sm={10}>
            <Input name="nama" id="nama" type="text" onChange={event => setNama(event.target.value)} value={nama} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nomor_induk" className="pr-3 mb-0">Nomor Induk:</Label>
          <Col sm={10}>
            <Input name="nomor_induk" id="nomor_induk" type="text" onChange={event => setNoInduk(event.target.value)} value={noInduk} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="alamat_santri" className="pr-3 mb-0">Alamat Santri:</Label>
          <Col sm={10}>
            <Input name="alamat_santri" id="alamat_santri" type="text" onChange={event => setAlamat(event.target.value)} value={alamat} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="jenis_kelamin" className="pr-3 mb-0">Jenis Kelamin:</Label>
          <Col sm={10}>
            <Input name="jenis_kelamin" id="jenis_kelamin" type="select" onChange={event => setSex(event.target.value)} value={sex}>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="tempat_lahir" className="pr-3 mb-0">Tempat Lahir:</Label>
          <Col sm={10}>
            <Input name="tempat_lahir" id="tempat_lahir" type="text" onChange={event => setTempatLahir(event.target.value)} value={tempatLahir} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="tanggal_lahir" className="pr-3 mb-0">Tanggal Lahir:</Label>
          <Col sm={10}>
            <Input name="tanggal_lahir" id="tanggal_lahir" type="date" onChange={event => setTanggalLahir(event.target.value)} value={tanggalLahir} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="angkatan" className="pr-3 mb-0">Angkatan:</Label>
          <Col sm={10}>
            <Input name="angkatan" id="angkatan" type="select" onChange={event => setAngkatan(event.target.value)} value={angkatan}>
              {ANGKATAN.map(a => (
                <option value={a}>{a}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nama_orang_tua" className="pr-3 mb-0">Nama Orang Tua:</Label>
          <Col sm={10}>
            <Input name="nama_orang_tua" id="nama_orang_tua" type="text" onChange={event => setNamaOrtu(event.target.value)} value={namaOrtu} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="status_orang_tua" className="pr-3 mb-0">Status Orang Tua:</Label>
          <Col sm={10}>
          <Input name="status_orang_tua" id="status_orang_tua" type="select" onChange={event => setStatusOrtu(event.target.value)} value={statusOrtu}>
              <option value="ayah">Ayah</option>
              <option value="ibu">Ibu</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nomor_hp_orang_tua" className="pr-3 mb-0">Nomor HP Orang Tua:</Label>
          <Col sm={10}>
            <Input name="nomor_hp_orang_tua" id="nomor_hp_orang_tua" type="text" onChange={event => setNomorOrtu(event.target.value)} value={nomorOrtu} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="email_orang_tua" className="pr-3 mb-0">Email Orang Tua:</Label>
          <Col sm={10}>
            <Input name="email_orang_tua" id="email_orang_tua" type="text" onChange={event => setEmailOrtu(event.target.value)} value={emailOrtu} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="alamat_orang_tua" className="pr-3 mb-0">Alamat Orang Tua:</Label>
          <Col sm={10}>
            <Input name="alamat_orang_tua" id="alamat_orang_tua" type="text" onChange={event => setAlamatOrtu(event.target.value)} value={alamatOrtu} />
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-end">
          <Button color="success">Simpan</Button>
        </div>
      </Form>
    </>
  );
};

export default SantriForm;
