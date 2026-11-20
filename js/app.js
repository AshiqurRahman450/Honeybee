/* ==========================================================================
   HONEYBEE FMS - Facility Management Services
   Interactive Animations, 10-Service Data, Canvas Honeycomb & Calculators
   ========================================================================== */

// All 10 Core Services from the User's Uploaded Honeybee FMS Service Card
const SERVICES_DATA = [
  {
    id: "housekeeping",
    num: "01",
    title: "House Keeping Services",
    category: "cleaning",
    categoryLabel: "Daily Hygiene & Janitorial",
    accent: "#1d63b8",
    shortDesc: "Comprehensive daily corporate, industrial, residential & commercial housekeeping with mechanized floor care and trained uniformed janitors.",
    features: [
      "Daily Mechanized Floor Scrubbing",
      "Pantry & Executive Hospitality",
      "Restroom Sanitization & Restocking",
      "Waste Segregation & Disposal"
    ],
    deliverables: [
      "Dedicated site supervisors & biometric attendance tracking",
      "Eco-friendly, hospital-grade Diversey & Taski cleaning chemicals",
      "Single-disc scrubbers, wet & dry vacuums, and high-pressure washers",
      "Customized hourly, daily, weekly & monthly SOP checklists"
    ],
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>`
  },
  {
    id: "deep-cleaning",
    num: "02",
    title: "Office & House Deep Cleaning",
    category: "cleaning",
    categoryLabel: "Intensive Sanitization",
    accent: "#148578",
    shortDesc: "360-degree intensive deep cleaning, steam sterilization, glass facade washing, kitchen degreasing, and bathroom descaling for offices & homes.",
    features: [
      "High-Temp Steam Sterilization",
      "Hard Floor Polishing & Buffing",
      "Kitchen & Exhaust Degreasing",
      "Facade & High-Reach Glass Care"
    ],
    deliverables: [
      "Move-in / Move-out & Post-construction deep cleaning packages",
      "Anti-viral fogging and air duct vent sanitization",
      "Hard-water stain removal on glass, tiles, and chrome fixtures",
      "Workstation, server room & false ceiling dust extraction"
    ],
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
  },
  {
    id: "carpet-sofa",
    num: "03",
    title: "Carpet & Sofa Cleaning",
    category: "cleaning",
    categoryLabel: "Upholstery & Fabric Care",
    accent: "#1589d6",
    shortDesc: "Dry-foam shampooing, hot-water injection-extraction, leather conditioning, and deep allergen removal for corporate carpets, sofas & chairs.",
    features: [
      "Hot-Water Extraction Shampoo",
      "Dry Foam Fast-Dry Process",
      "Leather Sofa Conditioning",
      "Stain, Odor & Dust-Mite Removal"
    ],
    deliverables: [
      "Industrial 3-stage vacuuming & rotary brush agitation",
      "pH-balanced fabric-safe solutions for velvet, suede, linen & leather",
      "Auditorium chairs, workstation panels, mattresses & curtains",
      "Quick-drying 2-hour turnaround with Scotchgard fabric protection"
    ],
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>`
  },
  {
    id: "gardening",
    num: "04",
    title: "Gardening & Landscaping",
    category: "outdoor",
    categoryLabel: "Green Campus & Horticulture",
    accent: "#228b44",
    shortDesc: "Expert horticulture, lawn mowing, vertical green walls, indoor corporate plants, seasonal flower beds, and automated drip irrigation.",
    features: [
      "Landscape Design & Execution",
      "Lawn Mowing & Hedge Pruning",
      "Indoor Biophilic Office Plants",
      "Drip Irrigation & Organic Manure"
    ],
    deliverables: [
      "Full-time certified gardeners & periodic horticulture supervision",
      "Terrace gardens, vertical green walls & podium landscaping",
      "Organic composting, soil aeration & plant disease control",
      "Corporate indoor plant rental & weekly maintenance"
    ],
    images: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
  },
  {
    id: "pest-control",
    num: "05",
    title: "Pest Control Services",
    category: "outdoor",
    categoryLabel: "Integrated Pest Management",
    accent: "#d9b310",
    shortDesc: "Odorless, WHO-approved integrated pest eradication for cockroaches, termites, rodents, mosquitoes, bed bugs, and wood borers.",
    features: [
      "Anti-Termite Piping & Drilling",
      "Odorless Gel & Spray Treatment",
      "Rodent Bait Stations & Traps",
      "Thermal Fogging & Larviciding"
    ],
    deliverables: [
      "Government-licensed technicians & child/pet-safe herbal formulations",
      "HACCP & audit-ready pest control logs for offices, hotels & pharma",
      "Pre-construction & post-construction 5-year anti-termite warranty",
      "24/7 emergency bee-hive relocation, snake & rodent control"
    ],
    images: [
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    id: "hr-payroll",
    num: "06",
    title: "HR & Payroll Management",
    category: "corporate",
    categoryLabel: "Workforce & Statutory Compliance",
    accent: "#173f7a",
    shortDesc: "Turnkey manpower outsourcing, contract staffing, automated payroll processing, and 100% statutory compliance (PF, ESIC, PT, CLRA).",
    features: [
      "100% EPF, ESIC & Labor Compliance",
      "Automated Payroll & Payslips",
      "Skilled & Unskilled Staffing",
      "Background Verification & KYC"
    ],
    deliverables: [
      "Zero-penalty statutory filing & audit documentation support",
      "Deployment of front-office executives, data entry, drivers & helpers",
      "Biometric attendance integration, shift rostering & leave management",
      "Dedicated HR relationship manager & instant replacement guarantee"
    ],
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    id: "security",
    num: "07",
    title: "Security & Surveillance Services",
    category: "corporate",
    categoryLabel: "24/7 Guarding & Electronic CCTV",
    accent: "#1b5e37",
    shortDesc: "PSARA-compliant trained security guards, ex-servicemen supervisors, lady guards, bouncers, CCTV command monitoring, and access control.",
    features: [
      "24/7 Trained Uniformed Guards",
      "IP CCTV & AI Video Analytics",
      "Visitor & Gate Pass Management",
      "Night Patrolling & Fire Drills"
    ],
    deliverables: [
      "Police-verified, physically fit security officers trained in fire safety & first aid",
      "Boom barriers, biometric turnstiles, metal detectors & baggage scanners",
      "Surprise night-vision audits by Quick Reaction Teams (QRT)",
      "Corporate campus, gated society, warehouse & event security"
    ],
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>`
  },
  {
    id: "plumbing-carpentry",
    num: "08",
    title: "Plumbing, Carpetering & Painting",
    category: "technical",
    categoryLabel: "Technical MEP & Finishing Works",
    accent: "#1c75bc",
    shortDesc: "On-demand and AMC multi-technician support for commercial plumbing, bespoke carpentry/woodwork repairs, and interior/exterior painting.",
    features: [
      "24/7 Leak & Pipeline Repairs",
      "Modular Furniture & Door Locks",
      "Interior & Exterior Repainting",
      "Waterproofing & Grouting"
    ],
    deliverables: [
      "Certified plumbers for hydro-pneumatic pumps, valves, and drainage lines",
      "Expert carpenters for workstations, hydraulic door closers, cabinets & partitions",
      "Dust-free mechanized painting, texture finishes & epoxy floor coating",
      "Dedicated resident technicians or rapid on-call breakdown response"
    ],
    images: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
  {
    id: "civil-alteration",
    num: "09",
    title: "Civil & Alteration Works",
    category: "technical",
    categoryLabel: "Fit-Outs, Renovation & Masonry",
    accent: "#1b6339",
    shortDesc: "Turnkey office & residential civil modifications, vitrified tiling, gypsum partitions, false ceilings, structural strengthening, and waterproofing.",
    features: [
      "Office Cabin & Gypsum Partitions",
      "Vitrified Tiling & Granite Works",
      "False Ceiling & Acoustic Panels",
      "Terrace & Structural Waterproofing"
    ],
    deliverables: [
      "Civil engineers & safety-certified masons for hassle-free alterations",
      "Zero-disruption weekend & night-shift execution for active offices",
      "Washroom remodeling, pantry expansion & reception area makeovers",
      "Transparent BOQ estimation and timely milestone handover"
    ],
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg>`
  },
  {
    id: "asset-finance",
    num: "10",
    title: "Asset & Finance Management",
    category: "corporate",
    categoryLabel: "Facility Lifecycle & OPEX Control",
    accent: "#c87a28",
    shortDesc: "Strategic facility asset tagging, preventive maintenance scheduling, AMC vendor governance, utility energy audits, and OPEX budgeting.",
    features: [
      "QR Asset Tagging & Lifecycle Logs",
      "AMC & Vendor SLA Governance",
      "Energy & Utility Cost Optimization",
      "Monthly Facility Financial Audits"
    ],
    deliverables: [
      "Complete digital register of HVAC, DG sets, elevators, UPS & fire assets",
      "Preventive Maintenance (PPM) calendar reducing equipment downtime by 40%",
      "Society / Commercial building maintenance billing & accounting support",
      "Transparent monthly MIS dashboards & cost-saving recommendations"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
    ],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  }
];

// Facility Hotspot Explorer Data
const HOTSPOTS_DATA = [
  {
    id: 1,
    x: "24%",
    y: "62%",
    title: "Corporate Lobby & Mechanized Housekeeping",
    badge: "House Keeping Services",
    color: "#1d63b8",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    desc: "Continuous lobby polishing, glass entrance sanitization, front-desk hospitality, and odor-control air diffusers maintained round the clock.",
    metrics: ["15-Min Restroom Checks", "ISO 9001 SOPs", "Zero Dust Guarantee"]
  },
  {
    id: 2,
    x: "52%",
    y: "34%",
    title: "Executive Floors & Upholstery Care",
    badge: "Carpet & Sofa + Deep Cleaning",
    color: "#1589d6",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    desc: "Periodic dry-foam carpet shampooing, ergonomic chair sanitization, boardroom acoustic panel vacuuming, and high-touch surface disinfection.",
    metrics: ["99.9% Allergen Removal", "2-Hr Fast Dry", "Fabric Protection"]
  },
  {
    id: 3,
    x: "78%",
    y: "72%",
    title: "Campus Perimeter, Landscaping & Pest Shield",
    badge: "Gardening & Pest Control",
    color: "#228b44",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    desc: "Manicured lawns, vertical biophilic walls, automated irrigation, and a 3-tier perimeter rodent & mosquito barrier protecting the entire campus.",
    metrics: ["100% Herbal Indoor Gel", "Automated Drip", "Weekly Pruning"]
  },
  {
    id: 4,
    x: "18%",
    y: "28%",
    title: "24/7 Security Command & Access Control",
    badge: "Security & Surveillance Services",
    color: "#1b5e37",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    desc: "PSARA-trained security officers, AI CCTV monitoring wall, visitor management kiosks, and emergency fire-response command center.",
    metrics: ["24/7 CCTV Monitoring", "Night QRT Patrols", "100% Police Verified"]
  },
  {
    id: 5,
    x: "68%",
    y: "44%",
    title: "MEP Plant Room, Civil & Asset Hub",
    badge: "Plumbing, Civil & Asset Mgmt",
    color: "#c87a28",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    desc: "QR-tagged assets, preventive plumbing/carpentry maintenance, civil fit-out readiness, and real-time utility energy tracking.",
    metrics: ["40% Lower Downtime", "QR Asset Tracking", "Rapid MEP Response"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initServicesGrid();
  initHoneycombCanvas();
  initScrollRevealAndProgress();
  initCounters();
  initBeforeAfterSlider();
  initHotspotExplorer();
  initGalleryFilters();
  initQuoteCalculator();
  initNavbarAndMobileMenu();
});

/* ==========================================================================
   1. RENDER ALL 10 SERVICES WITH DUAL-PHOTO HOVER & MINI THUMBNAILS
   ========================================================================== */
function initServicesGrid() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  function renderCards(filter = "all") {
    const filtered = filter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter(s => s.category === filter);

    grid.innerHTML = filtered.map((srv, idx) => `
      <article class="service-card revealed" style="--card-accent: ${srv.accent}; transition-delay: ${idx * 45}ms" data-tilt>
        <div class="service-img-box">
          <span class="service-number-tag">SERVICE #${srv.num}</span>
          <span class="service-photo-count">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            ${srv.images.length} Photos
          </span>
          <img class="service-img-primary" src="${srv.images[0]}" alt="${srv.title}" loading="lazy" />
          <img class="service-img-secondary" src="${srv.images[1]}" alt="${srv.title} in action" loading="lazy" />
        </div>

        <div class="service-badge-square" title="${srv.title}">
          ${srv.iconSvg}
        </div>

        <div class="service-body">
          <div class="service-category-label">${srv.categoryLabel}</div>
          <h3 class="service-title">${srv.title}</h3>
          <p class="service-desc">${srv.shortDesc}</p>

          <ul class="service-features-list">
            ${srv.features.map(f => `<li>${f}</li>`).join("")}
          </ul>

          <div class="service-mini-thumbs">
            ${srv.images.map((imgUrl, i) => `
              <img src="${imgUrl}" alt="${srv.title} photo ${i + 1}" onclick="openServiceModal('${srv.id}')" title="Click to view gallery" />
            `).join("")}
            <span>Hover card or click photos</span>
          </div>

          <div class="service-card-footer">
            <button class="btn-service-detail" onclick="openServiceModal('${srv.id}')">
              <span>Explore & Gallery</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <a href="#contact" class="btn-service-book" onclick="prefillService('${srv.title}')">Book</a>
          </div>
        </div>
      </article>
    `).join("");

    attach3DTilt();
  }

  renderCards("all");

  document.querySelectorAll("[data-service-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-service-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.getAttribute("data-service-filter"));
    });
  });
}

