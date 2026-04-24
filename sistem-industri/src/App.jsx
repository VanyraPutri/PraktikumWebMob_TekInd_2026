import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
      <div className="row">
        <div className="col-md-4">
          <KartuMesin
            nama="CNC-Turning-01"
            status="Running"
            produksi={150}
            shift="Pagi"
          />
        </div>
        <div className="col-md-4">
          <KartuMesin
            nama="CNC-Milling-02"
            status="Maintenance"
            shift="Siang"
          />
        </div>
        <div className="col-md-4">
          <KartuMesin
            nama="Press-Hydraulic-05"
            status="Stop"
            produksi={85}
            shift="Malam"
          />
        </div>
      </div>

      {/* Bagian Data Karyawan */}
      <hr />
      <h2 className="text-center mb-4">Data Karyawan</h2>
      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan
            nama="Ahmad Fauzi"
            jabatan="Manager"
            bagian="Produksi"
          />
        </div>
        <div className="col-md-4">
          <KartuKaryawan
            nama="Siti Rahayu"
            jabatan="Operator"
            bagian="CNC-Milling"
          />
        </div>
        <div className="col-md-4">
          <KartuKaryawan
            nama="Dian Permana"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>
      </div>
    </div>
  );
}

export default App;