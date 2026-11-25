 /**
     * FITNESS CENTER and GYM — Complete Frontend & Interactive CMS State Engine
     * Persists content changes in localStorage with JSON export/import support.
     */
    const STORAGE_KEY = 'fitness_center_gym_cms_v1';

    const DEFAULT_SITE_DATA = {
      hero: {
        badge: 'PREMIER ATHLETIC & PERFORMANCE CLUB',
        title: 'Elevate Your Strength. <span class="text-gradient">Redefine Your Limits.</span>',
        subtitle: 'Experience championship-grade strength equipment, metabolic conditioning turf, science-backed coaching, and an unstoppable community engineered for peak human performance.',
        bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=85',
        primaryCta: 'Join Now',
        stats: {
          members: '2,400+',
          trainers: '18+',
          equipment: '140+',
          years: '12+'
        }
      },
      facilities: [
        {
          id: 'fac-1',
          tag: 'Heavy Iron & Power',
          title: 'Calibrated Strength Zone',
          desc: 'Competition power racks, Eleiko barbells, calibrated steel plates, and custom plate-loaded biomechanics.',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'fac-2',
          tag: 'Endurance Lab',
          title: 'Next-Gen Cardio Deck',
          desc: 'Curved non-motorized treadmills, Concept2 RowErgs, SkiErgs, assault bikes, and heart-rate telemetry screens.',
          image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'fac-3',
          tag: 'Athletic Speed & Agility',
          title: '40-Meter Functional Turf',
          desc: 'High-density shock turf equipped with weighted prowler sleds, battle ropes, kettlebells, and plyometric rigs.',
          image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'fac-4',
          tag: 'Studio & Recovery',
          title: 'Group Arena & Luxury Suites',
          desc: 'Acoustic-isolated HIIT & yoga studios plus spa-grade locker rooms, digital safes, and infrared recovery suites.',
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80'
        }
      ],
      programs: [
        {
          title: 'Hypertrophy & Powerlifting',
          level: 'All Levels',
          duration: '60 Min',
          desc: 'Progressive overload barbell and dumbbell programming engineered to build dense lean muscle and raw maximal strength.',
          image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'MetCon & HIIT Ignite',
          level: 'High Intensity',
          duration: '45 Min',
          desc: 'Heart-pounding metabolic intervals combining sled sprints, kettlebell complexes, and ergometer bursts for rapid fat oxidation.',
          image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '1-on-1 Personal Coaching',
          level: 'Tailored',
          duration: '60 Min',
          desc: 'Bespoke training, InBody 3D body composition tracking, and macro nutrition guidance tailored strictly to your anatomy.',
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Athletic Mobility & Yoga',
          level: 'Recovery',
          duration: '50 Min',
          desc: 'Deep fascial decompression, breathwork, and joint resilience flows designed to accelerate recovery between heavy sessions.',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
        }
      ],
      trainers: [
        {
          id: 'tr-1',
          name: 'Marcus Vance',
          role: 'Head of Strength & Conditioning',
          cert: 'NSCA-CSCS • USAW L2',
          bio: '11 years coaching competitive powerlifters and transforming busy executives with data-driven strength cycles.',
          image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'tr-2',
          name: 'Elena Rostova',
          role: 'HIIT & Athletic Conditioning Lead',
          cert: 'NASM-CPT • CrossFit L2',
          bio: 'Former track sprinter specializing in high-output metabolic conditioning, endurance, and explosive core power.',
          image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'tr-3',
          name: 'Devon Brooks',
          role: 'Hypertrophy & Nutrition Specialist',
          cert: 'ISSN Sports Nutrition • ACE',
          bio: 'Combines biomechanical bodybuilding precision with sustainable flexible nutrition for lean body recomposition.',
          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'tr-4',
          name: 'Maya Lin',
          role: 'Mobility, Breathwork & Yoga Coach',
          cert: 'RYT-500 • FRCms',
          bio: 'Restores joint longevity, thoracic mobility, and nervous system balance for high-performing athletes.',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
        }
      ],
      gallery: [
        {
          id: 'gal-1',
          title: 'Main Obsidian Iron Arena',
          category: 'Gym Interior',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gal-2',
          title: 'Calibrated Dumbbell & Rack Wall',
          category: 'Equipment',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gal-3',
          title: 'Evening Battle Rope Conditioning',
          category: 'Training Sessions',
          image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gal-4',
          title: 'Weekend Deadlift & Strength Throwdown',
          category: 'Events',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gal-5',
          title: 'Performance Cardio & Rowing Deck',
          category: 'Equipment',
          image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'gal-6',
          title: '1-on-1 Coaching Precision',
          category: 'Training Sessions',
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80'
        }
      ],
      packages: [
        {
          id: 'pkg-1',
          name: 'Monthly Starter',
          duration: '1 Month',
          price: 'Rs.3000',
          period: '/month',
          popular: false,
          features: [
            'Unlimited 24/7 Gym & Turf Access',
            '1 Complimentary InBody 3D Scan',
            'Luxury Locker & Shower Suites',
            'Mobile App Workout Tracking'
          ]
        },
        {
          id: 'pkg-2',
          name: 'Quarterly Athlete',
          duration: '3 Months',
          price: 'Rs.6000',
          period: '/quarter',
          popular: false,
          features: [
            'Everything in Monthly Starter',
            'Unlimited Group HIIT & Yoga Classes',
            '2 Personal Training Strategy Sessions',
            '10% Off Protein & Recovery Bar'
          ]
        },
        {
          id: 'pkg-3',
          name: 'Half-Yearly Pro',
          duration: '6 Months',
          price: 'Rs.10 000',
          period: '/6 months',
          popular: true,
          features: [
            'Unlimited 24/7 VIP Gym & All Classes',
            'Monthly InBody Scan + Macro Plan',
            'Infrared Sauna & Recovery Access',
            '2 Free Guest Passes Every Month'
          ]
        },
        {
          id: 'pkg-4',
          name: 'Annual Elite',
          duration: '12 Months',
          price: 'Rs.15 000',
          period: '/year',
          popular: false,
          features: [
            'All Half-Yearly Pro VIP Privileges',
            '4 Private 1-on-1 Coaching Sessions',
            'Dedicated Personal Gear Locker',
            'Priority Event & Workshop Access'
          ]
        }
      ],
      schedule: [
        { id: 'sch-1', day: 'Monday', time: '06:00 AM – 07:00 AM', className: 'MetCon HIIT Ignite', coach: 'Elena Rostova', intensity: 'High' },
        { id: 'sch-2', day: 'Monday', time: '06:00 PM – 07:15 PM', className: 'Barbell Strength Foundations', coach: 'Marcus Vance', intensity: 'Moderate-High' },
        { id: 'sch-3', day: 'Tuesday', time: '07:00 AM – 08:00 AM', className: 'Hypertrophy Upper Push/Pull', coach: 'Devon Brooks', intensity: 'High' },
        { id: 'sch-4', day: 'Wednesday', time: '05:30 PM – 06:30 PM', className: 'Turf Sled & Conditioning', coach: 'Elena Rostova', intensity: 'High' },
        { id: 'sch-5', day: 'Thursday', time: '06:30 PM – 07:20 PM', className: 'Athletic Mobility & Flow', coach: 'Maya Lin', intensity: 'Low-Moderate' },
        { id: 'sch-6', day: 'Friday', time: '06:00 AM – 07:00 AM', className: 'Full-Body Power Circuit', coach: 'Marcus Vance', intensity: 'High' },
        { id: 'sch-7', day: 'Saturday', time: '09:00 AM – 10:30 AM', className: 'Saturday Team Throwdown', coach: 'All Coaches', intensity: 'High' }
      ],
      testimonials: [
        {
          id: 'test-1',
          name: 'Daniel Perera',
          result: 'Lost 16 kg & Deadlifted 200 kg',
          quote: 'FITNESS CENTER and GYM completely changed my relationship with training. The purple-lit strength arena feels electric, and Coach Marcus fixed my deadlift form in week one.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
        },
        {
          id: 'test-2',
          name: 'Sophia Wijesinghe',
          result: 'Half-Marathon PR & Lean Strength',
          quote: 'From the Concept2 rowers to Elena’s Saturday HIIT sessions, nothing feels like a generic commercial gym. Cleanest locker rooms and most motivating community in the city.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
        },
        {
          id: 'test-3',
          name: 'Kieran Silva',
          result: 'Gained 6.5 kg Lean Muscle',
          quote: 'Having InBody scans every month alongside calibrated equipment keeps me accountable. Easily the best investment I have made in my physical and mental health.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
        }
      ],
      contact: {
        phone: '+94 11 284 9920',
        whatsapp: '94771234567',
        email: 'concierge@fitnesscentergym.com',
        address: '740 Apex Performance Blvd, Suite 200, Colombo 03',
        hours: 'Mon–Fri: 5:00 AM – 11:00 PM | Sat–Sun: 6:00 AM – 9:00 PM',
        formspreeUrl: ''
      }
    };

    // Load state from localStorage or clone defaults
    let siteData = loadSiteData();
    let isAdminAuthenticated = false;
    let testimonialsSwiperInstance = null;

    function loadSiteData() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn('Storage read fallback:', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    }

    function saveSiteData() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
      } catch (e) {
        showToast('Storage quota reached. Use Export JSON to save large images.', 'warning');
      }
      renderAllSections();
      if (isAdminAuthenticated) renderAdminLists();
    }

    function showToast(message, type = 'success') {
      const stack = document.getElementById('toastStack');
      const id = 'toast-' + Date.now();
      const borderClass = type === 'success' ? 'border-success' : (type === 'danger' ? 'border-danger' : 'border-info');
      const icon = type === 'success' ? 'bi-check-circle-fill text-success' : 'bi-info-circle-fill text-info';

      const html = `
        <div id="${id}" class="toast show align-items-center text-white bg-dark border ${borderClass} shadow-lg mb-2" role="alert">
          <div class="d-flex">
            <div class="toast-body small fw-semibold">
              <i class="bi ${icon} me-2"></i>${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
          </div>
        </div>
      `;
      stack.insertAdjacentHTML('beforeend', html);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.remove();
      }, 4200);
    }

    /* ========================================================================
       RENDER PUBLIC WEBSITE SECTIONS
       ======================================================================== */
    function renderAllSections() {
      renderHero();
      renderFacilities();
      renderPrograms();
    
      renderGallery('All');
      renderMemberships();
      renderSchedule('All');
      renderTestimonials();
      renderContact();
    }

    function renderHero() {
      const h = siteData.hero;
      const heroEl = document.getElementById('home');
      heroEl.style.backgroundImage = `url('${h.bgImage}')`;
      document.getElementById('heroTaglineBadge').textContent = h.badge;
      document.getElementById('heroHeading').innerHTML = h.title;
      document.getElementById('heroSubtitle').textContent = h.subtitle;
      document.querySelector('#heroPrimaryCta span').textContent = h.primaryCta;

      document.getElementById('statMembers').textContent = h.stats.members;
      document.getElementById('statTrainers').textContent = h.stats.trainers;
      document.getElementById('statEquipment').textContent = h.stats.equipment;
      document.getElementById('statYears').textContent = h.stats.years;
    }

    function renderFacilities() {
      const grid = document.getElementById('facilitiesGrid');
      grid.innerHTML = siteData.facilities.map((f, idx) => `
        <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${idx * 70}">
          <article class="glass-card h-100 d-flex flex-column">
            <div class="card-img-wrapper">
              <img src="${f.image}" alt="${f.title}" loading="lazy" onerror="this.src='https://placehold.co/800x500/141424/a855f7?text=Facility+Zone'" />
              <div class="card-img-overlay-gradient"></div>
              <span class="badge bg-primary position-absolute bottom-0 start-0 m-3">${f.tag}</span>
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column">
              <h5 class="fw-bold text-white mb-2">${f.title}</h5>
              <p class="small text-secondary mb-0">${f.desc}</p>
            </div>
          </article>
        </div>
      `).join('');
    }

    function renderPrograms() {
      const grid = document.getElementById('programsGrid');
      grid.innerHTML = siteData.programs.map((p, idx) => `
        <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${idx * 70}">
          <article class="glass-card h-100 d-flex flex-column">
            <div class="card-img-wrapper">
              <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://placehold.co/800x500/141424/38bdf8?text=Training+Program'" />
              <div class="card-img-overlay-gradient"></div>
              <div class="position-absolute top-0 end-0 m-3 d-flex gap-1">
                <span class="badge bg-dark bg-opacity-75 border border-secondary border-opacity-25">${p.duration}</span>
              </div>
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <small class="text-info fw-bold text-uppercase">${p.level}</small>
                <h5 class="fw-bold text-white mt-1 mb-2">${p.title}</h5>
                <p class="small text-secondary mb-3">${p.desc}</p>
              </div>
              <button type="button" class="btn btn-glass btn-sm w-100" data-bs-toggle="modal" data-bs-target="#joinModal" data-plan="${p.title} Class">
                Book Session <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </article>
        </div>
      `).join('');
    }

    function renderTrainers() {
      const grid = document.getElementById('trainersGrid');
      grid.innerHTML = siteData.trainers.map((t, idx) => `
        <div class="col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay="${idx * 70}">
          <article class="glass-card h-100 d-flex flex-column">
            <div class="trainer-img-wrapper">
              <img src="${t.image}" alt="${t.name}" loading="lazy" onerror="this.src='https://placehold.co/600x700/141424/c084fc?text=Coach'" />
              <div class="card-img-overlay-gradient"></div>
              <span class="badge bg-dark bg-opacity-75 text-info border border-info border-opacity-25 position-absolute bottom-0 start-0 m-3">${t.cert}</span>
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <h5 class="fw-bold text-white mb-0">${t.name}</h5>
                <small class="text-gradient fw-bold d-block mb-2">${t.role}</small>
                <p class="small text-secondary mb-3">${t.bio}</p>
              </div>
              <button type="button" class="btn btn-outline-light btn-sm rounded-3" data-bs-toggle="modal" data-bs-target="#joinModal" data-plan="1-on-1 with ${t.name}">
                Train With ${t.name.split(' ')[0]}
              </button>
            </div>
          </article>
        </div>
      `).join('');
    }

    function renderGallery(filter = 'All') {
      const grid = document.getElementById('galleryGrid');
      const items = filter === 'All'
        ? siteData.gallery
        : siteData.gallery.filter(g => g.category === filter);

      grid.innerHTML = items.map(g => `
        <div class="col-sm-6 col-lg-4">
          <div class="gallery-item" onclick="openLightbox('${encodeURIComponent(g.image)}', '${encodeURIComponent(g.title)}', '${encodeURIComponent(g.category)}')">
            <img src="${g.image}" alt="${g.title}" loading="lazy" onerror="this.src='https://placehold.co/800x600/141424/8b5cf6?text=Gym+Gallery'" />
            <div class="gallery-caption">
              <span class="badge bg-primary align-self-start mb-1">${g.category}</span>
              <h6 class="fw-bold text-white mb-0">${g.title}</h6>
              <small class="text-info"><i class="bi bi-arrows-fullscreen me-1"></i>Click to expand</small>
            </div>
          </div>
        </div>
      `).join('');
    }

    window.openLightbox = function(imgEnc, titleEnc, catEnc) {
      document.getElementById('lightboxImg').src = decodeURIComponent(imgEnc);
      document.getElementById('lightboxTitle').textContent = decodeURIComponent(titleEnc);
      document.getElementById('lightboxCategory').textContent = decodeURIComponent(catEnc);
      const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
      modal.show();
    };

    function renderMemberships() {
      const grid = document.getElementById('membershipsGrid');
      grid.innerHTML = siteData.packages.map((pkg, idx) => `
        <div class="col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="${idx * 70}">
          <div class="glass-card pricing-card ${pkg.popular ? 'popular' : ''} p-4 h-100 d-flex flex-column justify-content-between">
            ${pkg.popular ? '<span class="popular-ribbon"><i class="bi bi-star-fill me-1"></i>Most Popular</span>' : ''}
            <div>
              <span class="badge bg-secondary bg-opacity-25 text-light mb-2">${pkg.duration}</span>
              <h4 class="fw-bold text-white">${pkg.name}</h4>
              <div class="my-3">
                <span class="display-5 fw-bolder text-gradient">${pkg.price}</span>
                <span class="text-secondary small">${pkg.period}</span>
              </div>
              <hr class="border-secondary border-opacity-25" />
              <ul class="list-unstyled small d-grid gap-2.5 mb-4">
                ${pkg.features.map(feat => `
                  <li class="d-flex align-items-start gap-2 text-light">
                    <i class="bi bi-check-circle-fill text-info mt-1"></i>
                    <span>${feat}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="d-grid gap-2">
              <button type="button" class="btn ${pkg.popular ? 'btn-brand' : 'btn-glass'}" data-bs-toggle="modal" data-bs-target="#joinModal" data-plan="${pkg.name} (${pkg.price})">
                Join Now
              </button>
              <a href="#contact" class="btn btn-link btn-sm text-secondary text-decoration-none">Questions? Contact Us</a>
            </div>
          </div>
        </div>
      `).join('');
    }

    function renderSchedule(dayFilter = 'All') {
      const tbody = document.getElementById('scheduleTableBody');
      const rows = dayFilter === 'All'
        ? siteData.schedule
        : siteData.schedule.filter(s => s.day === dayFilter);

      if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-secondary py-4">No scheduled group classes for ${dayFilter}. Open gym floor is available 24/7!</td></tr>`;
        return;
      }

      tbody.innerHTML = rows.map(s => `
        <tr>
          <td><span class="badge bg-primary bg-opacity-25 text-info border border-info border-opacity-25">${s.day}</span></td>
          <td class="fw-semibold text-white">${s.time}</td>
          <td class="fw-bold text-white">${s.className}</td>
          <td class="text-secondary">${s.coach}</td>
          <td><span class="badge bg-dark border border-secondary border-opacity-50">${s.intensity}</span></td>
          <td class="text-end">
            <button type="button" class="btn btn-brand btn-sm" data-bs-toggle="modal" data-bs-target="#joinModal" data-plan="${s.className} (${s.day} ${s.time})">
              Reserve
            </button>
          </td>
        </tr>
      `).join('');
    }

    function renderTestimonials() {
      const wrapper = document.getElementById('testimonialsWrapper');
      wrapper.innerHTML = siteData.testimonials.map(t => `
        <div class="swiper-slide h-auto">
          <div class="glass-card p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="text-warning mb-3">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
              <p class="text-light fst-italic mb-4">"${t.quote}"</p>
            </div>
            <div class="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-25">
              <img src="${t.image}" alt="${t.name}" class="rounded-circle object-fit-cover" width="52" height="52" onerror="this.src='https://placehold.co/100x100/141424/ffffff?text=M'" />
              <div>
                <h6 class="fw-bold text-white mb-0">${t.name}</h6>
                <small class="text-info fw-semibold">${t.result}</small>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      if (testimonialsSwiperInstance) {
        testimonialsSwiperInstance.destroy(true, true);
      }
      testimonialsSwiperInstance = new Swiper('.testimonialsSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 }
        }
      });
    }

    function renderContact() {
      const c = siteData.contact;
      document.getElementById('contactAddress').textContent = c.address;
      document.getElementById('contactPhone').textContent = c.phone;
      document.getElementById('contactEmail').textContent = c.email;
      document.getElementById('contactHours').textContent = c.hours;

      document.getElementById('footerAddress').textContent = c.address;
      document.getElementById('footerPhone').textContent = c.phone;
      document.getElementById('footerHours').textContent = c.hours;

      const waUrl = `https://wa.me/${c.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi FITNESS CENTER and GYM! I would like to inquire about memberships and a facility visit.')}`;
      document.getElementById('whatsappDirectLink').href = waUrl;
      document.getElementById('floatingWhatsappBtn').href = waUrl;
    }

    /* ========================================================================
       ADMIN CMS DASHBOARD LOGIC & CRUD HANDLERS
       ======================================================================== */
    function populateAdminForms() {
      // Hero
      document.getElementById('cmsHeroBg').value = siteData.hero.bgImage;
      document.getElementById('cmsHeroBadge').value = siteData.hero.badge;
      document.getElementById('cmsHeroCta1').value = siteData.hero.primaryCta;
      document.getElementById('cmsHeroTitle').value = siteData.hero.title;
      document.getElementById('cmsHeroSub').value = siteData.hero.subtitle;
      document.getElementById('cmsStatMembers').value = siteData.hero.stats.members;
      document.getElementById('cmsStatTrainers').value = siteData.hero.stats.trainers;
      document.getElementById('cmsStatEquipment').value = siteData.hero.stats.equipment;
      document.getElementById('cmsStatYears').value = siteData.hero.stats.years;

      // Contact
      document.getElementById('cmsPhone').value = siteData.contact.phone;
      document.getElementById('cmsWhatsapp').value = siteData.contact.whatsapp;
      document.getElementById('cmsEmail').value = siteData.contact.email;
      document.getElementById('cmsFormspree').value = siteData.contact.formspreeUrl || '';
      document.getElementById('cmsAddress').value = siteData.contact.address;
      document.getElementById('cmsHours').value = siteData.contact.hours;

      renderAdminLists();
    }

    function renderAdminLists() {
      // Gallery list
      document.getElementById('cmsGalleryList').innerHTML = siteData.gallery.map((g, idx) => `
        <div class="col-6 col-md-4">
          <div class="p-2 rounded bg-dark border border-secondary border-opacity-25">
            <img src="${g.image}" class="w-100 rounded mb-2" style="height: 110px; object-fit: cover;" />
            <div class="small fw-bold text-white text-truncate">${g.title}</div>
            <div class="d-flex justify-content-between align-items-center mt-1">
              <span class="badge bg-secondary">${g.category}</span>
              <button type="button" class="btn btn-sm btn-outline-danger py-0 px-2" onclick="deleteCmsItem('gallery', ${idx})">Delete</button>
            </div>
          </div>
        </div>
      `).join('');

      // Facilities list
      document.getElementById('cmsFacilitiesList').innerHTML = siteData.facilities.map((f, idx) => `
        <div class="p-3 rounded bg-dark border border-secondary border-opacity-25 d-flex justify-content-between align-items-center gap-2">
          <div>
            <strong class="text-white">${f.title}</strong> <span class="badge bg-primary ms-1">${f.tag}</span>
            <div class="small text-secondary">${f.desc}</div>
          </div>
          <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteCmsItem('facilities', ${idx})"><i class="bi bi-trash"></i></button>
        </div>
      `).join('');

      // Trainers list
      document.getElementById('cmsTrainersList').innerHTML = siteData.trainers.map((t, idx) => `
        <div class="p-3 rounded bg-dark border border-secondary border-opacity-25 d-flex justify-content-between align-items-center gap-2">
          <div>
            <strong class="text-white">${t.name}</strong> — <span class="text-info small">${t.role}</span>
            <div class="small text-secondary">${t.cert}</div>
          </div>
          <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteCmsItem('trainers', ${idx})"><i class="bi bi-trash"></i></button>
        </div>
      `).join('');

      // Packages editable cards
      document.getElementById('cmsPackagesList').innerHTML = siteData.packages.map((pkg, idx) => `
        <div class="p-3 rounded bg-dark border border-secondary border-opacity-25">
          <div class="row g-2 align-items-center">
            <div class="col-md-3">
              <label class="small text-secondary">Plan Name</label>
              <input type="text" class="form-control form-control-sm" value="${pkg.name}" onchange="updatePackageField(${idx}, 'name', this.value)" />
            </div>
            <div class="col-md-2">
              <label class="small text-secondary">Price</label>
              <input type="text" class="form-control form-control-sm" value="${pkg.price}" onchange="updatePackageField(${idx}, 'price', this.value)" />
            </div>
            <div class="col-md-3">
              <label class="small text-secondary">Duration</label>
              <input type="text" class="form-control form-control-sm" value="${pkg.duration}" onchange="updatePackageField(${idx}, 'duration', this.value)" />
            </div>
            <div class="col-md-4 d-flex align-items-end pt-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" ${pkg.popular ? 'checked' : ''} onchange="setPopularPackage(${idx})" />
                <label class="form-check-label small text-info">Highlight "Most Popular"</label>
              </div>
            </div>
            <div class="col-12">
              <label class="small text-secondary">Features (comma separated)</label>
              <input type="text" class="form-control form-control-sm" value="${pkg.features.join(', ')}" onchange="updatePackageFeatures(${idx}, this.value)" />
            </div>
          </div>
        </div>
      `).join('');

      // Schedule list
      document.getElementById('cmsScheduleList').innerHTML = siteData.schedule.map((s, idx) => `
        <div class="p-2 px-3 rounded bg-dark border border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
          <div class="small">
            <span class="badge bg-primary me-2">${s.day}</span>
            <strong class="text-white">${s.time}</strong> &bull; ${s.className} <span class="text-secondary">(${s.coach})</span>
          </div>
          <button type="button" class="btn btn-sm btn-outline-danger py-0" onclick="deleteCmsItem('schedule', ${idx})"><i class="bi bi-trash"></i></button>
        </div>
      `).join('');

      // Testimonials list
      document.getElementById('cmsTestimonialsList').innerHTML = siteData.testimonials.map((t, idx) => `
        <div class="p-3 rounded bg-dark border border-secondary border-opacity-25 d-flex justify-content-between align-items-center gap-2">
          <div>
            <strong class="text-white">${t.name}</strong> <span class="text-info small">(${t.result})</span>
            <div class="small text-secondary">"${t.quote}"</div>
          </div>
          <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteCmsItem('testimonials', ${idx})"><i class="bi bi-trash"></i></button>
        </div>
      `).join('');
    }

    window.deleteCmsItem = function(collection, index) {
      siteData[collection].splice(index, 1);
      saveSiteData();
      showToast('Item removed and live site updated.');
    };

    window.updatePackageField = function(index, field, value) {
      siteData.packages[index][field] = value;
      saveSiteData();
      showToast('Membership package updated.');
    };

    window.updatePackageFeatures = function(index, csv) {
      siteData.packages[index].features = csv.split(',').map(s => s.trim()).filter(Boolean);
      saveSiteData();
      showToast('Package features updated.');
    };

    window.setPopularPackage = function(index) {
      siteData.packages.forEach((p, i) => p.popular = (i === index));
      saveSiteData();
      showToast('Updated Most Popular badge.');
    };

    /* ========================================================================
       DOM READY INITIALIZATION & EVENT LISTENERS
       ======================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
      AOS.init({ duration: 700, once: true, offset: 60 });
      document.getElementById('currentYear').textContent = new Date().getFullYear();

      // Render Initial Website Content
      renderAllSections();

      // Navbar scroll effect
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('mainNavbar');
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      });

      // Gallery Category Filter Buttons
      document.querySelectorAll('#galleryFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('#galleryFilters .filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderGallery(btn.dataset.filter);
        });
      });

      // Schedule Day Filter Buttons
      document.querySelectorAll('#scheduleDayFilters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('#scheduleDayFilters .filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderSchedule(btn.dataset.day);
        });
      });

      // Join Modal Plan Pre-fill
      const joinModal = document.getElementById('joinModal');
      joinModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const plan = button ? button.getAttribute('data-plan') : 'VIP Membership';
        document.getElementById('selectedPlanInput').value = plan;
      });

      // Quick Join Form Submission
      document.getElementById('quickJoinForm').addEventListener('submit', e => {
        e.preventDefault();
        const plan = document.getElementById('selectedPlanInput').value;
        const name = document.getElementById('joinName').value;
        bootstrap.Modal.getInstance(joinModal).hide();
        e.target.reset();
        showToast(`Thank you ${name}! Your registration request for "${plan}" has been received. Our concierge will call you shortly.`);
      });

      // Contact Form Real Submission (Formspree HTTP POST or Verified Mailto Dispatch)
      const contactForm = document.getElementById('contactForm');
      contactForm.addEventListener('submit', async e => {
        e.preventDefault();
        if (!contactForm.checkValidity()) {
          contactForm.classList.add('was-validated');
          return;
        }

        const statusBox = document.getElementById('contactFormStatus');
        const submitBtn = document.getElementById('contactSubmitBtn');
        const payload = {
          name: document.getElementById('cName').value.trim(),
          email: document.getElementById('cEmail').value.trim(),
          phone: document.getElementById('cPhone').value.trim(),
          subject: document.getElementById('cSubject').value,
          message: document.getElementById('cMessage').value.trim()
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

        try {
          if (siteData.contact.formspreeUrl && siteData.contact.formspreeUrl.startsWith('http')) {
            const res = await fetch(siteData.contact.formspreeUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Email service returned an error.');
            statusBox.className = 'mt-3 alert alert-success';
            statusBox.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i><strong>Message Sent!</strong> Your inquiry has been delivered to ${siteData.contact.email}.`;
            contactForm.reset();
            contactForm.classList.remove('was-validated');
          } else {
            // Opens real email client pre-addressed to gym's configured email so message is genuinely dispatched
            const mailSubject = encodeURIComponent(`[FITNESS CENTER & GYM] ${payload.subject} - ${payload.name}`);
            const mailBody = encodeURIComponent(
              `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`
            );
            window.location.href = `mailto:${siteData.contact.email}?subject=${mailSubject}&body=${mailBody}`;
            statusBox.className = 'mt-3 alert alert-info';
            statusBox.innerHTML = `<i class="bi bi-envelope-check-fill me-2"></i><strong>Email Client Launched!</strong> Addressed to <strong>${siteData.contact.email}</strong>. (Tip: Add a Formspree Endpoint URL in Admin CMS for silent background API sending.)`;
          }
        } catch (err) {
          statusBox.className = 'mt-3 alert alert-danger';
          statusBox.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i><strong>Delivery Failed:</strong> ${err.message}. Please reach us via WhatsApp or ${siteData.contact.email}.`;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="bi bi-send-fill"></i><span>Send Message</span>';
        }
      });

      // Open Admin CMS Modal Triggers
      const adminModal = new bootstrap.Modal(document.getElementById('adminCmsModal'));
      document.getElementById('openAdminBtn').addEventListener('click', () => {
        if (isAdminAuthenticated) populateAdminForms();
        adminModal.show();
      });
      document.getElementById('footerAdminTrigger').addEventListener('click', e => {
        e.preventDefault();
        if (isAdminAuthenticated) populateAdminForms();
        adminModal.show();
      });

      // Admin Login Gate
      document.getElementById('adminLoginForm').addEventListener('submit', e => {
        e.preventDefault();
        const u = document.getElementById('adminUser').value.trim();
        const p = document.getElementById('adminPass').value.trim();
        if (u === 'admin' && p === 'gym2026') {
          isAdminAuthenticated = true;
          document.getElementById('adminLoginError').classList.add('d-none');
          document.getElementById('adminLoginGate').classList.add('d-none');
          document.getElementById('adminWorkspace').classList.remove('d-none');
          populateAdminForms();
          showToast('Authenticated as Gym Owner.');
        } else {
          document.getElementById('adminLoginError').classList.remove('d-none');
        }
      });

      document.getElementById('adminLogoutBtn').addEventListener('click', () => {
        isAdminAuthenticated = false;
        document.getElementById('adminWorkspace').classList.add('d-none');
        document.getElementById('adminLoginGate').classList.remove('d-none');
      });

      // CMS Hero Save
      document.getElementById('cmsHeroForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.hero.bgImage = document.getElementById('cmsHeroBg').value;
        siteData.hero.badge = document.getElementById('cmsHeroBadge').value;
        siteData.hero.primaryCta = document.getElementById('cmsHeroCta1').value;
        siteData.hero.title = document.getElementById('cmsHeroTitle').value;
        siteData.hero.subtitle = document.getElementById('cmsHeroSub').value;
        siteData.hero.stats = {
          members: document.getElementById('cmsStatMembers').value,
          trainers: document.getElementById('cmsStatTrainers').value,
          equipment: document.getElementById('cmsStatEquipment').value,
          years: document.getElementById('cmsStatYears').value
        };
        saveSiteData();
        showToast('Hero section & stats published!');
      });

      // CMS Add Gallery Image (URL or Local FileReader preview)
      document.getElementById('newGalFile').addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          document.getElementById('newGalUrl').value = ev.target.result;
        };
        reader.readAsDataURL(file);
      });

      document.getElementById('cmsAddGalleryForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.gallery.unshift({
          id: 'gal-' + Date.now(),
          title: document.getElementById('newGalTitle').value,
          category: document.getElementById('newGalCat').value,
          image: document.getElementById('newGalUrl').value
        });
        saveSiteData();
        e.target.reset();
        showToast('New photo added to gallery!');
      });

      // CMS Add Facility
      document.getElementById('cmsAddFacilityForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.facilities.push({
          id: 'fac-' + Date.now(),
          title: document.getElementById('newFacTitle').value,
          tag: document.getElementById('newFacTag').value,
          image: document.getElementById('newFacImg').value,
          desc: document.getElementById('newFacDesc').value
        });
        saveSiteData();
        e.target.reset();
        showToast('New facility zone added!');
      });

      // CMS Add Trainer
      document.getElementById('cmsAddTrainerForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.trainers.push({
          id: 'tr-' + Date.now(),
          name: document.getElementById('newTrName').value,
          role: document.getElementById('newTrRole').value,
          cert: document.getElementById('newTrCert').value,
          image: document.getElementById('newTrImg').value,
          bio: document.getElementById('newTrBio').value
        });
        saveSiteData();
        e.target.reset();
        showToast('Trainer profile published!');
      });

      // CMS Add Schedule
      document.getElementById('cmsAddScheduleForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.schedule.push({
          id: 'sch-' + Date.now(),
          day: document.getElementById('newSchDay').value,
          time: document.getElementById('newSchTime').value,
          className: document.getElementById('newSchClass').value,
          coach: document.getElementById('newSchCoach').value,
          intensity: 'High'
        });
        saveSiteData();
        e.target.reset();
        showToast('Class added to weekly timetable!');
      });

      // CMS Add Testimonial
      document.getElementById('cmsAddTestimonialForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.testimonials.push({
          id: 'test-' + Date.now(),
          name: document.getElementById('newTestName').value,
          result: document.getElementById('newTestResult').value,
          image: document.getElementById('newTestImg').value,
          quote: document.getElementById('newTestQuote').value
        });
        saveSiteData();
        e.target.reset();
        showToast('Testimonial added to slider!');
      });

      // CMS Contact & Email API Save
      document.getElementById('cmsContactForm').addEventListener('submit', e => {
        e.preventDefault();
        siteData.contact = {
          phone: document.getElementById('cmsPhone').value,
          whatsapp: document.getElementById('cmsWhatsapp').value,
          email: document.getElementById('cmsEmail').value,
          formspreeUrl: document.getElementById('cmsFormspree').value.trim(),
          address: document.getElementById('cmsAddress').value,
          hours: document.getElementById('cmsHours').value
        };
        saveSiteData();
        showToast('Contact info & email settings saved!');
      });

      // JSON Export / Import / Reset
      document.getElementById('exportJsonBtn').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(siteData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fitness-center-gym-config.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Exported site configuration JSON.');
      });

      document.getElementById('importJsonInput').addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          try {
            const parsed = JSON.parse(ev.target.result);
            if (!parsed.hero || !parsed.packages) throw new Error('Invalid schema');
            siteData = parsed;
            saveSiteData();
            populateAdminForms();
            showToast('Imported JSON configuration successfully!');
          } catch (err) {
            showToast('Invalid JSON configuration file.', 'danger');
          }
        };
        reader.readAsText(file);
      });

      document.getElementById('resetDefaultBtn').addEventListener('click', () => {
        siteData = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
        saveSiteData();
        populateAdminForms();
        showToast('Restored default demo content.');
      });
    });