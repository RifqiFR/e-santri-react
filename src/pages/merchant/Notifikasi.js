import React, { useState } from 'react';
import { Form, Input, Button, Table, FormGroup, Label, Col } from "reactstrap";
import SlidingPane from "react-sliding-pane";

import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from 'react-router-dom';

const NOTIFICATION_DATA = [
  {
    id: 1,
    name: 'Sakinah Food',
    phone_number: '08313102322',
    description: 'Verifikasi Merchant',
    status: 'Belum Selesai',
  },
  {
    id: 2,
    name: 'Pentol Galak',
    phone_number: '083112321312',
    description: 'Lupa Password',
    status: 'Selesai',
  },
  {
    id: 3,
    name: 'Manja Cheese Tea',
    phone_number: '081336283270',
    description: 'Verifikasi Merchant',
    status: 'Belum Selesai',
  },
];

const Notifikasi = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const showFilterSlidingPane = () => {
    setFilterOpen(true);
  };

  return (
    <>
      <SlidingPane
        className="filter-sliding-pane"
        isOpen={filterOpen}
        title="Notification Filter"
        onRequestClose={() => { setFilterOpen(false) }}
      >
        <Form>
          <FormGroup>
            <Label md={12} htmlFor="description" className="pr-3 mb-0">Keterangan</Label>
            <Col md={12}>
              <Input name="description" id="description" type="text" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label md={12} htmlFor="status" className="pr-3 mb-0">Status</Label>
            <Col md={12}>
              <Input name="status" id="status" type="select" value="Selesai">
                <option value='Selesai'>Selesai</option>
                <option value='Belum Selesai'>Belum Selesai</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label md={12} htmlFor="action" className="pr-3 mb-0">Aksi</Label>
            <Col md={12}>
              <Input name="action" id="action" type="text" />
            </Col>
          </FormGroup>
          <div className="d-flex justify-content-end mt-4">
            <Button color="warning" type="submit">Cari</Button>
          </div>
        </Form>
      </SlidingPane>
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-center">
          <span className="mr-2">Show </span>
          <Input className="col-4 mr-2" type="number" name="entries" id="entries" value="5" />
          <span> entries</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="mr-2">Status </span>
          <Input name="status" id="status" type="select">
            <option value='Belum Selesai'>Belum Selesai</option>
            <option value='Selesai'>Selesai</option>
          </Input>
        </div>
        <Button color="dark" onClick={showFilterSlidingPane}>More Filter</Button>
        <Form className="d-flex">
          <Input className="mr-2" type="text" name="search" id="search" />
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
              Nomor Telepon
            </th>
            <th>
              Keterangan
            </th>
            <th>
              Status
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {NOTIFICATION_DATA.map((n, i) => (
            <tr key={n.id}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {n.name}
              </td>
              <td className="align-middle">
                {n.phone_number}
              </td>
              <td className="align-middle">
                {n.description}
              </td>
              <td className="align-middle">
                {n.status}
              </td>
              <td className="align-middle">
                {n.status === 'Belum Selesai'
                  ? <Link to={`/merchant/notifikasi/${n.id}/verifikasi`} className="btn btn-danger">Verifikasi</Link>
                  : <Link to={`/merchant/notifikasi/${n.id}/lupa_password`} className="btn btn-success">Lihat Data</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Notifikasi;