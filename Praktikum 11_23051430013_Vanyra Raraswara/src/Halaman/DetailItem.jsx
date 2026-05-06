import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DATA_INVENTORI = [
  { id: 1, nama: 'Baja Batangan', stok: 500, supplier: 'PT. Besi Jaya', deskripsi: 'Bahan baku utama untuk konstruksi rangka.' },
  { id: 2, nama: 'Oli Mesin 20L', stok: 12, supplier: 'PT. Pelumas Nusantara', deskripsi: 'Pelumas mesin industri grade A.' },
  { id: 3, nama: 'Packing Kayu', stok: 100, supplier: 'UD. Kayu Makmur', deskripsi: 'Packing kayu untuk pengiriman barang.' },
  { id: 4, nama: 'Mur Baut M10', stok: 0, supplier: 'PT. Fastener Indo', deskripsi: 'Komponen pengikat standar industri.' },
  { id: 5, nama: 'Cat Anti Karat', stok: 45, supplier: 'PT. Cat Nusantara', deskripsi: 'Cat pelindung untuk permukaan logam.' },
];

function DetailItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const found = DATA_INVENTORI.find(item => item.id === parseInt(id));
    setItem(found);
  }, [id]);

  if (!item) {
    return <div className="text-center mt-5">Memuat data...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Detail Item</h1>
      <Link to="/inventori" className="btn btn-secondary mb-3">Kembali ke Inventori</Link>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID Item: {item.id}</h5>
          <hr />
          <p><strong>Nama Bahan:</strong> {item.nama}</p>
          <p><strong>Supplier:</strong> {item.supplier}</p>
          <p><strong>Stok:</strong> {item.stok} Unit</p>
          <p><strong>Deskripsi:</strong> {item.deskripsi}</p>
          <span className={`badge ${item.stok > 0 ? 'bg-success' : 'bg-danger'}`}>
            {item.stok > 0 ? 'Available' : 'Habis'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;