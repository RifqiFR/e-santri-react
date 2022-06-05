import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Table } from "reactstrap";

const MERCHANTS_DATA = [
  {
    id: 1,
    name: 'Sakinah Food',
    phone_number: '081231213123',
    niche: 'makanan',
  },
  {
    id: 2,
    name: 'Pentol Galak',
    phone_number: '01912301381',
    niche: 'makanan',
  },
  {
    id: 3,
    name: 'Manja Cheese Tea',
    phone_number: '088120313120',
    niche: 'makanan',
  },
  {
    id: 4,
    name: 'Mitra Media',
    phone_number: '08182391283',
    niche: 'alat tulis',
  },
];

const DataMerchant = () => {
  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-center">
          <span className="mr-2">Show </span>
          <Input className="col-4 mr-2" type="number" name="entries" id="entries" value="5" />
          <span> entries</span>
        </div>
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
              No Telepon
            </th>
            <th>
              Bidang Usaha
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {MERCHANTS_DATA.map((m, i) => (
            <tr key={m.id}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {m.name}
              </td>
              <td className="align-middle">
                {m.phone_number}
              </td>
              <td className="align-middle">
                {m.niche}
              </td>
              <td className="align-middle">
                <Link class="btn btn-warning" to={`/merchant/${m.id}/detail`}>Lihat Data</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataMerchant;