/**
 * Confetti Celebration Effects
 * Triggers confetti on special achievements and milestones
 */

class ConfettiCelebration {
  constructor() {
    this.colors = ['#6c5ce7', '#0984e3', '#00b894', '#fdcb6e', '#e17055', '#fd79a8'];
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    this.init();
  }

  init() {
    // Create canvas for confetti
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'confetti-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    
    window.addEventListener('resize', () => this.resize());
    
    // Set up achievement triggers
    this.setupTriggers();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setupTriggers() {
    // Newsletter subscription success
    document.addEventListener('newsletter-subscribed', () => {
      this.celebrate('center', 'burst');
    });

    // Contact form submitted
    document.addEventListener('contact-submitted', () => {
      this.celebrate('center', 'burst');
    });

    // Scroll milestone (first time reaching bottom)
    let reachedBottom = false;
    window.addEventListener('scroll', () => {
      if (!reachedBottom) {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        if (scrollPercent > 0.95) {
          reachedBottom = true;
          this.celebrate('bottom', 'fountain');
        }
      }
    });

    // Click on "Hire Me" or similar CTAs
    document.querySelectorAll('a[href*="contact"], a[href*="mailto"], .btn-primary').forEach(el => {
      el.addEventListener('click', (e) => {
        // Small celebration for important clicks
        const rect = e.target.getBoundingClientRect();
        this.celebrate({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }, 'pop', 15);
      });
    });

    // Achievement: Viewing all projects
    this.trackProjectViews();
    
    // Special: Konami code
    this.setupKonamiCode();
  }

  trackProjectViews() {
    const projectCards = document.querySelectorAll('.project-card');
    const viewed = new Set();
    
    projectCards.forEach((card, i) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            viewed.add(i);
            // If all projects viewed, celebrate!
            if (viewed.size === projectCards.length && projectCards.length >= 3) {
              this.celebrate('center', 'burst');
              observer.disconnect();
            }
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(card);
    });
  }

  setupKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          this.celebrate('center', 'explosion');
          konamiIndex = 0;
          // Show secret message
          this.showAchievement('🎮 Konami Code Unlocked!', 'You found the secret!');
        }
      } else {
        konamiIndex = 0;
      }
    });
  }

  celebrate(position, type = 'burst', count = 50) {
    let x, y;
    
    if (typeof position === 'object') {
      x = position.x;
      y = position.y;
    } else if (position === 'center') {
      x = this.canvas.width / 2;
      y = this.canvas.height / 2;
    } else if (position === 'bottom') {
      x = this.canvas.width / 2;
      y = this.canvas.height - 50;
    } else if (position === 'top') {
      x = this.canvas.width / 2;
      y = 50;
    }

    switch (type) {
      case 'burst':
        this.createBurst(x, y, count);
        break;
      case 'fountain':
        this.createFountain(x, y, count);
        break;
      case 'pop':
        this.createPop(x, y, count);
        break;
      case 'explosion':
        this.createExplosion(count * 3);
        break;
    }

    if (!this.animationId) {
      this.animate();
    }
  }

  createParticle(x, y, vx, vy, size, color, shape = 'rect') {
    return {
      x, y, vx, vy,
      size,
      color,
      shape,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      gravity: 0.3,
      friction: 0.99,
      opacity: 1,
      decay: 0.01 + Math.random() * 0.01
    };
  }

  createBurst(x, y, count) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const velocity = 8 + Math.random() * 8;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      const size = 5 + Math.random() * 10;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const shape = Math.random() > 0.5 ? 'rect' : 'circle';
      
      this.particles.push(this.createParticle(x, y, vx, vy, size, color, shape));
    }
  }

  createFountain(x, y, count) {
    for (let i = 0; i < count; i++) {
      const spread = 60;
      const vx = (Math.random() - 0.5) * spread * 0.2;
      const vy = -10 - Math.random() * 15;
      const size = 5 + Math.random() * 8;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      
      this.particles.push(this.createParticle(x + (Math.random() - 0.5) * spread, y, vx, vy, size, color));
    }
  }

  createPop(x, y, count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 4;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      const size = 3 + Math.random() * 5;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      
      this.particles.push(this.createParticle(x, y, vx, vy, size, color, 'circle'));
    }
  }

  createExplosion(count) {
    // Multi-point explosion for Konami code
    const points = [
      { x: this.canvas.width * 0.2, y: this.canvas.height * 0.3 },
      { x: this.canvas.width * 0.5, y: this.canvas.height * 0.2 },
      { x: this.canvas.width * 0.8, y: this.canvas.height * 0.3 },
      { x: this.canvas.width * 0.3, y: this.canvas.height * 0.6 },
      { x: this.canvas.width * 0.7, y: this.canvas.height * 0.6 },
    ];

    points.forEach(point => {
      this.createBurst(point.x, point.y, count / points.length);
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      
      // Update physics
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      // Remove dead particles
      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      // Draw particle
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.animate());
    } else {
      this.animationId = null;
    }
  }

  showAchievement(title, subtitle) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="achievement-icon">🏆</div>
      <div class="achievement-content">
        <div class="achievement-title">${title}</div>
        <div class="achievement-subtitle">${subtitle}</div>
      </div>
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Remove after delay
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.confetti = new ConfettiCelebration();
});

// Helper function for manual triggering
window.triggerConfetti = (position = 'center', type = 'burst', count = 50) => {
  if (window.confetti) {
    window.confetti.celebrate(position, type, count);
  }
};
