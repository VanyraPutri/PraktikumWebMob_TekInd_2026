// src/Komponen/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiPackage, FiFileText, FiX } from 'react-icons/fi';

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const menuItems = [
    { path: '/', icon: <FiHome size={18} />, label: 'Dashboard' },
    { path: '/inventori', icon: <FiPackage size={18} />, label: 'Inventori' },
    { path: '/laporan', icon: <FiFileText size={18} />, label: 'Laporan' },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040,
          }}
        />
      )}

      {/* Sidebar — TAMBAHKAN className="sidebar-desktop" */}
      <div
        className="sidebar-desktop"  // ✅ INI YANG DITAMBAHKAN
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          minHeight: '100vh',
          width: '260px',
          backgroundColor: '#1a1d23',
          color: '#fff',
          zIndex: 1050,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '28px' }}>🏭</span>
            <div>
              <h6 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#fff' }}>
                TekInd Systems
              </h6>
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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item) => (
              <li key={item.path} style={{ marginBottom: '4px' }}>
                <Link
                  to={item.path}
                  onClick={toggleSidebar}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px', borderRadius: '10px',
                    color: isActive(item.path) ? '#fff' : '#88909b',
                    backgroundColor: isActive(item.path) ? 'rgba(13, 110, 253, 0.3)' : 'transparent',
                    textDecoration: 'none', fontSize: '14px',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <small style={{ fontSize: '10px', color: '#6c757d' }}>© 2026 TekInd Systems</small>
        </div>
      </div>

      {/* CSS Desktop */}
      <style>{`
        @media (min-width: 768px) {
          .sidebar-desktop {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}

export default Sidebar;