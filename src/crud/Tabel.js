import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = () => {
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
      <tr>
        <td>1</td>
        <td>Bakso</td>
        <td>30.000</td>
        <td>Bakso enak</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Tabel