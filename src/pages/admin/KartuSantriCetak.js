import React from "react";
import { Input, Label, Table, FormGroup, Form, Button } from "reactstrap";

const KartuSantriCetak = (props) => {
  return (
    <>
      <img className="w-100" src={require('../../images/kartu_santri.png')} alt="kartu_santri" />
      <div className="d-flex align-items-center my-3">
        <p className="mb-0 mr-2">Pin: </p>
        <p className="mb-0 border py-2 px-3 rounded">746694</p>
      </div>
      <Button className="d-block mx-auto px-3" color="danger">Cetak</Button>
    </>
  );
};

export default KartuSantriCetak;
