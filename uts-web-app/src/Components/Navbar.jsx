import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          UTS - Sistem Produksi
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/input">Input Laporan</Link>
          <Link className="nav-link" to="/riwayat">Riwayat</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar