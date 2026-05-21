import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function InputLaporan() {
  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    tanggal: '',
    shift: 'Pagi',
    mesin: '',
    produksi: 0,
    reject: 0
  })
  
  const [netto, setNetto] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
    
    const prod = parseInt(newForm.produksi) || 0
    const rej = parseInt(newForm.reject) || 0
    setNetto(prod - rej)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.tanggal || !form.mesin) {
      alert('Tanggal dan Nama Mesin wajib diisi!')
      return
    }
    
    const newData = {
      id: Date.now(),
      ...form,
      produksi: parseInt(form.produksi) || 0,
      reject: parseInt(form.reject) || 0,
      netto: netto
    }
    
    const existing = JSON.parse(localStorage.getItem('laporan_produksi')) || []
    existing.push(newData)
    localStorage.setItem('laporan_produksi', JSON.stringify(existing))
    
    alert('Laporan berhasil disimpan!')
    navigate('/riwayat')
  }

  return (
    <div>
      <h2 className="mb-4">Input Laporan Produksi</h2>
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tanggal</label>
              <input
                type="date"
                name="tanggal"
                className="form-control"
                value={form.tanggal}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Shift</label>
              <select
                name="shift"
                className="form-select"
                value={form.shift}
                onChange={handleChange}
              >
                <option>Pagi</option>
                <option>Siang</option>
                <option>Malam</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label className="form-label">Nama Mesin</label>
              <input
                type="text"
                name="mesin"
                className="form-control"
                value={form.mesin}
                onChange={handleChange}
                placeholder="Contoh: CNC-01"
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Jumlah Produksi (unit)</label>
              <input
                type="number"
                name="produksi"
                className="form-control"
                value={form.produksi}
                onChange={handleChange}
                min="0"
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Jumlah Reject (unit)</label>
              <input
                type="number"
                name="reject"
                className="form-control"
                value={form.reject}
                onChange={handleChange}
                min="0"
              />
            </div>
            
            <div className="mb-3 alert alert-info">
              <strong>Netto Produksi:</strong> {netto} unit
            </div>
            
            <button type="submit" className="btn btn-primary w-100">
              Simpan Laporan
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputLaporan