import '@lukaspabst/library';
import './styles/main.css';
import './styles/hero.css';
import './styles/gallery.css';
import { components, type ComponentDefinition } from './data/registry';

type ColorTheme = 'default' | 'ocean' | 'forest' | 'sunset' | 'rose' | 'amber';

const availableThemes: { name: ColorTheme; label: string; color: string }[] = [
  { name: 'default', label: 'Purple', color: 'hsl(250, 95%, 64%)' },
  { name: 'ocean', label: 'Ocean Blue', color: 'hsl(210, 100%, 56%)' },
  { name: 'forest', label: 'Forest Green', color: 'hsl(150, 60%, 45%)' },
  { name: 'sunset', label: 'Sunset Orange', color: 'hsl(30, 100%, 56%)' },
  { name: 'rose', label: 'Rose Pink', color: 'hsl(330, 85%, 60%)' },
  { name: 'amber', label: 'Amber Gold', color: 'hsl(45, 95%, 50%)' }
];

const setColorTheme = (theme: ColorTheme) => {
  const root = document.documentElement;
  root.classList.forEach(c => {
    if (c.startsWith('theme-')) root.classList.remove(c);
  });
  if (theme !== 'default') {
    root.classList.add(`theme-${theme}`);
  }
  localStorage.setItem('zen-theme-color', theme);
};

const getCurrentTheme = (): ColorTheme => {
  return (localStorage.getItem('zen-theme-color') as ColorTheme) || 'default';
};

const availableFonts = [
  { name: 'Inter', label: 'Inter (Modern Sans)', weights: [300, 400, 500, 600, 700] },
  { name: 'Outfit', label: 'Outfit (Geometric)', weights: [300, 400, 500, 600, 700] },
  { name: 'Space Grotesk', label: 'Space Grotesk (Tech)', weights: [300, 400, 500, 600, 700] },
  { name: 'Plus Jakarta Sans', label: 'Plus Jakarta (Humanist)', weights: [300, 400, 500, 600, 700] },
  { name: 'Cinzel', label: 'Cinzel (Elegant)', weights: [400, 500, 600, 700, 800] }
];

