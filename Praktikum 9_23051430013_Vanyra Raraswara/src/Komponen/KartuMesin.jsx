// 1. Import React
import React from 'react';

// 2. Membuat Komponen Fungsi yang menerima 'props'
function KartuMesin(props) {

  // Menerima data dari props
  const namaMesin = props.nama;
  const status = props.status;
  const produksi = props.produksi;
  const shift = props.shift;

  // Logika penentuan warna badge berdasarkan status
  let badgeColor = 'bg-secondary';
  if (status === 'Running') badgeColor = 'bg-success';
  if (status === 'Stop') badgeColor = 'bg-danger';
  if (status === 'Maintenance') badgeColor = 'bg-warning';

  return (
    // Menggunakan class -> className di JSX
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{namaMesin}</h5>
        <span className={`badge ${badgeColor}`}>{status}</span>
        <p>Shift: <strong>{shift}</strong></p>
        <hr />
        <p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
      </div>
    </div>
  );
}

KartuMesin.defaultProps = {
  produksi: 0
};

// 3. Export agar bisa dipakai di file lain
export default KartuMesin;