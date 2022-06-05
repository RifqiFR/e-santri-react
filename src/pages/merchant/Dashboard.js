/*
  Ini halaman dashboard, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)

  Disini pas baru render component, fungsi didalam useEffect kepanggil, dia ngefetch API dari API-nya
  Studio Ghibli (disclaimer: aku bukan wibu). Fetchnya pake axios biar gampang, terus render sesuai
  kondisi state film / error / loading pake inline conditional.
*/

import React from "react";
import {
  Button,
  Form,
  Input,
  Table
} from "reactstrap";
import { Line } from "react-chartjs-2";

const DUMMY_SANTRI = [
  {
    id: 1,
    name: "Rifqi Fajar Ramdhani",
    merchant: "Mitra Media",
    amount: 24500,
    date: "15-07-2021",
    time: "08:52:30",
  },
  {
    id: 2,
    name: "Affan Abiyyu",
    merchant: "Pentol Galak",
    amount: 10000,
    date: "15-07-2021",
    time: "09:52:30",
  },
  {
    id: 3,
    name: "M. Fahreza Ansori",
    merchant: "Artisan Boba",
    amount: 15000,
    date: "15-07-2021",
    time: "10:52:30",
  },
  {
    id: 4,
    name: "Dary Winata Nugraha",
    merchant: "Mitra Media",
    amount: 12500,
    date: "15-07-2021",
    time: "09:52:30",
  },
  {
    id: 5,
    name: "Praditya Nafis M.",
    merchant: "Buku Keren",
    amount: 13000,
    date: "15-07-2021",
    time: "10:48:30",
  },
];

const DUMMY_LINE_CHART_DATA = {
  labels: ['Mar 1', 'Apr 1', 'Mei 1'],
  datasets: [
    {
      id: 1,
      label: '',
      borderColor: "#437C17",
      data: [10000, 25000, 18000],
    },
  ],
};

const DUMY_LINE_CHART_OPTIONS = {
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      align: 'start',
      font: {
        size: 18,
      },
      padding: 16,
      text: "Grafik Pendapatan Pondok"
    }
  },
};

const Dashboard = () => {

  return (
    <>
      <div className="chart h-100 mb-2">
        <Line
          datasetIdKey='id'
          options={DUMY_LINE_CHART_OPTIONS}
          data={DUMMY_LINE_CHART_DATA}
        />
      </div>
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
              Nama Santri
            </th>
            <th>
              Nama Merchant
            </th>
            <th>
              Nominal (Rp)
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
          {DUMMY_SANTRI.map((s, i) => (
            <tr key={s.name}>
              <th scope="row" className="align-middle">
                {i + 1}
              </th>
              <td className="align-middle">
                {s.name}
              </td>
              <td className="align-middle">
                {s.merchant}
              </td>
              <td className="align-middle">
                {s.amount}
              </td>
              <td className="align-middle">
                {s.date}
              </td>
              <td className="align-middle">
                {s.time}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Dashboard;
