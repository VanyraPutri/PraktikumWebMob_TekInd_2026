import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState('');

  // useEffect berjalan sekali setelah komponen dirender pertama kali
  useEffect(() => {
    // Membuat interval timer
    const timerID = setInterval(() => {
      setWaktu(new Date()); // Update state waktu setiap detik
    }, 1000);

    // Cleanup function: Dijalankan saat komponen dihapus/hancur
    // Penting untuk mencegah memory leak
    return () => {
      clearInterval(timerID);
    };
  }, []); // Array kosong [] artinya hanya dijalankan sekali saat mount

  // useEffect untuk mengubah document.title
  useEffect(() => {
    if (kota) {
      document.title = `Jam ${kota}`;
    } else {
      document.title = 'Jam Digital';
    }
  }, [kota]); // Dependency array [kota], jalan setiap kota berubah

  return (
    <div className="alert alert-info text-center">
      <h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>
      <div className="mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="Masukkan nama kota"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
        />
      </div>
    </div>
  );
}

export default JamDigital;