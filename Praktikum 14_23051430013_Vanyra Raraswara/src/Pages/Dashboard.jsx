import { useState, useEffect } from 'react'

function Dashboard() {
  const [totalProduksi, setTotalProduksi] = useState(0)
  const [totalReject, setTotalReject] = useState(0)
  const [yieldPersen, setYieldPersen] = useState(0)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('laporan_produksi')) || []
    
    let sumProd = 0
    let sumRej = 0
    
    data.forEach(item => {
      sumProd += item.produksi
      sumRej += item.reject
    })
    
    setTotalProduksi(sumProd)
    setTotalReject(sumRej)
    
    if (sumProd > 0) {
      const yieldVal = ((sumProd - sumRej) / sumProd) * 100
      setYieldPersen(yieldVal.toFixed(2))
    } else {
      setYieldPersen(0)
    }
  }, [])

  return (
    <div>
      <h2 className="mb-4 text-center">Dashboard Produksi Harian</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              <h5>Total Produksi</h5>
              <h2>{totalProduksi} unit</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-danger text-white shadow">
            <div className="card-body">
              <h5>Total Reject</h5>
              <h2>{totalReject} unit</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              <h5>Yield</h5>
              <h2>{yieldPersen}%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard