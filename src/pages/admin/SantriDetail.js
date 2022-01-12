import React from "react";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";

const DUMMY_SANTRI = [
  {
    id: 1,
    name: "Rifqi Fajar Ramdhani",
    sex: "L",
  },
  {
    id: 2,
    name: "Affan Abiyyu",
    sex: "L",
  },
  {
    id: 3,
    name: "M. Fahreza Ansori",
    sex: "L",
  },
  {
    id: 4,
    name: "Dary Winata Nugraha",
    sex: "L",
  },
  {
    id: 5,
    name: "Praditya Nafis M.",
    sex: "L",
  },
];

const SantriDetail = (props) => {
  return (
    <div>
      <img src={require('../../images/avatar.png')} alt="" className="w-25 mx-auto d-block" />
      <p className="text-center mb-0">Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      <p className="text-center">Angkatan 2020</p>
      <hr />
      <Table bordered className="mb-2">
        <tr>
          <td>Nama Santri</td>
          <td>Rifqi Fajar Ramdhani</td>
        </tr>
        <tr>
          <td>Nomor Induk</td>
          <td>2102109210</td>
        </tr>
        <tr>
          <td>Alamat Santri</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, saepe?</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>Laki-laki</td>
        </tr>
        <tr>
          <td>Tempat, Tanggal Lahir</td>
          <td>Kediri, 17 Januari 2006</td>
        </tr>
        <tr>
          <td>Nama Orang Tua</td>
          <td>Lorem, ipsum dolor.</td>
        </tr>
        <tr>
          <td>Nomor HP Orang Tua</td>
          <td>08213293232</td>
        </tr>
        <tr>
          <td>Email Orang Tua</td>
          <td>maoiqwodkqokwoq@gmail.com</td>
        </tr>
        <tr>
          <td>Alamat Orang Tua</td>
          <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, natus.</td>
        </tr>
        <tr>
          <td>Angkatan Santri</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Transaksi Santri</td>
          <td>Rp750.000,-</td>
        </tr>
      </Table>
      <div className="d-flex justify-content-between">
        <Button color="secondary">Ubah data</Button>
        <Link to="/admin/santri"><Button color="success">Kembali</Button></Link>
      </div>
    </div>
  );
};

export default SantriDetail;
