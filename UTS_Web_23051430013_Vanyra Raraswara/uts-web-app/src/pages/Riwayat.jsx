function Riwayat({ data, onDelete, onDeleteAll }) {
      return (
            <div>
                  <h2 className="mb-4">Riwayat Produksi</h2>

                 {data.length > 0 && (
                  <button className="btn btn-danger mb-3" onClick={onDeleteAll}>Hapus Semua Data</button>
                 )}

                  <div className="table-responsive">
                        <table className="table table-stripped table-bordered table-hover">
                              <thead className="table-dark">
                                    <tr>
                                          <th>No</th>
                                          <th>Tanggal</th>
                                          <th>Shift</th>
                                          <th>Mesin</th>
                                          <th>Produksi</th>
                                          <th>Reject</th>
                                          <th>Netto</th>
                                          <th>Yield</th>
                                          <th>Aksi</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {data.length === 0 ? (
                                    <tr>
                                          <td colSpan="9" className="text-center text-muted">
                                                Belum ada data
                                          </td>
                                    </tr>
                                    ) : (
                                      data.map((item, index) => (
                                          <tr key={item.id} className={item.shift === "Malam" ? "table-warning" : ""}>
                                                <td>{index + 1}</td>
                                                <td>{item.tanggal}</td>
                                                <td>{item.shift}</td>
                                                <td>{item.mesin}</td>
                                                <td>{item.produksi}</td>
                                                <td>{item.reject}</td>
                                                <td>{item.netto}</td>
                                                <td>{item.yield}%</td>
                                                <td>
                                                      <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.id)}>
                                                            Hapus
                                                      </button>
                                                </td>
                                          </tr>
                                      ))

                               )}
                              </tbody>
                        </table>
                  </div>
            </div>
      )
}

export default Riwayat