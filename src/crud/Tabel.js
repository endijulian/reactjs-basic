import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanan, editData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Harga</th>
          <th>Description</th>
          <th>Aksi</th>
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
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editData(valMakanan.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
