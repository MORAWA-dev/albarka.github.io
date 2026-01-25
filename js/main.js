/* ================================
   Main JavaScript
   Theme toggle, scroll, form handling
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Randomize Hero Colors
  initHeroColors();
  
  // Theme Toggle
  initThemeToggle();
  
  // Scroll to Top Button
  initScrollTop();
  
  // Contact Form (if exists)
  initContactForm();
});

/* Hero Color Randomization */
function initHeroColors() {
  const heroBanner = document.querySelector('.hero-banner');
  if (!heroBanner) return;
  
  // Color palettes (pastel/soft colors like maraj.ai)
  const colorPalettes = [
    { banner: '#a8d4f0', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Blue
    { banner: '#f8c8dc', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Pink
    { banner: '#c5b4e3', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Purple
    { banner: '#b8e6c1', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Green
    { banner: '#ffe5a0', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Yellow
    { banner: '#ffd4b8', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Orange/Peach
    { banner: '#a8e6e6', shapes: ['#fff', '#f5f3eb', 'rgba(255,255,255,0.4)'] },  // Teal
  ];
  
  // Pick random palette
  const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
  
  // Apply banner color
  heroBanner.style.background = palette.banner;
  
  // Randomize shape positions and styles
  randomizeShapes(palette);
}

function randomizeShapes(palette) {
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach(shape => {
    // Random slight position offset
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    
    // Add slight position variation
    shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    
    // Randomize animation duration slightly
    const baseDuration = parseFloat(getComputedStyle(shape).animationDuration) || 8;
    const newDuration = baseDuration + (Math.random() - 0.5) * 4;
    shape.style.animationDuration = `${newDuration}s`;
    
    // Random animation delay for variety
    shape.style.animationDelay = `${Math.random() * -5}s`;
    
    // Randomly hide some shapes (30% chance) for variety
    if (Math.random() < 0.25) {
      shape.style.opacity = '0';
    }
  });
  
  // Specifically style some shapes with palette colors
  const squareShape = document.querySelector('.shape-square');
  const circleShape = document.querySelector('.shape-circle');
  const chevronShape = document.querySelector('.shape-chevron');
  const squareOutline = document.querySelector('.shape-square-outline');
  
  if (squareShape) {
    squareShape.style.background = palette.shapes[0];
    // Random rotation
    squareShape.style.setProperty('--base-rotation', `${Math.random() * 30}deg`);
  }
  if (squareOutline) {
    // Random size variation
    const size = 40 + Math.random() * 30;
    squareOutline.style.width = `${size}px`;
    squareOutline.style.height = `${size}px`;
  }
  if (circleShape) {
    circleShape.style.borderColor = palette.shapes[2];
    // Random size
    const size = 80 + Math.random() * 40;
    circleShape.style.width = `${size}px`;
    circleShape.style.height = `${size}px`;
  }
  if (chevronShape) {
    chevronShape.style.color = palette.shapes[2];
    // Random symbol
    const symbols = ['›', '‹', '∿', '○', '◇', '△', '▽'];
    chevronShape.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  }
}

/* Theme Toggle */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  
  // Check saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
  
  toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
}

/* Scroll to Top */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTop');
  if (!scrollBtn) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Contact Form with AJAX */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        showToast('Message Sent!', 'Thanks for reaching out. I\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showToast('Oops!', 'Something went wrong. Please try again or email me directly.', 'error');
    }
    
    btn.innerHTML = originalText;
    btn.disabled = false;
  });
}

/* Toast Notification */
function showToast(title, message, type = 'success') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<h4>${title}</h4><p>${message}</p>`;
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
