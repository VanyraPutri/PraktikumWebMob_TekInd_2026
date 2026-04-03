// ============================================
// LATIHAN 2: Array Manipulation
// ============================================

// Data awal sesuai modul
let dataAwal = ["C-001", "C-005", "C-012", "C-001", "C-020"];
let daftarCacat = [...dataAwal]; // Copy array

// ========== FUNGSI TAMPILAN ==========
function tampilkanArray() {
    let container = document.getElementById('arrayContainer');
    container.innerHTML = '';
    
    daftarCacat.forEach((item, index) => {
        let span = document.createElement('span');
        span.className = 'array-item' + (item === 'C-001' ? ' c001' : '');
        span.textContent = item;
        container.appendChild(span);
    });
}

// ========== FUNGSI CONSOLE ==========
let consoleBox = document.getElementById('consoleBox');
let originalLog = console.log;

console.log = function(msg) {
    originalLog(msg);
    if (consoleBox) {
        consoleBox.innerHTML += '> ' + msg + '<br>';
        consoleBox.scrollTop = consoleBox.scrollHeight;
    }
};

// ========== FUNGSI HITUNG C-001 (SESUAI MODUL) ==========
function hitungC001() {
    let counter = 0;
    
    // Looping dengan for (sesuai modul)
    for (let i = 0; i < daftarCacat.length; i++) {
        if (daftarCacat[i] === "C-001") {
            counter++;
        }
    }
    
    // Tampilkan di halaman
    document.getElementById('hasilText').innerHTML = `
        <strong class="text-primary">${counter}</strong> kali (dari ${daftarCacat.length} data)
    `;
    
    // Tampilkan di console
    console.log('=== LATIHAN 2 ===');
    console.log('Data Array:', daftarCacat);
    console.log('Jumlah C-001:', counter);
    console.log('Menggunakan for loop dan if counter');
    
    return counter;
}

// ========== FUNGSI TAMBAH DATA ==========
function tambahData() {
    let input = document.getElementById('inputBaru');
    let nilai = input.value.trim();
    
    if (nilai) {
        daftarCacat.push(nilai);
        tampilkanArray();
        input.value = '';
        console.log(`✅ Data "${nilai}" ditambahkan`);
        hitungC001(); // Langsung hitung ulang
    } else {
        alert('Masukkan kode cacat!');
    }
}

// ========== FUNGSI RESET ==========
function resetData() {
    daftarCacat = [...dataAwal];
    tampilkanArray();
    document.getElementById('inputBaru').value = '';
    document.getElementById('hasilText').innerHTML = 'Belum dihitung';
    console.log('⟲ Data direset ke awal');
}

// ========== INIT ==========
tampilkanArray();
console.log('✅ Latihan 2 siap!');