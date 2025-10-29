// Basic interactive behaviors: mobile menu, animate chart bars, pricing toggle, testimonials, contact demo

document.addEventListener('DOMContentLoaded', function () {
  // Scroll animations for sections
  const sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Only trigger animation once
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Enhanced dashboard interactions
  const dashboardCard = document.querySelector('.dashboard-card');
  if (dashboardCard) {
    dashboardCard.addEventListener('mousemove', (e) => {
      const rect = dashboardCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 20;
      const yPercent = (y / rect.height - 0.5) * 20;
      
      dashboardCard.style.transform = 
        `translateZ(10px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
    });

    dashboardCard.addEventListener('mouseleave', () => {
      dashboardCard.style.transform = '';
    });
  }
  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 1) Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('hidden');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.add('hidden'));
  });

  // 2) Animate dashboard bars when visible
  const bars = document.querySelectorAll('.chart-bars .bar');
  function animateBars() {
    bars.forEach((b, i) => {
      const val = Number(b.dataset.value) || 50;
      // staggered animation
      setTimeout(() => {
        b.style.height = `${val}%`;
      }, i * 120);
    });
  }

  // Use IntersectionObserver to trigger when dashboard is visible
  const chart = document.getElementById('dash-chart');
  if (chart && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
          observer.disconnect();
        }
      });
    }, {threshold: 0.35});
    obs.observe(chart);
  } else {
    // fallback
    animateBars();
  }

  // 3) Pricing toggle (monthly <-> annual)
  const billingToggle = document.getElementById('billing-toggle');
  const priceAmounts = document.querySelectorAll('.price-card .amount');

  function updatePrices(annual) {
    priceAmounts.forEach(el => {
      const mo = Number(el.dataset.month || 0);
      const yr = Number(el.dataset.year || Math.round(mo * 0.8));
      
      // Add updating animation class
      el.classList.add('updating');
      
      setTimeout(() => {
        if (el.dataset.month == "0" && el.dataset.year == "0") {
          // Starter free remains unchanged
          el.textContent = annual ? '0' : '0';
          const period = el.parentElement.querySelector('.period');
          if (period) period.textContent = '/mo';
        } else {
          el.textContent = annual ? String(yr) : String(mo);
          const period = el.parentElement.querySelector('.period');
          if (period) period.textContent = '/mo';
        }
      }, 300); // Update halfway through animation
      
      // Remove animation class after animation completes
      setTimeout(() => {
        el.classList.remove('updating');
      }, 600);
    });
  }

  billingToggle.addEventListener('change', () => {
    updatePrices(billingToggle.checked);
  });

  // set initial according to default (monthly)
  updatePrices(billingToggle.checked);

  // 4) Testimonials simple carousel
  const tests = document.querySelectorAll('.testimonial');
  let tIndex = 0;
  const nextBtn = document.getElementById('next-test');
  const prevBtn = document.getElementById('prev-test');

  function showTest(i) {
    tests.forEach(t => t.classList.add('hidden'));
    const next = tests[i];
    if (next) next.classList.remove('hidden');
  }

  nextBtn.addEventListener('click', () => {
    tIndex = (tIndex + 1) % tests.length;
    showTest(tIndex);
  });
  prevBtn.addEventListener('click', () => {
    tIndex = (tIndex - 1 + tests.length) % tests.length;
    showTest(tIndex);
  });

  // auto-advance every 6s
  setInterval(() => {
    tIndex = (tIndex + 1) % tests.length;
    showTest(tIndex);
  }, 6000);

  // 5) Contact form demo behaviour
  const contactForm = document.getElementById('contact-form');
  const sendBtn = document.getElementById('send-btn');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    setTimeout(() => {
      sendBtn.textContent = 'Sent ✓';
      sendBtn.classList.add('sent');
      // reset visual after a moment
      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send message';
        sendBtn.classList.remove('sent');
        contactForm.reset();
      }, 1800);
    }, 900);
  });

  // 6) Newsletter subscription
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSubmit = document.getElementById('newsletter-submit');
  
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    
    newsletterSubmit.disabled = true;
    newsletterSubmit.textContent = 'Subscribing...';
    
    // Simulate API call
    setTimeout(() => {
      newsletterSubmit.textContent = 'Subscribed ✓';
      newsletterSubmit.classList.add('sent');
      
      // Reset form after delay
      setTimeout(() => {
        newsletterSubmit.disabled = false;
        newsletterSubmit.textContent = 'Subscribe';
        newsletterSubmit.classList.remove('sent');
        newsletterForm.reset();
      }, 2000);
    }, 1000);
  });

  // 7) Fill footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (ev) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        ev.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
