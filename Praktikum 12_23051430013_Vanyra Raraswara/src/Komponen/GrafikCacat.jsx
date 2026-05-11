// src/Komponen/GrafikCacat.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi elemen yang diperlukan untuk grafik Doughnut
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function GrafikCacat() {
  // Data proporsi cacat (dalam persen)
  const data = {
    labels: ['Scratch (Gores)', 'Dent (Penyok)', 'Lainnya'],
    datasets: [
      {
        label: 'Proporsi Cacat Produksi',
        data: [50, 30, 20], // 50% Scratch, 30% Dent, 20% Lainnya
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',   // Merah untuk Scratch
          'rgba(255, 159, 64, 0.8)',   // Oranye untuk Dent
          'rgba(75, 192, 192, 0.8)',   // Hijau kebiruan untuk Lainnya
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom', // Legenda di bawah grafik
        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Proporsi Cacat Produksi Bulan Ini',
        font: {
          size: 18,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default GrafikCacat;