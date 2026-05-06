import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailItem from './Halaman/DetailItem';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">Sistem Pabrik</a>
        <div className="navbar-nav">
          <a className="nav-link" href="/">Dashboard</a>
          <a className="nav-link" href="/inventori">Inventori</a>
          <a className="nav-link" href="/laporan">Laporan</a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<DetailItem />} />
        <Route path="/laporan" element={<LaporanKualitas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;