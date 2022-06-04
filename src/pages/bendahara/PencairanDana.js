import React from 'react';
import { Form, Input, Button, Table } from "reactstrap";

const PencairanDana = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-center">
          <span className="mr-2">Show </span>
          <Input className="col-4 mr-2" type="number" name="entries" id="entries" value="5" />
          <span> entries</span>
        </div>
        <Form className="d-flex" onSubmit={null}>
          <Input className="mr-2" type="text" name="search" id="search" onChange={(event) => null} value={null} />
          <Button color="secondary">Cari</Button>
        </Form>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Nama Merchant
            </th>
            <th>
              Nominal Pencairan
            </th>
            <th>
              Status Pencairan
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="align-middle">
              1
            </th>
            <td className="align-middle">
              Mitra Media
            </td>
            <td className="align-middle">
              Rp750.000,-
            </td>
            <td className="align-middle">
              Selesai
            </td>
            <td className="align-middle">
              <Button color='warning'>Lihat Data</Button>
              <Button color='danger'>Hapus Data</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 className="mt-5 mb-3">Data Pencairan Tertunda</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Nama Merchant
            </th>
            <th>
              Nominal Pencairan
            </th>
            <th>
              Status Pencairan
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="align-middle">
              1
            </th>
            <td className="align-middle">
              Pentol Galak
            </td>
            <td className="align-middle">
              Rp300.000,-
            </td>
            <td className="align-middle">
              Belum Selesai
            </td>
            <td className="align-middle">
              <Button color='dark'>Cairkan Dana</Button>
            </td>
          </tr>
          <tr>
            <th scope="row" className="align-middle">
              2
            </th>
            <td className="align-middle">
              Manja Cheese Tea
            </td>
            <td className="align-middle">
              Rp500.000,-
            </td>
            <td className="align-middle">
              Belum Selesai
            </td>
            <td className="align-middle">
              <Button color='dark'>Cairkan Dana</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PencairanDana;