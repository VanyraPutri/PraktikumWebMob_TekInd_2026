// ===== SELEKSI ELEMEN =====
const btnLoad = document.getElementById('btnLoadInsiden');
const container = document.getElementById('containerInsiden');
const loading = document.getElementById('loadingInsiden');

// Endpoint API untuk Posts (sebagai simulasi Laporan Insiden)
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ===== EVENT LISTENER & FETCH =====
btnLoad.addEventListener('click', function() {
    // Tampilkan loading
    loading.classList.remove('d-none');
    container.innerHTML = ''; // Bersihkan konten lama

    // Fetch Data
    fetch(API_URL)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data insiden');
            }
            return response.json();
        })
        .then(function(dataInsiden) {
            console.log('Data insiden (asli):', dataInsiden);
            
            // Ambil hanya 10 data pertama
            const sepuluhInsiden = dataInsiden.slice(0, 10);
            console.log('10 Insiden terbaru:', sepuluhInsiden);
            
            renderInsiden(sepuluhInsiden);
        })
        .catch(function(error) {
            console.error('Error:', error);
            container.innerHTML = `<div class="alert alert-danger">❌ Error: ${error.message}</div>`;
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});

// ===== FUNGSI RENDER INSIDEN =====
function renderInsiden(data) {
    data.forEach(function(insiden) {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        
        // Potong body/deskripsi agar tidak terlalu panjang
        const deskripsiSingkat = insiden.body.length > 100 
            ? insiden.body.substring(0, 100) + '...' 
            : insiden.body;
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-danger">
                <div class="card-header bg-danger text-white">
                    <strong>📌 Tiket #${insiden.id}</strong>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${insiden.title}</h5>
                    <p class="card-text text-muted">${deskripsiSingkat}</p>
                    <button class="btn btn-sm btn-warning" onclick="tindakLanjut(${insiden.id}, '${insiden.title.replace(/'/g, "\\'")}')">
                        🔧 Tindak Lanjut
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// ===== FUNGSI TINDAK LANJUT (Tugas b) =====
function tindakLanjut(id, judul) {
    alert(`🔔 Tiket ID #${id} - "${judul}"\n\n✅ Sedang diproses oleh Tim Maintenance`);
}

// Agar fungsi bisa dipanggil dari onclick di HTML
window.tindakLanjut = tindakLanjut;