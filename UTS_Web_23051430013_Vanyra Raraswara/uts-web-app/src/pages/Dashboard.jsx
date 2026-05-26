function Dashboard({data}) {
      const totalProduksi = data.reduce((sum, item) => sum + item.produksi, 0)
      const totalReject = data.reduce((sum, item) => sum + item.reject, 0)
      let yieldPersen = 0
      if (totalProduksi > 0) {
            yieldPersen = ((totalProduksi - totalReject) / totalProduksi * 100).toFixed(2)
      }

      return (
            <div>
                  <h2 className="mb-4 text-center">Dashboard Produksi</h2>
                  <div className="row">
                        <div className="col-md-4 mb-3">
                              <div className="card bg-primary text-white shadow">
                                    <div className="card-body">
                                          <h5>Total Produksi</h5>
                                          <h2 className="display-6">{totalProduksi}</h2>
                                    </div>
                              </div>
                        </div>
                        <div className="col-md-4 mb-3">
                        <div className="card bg-danger text-white shadow">
                              <div className="card-body">
                                    <h5>Total Reject</h5>
                                    <h2 className="display-6">{totalReject}</h2>
                              </div>
                        </div>
                  </div>
                  <div className="col-md-4 mb-3">
                        <div className="card bg-success text-white-shadow">
                              <div className="card-body">
                                    <h5>Yield</h5>
                                    <h2 className="display-6">{yieldPersen}%</h2>
                              </div>
                        </div>
                     </div>
                  </div>
            </div>
      )
}

export default Dashboard