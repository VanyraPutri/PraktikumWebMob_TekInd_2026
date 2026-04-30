import React from 'react';

function KartuKaryawan(props) {
  const nama = props.nama;
  const jabatan = props.jabatan;
  const bagian = props.bagian;

  // Warna badge berdasarkan jabatan
  let badgeColor = 'bg-primary';
  if (jabatan === 'Manager') badgeColor = 'bg-dark';
  if (jabatan === 'Operator') badgeColor = 'bg-info';
  if (jabatan === 'QC') badgeColor = 'bg-success';

  return (
    <div className="card shadow-sm p-3 mb-3">
      <div className="card-body text-center">
        <h5 className="card-title">{nama}</h5>
        <span className={`badge ${badgeColor} mb-2`}>{jabatan}</span>
        <hr />
        <p>Bagian: <strong>{bagian}</strong></p>
      </div>
    </div>
  );
}

export default KartuKaryawan;