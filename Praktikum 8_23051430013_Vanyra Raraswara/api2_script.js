const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

const API_URL = 'https://jsonplaceholder.typicode.com/users';

btnLoad.addEventListener('click', function() {
    loading.classList.remove('d-none');
    container.innerHTML = ''; 

    fetch(API_URL)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function(dataKaryawan) {
    // Data berhasil didapat
    console.log('Data asli (sebelum filter):', dataKaryawan);
    
    // ===== LATIHAN 2: FILTER ARRAY BERDASARKAN KOTA =====
    const filterKota = document.getElementById('filterKota').value.trim().toLowerCase();
    
    let dataTersaring = dataKaryawan;
    
    if (filterKota !== '') {
        dataTersaring = dataKaryawan.filter(function(karyawan) {
            return karyawan.address.city.toLowerCase().includes(filterKota);
        });
        console.log(`🔍 Data setelah filter kota "${filterKota}":`, dataTersaring);
    }
    
    renderData(dataTersaring);
})
        .catch(function(error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});
function renderData(data) {
    data.forEach(function(karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">Email: ${karyawan.email}</p>
                    <p class="card-text">Perusahaan: ${karyawan.company.name}</p>
                    <p class="card-text"><small>Kota: ${karyawan.address.city}</small></p>
                    <a href="javascript:void(0)" class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">Detail Profil</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }
        const data = await response.json();
        console.log("Ditemukan:", data);
        alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}
const btnTambah = document.getElementById('btnTambah');

btnTambah.addEventListener('click', function() {
    const dataBaru = {
        name: 'Abraham Musa (Teknik Industri)',
        email: 'musa.abraham@tekind.ac.id',
        company: {
            name: 'PT. Manufaktur Maju'
        },
        address: {
            city: 'Bandung'
        }
    };

    console.log('📤 Mengirim data POST...', dataBaru);

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBaru)
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Gagal menambah data');
            }
            return response.json();
        })
        .then(function(data) {
            console.log('✅ Response dari server (POST):', data);
            alert('✅ Data berhasil dikirim!\n\n' +
                  'ID baru: ' + data.id + '\n' +
                  'Nama: ' + data.name + '\n' +
                  'Email: ' + data.email);
        })
        .catch(function(error) {
            console.error('❌ Error:', error);
            alert('Gagal menambah data: ' + error.message);
        });
});