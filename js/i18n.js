/* ================================
   Language Translations
   English / French
   ================================ */

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.speaking': 'Speaking',
    'nav.resources': 'Resources',
    'nav.blog': 'Blog',
    
    // Hero
    'hero.tagline': 'I build',
    'hero.contact': '✉️ Contact Me',
    'hero.cv': '📄 Download CV',
    'hero.call': '📅 Book a Call',
    
    // Typewriter phrases
    'typewriter.1': 'AI Agents for Africa 🌍',
    'typewriter.2': 'RAG Systems 🔍',
    'typewriter.3': 'Fine-tuned LLMs 🧠',
    'typewriter.4': 'Geospatial AI 🗺️',
    'typewriter.5': 'Multi-Agent Workflows 🤖',
    'typewriter.6': 'Intelligent Chatbots 💬',
    
    // Metrics
    'metrics.models': 'ML Models Deployed',
    'metrics.spaces': 'HuggingFace Spaces',
    'metrics.certs': 'AI Certifications',
    'metrics.papers': 'M.Sc. Thesis',
    
    // Sections
    'section.building': '🔥 Currently Building',
    'section.featured': '⭐ Featured Work',
    'section.github': '📊 GitHub Activity',
    'section.timeline': '📍 Journey',
    'section.skills': '🛠️ Tech Stack',
    'section.testimonials': '🤖 What the AIs Say',
    'section.newsletter': '📬 Stay in the Loop',
    'section.contact': 'Get in Touch',
    
    // Newsletter
    'newsletter.desc': 'Get occasional updates on AI, agents, and building for Africa. No spam, unsubscribe anytime.',
    'newsletter.btn': 'Subscribe',
    
    // Contact
    'contact.subtitle': 'Have a question or want to work together?',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.copy': '© 2026 Agentic Brahim · Built with ❤️ and ☕',
    
    // Lang toggle
    'lang.toggle': '🇫🇷',
    'lang.title': 'Français'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.speaking': 'Conférences',
    'nav.resources': 'Ressources',
    'nav.blog': 'Blog',
    
    // Hero
    'hero.tagline': 'Je construis',
    'hero.contact': '✉️ Me contacter',
    'hero.cv': '📄 Télécharger CV',
    'hero.call': '📅 Prendre RDV',
    
    // Typewriter phrases
    'typewriter.1': 'Agents IA pour l\'Afrique 🌍',
    'typewriter.2': 'Systèmes RAG 🔍',
    'typewriter.3': 'LLMs Fine-tunés 🧠',
    'typewriter.4': 'IA Géospatiale 🗺️',
    'typewriter.5': 'Workflows Multi-Agents 🤖',
    'typewriter.6': 'Chatbots Intelligents 💬',
    
    // Metrics
    'metrics.models': 'Modèles ML Déployés',
    'metrics.spaces': 'Espaces HuggingFace',
    'metrics.certs': 'Certifications IA',
    'metrics.papers': 'Mémoire de Master',
    
    // Sections
    'section.building': '🔥 En Construction',
    'section.featured': '⭐ Travaux Vedettes',
    'section.github': '📊 Activité GitHub',
    'section.timeline': '📍 Parcours',
    'section.skills': '🛠️ Stack Technique',
    'section.testimonials': '🤖 Ce que disent les IAs',
    'section.newsletter': '📬 Restez informé',
    'section.contact': 'Me Contacter',
    
    // Newsletter
    'newsletter.desc': 'Recevez des mises à jour sur l\'IA, les agents et le développement pour l\'Afrique. Pas de spam.',
    'newsletter.btn': 'S\'abonner',
    
    // Contact
    'contact.subtitle': 'Une question ou envie de collaborer ?',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer',
    
    // Footer
    'footer.copy': '© 2026 Agentic Brahim · Fait avec ❤️ et ☕',
    
    // Lang toggle
    'lang.toggle': '🇬🇧',
    'lang.title': 'English'
  }
};

// Get current language
function getCurrentLang() {
  return localStorage.getItem('lang') || 'en';
}

// Set language
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.body.classList.toggle('lang-fr', lang === 'fr');
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
}

// Apply translations to elements with data-i18n attribute
function applyTranslations(lang) {
  const t = translations[lang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // Update typewriter phrases if function exists
  if (window.updateTypewriterPhrases) {
    const phrases = [
      t['typewriter.1'],
      t['typewriter.2'],
      t['typewriter.3'],
      t['typewriter.4'],
      t['typewriter.5'],
      t['typewriter.6']
    ];
    window.updateTypewriterPhrases(phrases);
  }
}

// Update toggle button
function updateLangToggle(lang) {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const t = translations[lang];
    toggle.textContent = t['lang.toggle'];
    toggle.title = t['lang.title'];
  }
}

// Initialize language
function initLanguage() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  
  const currentLang = getCurrentLang();
  setLang(currentLang);
  
  toggle.addEventListener('click', () => {
    const newLang = getCurrentLang() === 'en' ? 'fr' : 'en';
    setLang(newLang);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initLanguage);
