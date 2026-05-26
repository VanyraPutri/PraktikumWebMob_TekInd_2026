import { useState } from 'react'

function InputLaporan({ onSave }) {
      const [form,setForm] = useState({ 
      tanggal:'', 
      shift: 'Pagi',
      mesin: '', 
      produksi: 0, 
      reject: 0
})
      const netto = (form.produksi || 0) - (form.reject || 0)

      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value})

      const handleSubmit = (e) => {
            e.preventDefault()
            if (!form.tanggal || !form.mesin) return alert ('Tanggal dan Nama Mesin wajib di isi!')

      const produksi = Number(form.produksi) || 0
      const reject = Number(form.reject) || 0
      const nettoValue = produksi - reject
      const yieldValue = produksi > 0 ? ((nettoValue / produksi) * 100).toFixed(2) : 0

      onSave({
            id: Date.now(),
            no: Date.now(),
            ...form,
            produksi,
            reject,
            netto: nettoValue,
            yield: yieldValue,
      })

      setForm({ tanggal:'', shift:'', mesin:'', produksi: 0, reject: 0})
      alert('Data berhasil disimpan!')
      }

return (
      <div>
            <h2 className="mb-4">Input Laporan Produksi</h2>
      <div className='card shadow'>
            <div className='card-body'>
                  <form onSubmit={handleSubmit}>
                        <label className='form-label'>Tanggal</label>
                        <input type='date' name='tanggal' className='form-control mb-2' value={form.tanggal} onChange={handleChange} required />

                        <label className='form-label'>Shift</label>
                        <select name='shift' className='form-select mb-2' value={form.shift} onChange={handleChange}>
                              <option>Pagi</option><option>Siang</option><option>Malam</option>
                        </select>

                        <label className='form-label'>Nama Mesin</label>
                        <input type='text' name='mesin' className='form-control mb-2' placeholder='Contoh: CNC-01' value={form.mesin} onChange={handleChange} required />

                        <label className='form-label'>Jumlah Produksi</label>
                        <input type='number' name='produksi' className='form-control mb-2' placeholder='0' value={form.produksi} onChange={handleChange} required/>

                        <label className='form-label'>Jumlah Reject</label>
                        <input type='number' name='reject' className='form-control mb-2' placeholder='0' value={form.reject} onChange={handleChange} min='0' />

                        <div className='alert alert-info'>Netto: {netto} unit</div>
                        <button className='btn btn-primary w-100'>Simpan</button>
                  </form>
            </div>
      </div>
      </div>
)
}

export default InputLaporan