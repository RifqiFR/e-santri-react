import React from 'react';
import { Table } from "reactstrap";

const DetailField = ({ fieldData }) => {

  return (
    <Table bordered className="mb-4">
      <tbody>
        {fieldData?.map(d => (
          <tr key={d.label}>
            <td>{d.label}</td>
            <td>{d.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DetailField;