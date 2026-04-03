// ========== SELEKSI ELEMEN ==========
const formAudit = document.getElementById('formAudit');
const tabelRiwayat = document.getElementById('tabelRiwayat');
const btnHapusSemua = document.getElementById('hapusSemuaAudit');
const totalAuditSpan = document.getElementById('totalAudit');

// Key untuk LocalStorage
const STORAGE_KEY_5S = 'DATA_AUDIT_5S';

// ========== FUNGSI HITUNG SKOR ==========
function hitungSkor() {
    const seiri = document.getElementById('seiri').checked ? 1 : 0;
    const seiton = document.getElementById('seiton').checked ? 1 : 0;
    const seiso = document.getElementById('seiso').checked ? 1 : 0;
    const seiketsu = document.getElementById('seiketsu').checked ? 1 : 0;
    const shitsuke = document.getElementById('shitsuke').checked ? 1 : 0;
    
    const totalCentang = seiri + seiton + seiso + seiketsu + shitsuke;
    const skor = (totalCentang / 5) * 100;
    
    return {
        totalCentang: totalCentang,
        skor: Math.round(skor) // Dibulatkan
    };
}

// ========== FUNGSI DAPATKAN STATUS & WARNA ==========
function getStatus(skor) {
    if (skor >= 90) return { teks: "🏆 Sangat Baik", warna: "success", bg: "#d4edda" };
    if (skor >= 70) return { teks: "👍 Baik", warna: "primary", bg: "#cfe2ff" };
    if (skor >= 50) return { teks: "⚠️ Cukup", warna: "warning", bg: "#fff3cd" };
    if (skor >= 30) return { teks: "🔴 Kurang", warna: "danger", bg: "#f8d7da" };
    return { teks: "❌ Buruk", warna: "dark", bg: "#d1d5db" };
}

// ========== UPDATE PREVIEW SKOR (REAL-TIME) ==========
function updatePreviewSkor() {
    const hasil = hitungSkor();
    const previewDiv = document.getElementById('previewSkor');
    const status = getStatus(hasil.skor);
    
    previewDiv.innerHTML = `
        📊 Skor Sementara: <strong>${hasil.skor}%</strong> (${hasil.totalCentang}/5 checklist terpenuhi)
        <br>
        <span class="badge bg-${status.warna} mt-1">${status.teks}</span>
    `;
    
    // Ubah warna alert berdasarkan skor
    previewDiv.className = `alert alert-${status.warna} mt-3`;
}

// ========== EVENT LISTENER UNTUK CHECKBOX (PREVIEW) ==========
const checkboxes = ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'];
checkboxes.forEach(id => {
    document.getElementById(id).addEventListener('change', updatePreviewSkor);
});

// ========== EVENT SUBMIT FORM ==========
formAudit.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const auditor = document.getElementById('auditor').value.trim();
    const area = document.getElementById('area').value.trim();
    const tanggal = new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Validasi field wajib
    if (auditor === "") {
        alert("❌ Nama auditor harus diisi!");
        return;
    }
    
    if (area === "") {
        alert("❌ Area/Lini produksi harus diisi!");
        return;
    }
    
    const hasilSkor = hitungSkor();
    
    // Validasi: harus centang minimal 1
    if (hasilSkor.totalCentang === 0) {
        alert("⚠️ Minimal centang 1 item checklist 5S!");
        return;
    }
    
    const status = getStatus(hasilSkor.skor);
    
    const dataAudit = {
        id: Date.now(),
        tanggal: tanggal,
        auditor: auditor,
        area: area,
        skor: hasilSkor.skor,
        statusTeks: status.teks,
        statusWarna: status.warna,
        totalCentang: hasilSkor.totalCentang
    };
    
    simpanAudit(dataAudit);
    
    // Reset form
    document.getElementById('formAudit').reset();
    updatePreviewSkor(); // Reset preview ke 0%
    
    // Refresh tabel
    loadRiwayat();
    
    alert(`✅ Audit berhasil disimpan!\nSkor: ${hasilSkor.skor}% - ${status.teks}`);
});

// ========== SIMPAN KE LOCALSTORAGE ==========
function simpanAudit(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY_5S, JSON.stringify(dataLama));
}

// ========== LOAD & RENDER RIWAYAT ==========
function loadRiwayat() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
    tabelRiwayat.innerHTML = '';
    
    // Update total data
    totalAuditSpan.textContent = `${data.length} data`;
    
    if (data.length === 0) {
        tabelRiwayat.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted">Belum ada data audit</td>
            </tr>
        `;
        return;
    }
    
    // Tampilkan dari yang terbaru (reverse)
    data.reverse().forEach(function(item) {
        const row = document.createElement('tr');
        
        // Tentukan badge status
        const badgeClass = `badge bg-${item.statusWarna}`;
        
        row.innerHTML = `
            <td style="white-space: nowrap;">${item.tanggal}</td>
            <td>${escapeHtml(item.auditor)}</td>
            <td>${escapeHtml(item.area)}</td>
            <td class="fw-bold text-center">${item.skor}%</td>
            <td><span class="${badgeClass}">${item.statusTeks}</span></td>
            <td class="text-center">
                <button class="btn btn-sm btn-danger" onclick="hapusAudit(${item.id})">
                    🗑️ Hapus
                </button>
            </td>
        `;
        
        // Beri warna background berdasarkan skor
        if (item.skor < 50) {
            row.style.backgroundColor = '#f8d7da';
        } else if (item.skor < 70) {
            row.style.backgroundColor = '#fff3cd';
        } else {
            row.style.backgroundColor = '#d4edda';
        }
        
        tabelRiwayat.appendChild(row);
    });
}

// ========== FUNGSI ESCAPE HTML (Keamanan) ==========
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ========== HAPUS SATU DATA ==========
window.hapusAudit = function(id) {
    if (confirm('⚠️ Yakin ingin menghapus data audit ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY_5S)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY_5S, JSON.stringify(dataBaru));
        loadRiwayat();
        alert('✅ Data berhasil dihapus!');
    }
};

// ========== HAPUS SEMUA DATA ==========
btnHapusSemua.addEventListener('click', function() {
    if (confirm('⚠️ PERINGATAN: Semua riwayat audit akan dihapus permanen! Apakah Anda yakin?')) {
        localStorage.removeItem(STORAGE_KEY_5S);
        loadRiwayat();
        alert('✅ Semua data berhasil dihapus!');
    }
});

// ========== LOAD DATA SAAT HALAMAN DIBUKA ==========
document.addEventListener('DOMContentLoaded', function() {
    loadRiwayat();
    updatePreviewSkor();
});