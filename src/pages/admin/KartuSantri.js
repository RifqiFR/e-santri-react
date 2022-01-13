import React, { useEffect, useState } from "react";
import { SANTRI as DUMMY_SANTRI, ANGKATAN } from "constants/dummies";
import { SANTRI } from "constants/local_storage_keys";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";

const KartuSantri = () => {
  const [santri, setSantri] = useState([]);
  const [displayedSantri, setDisplayedSantri] = useState([]);
  const [filterPendidikan, setFilterPendidikan] = useState('SMA');
  const [filterAngkatan, setFilterAngkatan] = useState(2020);
  const [filterNama, setFilterNama] = useState('');

  useEffect(() => {
    // parsing additional data from local storage
    const additionalDataStr = localStorage.getItem(SANTRI);
    let additionalData = [];

    if (additionalDataStr) {
      additionalData = JSON.parse(additionalDataStr);
    }

    setSantri([
      ...DUMMY_SANTRI,
      ...additionalData
    ]);
    setDisplayedSantri([
      ...DUMMY_SANTRI,
      ...additionalData
    ]);
  }, []);

  const filterDataHandler = (event) => {
    event.preventDefault();
    setDisplayedSantri(santri.filter(s => +s.angkatan === +filterAngkatan && s.pendidikan === filterPendidikan));
  }

  const filterByName = (event) => {
    event.preventDefault();

    let word = "";
    if (filterNama.trim().length !== 0) {
      word = filterNama.toLowerCase();
    }
    
    setDisplayedSantri(santri.filter(s => s.nama.toLowerCase().includes(word)));
  }

  return (
    <>
      <Form onSubmit={filterDataHandler}>
        <FormGroup row>
          <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Pendidikan:</Label>
          <div sm={10}>
            <Input name="pendidikan" id="pendidikan" type="select" onChange={(event) => setFilterPendidikan(event.target.value)} value={filterPendidikan}>
              <option value="SMA">SMA</option>
              <option value="SMP">SMP</option>
            </Input>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="angkatan" className="pr-3 mb-0">Angkatan:</Label>
          <div sm={10}>
            <Input name="angkatan" id="angkatan" type="select" onChange={(event) => setFilterAngkatan(event.target.value)} value={filterAngkatan}>
              {ANGKATAN.map(a => (
                <option value={a}>{a}</option>
              ))}
            </Input>
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button color="success">Cari data</Button>
        </div>
      </Form>
      <hr />
      <p className="text-center mb-0">Data Santri SMA Pondok Pesantren Tambak Beras Jombang</p>
      <p className="text-center">Angkatan 2020</p>
      <Form className="d-flex justify-content-end my-2" onSubmit={filterByName}>
        <Input className="col-3 mr-2" type="text" name="search" id="search" onChange={(event) => setFilterNama(event.target.value)} value={filterNama} />
        <Button color="secondary">Cari</Button>
      </Form>
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
          {displayedSantri.map((s, i) => (
            <tr key={s.name}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {s.nama}
              </td>
              <td className="align-middle">
                {s.sex}
              </td>
              <td className="d-flex justify-content-center">
                <Link to="/admin/kartusantri/123/cetak"><Button color="danger">Cetak Kartu</Button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default KartuSantri;
