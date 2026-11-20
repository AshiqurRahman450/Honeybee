import React, { useState, useEffect } from 'react';
import {
  SERVICES_DATA,
  HOTSPOTS_DATA,
  GALLERY_ITEMS,
  INDUSTRIES_DATA,
  EQUIPMENT_DATA,
  TESTIMONIALS_DATA
} from './data/servicesData';
import HoneycombCanvas from './components/HoneycombCanvas';
import ServiceModal, { ServiceIcon } from './components/ServiceModal';
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowRight,
  IconHexagon,
  IconUsers,
  IconBuilding,
  IconAward,
  IconLayers,
  IconCamera,
  IconTarget,
  IconSparkles,
  IconCog,
  IconQuote,
  IconCalculator,
  IconMoveHorizontal,
  IconShieldCheck,
  IconCheck,
  IconMenu,
  IconClose,
  IconFiveStars
} from './components/Icons';

// 3D Perspective Tilt Card Wrapper Component
function TiltCard({ children, className = '', style = {}, ...rest }) {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  return (
    <div
      className={className}
      style={{ ...style, transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = performance.now();
    const duration = 1800;
    let rafId;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  return (
    <div className="stat-number">
      {count}
      {suffix}
    </div>
  );
}

export default function App() {
  // Navigation & Scroll States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Services Filter & Modal States
  const [serviceFilter, setServiceFilter] = useState('all');
  const [modalState, setModalState] = useState({ open: false, type: null, service: null });

  // Interactive Hotspot Explorer State
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS_DATA[0]);

  // Before / After Deep Cleaning Slider State
  const [baPosition, setBaPosition] = useState(50);

  // 12-Photo Operations Gallery Filter State
  const [galleryFilter, setGalleryFilter] = useState('all');

  // Instant Facility Quote & Manpower Calculator States
  const [selectedCalcServices, setSelectedCalcServices] = useState([
    'housekeeping',
    'deep-cleaning',
    'gardening',
    'security'
  ]);
  const [calcArea, setCalcArea] = useState(25000);
  const [calcStaff, setCalcStaff] = useState(8);

  // Contact Form States
  const [selectedServiceInput, setSelectedServiceInput] = useState(
    'Integrated Facility Management (All 10 Services)'
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll Progress + Scroll Reveal Observer
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
      setNavScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const revealEls = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const openServiceModal = (serviceId) => {
    const srv = SERVICES_DATA.find((s) => s.id === serviceId);
    if (srv) {
      setModalState({ open: true, type: 'service', service: srv });
    }
  };

  const closeModal = () => {
    setModalState({ open: false, type: null, service: null });
  };

  const toggleCalcChip = (chip) => {
    setSelectedCalcServices((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const filteredServices =
    serviceFilter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === serviceFilter);

  const filteredGallery =
    galleryFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.cat === galleryFilter);

  const srvCount = Math.max(1, selectedCalcServices.length);
  const recommendedCleaners = Math.max(1, Math.round(calcArea / 4500));
  const totalTeam = calcStaff + Math.min(srvCount, 4);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 4500);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Animated Floating Honeybee Mascot Companion */}
      <a href="#services" className="floating-bee-companion" title="Explore Our 10 Honeybee FMS Services">
        <span className="bee-tooltip" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <IconHexagon size={14} /> 10 Complete Facility Services!
        </span>
        <svg viewBox="0 0 120 120" width="66" height="66" xmlns="http://www.w3.org/2000/svg">
          <g className="bee-wing-l">
            <ellipse cx="32" cy="52" rx="22" ry="12" transform="rotate(-22 32 52)" fill="#ffbe3d" stroke="#111" strokeWidth="3.5" />
            <ellipse cx="36" cy="70" rx="17" ry="10" transform="rotate(18 36 70)" fill="#ffbe3d" stroke="#111" strokeWidth="3.5" />
          </g>
          <g className="bee-wing-r">
            <ellipse cx="88" cy="52" rx="22" ry="12" transform="rotate(22 88 52)" fill="#ffbe3d" stroke="#111" strokeWidth="3.5" />
            <ellipse cx="84" cy="70" rx="17" ry="10" transform="rotate(-18 84 70)" fill="#ffbe3d" stroke="#111" strokeWidth="3.5" />
          </g>
          <path d="M54 24 Q48 12 42 12" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="41" cy="12" r="4" fill="#ffbe3d" stroke="#111" strokeWidth="2.5" />
          <path d="M66 24 Q72 12 78 12" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="79" cy="12" r="4" fill="#ffbe3d" stroke="#111" strokeWidth="2.5" />
          <path d="M44 55 C42 78 52 96 60 108 C68 96 78 78 76 55 Z" fill="#111" />
          <ellipse cx="60" cy="64" rx="16" ry="9" fill="#ffbe3d" />
          <ellipse cx="60" cy="82" rx="12" ry="7" fill="#ffbe3d" />
          <circle cx="60" cy="38" r="18" fill="#ffbe3d" stroke="#111" strokeWidth="3.5" />
          <circle cx="52" cy="36" r="7" fill="#fff" stroke="#111" strokeWidth="2.5" />
          <circle cx="53" cy="37" r="4.5" fill="#111" />
          <circle cx="51" cy="35" r="1.5" fill="#fff" />
          <circle cx="68" cy="36" r="7" fill="#fff" stroke="#111" strokeWidth="2.5" />
          <circle cx="67" cy="37" r="4.5" fill="#111" />
          <circle cx="65" cy="35" r="1.5" fill="#fff" />
          <path d="M53 46 Q60 52 67 46" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </a>

      {/* Top Utility Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-items topbar-left-desktop">
            <span className="topbar-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <IconHexagon size={12} /> Honeybee FMS
            </span>
            <span className="topbar-item topbar-address">
              <IconMapPin size={14} />
              <span>99, A-Block, Annanagar, Anna Nagar East, Chennai 600 102</span>
            </span>
          </div>
          <div className="topbar-items topbar-contact-row">
            <a href="tel:+917845777423" className="topbar-item">
              <IconPhone size={13} />
              <span>+91 78457 77423</span>
            </a>
            <a href="mailto:abeal@honeybeefms.in" className="topbar-item">
              <IconMail size={13} />
              <span>abeal@honeybeefms.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-logo-img-wrap">
              <img src="/assets/images/logo.jpg" alt="Honeybee FMS Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text">
              <div className="brand-title">
                HONEY<span className="bee-gold">BEE</span> FMS
              </div>
              <div className="brand-subtitle">Facility Management Services</div>
            </div>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>10 Core Services</a></li>
            <li><a href="#explorer" onClick={() => setMobileMenuOpen(false)}>Live Facility Map</a></li>
            <li><a href="#transformations" onClick={() => setMobileMenuOpen(false)}>Before &amp; After</a></li>
            <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Photo Gallery</a></li>
            <li><a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Quote Estimator</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>

            {/* Mobile Drawer Action Buttons & Location */}
            <li className="mobile-drawer-extras">
              <div className="mobile-drawer-cta-row">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Get Free Quote</span>
                  <IconArrowRight size={16} />
                </a>
                <a
                  href="tel:+917845777423"
                  className="btn btn-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IconPhone size={16} />
                  <span>Call +91 78457 77423</span>
                </a>
              </div>
              <div className="mobile-drawer-location">
                <IconMapPin size={15} />
                <span>99, A-Block, Annanagar, Anna Nagar East, Chennai 600 102</span>
              </div>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+917845777423" className="mobile-quick-call" aria-label="Call Honeybee FMS">
              <IconPhone size={18} />
            </a>
            <a href="#contact" className="btn btn-primary nav-cta-desktop">
              <span>Get Free Quote</span>
              <IconArrowRight size={16} />
            </a>
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================================
          HERO SECTION WITH INTERACTIVE HONEYCOMB CANVAS & MULTI-PHOTO COLLAGE
          ====================================================================== */}
      <section className="hero" id="home">
        <HoneycombCanvas />
        <div className="hero-glow-orb hero-glow-1" />
        <div className="hero-glow-orb hero-glow-2" />

        <div className="container hero-grid">
          <div className="hero-content" data-reveal="left">
            <div className="hero-badge-pill">
              <span className="pulse-dot" />
              <span>COMPLETE 360° FACILITY MANAGEMENT PARTNER</span>
            </div>

            <h1 className="hero-title">
              Busy Like a <span className="highlight-gold">Honeybee</span> Keeping Your Facilities Spotless, Safe &amp; Thriving.
            </h1>

            <p className="hero-desc">
              From mechanized <strong>Housekeeping, Deep Cleaning &amp; Carpet Care</strong> to{' '}
              <strong>Security, HR &amp; Payroll, Landscaping, Pest Control, MEP Plumbing/Carpentry, Civil Works &amp; Asset Finance</strong>
              —Honeybee FMS delivers all 10 facility divisions under one trusted roof.
            </p>

            <div className="hero-cta-group">
              <a href="#services" className="btn btn-primary">
                <span>Explore All 10 Services</span>
                <IconArrowRight size={17} />
              </a>
              <a href="#calculator" className="btn btn-outline">
                <IconCalculator size={16} />
                <span>Instant Manpower Estimator</span>
              </a>
              <a href="tel:+917845777423" className="btn btn-outline">
                <IconPhone size={16} />
                <span>Call +91 78457 77423</span>
              </a>
            </div>

            <div className="hero-mini-services">
              {SERVICES_DATA.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hero-mini-tag"
                  onClick={() => openServiceModal(s.id)}
                >
                  <span style={{ width: '15px', height: '15px', display: 'inline-flex', color: 'var(--honey-amber)' }}>
                    <ServiceIcon type={s.iconType} />
                  </span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual-stage" data-reveal="right">
            <div className="floating-kpi-badge kpi-top-left">
              <div className="kpi-icon">10</div>
              <div className="kpi-text">
                <strong>Specialized Divisions</strong>
                <span>Single-Window AMC Partner</span>
              </div>
            </div>

            <div className="floating-kpi-badge kpi-bottom-right">
              <div className="kpi-icon">24/7</div>
              <div className="kpi-text">
                <strong>Rapid Facility Desk</strong>
                <span>99.4% SLA Compliance Rate</span>
              </div>
            </div>

            <div className="hero-center-emblem" title="HONEYBEE FMS Official Emblem">
              <img src="/assets/images/logo.jpg" alt="Honeybee FMS Official Logo" />
            </div>

            <div className="hero-bento-collage">
              <div className="collage-card collage-1">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Housekeeping & Deep Cleaning Specialists"
                />
                <div className="collage-label">
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#1d63b8' }} />
                  Housekeeping &amp; Deep Cleaning
                </div>
              </div>
              <div className="collage-card collage-2">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80"
                  alt="Security & Surveillance Command"
                />
                <div className="collage-label">
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#1b5e37' }} />
                  24/7 Security &amp; CCTV
                </div>
              </div>
              <div className="collage-card collage-3">
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80"
                  alt="Gardening & Landscaping"
                />
                <div className="collage-label">
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#228b44' }} />
                  Landscaping &amp; Pest Care
                </div>
              </div>
              <div className="collage-card collage-4">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
                  alt="Technical MEP, Civil & Asset Management"
                />
                <div className="collage-label">
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#c87a28' }} />
                  Plumbing, Civil &amp; Asset Mgmt
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INFINITE ANIMATED PHOTO & SERVICE MARQUEE
          ====================================================================== */}
      <div className="photo-marquee-section">
        <div className="marquee-track">
          {[...SERVICES_DATA, ...SERVICES_DATA].map((srv, idx) => (
            <div
              key={`${srv.id}-${idx}`}
              className="marquee-pill"
              style={{ cursor: 'pointer' }}
              onClick={() => openServiceModal(srv.id)}
            >
              <img src={srv.images[0]} alt={srv.title} />
              <span>
                {srv.num}. {srv.title}
              </span>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================================
          ANIMATED STATS COUNTER STRIP
          ====================================================================== */}
      <div className="container stats-strip">
        <div className="stats-grid" data-reveal="up">
          <div className="stat-item">
            <div className="stat-icon-box"><IconLayers size={26} /></div>
            <div>
              <AnimatedCounter target={10} suffix="+" />
              <div className="stat-label">In-House Service Divisions</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><IconUsers size={26} /></div>
            <div>
              <AnimatedCounter target={650} suffix="+" />
              <div className="stat-label">Trained &amp; Verified Personnel</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><IconBuilding size={26} /></div>
            <div>
              <AnimatedCounter target={320} suffix="+" />
              <div className="stat-label">Corporate &amp; Residential Sites</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><IconAward size={26} /></div>
            <div>
              <AnimatedCounter target={99} suffix="%" />
              <div className="stat-label">Client Retention &amp; Audit Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================================
          ALL 10 CORE SERVICES SECTION (WITH 3D TILT & MULTI-PHOTO CARDS)
          ====================================================================== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconHexagon size={14} /> OUR 10 SPECIALIZED DIVISIONS</div>
            <h2 className="section-title">Complete Facility Management Services Under One Roof</h2>
            <p className="section-subtitle">
              Every service card features dual-photo hover transitions, color-coded division badges, clickable mini-thumbnails, and an interactive 3-photo gallery modal.
            </p>
          </div>

          <div className="service-filter-bar" data-reveal="up">
            {[
              { key: 'all', label: 'All 10 Services' },
              { key: 'cleaning', label: 'Hygiene & Deep Cleaning (3)' },
              { key: 'outdoor', label: 'Landscaping & Pest Control (2)' },
              { key: 'technical', label: 'Plumbing, Carpentry, Painting & Civil (2)' },
              { key: 'corporate', label: 'Security, HR/Payroll & Asset Finance (3)' }
            ].map((tab) => (
              <button
                key={tab.key}
                className={`filter-btn ${serviceFilter === tab.key ? 'active' : ''}`}
                onClick={() => setServiceFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((srv) => (
              <TiltCard
                key={srv.id}
                className="service-card revealed"
                style={{ '--card-accent': srv.accent }}
              >
                <div className="service-img-box">
                  <span className="service-number-tag">SERVICE #{srv.num}</span>
                  <span className="service-photo-count">
                    <IconCamera size={13} /> {srv.images.length} Photos
                  </span>
                  <img className="service-img-primary" src={srv.images[0]} alt={srv.title} loading="lazy" />
                  <img
                    className="service-img-secondary"
                    src={srv.images[1]}
                    alt={`${srv.title} in action`}
                    loading="lazy"
                  />
                </div>

                <div className="service-badge-square" title={srv.title}>
                  <ServiceIcon type={srv.iconType} />
                </div>

                <div className="service-body">
                  <div className="service-category-label">{srv.categoryLabel}</div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.shortDesc}</p>

                  <ul className="service-features-list">
                    {srv.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>

                  <div className="service-mini-thumbs">
                    {srv.images.map((imgUrl, i) => (
                      <img
                        key={i}
                        src={imgUrl}
                        alt={`${srv.title} thumb ${i + 1}`}
                        onClick={() => openServiceModal(srv.id)}
                        title="Click to open 3-photo gallery"
                      />
                    ))}
                    <span>Hover card or click photos</span>
                  </div>

                  <div className="service-card-footer">
                    <button className="btn-service-detail" onClick={() => openServiceModal(srv.id)}>
                      <span>Explore &amp; Gallery</span>
                      <IconArrowRight size={15} />
                    </button>
                    <a
                      href="#contact"
                      className="btn-service-book"
                      onClick={() => setSelectedServiceInput(srv.title)}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Integrated AMC Bundle Banner */}
          <div className="official-card-banner" data-reveal="up">
            <div className="official-card-preview">
              <img
                src="/assets/images/logo.jpg"
                alt="Honeybee FMS Logo"
                style={{ background: '#fff', padding: '4px', width: '82px', height: '82px', objectFit: 'contain' }}
              />
              <div>
                <span
                  style={{
                    color: '#ffbe3d',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  INTEGRATED FACILITY MANAGEMENT (IFM)
                </span>
                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, margin: '4px 0' }}>
                  Want a Custom Integrated Facility Package Combining Multiple Services?
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Bundle multiple Honeybee FMS divisions under a single Annual Maintenance Contract (AMC) for dedicated supervision and up to 18% cost savings.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
              <a href="tel:+917845777423" className="btn btn-outline">
                Call 78457 77423
              </a>
              <a href="#contact" className="btn btn-primary">
                Bundle Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE FACILITY HOTSPOT EXPLORER
          ====================================================================== */}
      <section className="section section-dark" id="explorer">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconTarget size={15} /> INTERACTIVE CAMPUS ECOSYSTEM</div>
            <h2 className="section-title">How Honeybee FMS Manages Every Corner of Your Property</h2>
            <p className="section-subtitle">
              Hover or click on the numbered pulsing golden pins (1 to 5) across the facility to see our teams, equipment, and SLA standards in action.
            </p>
          </div>

          <div className="hotspot-explorer-grid" data-reveal="up">
            <div className="hotspot-map-stage">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                alt="Modern Commercial Facility Managed by Honeybee FMS"
              />
              {HOTSPOTS_DATA.map((hs) => (
                <button
                  key={hs.id}
                  className={`hotspot-pin ${activeHotspot.id === hs.id ? 'active' : ''}`}
                  style={{ left: hs.x, top: hs.y }}
                  onClick={() => setActiveHotspot(hs)}
                  onMouseEnter={() => setActiveHotspot(hs)}
                  title={hs.title}
                >
                  {hs.id}
                </button>
              ))}
            </div>

            <div className="hotspot-detail-panel">
              <div>
                <img className="hotspot-detail-img" src={activeHotspot.img} alt={activeHotspot.title} />
                <span
                  style={{
                    display: 'inline-block',
                    background: activeHotspot.color,
                    color: '#fff',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '99px',
                    marginBottom: '10px'
                  }}
                >
                  ZONE #0{activeHotspot.id} • {activeHotspot.badge}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                  {activeHotspot.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '18px' }}>
                  {activeHotspot.desc}
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                  {activeHotspot.metrics.map((m, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(245,166,35,0.35)',
                        color: '#ffbe3d',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '5px 10px',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <IconCheck size={13} /> {m}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Deploy This Solution at Your Facility
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE BEFORE / AFTER DEEP CLEANING COMPARISON SLIDER
          ====================================================================== */}
      <section className="section" id="transformations">
        <div className="container transformation-grid">
          <div data-reveal="left">
            <div className="section-eyebrow"><IconSparkles size={15} /> VISIBLE TRANSFORMATION</div>
            <h2 className="section-title">Drag the Slider to See the Honeybee Deep-Clean Difference</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '24px' }}>
              Whether it is post-construction dust, stained office carpets, aged washrooms, or neglected exterior facades, our mechanized deep-cleaning and civil restoration crews restore your property to showroom brilliance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
              <div
                style={{
                  background: '#fff',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <strong style={{ color: 'var(--srv-deepclean)', fontSize: '1.3rem', display: 'block' }}>
                  5-Stage
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Mechanized Scrubbing, Steam &amp; UV Sanitization
                </span>
              </div>
              <div
                style={{
                  background: '#fff',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <strong style={{ color: 'var(--srv-housekeeping)', fontSize: '1.3rem', display: 'block' }}>
                  100% Eco
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Non-Toxic Biodegradable Diversey Formulations
                </span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Book a Demo Deep-Clean Audit
            </a>
          </div>

          <div data-reveal="right">
            <div className="ba-slider-container">
              <img
                className="ba-img"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=80"
                alt="After Honeybee FMS Deep Cleaning"
              />
              <div className="ba-before-wrap" style={{ width: `${baPosition}%` }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=80"
                  alt="Before Deep Cleaning"
                />
              </div>
              <span className="ba-tag ba-tag-before">BEFORE: Dull &amp; Dusty</span>
              <span className="ba-tag ba-tag-after">AFTER: Honeybee Sparkling</span>

              <div className="ba-handle" style={{ left: `${baPosition}%` }}>
                <div className="ba-handle-circle"><IconMoveHorizontal size={22} /></div>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                value={baPosition}
                onChange={(e) => setBaPosition(Number(e.target.value))}
                className="ba-range-input"
                aria-label="Before and after comparison slider"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          OPERATIONS & PROJECT GALLERY ("MORE IMG")
          ====================================================================== */}
      <section className="section" id="gallery" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconCamera size={15} /> HONEYBEE FMS IN ACTION</div>
            <h2 className="section-title">Visual Showcase Across All 10 Facility Verticals</h2>
            <p className="section-subtitle">
              Browse real-world facility operations across housekeeping, deep cleaning, upholstery, landscaping, pest control, security, MEP maintenance, and civil works.
            </p>
          </div>

          <div className="service-filter-bar" data-reveal="up">
            {[
              { key: 'all', label: 'All Photos' },
              { key: 'hygiene', label: 'Housekeeping, Deep Clean & Sofa' },
              { key: 'green', label: 'Landscaping & Pest Control' },
              { key: 'tech', label: 'Plumbing, Carpentry, Painting & Civil' },
              { key: 'corp', label: 'Security, HR & Asset Mgmt' }
            ].map((tab) => (
              <button
                key={tab.key}
                className={`filter-btn ${galleryFilter === tab.key ? 'active' : ''}`}
                onClick={() => setGalleryFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid" data-reveal="up">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.wide ? 'wide' : ''}`}
                onClick={() => openServiceModal(item.serviceId)}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{item.tag}</span>
                  <div className="gallery-title">{item.title}</div>
                  <div className="gallery-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          INDUSTRIES WE SERVE (6 PHOTO CARDS)
          ====================================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconBuilding size={15} /> SECTORS WE EMPOWER</div>
            <h2 className="section-title">Tailored Facility Solutions for Every Industry</h2>
            <p className="section-subtitle">
              Our domain-trained crews understand the strict hygiene, safety, and compliance protocols unique to each property sector.
            </p>
          </div>

          <div className="industries-grid" data-reveal="up">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div key={idx} className="industry-card">
                <img src={ind.img} alt={ind.title} loading="lazy" />
                <div className="industry-card-content">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          MECHANIZED EQUIPMENT & SMART FLEET SHOWCASE
          ====================================================================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconCog size={15} /> INDUSTRIAL-GRADE MACHINERY</div>
            <h2 className="section-title">Powered by Modern Mechanized Equipment &amp; Eco-Safe Tech</h2>
            <p className="section-subtitle">
              We equip our Honeybee FMS workforce with industrial scrubbers, injection-extraction shampooers, thermal foggers, and digital audit tools for 3x faster and deeper facility upkeep.
            </p>
          </div>

          <div className="equipment-grid" data-reveal="up">
            {EQUIPMENT_DATA.map((eq, idx) => (
              <TiltCard key={idx} className="equipment-card">
                <div className="equipment-img-wrap">
                  <span className="equipment-badge">{eq.badge}</span>
                  <img src={eq.img} alt={eq.title} loading="lazy" />
                </div>
                <div className="equipment-info">
                  <h4>{eq.title}</h4>
                  <p>{eq.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          CLIENT TESTIMONIALS WITH FACILITY PHOTOS
          ====================================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconQuote size={15} /> CLIENT SUCCESS STORIES</div>
            <h2 className="section-title">Trusted by Corporate Facilities &amp; Residential Communities</h2>
            <p className="section-subtitle">
              See why Admin Heads, Facility Directors, and RWA Committees rely on Honeybee FMS for single-window peace of mind.
            </p>
          </div>

          <div className="testimonials-grid" data-reveal="up">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <img className="testimonial-site-img" src={t.siteImg} alt={t.author} loading="lazy" />
                  <IconFiveStars />
                  <p style={{ color: '#e2e8f0', fontSize: '0.93rem', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="testimonial-author">
                  <img src={t.avatarImg} alt={t.author} loading="lazy" />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '0.95rem' }}>{t.author}</strong>
                    <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE FACILITY QUOTE & MANPOWER CALCULATOR
          ====================================================================== */}
      <section className="section" id="calculator">
        <div className="container">
          <div className="section-header" data-reveal="up">
            <div className="section-eyebrow"><IconCalculator size={15} /> INSTANT FACILITY ESTIMATOR</div>
            <h2 className="section-title">Build Your Custom Honeybee FMS Package</h2>
            <p className="section-subtitle">
              Select the services you need and slide your facility size to estimate the recommended manpower deployment and scope.
            </p>
          </div>

          <div className="calculator-box" data-reveal="up">
            <div className="calc-controls">
              <div className="calc-group">
                <label>
                  <span>1. Select Required Honeybee FMS Services:</span>
                  <span style={{ color: 'var(--honey-deep)' }}>Click to toggle</span>
                </label>
                <div className="calc-chips">
                  {SERVICES_DATA.map((srv) => (
                    <span
                      key={srv.id}
                      className={`calc-chip ${selectedCalcServices.includes(srv.id) ? 'selected' : ''}`}
                      onClick={() => toggleCalcChip(srv.id)}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}
                    >
                      <span style={{ width: '16px', height: '16px', display: 'inline-flex' }}>
                        <ServiceIcon type={srv.iconType} />
                      </span>
                      <span>{srv.title}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="calc-group">
                <label>
                  <span>2. Approximate Facility Area (Sq.Ft.):</span>
                  <strong style={{ color: 'var(--honey-deep)' }}>{calcArea.toLocaleString()} sq.ft</strong>
                </label>
                <input
                  type="range"
                  className="range-slider"
                  min="1000"
                  max="150000"
                  step="1000"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                />
              </div>

              <div className="calc-group">
                <label>
                  <span>3. Dedicated On-Site Personnel Needed:</span>
                  <strong style={{ color: 'var(--honey-deep)' }}>{calcStaff} Personnel</strong>
                </label>
                <input
                  type="range"
                  className="range-slider"
                  min="1"
                  max="100"
                  step="1"
                  value={calcStaff}
                  onChange={(e) => setCalcStaff(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="calc-summary">
              <div>
                <span
                  style={{
                    color: 'var(--honey-amber)',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  RECOMMENDED HONEYBEE DEPLOYMENT
                </span>
                <div className="calc-result-price">
                  {totalTeam} Dedicated Staff + {srvCount} Divisions
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginBottom: '20px' }}>
                  Tailored Integrated Facility Management (IFM) model with single-point billing:
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: '#e2e8f0'
                  }}
                >
                  <li>
                    • Facility Area Covered: <strong>{calcArea.toLocaleString()} sq.ft</strong>
                  </li>
                  <li>
                    • Selected Honeybee Divisions: <strong>{srvCount} of 10 Services</strong>
                  </li>
                  <li>
                    • Recommended Housekeeping Crew:{' '}
                    <strong>{recommendedCleaners} Janitors + 1 Supervisor</strong>
                  </li>
                  <li>• Includes 100% PF/ESIC Compliance, Chemicals &amp; Mechanized Equipment</li>
                </ul>
              </div>

              <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                Lock In Custom Proposal &amp; Free Site Survey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          CONTACT & FREE SITE INSPECTION SECTION
          ====================================================================== */}
      <section className="section" id="contact" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <div className="contact-grid" data-reveal="up">
            <div className="contact-info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <img
                  src="/assets/images/logo.jpg"
                  alt="Honeybee FMS Logo"
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '16px',
                    background: '#fff',
                    padding: '4px',
                    objectFit: 'contain'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>
                    HONEY<span style={{ color: 'var(--honey-amber)' }}>BEE</span> FMS
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.86rem' }}>Facility Management Services</p>
                </div>
              </div>

              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, marginBottom: '14px', lineHeight: 1.2 }}>
                Ready to Upgrade Your Facility Standards?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '28px' }}>
                Schedule a free on-site audit with our facility engineers. We will inspect your premises and submit a customized BOQ proposal within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(245,166,35,0.16)',
                      color: 'var(--honey-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconPhone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>24/7 Call &amp; WhatsApp Helpline</div>
                    <a href="tel:+917845777423" style={{ color: '#fff', textDecoration: 'none' }}>
                      <strong style={{ fontSize: '1.05rem' }}>+91 78457 77423</strong>
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(245,166,35,0.16)',
                      color: 'var(--honey-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconMail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Email Proposals &amp; Inquiries</div>
                    <a href="mailto:abeal@honeybeefms.in" style={{ color: '#fff', textDecoration: 'none' }}>
                      <strong style={{ fontSize: '1.05rem' }}>abeal@honeybeefms.in</strong>
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(245,166,35,0.16)',
                      color: 'var(--honey-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconMapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Office Location</div>
                    <strong style={{ fontSize: '0.98rem' }}>
                      99, A-Block, Annanagar, Anna Nagar East, Chennai 600 102
                    </strong>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  padding: '16px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div style={{ color: 'var(--honey-amber)', display: 'flex', flexShrink: 0 }}>
                  <IconShieldCheck size={28} />
                </div>
                <div style={{ fontSize: '0.84rem', color: '#e2e8f0' }}>
                  <strong>All 10 Divisions Available Across Chennai &amp; Tamil Nadu</strong>
                  <br />
                  Fast deployment for Corporate Offices, IT Parks, Hospitals, Malls &amp; Residential Societies.
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '6px' }}>
                Request a Free Site Visit &amp; Quote
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Fill in your requirement below and our Honeybee FMS division head will contact you promptly.
              </p>

              <form onSubmit={handleContactSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="clientName">Your Name / Contact Person *</label>
                    <input
                      type="text"
                      id="clientName"
                      className="form-control"
                      placeholder="e.g. Rajesh Sharma"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="clientCompany">Company / Society Name</label>
                    <input
                      type="text"
                      id="clientCompany"
                      className="form-control"
                      placeholder="e.g. Apex Tech Park / Prestige Enclave"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="clientPhone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="clientPhone"
                      className="form-control"
                      placeholder="+91 78457 77423"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="clientEmail">Official Email Address *</label>
                    <input
                      type="email"
                      id="clientEmail"
                      className="form-control"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="contactServiceSelect">Primary Service Required *</label>
                    <select
                      id="contactServiceSelect"
                      className="form-control"
                      value={selectedServiceInput}
                      onChange={(e) => setSelectedServiceInput(e.target.value)}
                      required
                    >
                      <option value="Integrated Facility Management (All 10 Services)">
                        Integrated Facility Management (Multiple / All 10 Services)
                      </option>
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.num}. {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="clientMsg">Facility Location &amp; Requirement Details</label>
                    <textarea
                      id="clientMsg"
                      rows="3"
                      className="form-control"
                      placeholder="Tell us your approximate area (sq.ft.), number of staff required, or preferred inspection date..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: formSubmitted ? '#228b44' : undefined,
                    color: formSubmitted ? '#fff' : undefined
                  }}
                >
                  {formSubmitted
                    ? '✓ Inquiry Sent to Honeybee FMS Desk!'
                    : 'Request Free Site Visit & Proposal'}
                </button>

                {formSubmitted && (
                  <div
                    style={{
                      marginTop: '14px',
                      padding: '12px',
                      borderRadius: '10px',
                      background: '#dcfce7',
                      color: '#166534',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textAlign: 'center'
                    }}
                  >
                    Thank you! Your facility inquiry has been logged with Honeybee FMS. Our team will reach out shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          FOOTER
          ====================================================================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img
                  src="/assets/images/logo.jpg"
                  alt="Honeybee FMS Logo"
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: '#fff',
                    padding: '3px',
                    objectFit: 'contain'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>
                    HONEY<span style={{ color: 'var(--honey-amber)' }}>BEE</span> FMS
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Facility Management Services</div>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '14px' }}>
                Delivering spotless hygiene, round-the-clock security, statutory HR &amp; payroll compliance, green landscaping, and precision technical maintenance.
              </p>
              <div style={{ fontSize: '0.84rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconMapPin size={15} />
                  <span>99, A-Block, Annanagar, Anna Nagar East, Chennai 600 102</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconPhone size={15} />
                  <a href="tel:+917845777423" style={{ color: '#ffbe3d', textDecoration: 'none' }}>+91 78457 77423</a>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconMail size={15} />
                  <a href="mailto:abeal@honeybeefms.in" style={{ color: '#ffbe3d', textDecoration: 'none' }}>abeal@honeybeefms.in</a>
                </span>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Hygiene &amp; Green Services</h4>
              <ul className="footer-links">
                {SERVICES_DATA.slice(0, 5).map((srv) => (
                  <li key={srv.id}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        openServiceModal(srv.id);
                      }}
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Corporate &amp; Technical</h4>
              <ul className="footer-links">
                {SERVICES_DATA.slice(5, 10).map((srv) => (
                  <li key={srv.id}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        openServiceModal(srv.id);
                      }}
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#explorer">Interactive Facility Map</a></li>
                <li><a href="#transformations">Before / After Deep Clean</a></li>
                <li><a href="#gallery">Operations Photo Gallery</a></li>
                <li><a href="#calculator">Manpower &amp; Quote Calculator</a></li>
                <li><a href="#contact">Book Free Site Inspection</a></li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.82rem',
              color: '#64748b'
            }}
          >
            <span>© 2026 HONEYBEE FMS (Facility Management Services). All Rights Reserved.</span>
            <span>ISO 9001:2015 • PSARA Compliant • 100% Statutory EPF/ESIC Compliant</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Instant Connect Button */}
      <a
        href="https://wa.me/917845777423?text=Hello%20Honeybee%20FMS,%20I%20would%20like%20a%20quote%20for%20Facility%20Management%20Services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with Honeybee FMS on WhatsApp (+91 78457 77423)"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
      </a>

      {/* Service Detail & Official Service Card Modal */}
      <ServiceModal
        modalState={modalState}
        onClose={closeModal}
        onBookService={(serviceTitle) => setSelectedServiceInput(serviceTitle)}
      />
    </>
  );
}
