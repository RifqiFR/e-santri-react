import React, {useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";
import {SANTRI} from "../../constants/local_storage_keys";

const DUMMY_ADMIN = [
  {
    id: 1,
    name: "Kamila Nur Laila",
    nip: "199920013811",
    email: "Kamila@gmail.com",
    gender: "P",
    password: "password",
    statusAdmin: "smp"
  },
  {
    id: 2,
    name: "Yusuf Anmar Abqari",
    nip: "199920013822",
    email: "Yusuf@gmail.com",
    gender: "L",
    password: "password",
    statusAdmin: "sma"
  },
  {
    id: 3,
    name: "Zahra Ramadhani",
    nip: "199920013833",
    email: "Zahra@gmail.com",
    gender: "P",
    password: "password",
    statusAdmin: "sma"
  },
  {
    id: 4,
    name: "Ahmad Dzulrkarnain",
    nip: "199920013844",
    email: "Ahmad@gmail.com",
    gender: "L",
    password: "password",
    statusAdmin: "merchant"
  },
  {
    id: 5,
    name: "Nama lainnya",
    nip: "199920013855",
    email: "Nama@gmail.com",
    gender: "L",
    password: "password",
    statusAdmin: "bendahara"
  },
];

const Admin = (props) => {
  const [lastPath, setLastPath] = React.useState("");
  const [admins, setAdmins] = useState([]);
  const deleteSwal = withReactContent(Swal);

  React.useEffect(() => {
    fetchDataAdmins()
    let splittedPath = window.location.pathname.split("/");
    setLastPath(splittedPath[splittedPath.length - 1])
  }, []);

  const fetchDataAdmins = () => {
    if(localStorage.getItem('data_admin') == null) {
      localStorage.setItem('data_admin', JSON.stringify(DUMMY_ADMIN))
      setAdmins(DUMMY_ADMIN)
    } else {
      setAdmins(JSON.parse(localStorage.getItem('data_admin')))
    }
  };

  const deleteHandler = (id) => {
    let currentAdminObject = admins.find(obj => {
      return obj.id === parseInt(id)
    })

    deleteSwal.fire({
      title: "Konfirmasi hapus data Admin",
      text: `Yakin akan menghapus santri ${currentAdminObject.name} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      confirmButtonColor: '#eb0000'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(currentAdminObject)
        // delete Admin by id
        let resultAdmminArray = admins.filter(function( obj ) {
          return obj.id !== id;
        });
        setAdmins(resultAdmminArray)
        localStorage.setItem('data_admin', JSON.stringify(resultAdmminArray))

        Swal.fire('Berhasil!', 'Data Admin berhasil dihapus !', 'success')
      } else if (result.isDenied) {
        Swal.fire('Data Admin tidak terhapus', '', 'info')
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Link to={`/super-admin/${lastPath}/create`} params={{ lastPath: lastPath }}>
          <Button color="info" className="h-30">Tambah data</Button>
        </Link>
      </div>
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-center">
          <span className="mr-2">Show </span>
          <Input className="col-4 mr-2" type="number" name="entries" id="entries" value="5"/>
          <span> entries</span>
        </div>
        <Form className="d-flex">
          <Input className="mr-2" type="text" name="search" id="search" />
          <Button color="secondary">Cari</Button>
        </Form>
      </div>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Nama Santri
            </th>
            <th>
              NIP
            </th>
            <th>
              Email
            </th>
            <th>
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {admins.length == 0 ? (
              DUMMY_ADMIN.map((s, i) => (
                <tr key={s.id}>
                  <th scope="row" className="align-middle">
                    {i + 1}
                  </th>
                  <td className="align-middle">
                    {s.name}
                  </td>
                  <td className="align-middle">
                    {s.nip}
                  </td>
                  <td className="align-middle">
                    {s.email}
                  </td>
                  <td className="d-flex justify-content-center">
                    <Link to={'/super-admin/admin-smp/'+s.id} className="mr-2"><Button color="warning">Lihat</Button></Link>
                    <Button onClick={deleteHandler.bind(null, s.id)} color="danger">Hapus</Button>
                  </td>
                </tr>
              ))
            ) :
            (
              admins.map((s, i) => (
                <tr key={s.id}>
                  <th scope="row" className="align-middle">
                    {i + 1}
                  </th>
                  <td className="align-middle">
                    {s.name}
                  </td>
                  <td className="align-middle">
                    {s.nip}
                  </td>
                  <td className="align-middle">
                    {s.email}
                  </td>
                  <td className="d-flex justify-content-center">
                    <Link to={'/super-admin/admin-smp/'+s.id} className="mr-2"><Button color="warning">Lihat</Button></Link>
                    <Button onClick={deleteHandler.bind(null, s.id)} color="danger">Hapus</Button>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
