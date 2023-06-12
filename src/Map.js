import React from 'react'


const makanans = [
    {
        id : 1,
        nama : 'Sate',
        harga: 50000
    },
    {
        id : 2,
        nama : 'Bakso',
        harga: 30000
    },
    {
        id : 3,
        nama : 'Soto',
        harga: 200000
    },
    {
        id : 4,
        nama : 'Mie Ayam',
        harga: 10000
    },
    {
        id : 5,
        nama : 'Oncom',
        harga: 5000
    },
];

const totalBayar = makanans.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
        <h2>List Makanan</h2>
        <ul>
            {makanans.map((makanan, index) => (
                <li key={makanan.id}>{makanan.nama} Harga {makanan.harga}</li>
            ))}
        </ul>

        <h1>Total : {totalBayar}</h1>

        <h2>List Makanan Harga Lebih Dari 20.000</h2>
        <ul>
            {makanans.filter((makanan) => makanan.harga > 20000).map((makanan, index) => (
                <li key={makanan.id}>{makanan.nama} Harga {makanan.harga}</li>
            ))}
        </ul>
    </div>
  )
}

export default Map