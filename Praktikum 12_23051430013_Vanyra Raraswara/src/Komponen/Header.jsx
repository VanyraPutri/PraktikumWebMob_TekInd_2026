// src/Komponen/Header.jsx
import React from 'react';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

function Header({ toggleSidebar }) {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <header
      className="bg-white shadow-sm"
      style={{
        padding: '14px 24px',
        borderBottom: '1px solid #e9ecef',
        position: 'sticky',
        top: 0,
        zIndex: 1020,
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        {/* Kiri */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-light d-md-none"
            onClick={toggleSidebar}
            style={{ borderRadius: '8px', padding: '6px 10px' }}
          >
            <FiMenu size={22} />
          </button>
          <div>
            <h5 className="mb-0 fw-semibold" style={{ fontSize: '18px', color: '#2c3e50' }}>
              Dashboard Monitoring Produksi
            </h5>
            <small style={{ color: '#6c757d', fontSize: '12px', fontWeight: '400' }}>
              {formattedDate}
            </small>
          </div>
        </div>

        {/* Kanan */}
        <div className="d-flex align-items-center gap-3">
          {/* Notifikasi */}
          <button
            className="btn btn-light position-relative"
            style={{ borderRadius: '10px', width: '40px', height: '40px', padding: 0 }}
          >
            <FiBell size={18} />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '10px', padding: '4px 6px' }}
            >
              3
            </span>
          </button>

          {/* User */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              <FiUser size={18} color="white" />
            </div>
            <div className="d-none d-md-block">
              <p className="mb-0 fw-medium" style={{ fontSize: '13px', color: '#2c3e50' }}>
                Production Manager
              </p>
              <small style={{ fontSize: '11px', color: '#6c757d' }}>Shift Pagi</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;