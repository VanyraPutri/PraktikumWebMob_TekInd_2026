let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Milling", durasi: 45 },
    { idJob: "J03", namaProses: "Welding", durasi: 60 }
];

// Fungsi untuk update tampilan antrian
function tampilkanAntrian() {
    let html = '';
    antrianMesin.forEach((job, index) => {
        html += `
            <div class="job-card">
                <strong>${job.idJob}</strong> - ${job.namaProses}<br>
                Durasi: ${job.durasi} menit
            </div>
        `;
    });
    document.getElementById('daftarAntrian').innerHTML = html;
}

// Fungsi untuk menambah ke console
function addToConsole(text) {
    let consoleDiv = document.getElementById('consoleOutput');
    consoleDiv.innerHTML += text + '<br>';
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Fungsi proses antrian (sesuai modul)
function prosesAntrian(antrian) {
    addToConsole('>>> MEMPROSES ANTRIAN...');
    for (let i = 0; i < antrian.length; i++) {
        let job = antrian[i];
        let pesan = `Memproses Job ${job.idJob} - ${job.namaProses} selama ${job.durasi} menit`;
        addToConsole(pesan);
        console.log(pesan);
    }
    addToConsole('✅ Semua job selesai diproses!');
}

// Fungsi untuk menjalankan proses
function jalankanProses() {
    addToConsole('=================================');
    prosesAntrian(antrianMesin);
}

// Fungsi untuk tambah job
function tambahJob() {
    let id = document.getElementById('idJob').value;
    let nama = document.getElementById('namaProses').value;
    let durasi = parseInt(document.getElementById('durasi').value);
    
    if (id && nama && durasi > 0) {
        let jobBaru = { idJob: id, namaProses: nama, durasi: durasi };
        antrianMesin.push(jobBaru);
        
        addToConsole(`✅ Job ${id} - ${nama} ditambahkan!`);
        console.log(`✅ Job ${id} - ${nama} ditambahkan!`);
        tampilkanAntrian();
        
        // Kosongkan form
        document.getElementById('idJob').value = '';
        document.getElementById('namaProses').value = '';
        document.getElementById('durasi').value = '';
    } else {
        alert("Isi semua field dengan valid!");
    }
}

// Fungsi reset ke data awal
function resetAntrian() {
    antrianMesin = [
        { idJob: "J01", namaProses: "Drilling", durasi: 30 },
        { idJob: "J02", namaProses: "Milling", durasi: 45 },
        { idJob: "J03", namaProses: "Welding", durasi: 60 }
    ];
    tampilkanAntrian();
    document.getElementById('consoleOutput').innerHTML = '[Reset ke data awal]';
    addToConsole('✅ Antrian direset ke data awal');
    console.log('✅ Antrian direset ke data awal');
}

// Jalankan saat halaman dimuat
window.onload = function() {
    tampilkanAntrian();
    console.log("✅ Tugas Mini siap!");
};