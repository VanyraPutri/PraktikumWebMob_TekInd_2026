import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Data Mock Inventori Bahan Baku
const DATA_INVENTORI = [
  { id: 1, nama: 'Baja Batangan', stok: 500, supplier: 'PT. Besi Jaya' },
  { id: 2, nama: 'Oli Mesin 20L', stok: 12, supplier: 'PT. Pelumas Nusantara' },
  { id: 3, nama: 'Packing Kayu', stok: 100, supplier: 'UD. Kayu Makmur' },
  { id: 4, nama: 'Mur Baut M10', stok: 0, supplier: 'PT. Fastener Indo' },
  { id: 5, nama: 'Cat Anti Karat', stok: 45, supplier: 'PT. Cat Nusantara' },
];

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setProducts(DATA_INVENTORI);
    setLoading(false);
  }, 5000); // 5 detik
}, []);

  return (
    <div className="container mt-4">
      <h1>Data Inventori Bahan Baku</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>

      {loading ? (
  <div className="text-center mt-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Memuat data...</span>
    </div>
    <h4 className="mt-2">Memuat data...</h4>
  </div>
) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID Item</th>
              <th>Nama Bahan</th>
              <th>Status Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/inventori/${item.id}`}>{item.nama}</Link>
                </td>
                <td><span className="badge bg-success">Available</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Inventori;