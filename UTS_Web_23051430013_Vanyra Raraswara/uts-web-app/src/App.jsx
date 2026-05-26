import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InputLaporan from "./pages/InputLaporan";
import Riwayat from "./pages/Riwayat";

const STORAGE_KEY = 'Laporan_Produksi_UTS'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">PT. Manufaktur Jaya Abadi</Link>
        <div className="d-flex">
          <Link className="nav-link text-white me-3" to="/">Dashboard</Link>
          <Link className="nav-link text-white me-3" to="/input">Input Laporan</Link>
          <Link className="nav-link text-white me-3" to="/riwayat">Riwayat</Link>
        </div>
      </div>
    </nav>
  )
}

function App() {
  const [dataProduksi, setDataProduksi] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataProduksi))
  }, [dataProduksi])

  const handleSaveData = (newData) => {
    setDataProduksi(prev => [...prev, newData])
  }

  const handleDeleteData = (id) => {
    if (window.confirm('Yakin ingin menghapus data ini?')) {
      setDataProduksi(prev => prev.filter(item => item.id !== id))
    }
  }

  const handleDeleteAllData = () => {
    if (window.confirm('Apakah anda yakin semua data akan dihapus permanen?')) {
      setDataProduksi([])
    }
  }

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Dashboard data={dataProduksi} />} />
        <Route path="/input" element={<InputLaporan onSave={handleSaveData} />} />
        <Route path="/riwayat" element={
          <Riwayat
          data={dataProduksi}
          onDelete={handleDeleteData}
          onDeleteAll={handleDeleteAllData}
          />
        } />
      </Routes>
    </div>
    </>
  )
}

export default App