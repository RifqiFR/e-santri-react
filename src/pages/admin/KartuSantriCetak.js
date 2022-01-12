import React from "react";
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

const KartuSantriCetak = (props) => {
  return (
    <img className="w-100" src={require('../../images/kartu_santri.png')} alt="kartu_santri" />
  );
};

export default KartuSantriCetak;