/* ==========================================================================
   2. 3D PERSPECTIVE TILT EFFECT ON CARDS
   ========================================================================== */
function attach3DTilt() {
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

/* ==========================================================================
   3. SERVICE DETAIL MODAL & OFFICIAL CARD VIEWER
   ========================================================================== */
window.openServiceModal = function(serviceId) {
  const srv = SERVICES_DATA.find(s => s.id === serviceId);
  if (!srv) return;

  const modal = document.getElementById("serviceModal");
  const content = document.getElementById("serviceModalInner");

  content.innerHTML = `
    <div class="modal-gallery-row">
      ${srv.images.map((img, i) => `<img src="${img}" alt="${srv.title} view ${i + 1}" />`).join("")}
    </div>
    <div class="modal-content-body">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
        <div style="width:52px; height:52px; border-radius:14px; background:${srv.accent}; color:#fff; display:flex; align-items:center; justify-content:center;">
          ${srv.iconSvg}
        </div>
        <div>
          <span style="font-size:0.76rem; font-weight:800; text-transform:uppercase; color:${srv.accent}; letter-spacing:0.08em;">
            HONEYBEE FMS DIVISION #${srv.num} • ${srv.categoryLabel}
          </span>
          <h2 style="font-size:1.75rem; font-weight:900; color:#0f172a; line-height:1.2;">${srv.title}</h2>
        </div>
      </div>

      <p style="font-size:1.02rem; color:#475569; margin-bottom:22px;">${srv.shortDesc}</p>

      <h4 style="font-size:0.95rem; font-weight:800; text-transform:uppercase; color:#0f172a; margin-bottom:12px;">
        Scope of Work & Standard Deliverables
      </h4>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px; margin-bottom:26px;">
        ${srv.deliverables.map(d => `
          <div style="background:#f8fafd; padding:12px 16px; border-radius:12px; border-left:4px solid ${srv.accent}; font-size:0.88rem; font-weight:600; color:#1e293b;">
            ${d}
          </div>
        `).join("")}
      </div>

      <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:space-between; align-items:center; padding-top:18px; border-top:1px solid #e2e8f0;">
        <div style="font-size:0.85rem; color:#475569;">
          <strong>Available Contracts:</strong> One-Time Deep Service • Monthly AMC • Dedicated Resident Staff
        </div>
        <a href="#contact" class="btn btn-primary" onclick="closeServiceModal(); prefillService('${srv.title}')">
          Request Free Site Inspection
        </a>
      </div>
    </div>
  `;

  modal.classList.add("open");
};

window.openOfficialCardModal = function() {
  const modal = document.getElementById("serviceModal");
  const content = document.getElementById("serviceModalInner");

  content.innerHTML = `
    <div style="background:#0b0f17; padding:24px; text-align:center;">
      <img src="assets/images/services-card.jpg" alt="Honeybee FMS Official Services Card" style="max-height:460px; max-width:100%; border-radius:16px; border:3px solid #f5a623; object-fit:contain;" />
    </div>
    <div class="modal-content-body" style="text-align:center;">
      <h3 style="font-size:1.5rem; font-weight:900; margin-bottom:8px;">Honeybee FMS — Official 10-Service Charter</h3>
      <p style="color:#475569; margin-bottom:18px;">All 10 specialized facility management divisions from our service card are available for customizable Annual Maintenance Contracts (AMC) and on-demand deployment.</p>
      <a href="#contact" class="btn btn-primary" onclick="closeServiceModal()">Get Complete Service Brochure & Quote</a>
    </div>
  `;
  modal.classList.add("open");
};

window.closeServiceModal = function() {
  const modal = document.getElementById("serviceModal");
  if (modal) modal.classList.remove("open");
};

window.prefillService = function(serviceName) {
  const select = document.getElementById("contactServiceSelect");
  if (select) {
    select.value = serviceName;
  }
};

/* ==========================================================================
   4. INTERACTIVE HONEYCOMB & GOLDEN PARTICLE CANVAS
   ========================================================================== */
function initHoneycombCanvas() {
  const canvas = document.getElementById("honeycombCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = 0;
  let height = 0;
  let mouse = { x: -999, y: -999 };
  const particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  canvas.parentElement.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  for (let i = 0; i < 36; i++) {
    particles.push({
      x: Math.random() * 1400,
      y: Math.random() * 800,
      r: Math.random() * 2.6 + 1,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -Math.random() * 0.55 - 0.15,
      alpha: Math.random() * 0.65 + 0.2
    });
  }

  function drawHexagon(x, y, r, strokeStyle, fillStyle) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + r * Math.cos(angle);
      const hy = y + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const hexRadius = 38;
    const hexHeight = Math.sqrt(3) * hexRadius;
    const horizDist = 1.5 * hexRadius;

    ctx.lineWidth = 1;
    for (let col = 0; col < width / horizDist + 2; col++) {
      for (let row = 0; row < height / hexHeight + 2; row++) {
        const cx = col * horizDist;
        const cy = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
        const dist = Math.hypot(cx - mouse.x, cy - mouse.y);

        if (dist < 170) {
          const intensity = 1 - dist / 170;
          drawHexagon(
            cx,
            cy,
            hexRadius - 2,
            `rgba(245, 166, 35, ${0.08 + intensity * 0.45})`,
            `rgba(245, 166, 35, ${intensity * 0.11})`
          );
        } else {
          drawHexagon(cx, cy, hexRadius - 2, "rgba(255, 255, 255, 0.035)", null);
        }
      }
    }

    // Floating golden pollen particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 190, 61, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   5. SCROLL REVEAL & PROGRESS BAR
   ========================================================================== */
function initScrollRevealAndProgress() {
  const progressBar = document.getElementById("scrollProgressBar");
  window.addEventListener("scroll", () => {
    if (progressBar) {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    }
  });

  const revealEls = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. ANIMATED STAT COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "true";
          const target = parseInt(entry.target.getAttribute("data-count"), 10);
          const suffix = entry.target.getAttribute("data-suffix") || "";
          const duration = 1800;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   7. BEFORE / AFTER DEEP CLEANING SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const range = document.getElementById("baRange");
  const beforeWrap = document.getElementById("baBeforeWrap");
  const handle = document.getElementById("baHandle");
  if (!range || !beforeWrap || !handle) return;

  function updateSlider() {
    const val = range.value;
    beforeWrap.style.width = val + "%";
    handle.style.left = val + "%";
  }

  range.addEventListener("input", updateSlider);
}

/* ==========================================================================
   8. INTERACTIVE FACILITY HOTSPOT EXPLORER
   ========================================================================== */
function initHotspotExplorer() {
  const stage = document.getElementById("hotspotStage");
  const panel = document.getElementById("hotspotDetailPanel");
  if (!stage || !panel) return;

  function selectHotspot(hs) {
    stage.querySelectorAll(".hotspot-pin").forEach(p => {
      p.classList.toggle("active", parseInt(p.dataset.id, 10) === hs.id);
    });

    panel.innerHTML = `
      <div>
        <img class="hotspot-detail-img" src="${hs.img}" alt="${hs.title}" />
        <span style="display:inline-block; background:${hs.color}; color:#fff; font-size:0.74rem; font-weight:800; padding:4px 12px; border-radius:99px; margin-bottom:10px;">
          ZONE #0${hs.id} • ${hs.badge}
        </span>
        <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin-bottom:10px;">${hs.title}</h3>
        <p style="font-size:0.92rem; color:#cbd5e1; margin-bottom:18px;">${hs.desc}</p>
      </div>
      <div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:18px;">
          ${hs.metrics.map(m => `
            <span style="background:rgba(255,255,255,0.08); border:1px solid rgba(245,166,35,0.35); color:#ffbe3d; font-size:0.76rem; font-weight:700; padding:5px 10px; border-radius:8px;">
              ✓ ${m}
            </span>
          `).join("")}
        </div>
        <a href="#contact" class="btn btn-primary" style="width:100%;">Deploy This Solution at Your Facility</a>
      </div>
    `;
  }

  HOTSPOTS_DATA.forEach(hs => {
    const pin = document.createElement("button");
    pin.className = "hotspot-pin";
    pin.style.left = hs.x;
    pin.style.top = hs.y;
    pin.dataset.id = hs.id;
    pin.textContent = hs.id;
    pin.title = hs.title;
    pin.addEventListener("click", () => selectHotspot(hs));
    pin.addEventListener("mouseenter", () => selectHotspot(hs));
    stage.appendChild(pin);
  });

  selectHotspot(HOTSPOTS_DATA[0]);
}

/* ==========================================================================
   9. GALLERY FILTERING & LIGHTBOX
   ========================================================================== */
function initGalleryFilters() {
  const buttons = document.querySelectorAll("[data-gallery-filter]");
  const items = document.querySelectorAll(".gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-gallery-filter");

      items.forEach(item => {
        if (cat === "all" || item.dataset.cat === cat) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   10. INSTANT FACILITY QUOTE & MANPOWER CALCULATOR
   ========================================================================== */
function initQuoteCalculator() {
  const areaInput = document.getElementById("calcAreaRange");
  const areaLabel = document.getElementById("calcAreaVal");
  const staffInput = document.getElementById("calcStaffRange");
  const staffLabel = document.getElementById("calcStaffVal");
  const chips = document.querySelectorAll(".calc-chip");
  const totalOut = document.getElementById("calcTotalOutput");
  const breakdownOut = document.getElementById("calcBreakdownOutput");

  if (!areaInput || !staffInput) return;

  function recalculate() {
    const sqFt = parseInt(areaInput.value, 10);
    const staffCount = parseInt(staffInput.value, 10);
    areaLabel.textContent = sqFt.toLocaleString() + " sq.ft";
    staffLabel.textContent = staffCount + " Personnel";

    const selectedServices = document.querySelectorAll(".calc-chip.selected");
    const srvCount = Math.max(1, selectedServices.length);

    const recommendedCleaners = Math.max(1, Math.round(sqFt / 4500));
    const totalTeam = staffCount + Math.min(srvCount, 4);

    if (totalOut) {
      totalOut.textContent = `${totalTeam} Dedicated Staff + ${srvCount} Divisions`;
    }
    if (breakdownOut) {
      breakdownOut.innerHTML = `
        <li>• Facility Area Covered: <strong>${sqFt.toLocaleString()} sq.ft</strong></li>
        <li>• Selected Honeybee Divisions: <strong>${srvCount} of 10 Services</strong></li>
        <li>• Recommended Housekeeping Crew: <strong>${recommendedCleaners} Janitors + 1 Supervisor</strong></li>
        <li>• Includes 100% PF/ESIC Compliance, Chemicals & Mechanized Equipment</li>
      `;
    }
  }

  areaInput.addEventListener("input", recalculate);
  staffInput.addEventListener("input", recalculate);

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      recalculate();
    });
  });

  recalculate();
}

/* ==========================================================================
   11. NAVBAR STICKY STATE, MOBILE MENU & CONTACT FORM
   ========================================================================== */
function initNavbarAndMobileMenu() {
  const navbar = document.getElementById("mainNavbar");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  const form = document.getElementById("honeybeeContactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      const status = document.getElementById("formSuccessMsg");
      btn.textContent = "✓ Inquiry Sent to Honeybee FMS Desk!";
      btn.style.background = "#228b44";
      btn.style.color = "#fff";
      if (status) {
        status.style.display = "block";
      }
      setTimeout(() => {
        form.reset();
        btn.textContent = "Request Free Site Visit & Proposal";
        btn.style.background = "";
        btn.style.color = "";
      }, 4500);
    });
  }
}
