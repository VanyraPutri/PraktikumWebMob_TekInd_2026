function kalkulatorBiaya() {

console.log("--- KALKULATOR BIAYA PRODUKSI ---");

// input dari popup
let biayaBahanBaku = parseFloat(prompt("Masukkan Biaya Bahan Baku:"));
let biayaTenagaKerja = parseFloat(prompt("Masukkan Biaya Tenaga Kerja:"));
let biayaOverhead = parseFloat(prompt("Masukkan Biaya Overhead:"));
let jumlahProduksi = parseInt(prompt("Masukkan Jumlah Produksi:"));

// rumus
let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

// logika kondisi
let status;

if (jumlahProduksi < 100) {
    status = "Biaya Tinggi (Ekonomi Skala Kecil)";
} else {
    status = "Biaya Efisien";
}

// output di console
console.log("Biaya per Unit: Rp " + totalPerUnit.toFixed(2));
console.log("Status Produksi: " + status);

// output di popup
alert("KALKULATOR BIAYA PRODUKSI\n\n" + "Biaya per Unit: Rp " + totalPerUnit.toFixed(2) + "\n" + "Status Produksi: " + status
);

}