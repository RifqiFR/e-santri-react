import React from "react";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";

const DUMMY_ADMIN = [
  {
    id: 1,
    name: "Kamila Nur Laila",
    nip: "199920013811",
    email: "Kamila@gmail.com"
  },
  {
    id: 2,
    name: "Yusuf Anmar Abqari",
    nip: "199920013822",
    email: "Yusuf@gmail.com"
  },
  {
    id: 3,
    name: "Zahra Ramadhani",
    nip: "199920013833",
    email: "Zahra@gmail.com"
  },
  {
    id: 4,
    name: "Ahmad Dzulrkarnain",
    nip: "199920013844",
    email: "Ahmad@gmail.com"
  },
  {
    id: 5,
    name: "Nama lainnya",
    nip: "199920013855",
    email: "Nama@gmail.com"
  },
];

const Admin = (props) => {
  const [lastPath, setLastPath] = React.useState("");

  React.useEffect(() => {
    let splittedPath = window.location.pathname.split("/");
    setLastPath(splittedPath[splittedPath.length - 1])
  }, [lastPath]);

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
          {DUMMY_ADMIN.map((s, i) => (
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
                <Button color="danger">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
