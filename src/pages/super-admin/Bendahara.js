import React, {useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";
import {SANTRI} from "../../constants/local_storage_keys";

const DUMMY_BENDAHARA = [
    {
        id: 1,
        name: "Bendahara Kamila Nur Laila",
        nip: "212121",
        email: "Kamila@gmail.com",
        gender: "P",
        password: "password",
        statusBendahara: "smp"
    },
    {
        id: 2,
        name: "Bendahara Yusuf Anmar Abqari",
        nip: "212122",
        email: "Yusuf@gmail.com",
        gender: "L",
        password: "password",
        statusBendahara: "sma"
    },
    {
        id: 3,
        name: "Bendahara Zahra Ramadhani",
        nip: "212123",
        email: "Zahra@gmail.com",
        gender: "P",
        password: "password",
        statusBendahara: "sma"
    },
    {
        id: 4,
        name: "Bendahara Ahmad Dzulrkarnain",
        nip: "212124",
        email: "Ahmad@gmail.com",
        gender: "L",
        password: "password",
        statusBendahara: "merchant"
    },
    {
        id: 5,
        name: "Bendahara Nama lainnya",
        nip: "212125",
        email: "Nama@gmail.com",
        gender: "L",
        password: "password",
        statusBendahara: "bendahara"
    },
];

const Bendahara = (props) => {
    const [lastPath, setLastPath] = React.useState("");
    const [bendaharas, setBendaharas] = useState([]);
    const deleteSwal = withReactContent(Swal);

    React.useEffect(() => {
        fetchDataBendaharas()
        let splittedPath = window.location.pathname.split("/");
        setLastPath(splittedPath[splittedPath.length - 1])
    }, []);

    const fetchDataBendaharas = () => {
        if(localStorage.getItem('data_bendahara') == null) {
            localStorage.setItem('data_bendahara', JSON.stringify(DUMMY_BENDAHARA))
            setBendaharas(DUMMY_BENDAHARA)
        } else {
            setBendaharas(JSON.parse(localStorage.getItem('data_bendahara')))
        }
    };

    const deleteHandler = (id) => {
        let currentBendaharaObject = bendaharas.find(obj => {
            return obj.id === parseInt(id)
        })

        deleteSwal.fire({
            title: "Konfirmasi hapus data Bendahara",
            text: `Yakin akan menghapus santri ${currentBendaharaObject.name} ?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            confirmButtonColor: '#eb0000'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // delete Bendahara by id
                let resultBendaharaArray = bendaharas.filter(function( obj ) {
                    return obj.id !== id;
                });
                setBendaharas(resultBendaharaArray)
                localStorage.setItem('data_bendahara', JSON.stringify(resultBendaharaArray))

                Swal.fire('Berhasil!', 'Data Bendahara berhasil dihapus !', 'success')
            } else if (result.isDenied) {
                Swal.fire('Data Bendahara tidak terhapus', '', 'info')
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
                {bendaharas.length == 0 ? (
                        DUMMY_BENDAHARA.map((s, i) => (
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
                                    <Link to={'/super-admin/bendahara/'+s.id} className="mr-2"><Button color="warning">Lihat</Button></Link>
                                    <Button onClick={deleteHandler.bind(null, s.id)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        ))
                    ) :
                    (
                        bendaharas.map((s, i) => (
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
                                    <Link to={'/super-admin/bendahara/'+s.id} className="mr-2"><Button color="warning">Lihat</Button></Link>
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

export default Bendahara;
