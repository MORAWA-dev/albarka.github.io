/* ================================
   Terminal Easter Egg
   Hidden CLI for developers
   Trigger: Press ` (backtick) or Ctrl+`
   ================================ */

const terminalCommands = {
  help: () => `
Available commands:
  help          Show this message
  about         Who is Agentic Brahim?
  skills        List technical skills
  projects      Show featured projects
  contact       How to reach me
  social        Social media links
  clear         Clear terminal
  exit          Close terminal
  matrix        🔴💊 or 🔵💊?
  coffee        ☕
  hire          Available for work?
  secret        🤫
  `,
  
  about: () => `
👋 Hi, I'm Ibrahim Kabore (Agentic Brahim)

🎓 M.Sc. Geomatics & Environment
🤖 AI Engineer building LLMs, RAG, and Agents
🌍 Focused on African Agriculture & Mining
📍 Based in Morocco

Type 'skills' to see what I work with.
  `,
  
  skills: () => `
🛠️ Tech Stack:

AI & GenAI     → RAG, CrewAI, QLoRA, LangChain, NeMo
Machine Learning → PyTorch, Scikit-learn, MLOps
Geospatial     → Google Earth Engine, QGIS, Rasterio
Languages      → Python, R, SQL, JavaScript

Type 'projects' to see my work.
  `,
  
  projects: () => `
🚀 Featured Projects:

1. AIbrahim        → AI portfolio assistant chatbot
2. Soil Analytics  → ML-powered soil prediction dashboard
3. AgriAgent       → Agentic AI for African farmers
4. SAR Monitoring  → Radar-based crop monitoring

Visit: https://agenticbrahim.dev/pages/projects.html
  `,
  
  contact: () => `
📬 Get in Touch:

Email    → hello@agenticbrahim.dev
Calendar → calendly.com/ibrakabore01
LinkedIn → linkedin.com/in/ibrahimkabore

Or just say hi! I don't bite 🙂
  `,
  
  social: () => `
🔗 Find me online:

GitHub      → github.com/MORAWA-dev
HuggingFace → huggingface.co/kimcomehome
LinkedIn    → linkedin.com/in/ibrahimkabore
YouTube     → youtube.com/@geomatics101k
  `,
  
  matrix: () => `
🔴 Red pill: You stay in Wonderland, and I show you how deep the rabbit hole goes.

🔵 Blue pill: The story ends. You wake up in your bed and believe whatever you want to.

> You took the red pill. Welcome to the real world, Neo.
> The Matrix has you...

Type 'help' to continue your journey.
  `,
  
  coffee: () => `
☕ Coffee Status: CRITICAL

   ( (
    ) )
  ........
  |      |]
  \\      /
   '----'

Fuel level: ████████░░ 80%
Productivity: MAXIMUM

Thanks for the coffee! ☕
  `,
  
  hire: () => `
💼 Availability: OPEN FOR OPPORTUNITIES

I'm interested in:
  • AI/ML Engineering roles
  • LLM & RAG consulting
  • Geospatial AI projects
  • African tech initiatives

📧 hello@agenticbrahim.dev
📅 calendly.com/ibrakabore01

Let's build something amazing together!
  `,
  
  secret: () => `
🤫 You found the secret!

Here's a quote that keeps me going:

"The best way to predict the future is to create it."
    — Abraham Lincoln (maybe)

Thanks for exploring! You're the curious type.
I like that. 🚀

PS: Try 'matrix' for another surprise.
  `,
  
  clear: () => 'CLEAR',
  
  exit: () => 'EXIT',
  
  whoami: () => 'You are a curious developer. I like you.',
  
  ls: () => 'index.html  pages/  assets/  css/  js/  README.md',
  
  pwd: () => '/home/agenticbrahim/portfolio',
  
  date: () => new Date().toString(),
  
  echo: (args) => args.join(' ') || '',
  
  sudo: () => '🚫 Nice try! Permission denied. You are not root here.',
  
  rm: () => '🚫 Whoa there! No deleting allowed in this terminal.',
  
  hack: () => `
🚨 INTRUSION DETECTED 🚨

Just kidding. 😄

This is a safe space. No hacking needed.
Type 'help' for available commands.
  `,
};

class Terminal {
  constructor() {
    this.isOpen = false;
    this.history = [];
    this.historyIndex = -1;
    this.init();
  }
  
  init() {
    this.createDOM();
    this.bindEvents();
  }
  
  createDOM() {
    // Terminal container
    this.terminal = document.createElement('div');
    this.terminal.id = 'easter-terminal';
    this.terminal.innerHTML = `
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span class="terminal-btn close"></span>
          <span class="terminal-btn minimize"></span>
          <span class="terminal-btn maximize"></span>
        </div>
        <span class="terminal-title">agentic@brahim ~ </span>
      </div>
      <div class="terminal-body">
        <div class="terminal-output">
          <div class="terminal-welcome">
Welcome to Agentic Brahim's Terminal! 🚀
Type 'help' for available commands.
          </div>
        </div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">→ </span>
          <input type="text" class="terminal-input" autofocus spellcheck="false" autocomplete="off">
        </div>
      </div>
    `;
    
    document.body.appendChild(this.terminal);
    
    this.output = this.terminal.querySelector('.terminal-output');
    this.input = this.terminal.querySelector('.terminal-input');
    this.closeBtn = this.terminal.querySelector('.terminal-btn.close');
  }
  
  bindEvents() {
    // Toggle with backtick or Ctrl+`
    document.addEventListener('keydown', (e) => {
      if (e.key === '`' && !this.isInputFocused()) {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
    
    // Input handling
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.executeCommand(this.input.value);
        this.input.value = '';
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.navigateHistory(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.navigateHistory(1);
      }
    });
    
    // Close button
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Click outside to keep focus
    this.terminal.addEventListener('click', () => this.input.focus());
  }
  
  isInputFocused() {
    const active = document.activeElement;
    return active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable;
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  open() {
    this.isOpen = true;
    this.terminal.classList.add('open');
    this.input.focus();
  }
  
  close() {
    this.isOpen = false;
    this.terminal.classList.remove('open');
  }
  
  executeCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    const [command, ...args] = trimmed.split(' ');
    
    if (!trimmed) return;
    
    // Add to history
    this.history.push(cmd);
    this.historyIndex = this.history.length;
    
    // Show command in output
    this.appendOutput(`→ ${cmd}`, 'command');
    
    // Execute
    if (command === 'clear') {
      this.output.innerHTML = '';
      return;
    }
    
    if (command === 'exit') {
      this.close();
      return;
    }
    
    if (terminalCommands[command]) {
      const result = typeof terminalCommands[command] === 'function' 
        ? terminalCommands[command](args) 
        : terminalCommands[command];
      this.appendOutput(result);
    } else {
      this.appendOutput(`Command not found: ${command}\nType 'help' for available commands.`, 'error');
    }
    
    // Scroll to bottom
    this.output.scrollTop = this.output.scrollHeight;
  }
  
  appendOutput(text, type = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    this.output.appendChild(line);
  }
  
  navigateHistory(direction) {
    const newIndex = this.historyIndex + direction;
    if (newIndex >= 0 && newIndex < this.history.length) {
      this.historyIndex = newIndex;
      this.input.value = this.history[newIndex];
    } else if (newIndex >= this.history.length) {
      this.historyIndex = this.history.length;
      this.input.value = '';
    }
  }
}

// Initialize terminal when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.agenticTerminal = new Terminal();
});
