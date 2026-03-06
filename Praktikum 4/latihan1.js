// Latihan 1 - Perhitungan Gaji Lembur
let gajiPokok = 5000000; // gaji bulanan
let jamLembur = 10; // jam lembur

// Upah lembur per jam
let upahLemburPerJam = (gajiPokok / 173) * 1.5;

// Total gaji
let totalGaji = gajiPokok + (jamLembur * upahLemburPerJam);

console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Jam Lembur: " + jamLembur);
console.log("Total Gaji: Rp " + totalGaji.toFixed(0));