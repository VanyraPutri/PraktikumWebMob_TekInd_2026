const PHI = 3.14;
let opsi = 'semua';

// 1. Function sesuai modul
function hitungLingkaran(jariJari) {
    let luas = PHI * jariJari * jariJari;
    let keliling = 2 * PHI * jariJari;
    return {
        luas: luas,
        keliling: keliling
    };
}

// 2. Function pilih opsi
function pilihOpsi(pilihan) {
    opsi = pilihan;
    
    // Update tampilan tombol
    document.getElementById('opsiSemua').classList.remove('active');
    document.getElementById('opsiLuas').classList.remove('active');
    document.getElementById('opsiKeliling').classList.remove('active');
    
    if (pilihan === 'semua') {
        document.getElementById('opsiSemua').classList.add('active');
    } else if (pilihan === 'luas') {
        document.getElementById('opsiLuas').classList.add('active');
    } else {
        document.getElementById('opsiKeliling').classList.add('active');
    }
    
    updateTampilanHasil();
}

// 3. Function update tampilan hasil
function updateTampilanHasil() {
    document.getElementById('hasilSemua').style.display = 'none';
    document.getElementById('hasilLuas').style.display = 'none';
    document.getElementById('hasilKeliling').style.display = 'none';
    
    if (opsi === 'semua') {
        document.getElementById('hasilSemua').style.display = 'block';
    } else if (opsi === 'luas') {
        document.getElementById('hasilLuas').style.display = 'block';
    } else {
        document.getElementById('hasilKeliling').style.display = 'block';
    }
}

// 4. Function hitung utama
function hitung() {
    let jariJari = parseFloat(document.getElementById('jariJari').value);
    
    // Validasi
    if (isNaN(jariJari) || jariJari <= 0) {
        alert('Masukkan jari-jari yang valid!');
        return;
    }
    
    // Panggil function dari modul
    let hasil = hitungLingkaran(jariJari);
    
    // Bulatkan 2 angka desimal
    hasil.luas = hasil.luas.toFixed(2);
    hasil.keliling = hasil.keliling.toFixed(2);
    
    // Update tampilan
    document.getElementById('luasValue').innerHTML = hasil.luas;
    document.getElementById('kelilingValue').innerHTML = hasil.keliling;
    document.getElementById('luasSaja').innerHTML = hasil.luas;
    document.getElementById('kelilingSaja').innerHTML = hasil.keliling;
    
    // Tampilkan di console (sesuai modul)
    console.log('=== LATIHAN 1: LINGKARAN ===');
    console.log('Jari-jari: ' + jariJari);
    console.log('Luas: ' + hasil.luas);
    console.log('Keliling: ' + hasil.keliling);
    console.log('Opsi: ' + opsi);
}

// 5. Jalankan saat pertama buka
window.onload = function() {
    hitung();
};