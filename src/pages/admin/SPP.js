import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button, Table } from "reactstrap";
import { ANGKATAN } from "constants/dummies";
import { TAGIHAN } from "constants/local_storage_keys";

const formatData = (data) => {
  const datetime = new Date(data.created_at);
  const rupiahFormatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });

  return {
    ...data,
    time: `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`,
    date: `${datetime.getDate()}-${datetime.getMonth() + 1}-${datetime.getFullYear()}`,
    jumlah: rupiahFormatter.format(data.jumlah) + ',-'
  };
}

const SPP = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [angkatan, setAngkatan] = useState(2020);
  const [tagihan, setTagihan] = useState('');
  const [jumlah, setJumlah] = useState(0);
  const [search, setSearch] = useState('');

  const resetInput = () => {
    setTagihan('');
    setJumlah(0);
    setAngkatan(2020);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const currentTagihan = localStorage.getItem(TAGIHAN) ? JSON.parse(localStorage.getItem(TAGIHAN)) : [];
    const time = new Date();
    const tagihanObj = {
      id: Math.floor(Math.random() * 10001),
      tagihan,
      angkatan,
      jumlah,
      created_at: time.toString()
    };

    currentTagihan.push(tagihanObj);

    localStorage.setItem(TAGIHAN, JSON.stringify(currentTagihan));

    setData(prev => [
      ...prev,
      formatData(tagihanObj),
    ]);
    setDisplayedData(prev => [
      ...prev,
      formatData(tagihanObj),
    ]);

    resetInput();
  };

  useEffect(() => {
    const currentTagihan = localStorage.getItem(TAGIHAN) ? JSON.parse(localStorage.getItem(TAGIHAN)) : [];
    const formatted = currentTagihan.map(t => formatData(t));

    setData(formatted);
    setDisplayedData(formatted);
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();

    const word = search.toLowerCase();
    if (word) {
      setDisplayedData(data.filter(d => d.tagihan.toLowerCase().includes(word)));
    } else {
      setDisplayedData(data);
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup row>
          <Label sm={2} htmlFor="pendidikan" className="pr-3 mb-0">Angkatan:</Label>
          <div sm={10}>
            <Input name="angkatan" id="angkatan" type="select" onChange={(event) => setAngkatan(event.target.value)} value={angkatan}>
              {ANGKATAN.map(a => (
                <option value={a}>{a}</option>
              ))}
            </Input>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="tagihan" className="pr-3 mb-0">Tagihan:</Label>
          <div sm={10}>
            <Input name="tagihan" id="tagihan" type="text" placeholder="Masukkan keterangan tagihan" onChange={(event) => setTagihan(event.target.value)} value={tagihan}/>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} htmlFor="jumlah" className="pr-3 mb-0">Nominal SPP:</Label>
          <div sm={10}>
            <Input name="jumlah" id="jumlah" type="number" placeholder="Masukkan jumlah tagihan" onChange={(event) => setJumlah(event.target.value)} value={jumlah}/>
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button color="danger">Buat tagihan</Button>
        </div>
      </Form>
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-center">
          <span className="mr-2">Show </span>
          <Input className="col-4 mr-2" type="number" name="entries" id="entries" value="5"/>
          <span> entries</span>
        </div>
        <Form className="d-flex" onSubmit={searchHandler}>
          <Input className="mr-2" type="text" name="search" id="search" onChange={(event) => setSearch(event.target.value)} value={search}/>
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
              Tagihan
            </th>
            <th>
              Angkatan
            </th>
            <th>
              Nominal
            </th>
            <th>
              Tanggal
            </th>
            <th>
              Waktu
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((d, i) => (
            <tr key={d.id}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {d.tagihan}
              </td>
              <td className="align-middle">
                {d.angkatan}
              </td>
              <td className="align-middle">
                {d.jumlah}
              </td>
              <td className="align-middle">
                {d.date}
              </td>
              <td className="align-middle">
                {d.time}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SPP;
