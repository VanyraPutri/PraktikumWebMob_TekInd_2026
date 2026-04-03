console.log("---KONVERSI SHIFT KERJA---");

let kodeShift;
let namaShift;

// cek apakah dijalankan di browser
if (typeof window !== "undefined") {
    kodeShift = parseInt(prompt("Masukkan kode shift:"));
} else {
    kodeShift = 1; // default jika di Quokka
}

switch (kodeShift) {
    case 1:
        namaShift = "Pagi";
        break;
    case 2:
        namaShift = "Siang";
        break;
    case 3:
        namaShift = "Malam";
        break;
    default:
        namaShift = "Shift Tidak Valid";
}

console.log("Kode Shift: " + kodeShift);
console.log("Nama Shift: " + namaShift);