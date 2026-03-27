// Komentar single line 

// 1. Variabel & Tipe Data 
let namaMesin = "CNC-Mazak-01"; // String 
let targetHarian = 500;          
// Number 
let isOperational = true;       
// Boolean 

// Menampilkan ke console browser (Tekan F12 -> Console) 
console.log("Mesin: " + namaMesin); 
console.log("Target: " + targetHarian); 

// 2. Operator Aritmatika 
let produksiPagi = 200; 
let produksiSiang = 150; 
let totalProduksi = produksiPagi + produksiSiang; 

console.log("Total saat ini: " + totalProduksi); 

// Hitung sisa kekurangan target 
let kekurangan = targetHarian - totalProduksi; 
console.log("Kekurangan target: " + kekurangan);

// Simulasi data pembacaan sensor (jam operasional) 
let jamOperasional = 1250; // dalam jam 
let batasMaksimal = 1200; // batas sebelum maintenance wajib 

console.log("--- Cek Status Maintenance ---"); 

// Logika If/Else 
if (jamOperasional >= batasMaksimal) { 
    console.log("PERINGATAN: Mesin mencapai batas maksimal!"); 
    console.log("Status: MAINTENANCE WAJIB (Stop Produksi)"); 
} else if (jamOperasional > 1000) { 
    console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)"); 
} else { 
    console.log("Status: BERJALAN NORMAL"); 
} 

// Data Input 
let jamKerjaPlanned = 8; // Jam 
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown) 

// Perhitungan 
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100; 

// Pembulatan 2 angka di belakang koma 
availability = availability.toFixed(2); 

console.log("Planned Time: " + jamKerjaPlanned + " Jam"); 
console.log("Actual Time: " + jamKerjaAktual + " Jam"); 
console.log("Availability: " + availability + "%"); 

// Logika Penilaian Kualitas Availability 
if (availability >= 90) { 
    console.log("Kategori: WORLD CLASS"); 
} else if (availability >= 80) { 
    console.log("Kategori: BAIK (Tetap monitor)"); 
} else { 
    console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)"); 
} 

// Cek apakah dijalankan di browser
if (typeof window !== "undefined") {

let namaOperator = prompt("Masukkan nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");

if (shiftKerja === "Malam") {
    alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000.");
} else {
    alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}

}

// 1. Seleksi Elemen DOM 
const btnStart = document.getElementById('btnStart'); 
const btnStop = document.getElementById('btnStop'); 
const btnReset = document.getElementById('btnReset'); 
const statusIndicator = document.getElementById('statusIndicator'); 
const suhuMesin = document.getElementById('suhuMesin'); 
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong> di dalam alert
const inputRPM = document.getElementById('inputRPM'); 
const pesanError = document.getElementById('pesanError');  

// Elemen untuk Latihan 1
const btnMaintenance = document.getElementById('btnMaintenance');
const cardPanel = document.getElementById('panelKontrol');

// Variabel State 
let suhu = 25; 
let intervalId = null; // Untuk menyimpan ID timer

// Event Listener Tombol START 
btnStart.addEventListener('click', function() { 
    // Ubah UI Status 
    statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau) 
    teksStatus.innerText = 'RUNNING'; 

        // Logika simulasi kenaikan suhu 
        intervalId = setInterval(function() { 
            suhu += 1; 
            suhuMesin.innerText = suhu + " °C"; 

            // Peringatan jika suhu overheat 
            if (suhu > 80) { 
 
            statusIndicator.className = 'alert alert-danger'; 
            teksStatus.innerText = 'OVERHEAT WARNING'; 
            suhuMesin.style.color = 'red'; 
               }
            }, 1000); // Jalankan setiap 1 detik 

// Matikan tombol Start agar tidak double click 
btnStart.disabled = true; 
btnStop.disabled = false; 
}); 

// Event Listener Tombol STOP 
btnStop.addEventListener('click', function() { 
    clearInterval(intervalId); // Hentikan timer kenaikan suhu 
    statusIndicator.className = 'alert alert-secondary'; 
    teksStatus.innerText = 'STOPPED'; 
     
    // Reset tombol 
    btnStart.disabled = false; 
    btnStop.disabled = true; 
}); 
  
// Event Listener Tombol RESET 
btnReset.addEventListener('click', function() { 
    clearInterval(intervalId); 
    suhu = 25; 
    suhuMesin.innerText = suhu + " °C"; 
    suhuMesin.style.color = 'black'; 
    statusIndicator.className = 'alert alert-secondary'; 
    teksStatus.innerText = 'UNKNOWN'; 
     
    btnStart.disabled = false; 
    btnStop.disabled = true; 
});

inputRPM.addEventListener('input', function() { 
    let val = parseInt(this.value); 
     
    if (val > 2000) { 
        pesanError.classList.remove('d-none'); // Tampilkan pesan error 
        this.classList.add('is-invalid'); // Berikan border merah Bootstrap 
    } else { 
        pesanError.classList.add('d-none'); // Sembunyikan pesan 
        this.classList.remove('is-invalid'); 
    } 
}); 

// ========== LATIHAN 1: Maintenance Mode ==========
btnMaintenance.addEventListener('click', function() {
    
    // 1. Ubah background card menjadi abu-abu
    cardPanel.classList.add('bg-light');
    
    // 2. Ubah tampilan status
    statusIndicator.className = 'alert alert-warning';
    teksStatus.innerHTML = 'MAINTENANCE';
    
    // 3. Nonaktifkan semua tombol
    btnStart.disabled = true;
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnMaintenance.disabled = true;
    
    // 4. Hentikan interval suhu jika sedang berjalan
    clearInterval(intervalId);
    
    // 5. Tampilkan notifikasi
    alert('🔧 Mode Maintenance Aktif - Mesin dalam perawatan');
    
});