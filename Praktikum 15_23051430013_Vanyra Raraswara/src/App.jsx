import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import InputLaporan from './Pages/InputLaporan'
import Riwayat from './Pages/Riwayat'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/input" element={<InputLaporan />} />
          <Route path="/riwayat" element={<Riwayat />} />
        </Routes>
      </div>
    </>
  )
}

export default App