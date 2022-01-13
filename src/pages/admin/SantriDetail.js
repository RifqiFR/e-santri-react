import { SANTRI } from "constants/local_storage_keys";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Button } from "reactstrap";

const SantriDetail = (props) => {
  const { id: santriId } = useParams();
  const [santri, setSantri] = useState(null);

  useEffect(() => {
    const str = localStorage.getItem(SANTRI);
    const data = str ? JSON.parse(str) : [];

    const santri = data.find(d => d.id === +santriId);

    setSantri(santri);
  }, [santriId])

  return (
    <div>
      <img src={require('../../images/avatar.png')} alt="" className="w-25 mx-auto d-block" />
      <p className="text-center mb-0">Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      <p className="text-center">Angkatan 2020</p>
      <hr />
      <Table bordered className="mb-2">
        <tr>
          <td>Nama Santri</td>
          <td>{santri?.nama}</td>
        </tr>
        <tr>
          <td>Nomor Induk</td>
          <td>{santri?.noInduk}</td>
        </tr>
        <tr>
          <td>Alamat Santri</td>
          <td>{santri?.alamat}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>{santri?.sex}</td>
        </tr>
        <tr>
          <td>Tempat, Tanggal Lahir</td>
          <td>{santri?.tempatLahir}, {santri?.tanggalLahir}</td>
        </tr>
        <tr>
          <td>Nama Orang Tua</td>
          <td>{santri?.namaOrangTua}</td>
        </tr>
        <tr>
          <td>Nomor HP Orang Tua</td>
          <td>{santri?.nomorOrangTua}</td>
        </tr>
        <tr>
          <td>Email Orang Tua</td>
          <td>{santri?.emailOrangTua}</td>
        </tr>
        <tr>
          <td>Alamat Orang Tua</td>
          <td>{santri?.alamatOrangTua}</td>
        </tr>
        <tr>
          <td>Angkatan Santri</td>
          <td>{santri?.angkatan}</td>
        </tr>
        <tr>
          <td>Transaksi Santri</td>
          <td>Rp750.000,-</td>
        </tr>
      </Table>
      <div className="d-flex justify-content-between">
        <Link to={`/admin/santri/${santriId}/edit`}><Button color="secondary">Ubah data</Button></Link>
        <Link to="/admin/santri"><Button color="success">Kembali</Button></Link>
      </div>
    </div>
  );
};

export default SantriDetail;
