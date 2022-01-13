import { SANTRI } from "constants/local_storage_keys";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ANGKATAN, SANTRI as DUMMY_SANTRI } from "../../constants/dummies"

const Santri = () => {
  const [santri, setSantri] = useState([]);
  const [displayedSantri, setDisplayedSantri] = useState([]);
  const [filterPendidikan, setFilterPendidikan] = useState('SMA');
  const [filterAngkatan, setFilterAngkatan] = useState(2020);
  const deleteSwal = withReactContent(Swal);

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

  const deleteHandler = (id) => {
    const currentSantri = santri.find(s => +s.id === +id);

    if (currentSantri) {
      deleteSwal.fire({
        title: "Konfirmasi hapus data Santri",
        text: `Yakin akan menghapus santri ${currentSantri.nama} ?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        confirmButtonColor: '#eb0000'
      }).then((result) => {
        if (result.isConfirmed) {
          setSantri((prev) => prev.filter(p => p.id !== id));
          setDisplayedSantri((prev) => prev.filter(p => p.id !== id));
          // deleting from local storage
          const santriStr = localStorage.getItem(SANTRI);
          const data = santriStr ? JSON.parse(santriStr) : [];

          const filtered = data.filter(d => d.id !== id);

          localStorage.setItem(SANTRI, JSON.stringify(filtered));

          Swal.fire('Berhasil!', 'Data Santri berhasil dihapus !', 'success');
        } else if (result.isDenied) {
          Swal.fire('Data Santri tidak terhapus', '', 'info');
        }
      })
    }
  };

  const filterDataHandler = () => {
    setDisplayedSantri(santri.filter(s => +s.angkatan === +filterAngkatan && s.pendidikan === filterPendidikan));
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <Form className="flex-grow-1">
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
            <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Angkatan:</Label>
            <div sm={10}>
              <Input name="angkatan" id="angkatan" type="select" onChange={(event) => setFilterAngkatan(event.target.value)} value={filterAngkatan}>
                {ANGKATAN.map(a => (
                  <option value={a}>{a}</option>
                ))}
              </Input>
            </div>
          </FormGroup>
        </Form>
        <Link to="/admin/santri/create"><Button color="secondary">Tambah data</Button></Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button color="success" onClick={filterDataHandler}>Cari data</Button>
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
                <Link to={`/admin/santri/${s.id}`} className="mr-2"><Button color="warning">Lihat</Button></Link>
                <Link to={`/admin/santri/${s.id}/edit`} className="mr-2"><Button color="info">Edit</Button></Link>
                <Button color="danger" onClick={deleteHandler.bind(null, s.id)}>Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Santri;