const loadGoogleFont = (fontFamily: string, weights?: number[]) => {
  const fontName = fontFamily.replace(/ /g, '+');
  const knownFont = availableFonts.find(f => f.name === fontFamily);
  const activeWeights = weights || (knownFont ? knownFont.weights : [300, 400, 500, 600, 700]);
  const weightStr = activeWeights.join(';');
  const href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@${weightStr}&display=swap`;

  if (document.querySelector(`link[href="${href}"]`)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

loadGoogleFont('Outfit');

const savedTheme = getCurrentTheme();
if (savedTheme !== 'default') {
  document.documentElement.classList.add(`theme-${savedTheme}`);
}

const mountPoint = document.querySelector('main') || document.body;

const categories = ['General', 'Data Display', 'Forms', 'Feedback', 'Navigation', 'Effects'] as const;
const groupedComponents: Record<string, ComponentDefinition[]> = {};

categories.forEach(cat => {
  groupedComponents[cat] = components.filter(c => c.category === cat);
});

mountPoint.innerHTML = `
  <section class="hero">
    <div class="hero-particles">
      <zen-particles count="160" speed="0.5" maxSize="3" connected></zen-particles>
    </div>
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    
    <zen-navbar logoText="⚡ Zen UI" sticky transparent>
      <div slot="actions" style="display: flex; align-items: center; gap: 16px;">
        <zen-theme-picker></zen-theme-picker>
        <zen-theme-toggle></zen-theme-toggle>
      </div>
    </zen-navbar>
    
    <div class="hero-content">
      <zen-badge variant="primary" style="margin-bottom: 24px;">✨ v0.0.8 Released</zen-badge>
      
      <h1 class="hero-title">
        <span class="title-line">Build</span>
        <span class="title-line gradient-text">Beautiful</span>
        <span class="title-line">Interfaces</span>
      </h1>
      
      <p class="hero-subtitle">
        A premium collection of <strong>${components.length}</strong> animated web components.<br>
        Dark mode ready. Fully customizable. Zero dependencies.
      </p>
      
      <div class="hero-actions">
        <zen-button variant="primary" size="lg" id="explore-btn">
          Explore Components
        </zen-button>
        <zen-button variant="glass" size="lg">
          <a href="https://github.com/lukaspabst/zeN-UI" target="_blank" style="color:inherit;text-decoration:none;">
            View on GitHub
          </a>
        </zen-button>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>Scroll to explore</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
  
  <section class="controls-section">
    <div class="controls-grid">
      <div class="control-card">
        <h3>🎨 Color Theme</h3>
        <p>Choose your accent color</p>
        <div class="theme-options" id="theme-selector">
          ${availableThemes.map(t => `
            <button class="theme-swatch ${t.name === savedTheme ? 'active' : ''}" 
              data-theme="${t.name}" 
              title="${t.label}"
              style="background: ${t.color};">
            </button>
          `).join('')}
        </div>
      </div>
      <div class="control-card">
        <h3>🌓 Mode</h3>
        <p>Switch between light and dark</p>
        <zen-theme-toggle style="margin-top: 12px;"></zen-theme-toggle>
      </div>
      <div class="control-card">
        <h3>🔤 Typography</h3>
        <p>Select your preferred font</p>
        <div class="font-options" id="font-selector">
          ${availableFonts.map((f, i) => `
            <button class="font-option ${i === 1 ? 'active' : ''}" data-font="${f.name}" title="${f.label}">
              ${f.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <nav class="category-nav" id="category-nav">
    ${categories.map(cat => `
      <a href="#${cat.toLowerCase().replace(' ', '-')}" class="nav-pill">
        <span class="nav-label">${cat}</span>
        <span class="nav-count">${groupedComponents[cat].length}</span>
      </a>
    `).join('')}
  </nav>

  ${categories.map(cat => `
    <section id="${cat.toLowerCase().replace(' ', '-')}" class="category-section">
      <div class="section-header">
        <zen-text variant="h2" class="section-title">${cat}</zen-text>
        <p class="section-desc">${getCategoryDescription(cat)}</p>
      </div>
      <div class="gallery-container">
        <div class="gallery-track" data-category="${cat}">
          ${groupedComponents[cat].map((comp, i) => {
  let contentHTML = comp.usage;
  const scripts: string[] = [];
  contentHTML = contentHTML.replace(/<script>([\s\S]*?)<\/script>/gi, (_match: string, scriptContent: string) => {
    scripts.push(scriptContent);
    return '';
  });
  const scriptData = scripts.length > 0 ? `data-scripts="${encodeURIComponent(JSON.stringify(scripts))}"` : '';
  return `
            <div class="gallery-card" style="--index: ${i};" ${scriptData}>
              <div class="card-content">${contentHTML}</div>
              <div class="card-info">
                <h3>${comp.name}</h3>
                <p>${comp.description}</p>
                <code>${comp.tagName}</code>
              </div>
            </div>
          `}).join('')}
        </div>
        <div class="gallery-controls">
          <button class="gallery-btn prev-btn" data-category="${cat}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="gallery-btn next-btn" data-category="${cat}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  `).join('')}

  <footer class="site-footer">
    <div class="footer-content">
      <span style="font-size:2rem; font-weight:700; background:linear-gradient(135deg, var(--zen-primary), hsl(calc(var(--zen-primary-h) + 30), var(--zen-primary-s), calc(var(--zen-primary-l) + 10%))); -webkit-background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(0 0 20px var(--zen-primary));">zeN UI</span>
      <p class="footer-credit">Built with ❤️ by Lukas Pabst</p>
      
      <div class="footer-disclaimer">
        <div class="disclaimer-content">
          <h4>Full Component Library</h4>
          <p>This gallery showcases a curated selection of components. For complete documentation, API references, and to explore all 50+ components, visit our comprehensive Storybook.</p>
          <a href="#" target="_blank" class="zen-disclaimer-link">
            Open Storybook Dictionary
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
`;

setTimeout(() => {
  document.querySelectorAll('.gallery-card[data-scripts]').forEach(card => {
    const scriptsData = card.getAttribute('data-scripts');
    if (!scriptsData) return;

    try {
      const scripts: string[] = JSON.parse(decodeURIComponent(scriptsData));
      const contentEl = card.querySelector('.card-content');
      if (!contentEl) return;

      const customEls = contentEl.querySelectorAll('*');
      const tagNames = new Set<string>();
      customEls.forEach(el => {
        if (el.tagName.includes('-')) {
          tagNames.add(el.tagName.toLowerCase());
        }
      });

      const waitPromises = Array.from(tagNames).map(tag =>
        customElements.whenDefined(tag).catch(() => { })
      );

      Promise.all(waitPromises).then(() => {
        setTimeout(() => {
          scripts.forEach(script => {
            try {
              const scopedScript = script.replace(
                /document\.getElementById\(["']([^"']+)["']\)/g,
                `contentEl.querySelector('#$1')`
              );
              const fn = new Function('contentEl', scopedScript);
              fn(contentEl);
            } catch (e) {
              console.warn('Script execution failed:', e);
            }
          });
        }, 100);
      });
    } catch (e) {
      console.warn('Failed to parse scripts:', e);
    }
  });
}, 200);

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const zenButton = target.closest('zen-button');
  if (zenButton) {
    const onclickAttr = zenButton.getAttribute('onclick');
    if (onclickAttr) {
      try {
        const fn = new Function(onclickAttr);
        fn.call(zenButton);
        e.stopPropagation();
      } catch (err) {
        console.error('Error executing onclick:', err);
      }
    }
  }
});

document.querySelectorAll('.theme-swatch').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = (btn as HTMLElement).dataset.theme as ColorTheme;
    setColorTheme(theme);
    document.querySelectorAll('.theme-swatch').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.querySelectorAll('.font-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const font = (btn as HTMLElement).dataset.font!;
    loadGoogleFont(font);
    document.documentElement.style.setProperty('--zen-font-family', `'${font}', system-ui, sans-serif`);
    document.querySelectorAll('.font-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

setTimeout(() => {
  categories.forEach(cat => {
    const track = document.querySelector(`[data-category="${cat}"].gallery-track`) as HTMLElement;
    if (!track) return;

    const cards = track.querySelectorAll('.gallery-card');
    const prevBtn = document.querySelector(`.prev-btn[data-category="${cat}"]`) as HTMLButtonElement;
    const nextBtn = document.querySelector(`.next-btn[data-category="${cat}"]`) as HTMLButtonElement;
    let currentIndex = 0;
    let maxIndex = 0;

    const getCardDimensions = () => {
      const isMobile = window.innerWidth <= 768;
      const firstCard = track.querySelector('.gallery-card') as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth : (isMobile ? 300 : 400);
      const gap = isMobile ? 16 : 24;
      return { cardWidth, gap, isMobile };
    };

    const calculateState = () => {
      const { cardWidth, gap, isMobile } = getCardDimensions();
      const containerWidth = track.parentElement?.clientWidth || window.innerWidth;

      if (isMobile) {
        // On mobile, each card takes up the full view, so maxIndex = cards.length - 1
        maxIndex = Math.max(0, cards.length - 1);
      } else {
        const trackPadding = 120;
        const totalTrackWidth = (cards.length * (cardWidth + gap)) - gap + trackPadding;
        const maxScrollPx = Math.max(0, totalTrackWidth - containerWidth);
        maxIndex = Math.ceil(maxScrollPx / (cardWidth + gap));
      }

      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updatePosition();
    };

    const updateButtonStates = () => {
      if (prevBtn) prevBtn.disabled = currentIndex <= 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;
    };

    const updatePosition = () => {
      const { cardWidth, gap } = getCardDimensions();
      const offset = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
      updateButtonStates();
    };

    calculateState();
    window.addEventListener('resize', calculateState);

    prevBtn?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updatePosition();
      }
    });

    nextBtn?.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updatePosition();
      }
    });
  });
}, 100);

document.querySelectorAll('.nav-pill').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = (e.currentTarget as HTMLElement).getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('explore-btn')?.addEventListener('click', () => {
  document.querySelector('.category-nav')?.scrollIntoView({ behavior: 'smooth' });
});

function getCategoryDescription(cat: string): string {
  const descriptions: Record<string, string> = {
    'General': 'Core interactive elements like buttons, icons, and typography',
    'Data Display': 'Cards, badges, counters, and data visualization components',
    'Forms': 'Input fields, selects, checkboxes, and form controls',
    'Feedback': 'Progress indicators, loading states, and user feedback',
    'Navigation': 'Tabs, breadcrumbs, and navigation components',
    'Effects': 'Visual effects, animations, and background enhancements'
  };
  return descriptions[cat] || '';
}

console.log('Zen UI Gallery initialized');
