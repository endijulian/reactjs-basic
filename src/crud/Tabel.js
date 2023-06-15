import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanan }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Harga</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((valMakanan, index) => {
          return (
            <tr key={valMakanan.id}>
              <td>{index + 1}</td>
              <td>{valMakanan.nama}</td>
              <td>{valMakanan.harga}</td>
              <td>{valMakanan.description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
