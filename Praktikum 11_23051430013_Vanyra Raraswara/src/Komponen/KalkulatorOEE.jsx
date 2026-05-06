import React, { useState } from 'react';

function KalkulatorOEE() {
  const [planTime, setPlanTime] = useState('');
  const [runTime, setRunTime] = useState('');
  const [totalParts, setTotalParts] = useState('');
  const [goodParts, setGoodParts] = useState('');

  // Konversi ke number (0 jika kosong)
  const plan = Number(planTime) || 0;
  const run = Number(runTime) || 0;
  const total = Number(totalParts) || 0;
  const good = Number(goodParts) || 0;

  // Hitung Availability
  const availability = plan > 0 ? (run / plan) * 100 : 0;

  // Hitung Performance
  const performance = run > 0 ? (total / run) * 100 : 0;

  // Hitung Quality
  const quality = total > 0 ? (good / total) * 100 : 0;

  // Hitung OEE
  const oee = (availability / 100) * (performance / 100) * (quality / 100) * 100;

  // Tentukan warna OEE
  let oeeColor = 'text-dark';
  if (oee > 85) oeeColor = 'text-success';
  if (oee < 50) oeeColor = 'text-danger';

  return (
    <div className="card shadow-sm p-4">
      <h3 className="text-center mb-4">Kalkulator OEE</h3>
      
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Plan Time (menit)</label>
          <input
            type="number"
            className="form-control"
            value={planTime}
            onChange={(e) => setPlanTime(e.target.value)}
            min="0"
            placeholder="0"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Run Time (menit)</label>
          <input
            type="number"
            className="form-control"
            value={runTime}
            onChange={(e) => setRunTime(e.target.value)}
            min="0"
            placeholder="0"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Total Parts</label>
          <input
            type="number"
            className="form-control"
            value={totalParts}
            onChange={(e) => setTotalParts(e.target.value)}
            min="0"
            placeholder="0"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Good Parts</label>
          <input
            type="number"
            className="form-control"
            value={goodParts}
            onChange={(e) => setGoodParts(e.target.value)}
            min="0"
            placeholder="0"
          />
        </div>
      </div>

      <hr />

      {/* Hasil Perhitungan */}
      <div className="row text-center">
        <div className="col-md-4">
          <h5>Availability</h5>
          <h3>{availability.toFixed(1)}%</h3>
        </div>
        <div className="col-md-4">
          <h5>Performance</h5>
          <h3>{performance.toFixed(1)}%</h3>
        </div>
        <div className="col-md-4">
          <h5>Quality</h5>
          <h3>{quality.toFixed(1)}%</h3>
        </div>
      </div>

      <hr />

      {/* Hasil OEE */}
      <div className="text-center">
        <h4>Overall Equipment Effectiveness (OEE)</h4>
        <h1 className={`display-3 fw-bold ${oeeColor}`}>
          {oee.toFixed(1)}%
        </h1>
      </div>
    </div>
  );
}

export default KalkulatorOEE;