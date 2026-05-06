import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DATA_CACAT = [
  { id: 1, produk: 'Part A-12', jenis: 'Gores', jumlah: 5, tanggal: '2026-05-01' },
  { id: 2, produk: 'Part B-05', jenis: 'Retak', jumlah: 3, tanggal: '2026-05-01' },
  { id: 3, produk: 'Part C-08', jenis: 'Penyok', jumlah: 8, tanggal: '2026-05-02' },
  { id: 4, produk: 'Part A-12', jenis: 'Permukaan', jumlah: 2, tanggal: '2026-05-02' },
  { id: 5, produk: 'Part D-01', jenis: 'Fungsional', jumlah: 1, tanggal: '2026-05-03' },
];

function LaporanKualitas() {
  const [dataCacat, setDataCacat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDataCacat(DATA_CACAT);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Laporan Kualitas - Data Cacat Produksi</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>

      {loading ? (
        <div className="text-center mt-5">
          <h4>Memuat data...</h4>
        </div>
      ) : (
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Produk</th>
              <th>Jenis Cacat</th>
              <th>Jumlah</th>
              <th>Tanggal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataCacat.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.produk}</td>
                <td>{item.jenis}</td>
                <td>{item.jumlah}</td>
                <td>{item.tanggal}</td>
                <td>
                  <span className={`badge ${item.jumlah > 5 ? 'bg-danger' : 'bg-warning'}`}>
                    {item.jumlah > 5 ? 'Kritis' : 'Normal'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LaporanKualitas;