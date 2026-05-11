// src/Komponen/GrafikProduksi.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,   // Diperlukan untuk grafik tipe line
  LineElement,    // Diperlukan untuk grafik tipe line
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi komponen ChartJS (lengkap untuk Bar + Line)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,   // Diperlukan untuk grafik tipe line
  LineElement,    // Diperlukan untuk grafik tipe line
  Title,
  Tooltip,
  Legend
);

function GrafikProduksi() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const labels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

  const generateRandomData = () => {
    console.log('Menggunakan data acak lokal...');
    return labels.map(() => Math.floor(Math.random() * 151) + 100);
  };

  useEffect(() => {
    const fetchProductionData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        const dataDariApi = users.slice(0, 6).map(user => user.name.length * 30);
        setChartData(dataDariApi);
        console.log('Data berhasil diambil dari API:', dataDariApi);
      } catch (apiError) {
        console.warn('Gagal mengambil data dari API. Menggunakan data lokal.', apiError);
        const randomData = generateRandomData();
        setChartData(randomData);
        setError('Menggunakan data simulasi (offline).');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductionData();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Memuat data...</span>
        </div>
        <p className="ms-3">Mengambil data produksi dari server...</p>
      </div>
    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Jumlah Produksi (Unit)',
        data: chartData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150],
        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Grafik Produksi Harian - Lini 1 (Data Real-time)',
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      {error && <div className="alert alert-warning" role="alert">{error}</div>}
      <Bar data={data} options={options} />
    </div>
  );
}

export default GrafikProduksi;