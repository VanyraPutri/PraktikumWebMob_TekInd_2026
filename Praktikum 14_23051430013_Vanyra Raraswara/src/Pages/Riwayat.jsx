import { useState, useEffect } from 'react'

function Riwayat() {
  const [data, setData] = useState([])

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem('laporan_produksi')) || []
    setData([...stored].reverse())
  }

  useEffect(() => {
    loadData()
  }, [])

  const hapusData = (id) => {
    if (window.confirm('Yakin ingin menghapus data ini?')) {
      const filtered = data.filter(item => item.id !== id)
      localStorage.setItem('laporan_produksi', JSON.stringify(filtered))
      loadData()
    }
  }

  const hapusSemua = () => {
    if (window.confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
      localStorage.removeItem('laporan_produksi')
      loadData()
    }
  }

  return (
    <div>
      <h2 className="mb-4">Riwayat Produksi</h2>
      
      <button className="btn btn-danger mb-3" onClick={hapusSemua}>
        Hapus Semua Data
      </button>
      
      {data.length === 0 ? (
        <div className="alert alert-warning">
          Belum ada data produksi. Silakan input terlebih dahulu.
        </div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Tanggal</th>
              <th>Shift</th>
              <th>Mesin</th>
              <th>Produksi</th>
              <th>Reject</th>
              <th>Netto</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.tanggal}</td>
                  <td>{item.shift}</td>
                  <td>{item.mesin}</td>
                  <td>{item.produksi}</td>
                  <td>{item.reject}</td>
                  <td>{item.netto}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => hapusData(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Riwayat