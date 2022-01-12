import React from "react";
import { Input, Label, FormGroup, Form, Button, Col } from "reactstrap";

const SantriForm = (props) => {
  return (
    <>
      <p className="text-center">Tambah Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      <div className="w-100 cursor-pointer">
        <img className="d-block mx-auto w-25 mb-2" src={require('../../images/user-icon.png')} alt="" />
        <p className="text-center font-weight-bold">Upload Foto</p>
      </div>
      <Form>
        <FormGroup row>
          <Label sm={2} htmlFor="nama" className="pr-3 mb-0">Nama Santri:</Label>
          <Col sm={10}>
            <Input name="nama" id="nama" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nomor_induk" className="pr-3 mb-0">Nomor Induk:</Label>
          <Col sm={10}>
            <Input name="nomor_induk" id="nomor_induk" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="alamat_santri" className="pr-3 mb-0">Alamat Santri:</Label>
          <Col sm={10}>
            <Input name="alamat_santri" id="alamat_santri" type="text" />
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
          <Label sm={2} htmlFor="tempat_lahir" className="pr-3 mb-0">Tempat Lahir:</Label>
          <Col sm={10}>
            <Input name="tempat_lahir" id="tempat_lahir" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="tanggal_lahir" className="pr-3 mb-0">Tanggal Lahir:</Label>
          <Col sm={10}>
            <Input name="tanggal_lahir" id="tanggal_lahir" type="date" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="angkatan" className="pr-3 mb-0">Angkatan:</Label>
          <Col sm={10}>
            <Input name="angkatan" id="angkatan" type="select">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nama_orang_tua" className="pr-3 mb-0">Nama Orang Tua:</Label>
          <Col sm={10}>
            <Input name="nama_orang_tua" id="nama_orang_tua" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="status_orang_tua" className="pr-3 mb-0">Status Orang Tua:</Label>
          <Col sm={10}>
          <Input name="status_orang_tua" id="status_orang_tua" type="select">
              <option value="ayah">Ayah</option>
              <option value="ibu">Ibu</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="nomor_hp_orang_tua" className="pr-3 mb-0">Nomor HP Orang Tua:</Label>
          <Col sm={10}>
            <Input name="nomor_hp_orang_tua" id="nomor_hp_orang_tua" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="email_orang_tua" className="pr-3 mb-0">Email Orang Tua:</Label>
          <Col sm={10}>
            <Input name="email_orang_tua" id="email_orang_tua" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="alamat_orang_tua" className="pr-3 mb-0">Alamat Orang Tua:</Label>
          <Col sm={10}>
            <Input name="alamat_orang_tua" id="alamat_orang_tua" type="text" />
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
