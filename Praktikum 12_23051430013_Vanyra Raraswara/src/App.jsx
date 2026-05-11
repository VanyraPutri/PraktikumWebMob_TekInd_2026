// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FiHome, FiPackage, FiFileText, FiX, FiMenu, FiBell, FiUser } from 'react-icons/fi';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailItem from './Halaman/DetailItem';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', icon: <FiHome size={18} />, label: 'Dashboard' },
    { path: '/inventori', icon: <FiPackage size={18} />, label: 'Inventori' },
    { path: '/laporan', icon: <FiFileText size={18} />, label: 'Laporan' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f6fa' }}>

      {/* ============ SIDEBAR ============ */}
      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40,
          }}
          className="d-md-none"
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '260px',
          minHeight: '100vh',
          backgroundColor: '#1a1d23',
          color: '#fff',
          zIndex: 50,
          // ✅ DESKTOP: selalu muncul | MOBILE: toggle
          transform: window.innerWidth >= 768 ? 'translateX(0)' : (sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'),
          transition: 'transform 0.3s',
          display: 'flex',
          flexDirection: 'column',
        }}
        id="sidebar"
      >
        {/* Logo */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '28px' }}>🏭</span>
            <div>
              <h6 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>TekInd Systems</h6>
              <small style={{ fontSize: '10px', color: '#88909b' }}>Monitoring v1.0</small>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="d-md-none"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav style={{ padding: '16px 20px', flex: 1 }}>
          <p style={{
            fontSize: '10px', color: '#6c757d', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px',
          }}>
            Menu Utama
          </p>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 14px', borderRadius: '10px',
                color: isActive(item.path) ? '#fff' : '#88909b',
                backgroundColor: isActive(item.path) ? 'rgba(13,110,253,0.3)' : 'transparent',
                textDecoration: 'none', fontSize: '14px',
                fontWeight: isActive(item.path) ? 600 : 400,
                marginBottom: '4px',
              }}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <small style={{ fontSize: '10px', color: '#6c757d' }}>© 2026 TekInd Systems</small>
        </div>
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          // ✅ DESKTOP: kasih margin kiri 260px | MOBILE: 0
          marginLeft: window.innerWidth >= 768 ? '260px' : '0',
        }}
        id="main-content"
      >
        {/* Header */}
        <header style={{
          padding: '14px 24px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 30,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={toggleSidebar}
              className="d-md-none"
              style={{
                background: '#f5f5f5', border: '1px solid #ddd',
                borderRadius: '8px', padding: '6px 10px', cursor: 'pointer',
              }}
            >
              <FiMenu size={22} />
            </button>
            <div>
              <h5 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#2c3e50' }}>
                Dashboard Monitoring Produksi
              </h5>
              <small style={{ color: '#6c757d', fontSize: '12px' }}>
                {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </small>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{
              background: '#f5f5f5', border: '1px solid #ddd',
              borderRadius: '10px', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', cursor: 'pointer',
            }}>
              <FiBell size={18} />
              <span style={{
                position: 'absolute', top: '-4px', right: '-4px',
                background: '#dc3545', color: '#fff', fontSize: '10px',
                borderRadius: '50%', width: '18px', height: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>3</span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: '#0d6efd',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FiUser size={18} color="white" />
              </div>
              <div className="d-none d-md-block">
                <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: '#2c3e50' }}>
                  Production Manager
                </p>
                <small style={{ fontSize: '11px', color: '#6c757d' }}>Shift Pagi</small>
              </div>
            </div>
          </div>
        </header>

        {/* Konten Halaman */}
        <div style={{ flex: 1, padding: '24px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventori" element={<Inventori />} />
            <Route path="/inventori/:id" element={<DetailItem />} />
            <Route path="/laporan" element={<LaporanKualitas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;