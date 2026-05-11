// src/Komponen/TabelDataProduksi.jsx
import React from 'react';

function TabelDataProduksi() {
  const dataProduksi = [
    { id: 1, waktu: '08:00', mesin: 'CNC-Turning-01', produk: 'Gear Tipe A', jumlah: 120, status: 'Selesai' },
    { id: 2, waktu: '09:00', mesin: 'CNC-Milling-02', produk: 'Bracket Tipe B', jumlah: 150, status: 'Selesai' },
    { id: 3, waktu: '10:00', mesin: 'Press-Hydraulic-05', produk: 'Panel Tipe C', jumlah: 180, status: 'Selesai' },
    { id: 4, waktu: '11:00', mesin: 'CNC-Turning-01', produk: 'Gear Tipe D', jumlah: 170, status: 'Selesai' },
    { id: 5, waktu: '12:00', mesin: 'Weld-04', produk: 'Frame Tipe E', jumlah: 0, status: 'Pending' },
    { id: 6, waktu: '13:00', mesin: 'CNC-Milling-02', produk: 'Bracket Tipe F', jumlah: 210, status: 'Selesai' },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
        <h5 className="mb-0 fw-semibold" style={{ fontSize: '16px' }}>
          📋 Log Produksi Real-time
        </h5>
        <button className="btn btn-sm btn-outline-primary" style={{ borderRadius: '8px', fontSize: '12px' }}>
          Lihat Semua →
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th style={{ fontSize: '12px', fontWeight: 600 }}>Waktu</th>
              <th style={{ fontSize: '12px', fontWeight: 600 }}>Mesin</th>
              <th style={{ fontSize: '12px', fontWeight: 600 }}>Produk</th>
              <th style={{ fontSize: '12px', fontWeight: 600 }}>Jumlah</th>
              <th style={{ fontSize: '12px', fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataProduksi.map((item) => (
              <tr key={item.id}>
                <td style={{ fontSize: '13px' }}>{item.waktu}</td>
                <td style={{ fontSize: '13px', fontWeight: 500 }}>{item.mesin}</td>
                <td style={{ fontSize: '13px' }}>{item.produk}</td>
                <td>
                  <span
                    className={`badge ${item.jumlah > 0 ? 'bg-success' : 'bg-danger'}`}
                  >
                    {item.jumlah}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      item.status === 'Selesai' ? 'bg-success' : 'bg-warning text-dark'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer bg-white text-center py-2">
        <small style={{ fontSize: '11px', color: '#6c757d' }}>
          Menampilkan 6 dari 24 entri terakhir
        </small>
      </div>
    </div>
  );
}

export default TabelDataProduksi;