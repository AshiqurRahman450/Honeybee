import React from 'react';

export function ServiceIcon({ type }) {
  switch (type) {
    case 'housekeeping':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 12v.01" />
          <path d="M9 15v.01" />
          <path d="M9 18v.01" />
        </svg>
      );
    case 'deep-cleaning':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <path d="M12 2v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
    case 'carpet-sofa':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
          <path d="M4 18v2" />
          <path d="M20 18v2" />
        </svg>
      );
    case 'gardening':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case 'pest-control':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'hr-payroll':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'security':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      );
    case 'plumbing-carpentry':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'civil-alteration':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
  }
}

export default function ServiceModal({ modalState, onClose, onBookService }) {
  if (!modalState.open || !modalState.service) return null;

  const { service } = modalState;

  return (
    <div
      className="modal-backdrop open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div>
          <div className="modal-gallery-row">
            {service.images.map((img, i) => (
              <img key={i} src={img} alt={`${service.title} view ${i + 1}`} />
            ))}
          </div>
          <div className="modal-content-body">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: service.accent,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ServiceIcon type={service.iconType} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: service.accent,
                    letterSpacing: '0.08em'
                  }}
                >
                  HONEYBEE FMS DIVISION #{service.num} • {service.categoryLabel}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
                  {service.title}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', color: '#475569', marginBottom: '22px' }}>{service.shortDesc}</p>

            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                marginBottom: '12px'
              }}
            >
              Scope of Work &amp; Standard Deliverables
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px',
                marginBottom: '26px'
              }}
            >
              {service.deliverables.map((d, i) => (
                <div
                  key={i}
                  style={{
                    background: '#f8fafd',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    borderLeft: `4px solid ${service.accent}`,
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#1e293b'
                  }}
                >
                  {d}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '18px',
                borderTop: '1px solid #e2e8f0'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                <strong>Available Contracts:</strong> One-Time Deep Service • Monthly AMC • Dedicated Resident Staff
              </div>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => {
                  onBookService(service.title);
                  onClose();
                }}
              >
                Request Free Site Inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
