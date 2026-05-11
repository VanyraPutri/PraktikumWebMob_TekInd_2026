// src/Halaman/Dashboard.jsx
import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikCacat from '../Komponen/GrafikCacat';
import KartuMesin from '../Komponen/KartuMesin';
import TabelDataProduksi from '../Komponen/TabelDataProduksi';

function Dashboard() {
  return (
    <div style={{ width: '100%' }}>
      {/* Baris 1: Kartu KPI */}
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white shadow-sm h-100" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <h6 style={{ fontSize: '13px', opacity: 0.9, marginBottom: '8px', fontWeight: 500 }}>
                📦 Total Produksi
              </h6>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>1,250</h2>
              <small style={{ opacity: 0.8, fontSize: '11px' }}>Unit | Target: 1,200</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white shadow-sm h-100" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <h6 style={{ fontSize: '13px', opacity: 0.9, marginBottom: '8px', fontWeight: 500 }}>
                ⚡ Efisiensi Mesin
              </h6>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>92%</h2>
              <small style={{ opacity: 0.8, fontSize: '11px' }}>Status: Optimal</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white shadow-sm h-100" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <h6 style={{ fontSize: '13px', opacity: 0.9, marginBottom: '8px', fontWeight: 500 }}>
                ❌ Reject Rate
              </h6>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>1.5%</h2>
              <small style={{ opacity: 0.8, fontSize: '11px' }}>Perhatian shift malam</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-info text-white shadow-sm h-100" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <h6 style={{ fontSize: '13px', opacity: 0.9, marginBottom: '8px', fontWeight: 500 }}>
                ✅ Availability
              </h6>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>98.5%</h2>
              <small style={{ opacity: 0.8, fontSize: '11px' }}>World Class</small>
            </div>
          </div>
        </div>
      </div>

      {/* Baris 2: Grafik */}
      <div className="row g-3 mb-4">
        <div className="col-lg-8">
          <div className="card shadow-sm" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <GrafikProduksi />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm" style={{ borderRadius: '12px' }}>
            <div className="card-body p-3">
              <GrafikCacat />
            </div>
          </div>
        </div>
      </div>

      {/* Baris 3: Status Mesin */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm" style={{ borderRadius: '12px' }}>
            <div className="card-header bg-white p-3" style={{ borderRadius: '12px 12px 0 0' }}>
              <h5 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>🏭 Status Mesin Aktif</h5>
            </div>
            <div className="card-body p-3">
              <div className="row g-3">
                <div className="col-xl-3 col-md-6">
                  <KartuMesin nama="CNC-01" status="Running" produksi={320} />
                </div>
                <div className="col-xl-3 col-md-6">
                  <KartuMesin nama="CNC-02" status="Running" produksi={310} />
                </div>
                <div className="col-xl-3 col-md-6">
                  <KartuMesin nama="Press-01" status="Stop" produksi={150} />
                </div>
                <div className="col-xl-3 col-md-6">
                  <KartuMesin nama="Weld-04" status="Maintenance" produksi={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Baris 4: Tabel */}
      <div className="row">
        <div className="col-12">
          <TabelDataProduksi />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;