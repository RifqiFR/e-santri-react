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

const Santri = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Form className="flex-grow-1">
          <FormGroup row>
            <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Pendidikan:</Label>
            <div sm={10}>
              <Input name="pendidikan" id="pendidikan" type="select">
                <option value="sma">SMA</option>
                <option value="smp">SMP</option>
              </Input>
            </div>
          </FormGroup>
      
          <FormGroup row>
            <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Angkatan:</Label>
            <div sm={10}>
              <Input name="angkatan" id="angkatan" type="select">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </Input>
            </div>
          </FormGroup>
        </Form>
        <Link to="/admin/santri/create"><Button color="secondary">Tambah data</Button></Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button color="success">Cari data</Button>
      </div>
      <hr />
      <p className="text-center mb-0">Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      <p className="text-center">Angkatan 2020</p>
      <Table bordered>
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Nama Santri
            </th>
            <th>
              Jenis Kelamin
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_SANTRI.map((s, i) => (
            <tr key={s.name}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {s.name}
              </td>
              <td className="align-middle">
                {s.sex}
              </td>
              <td className="d-flex justify-content-center">
                <Link to="/admin/santri/123" className="mr-2"><Button color="warning">Lihat</Button></Link>
                <Button color="danger">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Santri;
