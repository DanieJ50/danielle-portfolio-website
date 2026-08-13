(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const projectManifest = [
    {
      title: 'Heartberry Quest', year: '2026', category: ['game', 'branding', 'ux'],
      label: 'Game visual system', accent: '#8a42cc', image: 'assets/heartberry/vespera-final.webp',
      description: 'A character-led puzzle-game identity spanning six heroes, Queen Vespera Nightbloom, regions, powers, boss UI, worldbuilding, brand architecture, and promotional assets.',
      tags: ['Creative direction', 'Game UI', 'Character system']
    },
    {
      title: 'SaveSip / Cup$i', year: '2026', category: ['ux', 'branding'],
      label: 'UX/UI + branding', accent: '#4386f5', image: 'assets/portfolio/savesip-ui.webp',
      description: 'A gamified drink-spending tracker that turns small café purchases into visible savings feedback, challenges, levels, mascots, and habit-building moments.',
      tags: ['Product design', 'Gamification', 'Wireframes']
    },
    {
      title: 'Berry Vibes Recipe Builder', year: '2026', category: ['ux', 'web', 'branding'],
      label: 'Recipe experience', accent: '#f44861', image: 'assets/portfolio/ccd-battle-arena.webp',
      description: 'A cozy recipe-building system organized around flavor, texture, ingredients, cooking method, swaps, saved recipes, and playful guided choices.',
      tags: ['UX/UI', 'Personalization', 'Content design']
    },
    {
      title: 'SmartCart', year: '2026', category: ['ux'],
      label: 'UX research + product', accent: '#78c957', emoji: '🛒',
      description: 'A shopping-list concept focused on repeat buys, useful item customization, transparent smart suggestions, and reducing the tap-heavy friction of grocery planning.',
      tags: ['Interviews', 'Competitive audit', 'MVP']
    },
    {
      title: 'Crosswalks That Explain Themselves', year: '2026', category: ['ux', 'experimental'],
      label: 'Smart-city IoT', accent: '#ffd43a', emoji: '🚦',
      description: 'A public-facing crossing interface that uses small, glanceable intent cues, high-contrast states, audio support, accessibility logic, and realistic failure fallbacks.',
      tags: ['Interaction design', 'IoT', 'Accessibility']
    },
    {
      title: 'BerryBelle’s History Battle Academy', year: '2026', category: ['web', 'game'],
      label: 'Educational web game', accent: '#8a42cc', emoji: '📚',
      description: 'A browser-based study game with question battles, region modes, a final boss, matching puzzles, score persistence, explanations, and mascot-led feedback.',
      tags: ['HTML/CSS/JS', 'Gamification', 'Learning UX']
    },
    {
      title: 'CCD Recipe Battle', year: '2026', category: ['web', 'game', 'experimental'],
      label: 'Interactive poem + puzzle', accent: '#f44861', image: 'assets/portfolio/ccd-battle-arena.webp',
      description: 'A draggable recipe-comparison puzzle that builds a poem while supporting mouse, touch, and keyboard interaction with progress and completion feedback.',
      tags: ['JavaScript', 'Drag & drop', 'Accessibility']
    },
    {
      title: 'Custom Cozy Recipe Quilt', year: '2026', category: ['web', 'game'],
      label: 'Dynamic web system', accent: '#ff8b2e', emoji: '🧵',
      description: 'A customizable version of the recipe puzzle where twelve user-selected recipes determine the clues, colors, pieces, poem mood, and final arrangement.',
      tags: ['State management', 'Customization', 'JavaScript']
    },
    {
      title: 'Hypertext Narrative', year: '2026', category: ['web', 'experimental'],
      label: 'Non-linear web story', accent: '#f44861', emoji: '↗',
      description: 'A multi-page narrative about creative growth, design identity, first sales, doubts, audience, mascot storytelling, and future goals with reader-controlled navigation.',
      tags: ['HTML/CSS', 'Narrative design', 'Navigation']
    },
    {
      title: 'A Web That Opens', year: '2026', category: ['web', 'graphic', 'experimental'],
      label: 'Concrete poem manifesto', accent: '#4386f5', emoji: '🚪',
      description: 'A coded concrete poem that uses the webpage as a doorway and argues that design should guide people, welcome people, and make technology feel human.',
      tags: ['Typography', 'Creative code', 'Visual metaphor']
    },
    {
      title: 'NYC Olympics — Liberty Lights the World', year: '2025', category: ['branding', 'graphic'],
      label: 'Identity concept', accent: '#159b71', image: 'assets/portfolio/nyc-olympics.webp',
      description: 'A New York Olympic identity concept combining the Statue of Liberty, skyline silhouette, torch symbolism, and the Olympic rings into a compact visual mark.',
      tags: ['Identity', 'Symbol design', 'City branding']
    },
    {
      title: 'Design Is the Key', year: '2025', category: ['graphic'],
      label: 'Typography poster', accent: '#e9ac00', image: 'assets/portfolio/design-is-key.webp',
      description: 'A playful typographic composition that turns a key into the letter I and lets cat silhouettes physically interact with the type.',
      tags: ['Typography', 'Illustration', 'Composition']
    },
    {
      title: 'JUST BUY IT — Nike Parody', year: '2026', category: ['graphic', 'experimental'],
      label: 'Culture jamming', accent: '#18b981', image: 'assets/portfolio/just-buy-it-runner.webp',
      description: 'A culture-jamming campaign that flips motivational athletic advertising into a critique of price, status, consumer pressure, and the command to keep buying.',
      tags: ['Advertising', 'Art direction', 'Satire']
    },
    {
      title: 'I’m BUYIN’ It', year: '2026', category: ['graphic', 'experimental'],
      label: 'McDonald’s parody', accent: '#ffb000', image: 'assets/portfolio/mcbuyin.webp',
      description: 'A surreal fast-food parody that enlarges the product into a city-scale spectacle and reframes a familiar slogan around cravings and consumerism.',
      tags: ['Photo composite', 'Satire', 'Campaign']
    },
    {
      title: 'McHappiness+', year: '2026', category: ['graphic', 'experimental'],
      label: 'Subscription parody', accent: '#ffd43a', image: 'assets/portfolio/mchappiness.webp',
      description: 'A fake subscription advertisement that turns fast-food convenience into a premium “happiness” membership, borrowing the language of recurring-service marketing.',
      tags: ['Campaign', 'Copywriting', 'Layout']
    },
    {
      title: 'Enchanted Brew', year: '2025', category: ['branding', 'graphic'],
      label: 'Brand direction', accent: '#59a98d', image: 'assets/portfolio/enchanted-brew.webp',
      description: 'A cozy café identity exploring softer typography, cup symbolism, calm color, and an approachable magical tone.',
      tags: ['Logo', 'Brand mood', 'Identity']
    },
    {
      title: 'Letterform + Monogram Explorations', year: '2025', category: ['branding', 'graphic'],
      label: 'Identity studies', accent: '#8a42cc', image: 'assets/portfolio/letterform-exploration.webp',
      description: 'A collection of monogram and letterform studies testing shape, rhythm, negative space, and personality across compact identity marks.',
      tags: ['Typography', 'Logo studies', 'Form']
    },
    {
      title: 'Cookie Website', year: '2024–2026', category: ['web', 'graphic'],
      label: 'Web design', accent: '#9b633d', image: 'assets/portfolio/cookie-website.webp',
      description: 'A food-focused website concept combining warm editorial photography, layered cards, clear navigation, and product-forward calls to action.',
      tags: ['Web layout', 'Food branding', 'Visual hierarchy']
    },
    {
      title: 'Burger Poster', year: '2024–2025', category: ['graphic'],
      label: 'Food advertisement', accent: '#e76425', image: 'assets/portfolio/burger-poster.webp',
      description: 'A dramatic product poster using scale, rich warm lighting, stacked food imagery, and bold type to create appetite and impact.',
      tags: ['Advertising', 'Photo editing', 'Composition']
    },
    {
      title: 'Water Graphic', year: '2025', category: ['graphic'],
      label: 'Educational graphic', accent: '#4386f5', image: 'assets/portfolio/water-graphic.webp',
      description: 'An information graphic that turns hydration content into a clean visual story through image manipulation, hierarchy, and a cool blue palette.',
      tags: ['Information design', 'Layout', 'Photo composite']
    },
    {
      title: 'Summer Alt Sounds', year: '2025', category: ['graphic'],
      label: 'Poster typography', accent: '#7f6a55', image: 'assets/portfolio/summer-alt-sounds.webp',
      description: 'An experimental music poster built from oversized lettering, texture, repetition, and a rough editorial attitude.',
      tags: ['Typography', 'Poster', 'Texture']
    },
    {
      title: 'Underwater Composite', year: '2025', category: ['graphic', 'experimental'],
      label: 'Photo manipulation', accent: '#688faa', image: 'assets/portfolio/underwater-composite.webp',
      description: 'A surreal composite that combines underwater atmosphere, scale shifts, and soft tonal control to create an emotional narrative image.',
      tags: ['Photoshop', 'Compositing', 'Storytelling']
    },
    {
      title: 'Double Exposure', year: '2025', category: ['graphic', 'experimental'],
      label: 'Digital art', accent: '#ef6c53', image: 'assets/portfolio/double-exposure.webp',
      description: 'A silhouette-driven double exposure combining portrait and city imagery to explore memory, identity, and place.',
      tags: ['Layer masks', 'Photo manipulation', 'Mood']
    },
    {
      title: 'Visual Storytelling Illustrations', year: '2025–2026', category: ['graphic', 'experimental'],
      label: 'Illustration + narrative', accent: '#f27a65', image: 'assets/portfolio/visual-storytelling.webp',
      description: 'Narrative visual pieces built around emotional contrast, character relationships, and symbolic environments rather than standalone decoration.',
      tags: ['Narrative', 'Composition', 'Mood']
    },
    {
      title: 'Memory + Time AR Triptych', year: '2026', category: ['experimental', 'ux'],
      label: 'Augmented reality', accent: '#8a42cc', emoji: '🪄',
      description: 'Three connected Artivive pieces combining original trigger images, moving imagery, sound, and layered 3D space around memory and time.',
      tags: ['Artivive', 'Motion', 'Sound']
    },
    {
      title: '18-Shot Phone Video', year: '2026', category: ['experimental'],
      label: 'Video production', accent: '#ff8b2e', emoji: '🎬',
      description: 'A phone-shot sequence planned around eighteen distinct shots, continuity, pacing, camera angles, and clear visual storytelling.',
      tags: ['Shot planning', 'Editing', 'Production']
    },
    {
      title: 'HTML/CSS Resume', year: '2026', category: ['web'],
      label: 'Professional web page', accent: '#4386f5', emoji: '⌨️',
      description: 'A coded resume page using semantic HTML, custom typography, sections for education and experience, responsive CSS, and professional contact links.',
      tags: ['HTML', 'CSS', 'Responsive']
    },
    {
      title: 'Early Design Archive', year: '2021–2024', category: ['graphic', 'branding', 'web'],
      label: 'Learning by making', accent: '#ff8b2e', image: 'assets/archive/archive-05.webp',
      description: 'Beverage ads, logos, flyers, social graphics, product compositions, food advertisements, photo manipulation, and first web concepts — the foundation of everything that followed.',
      tags: ['Archive', 'Advertising', 'Exploration']
    }
  ];

  const categoryNames = {
    ux: 'UX/UI', branding: 'Branding', web: 'Web', graphic: 'Graphic', game: 'Game', experimental: 'Experimental'
  };

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[char]);
  }

  function renderProjects() {
    const grid = $('#projectGrid');
    if (!grid) return;

    grid.innerHTML = projectManifest.map((project, index) => {
      const cats = project.category.join(' ');
      const visual = project.image
        ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} project artwork" loading="lazy">`
        : `<div class="project-placeholder" aria-hidden="true"><span>${escapeHTML(project.emoji || '✦')}</span></div>`;
      const openButton = project.image
        ? `<button class="project-open js-lightbox" type="button" aria-label="View ${escapeHTML(project.title)} artwork larger" data-image="${escapeHTML(project.image)}" data-caption="${escapeHTML(project.title)}">↗</button>`
        : '';
      const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
      return `
        <article class="project-card reveal" data-category="${cats}" style="--project-accent:${escapeHTML(project.accent)}" data-project-index="${index}">
          <div class="project-media">
            ${visual}
            ${openButton}
          </div>
          <div class="project-body">
            <div class="project-meta"><span>${escapeHTML(project.label)}</span><span class="project-year">${escapeHTML(project.year)}</span></div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            <div class="project-tags">${tags}</div>
          </div>
        </article>`;
    }).join('');

    updateFilterCount(projectManifest.length, 'all');
  }

  function initProjectFilters() {
    const chips = $$('.filter-chip');
    if (!chips.length) return;

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.filter || 'all';
        chips.forEach(c => {
          const selected = c === chip;
          c.classList.toggle('active', selected);
          c.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });

        let visible = 0;
        $$('.project-card').forEach(card => {
          const matches = filter === 'all' || (card.dataset.category || '').split(' ').includes(filter);
          card.classList.toggle('is-hidden', !matches);
          if (matches) visible += 1;
        });
        updateFilterCount(visible, filter);
      });
    });
  }

  function updateFilterCount(count, filter) {
    const el = $('#filterCount');
    if (!el) return;
    const label = filter === 'all' ? 'projects' : `${categoryNames[filter] || filter} projects`;
    el.textContent = `${count} ${label}`;
  }

  function initRevealObserver() {
    const revealNodes = $$('.reveal');
    if (!revealNodes.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealNodes.forEach(node => node.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealNodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min((index % 5) * 45, 180)}ms`;
      observer.observe(node);
    });
  }

  function initAccentObserver() {
    const sections = $$('[data-accent]');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const accent = visible.target.dataset.accent;
      if (accent) document.documentElement.style.setProperty('--page-accent', accent);
    }, { threshold: [0.15, 0.35, 0.6] });

    sections.forEach(section => observer.observe(section));
  }

  function initNavigation() {
    const toggle = $('#navToggle');
    const nav = $('#mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        nav.classList.toggle('open', !open);
        document.body.classList.toggle('nav-open', !open);
      });
      $$('a', nav).forEach(link => link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
      }));
    }

    const header = $('.site-header');
    const onScroll = () => header?.classList.toggle('compact', window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initScrollProgress() {
    const progress = $('#scrollProgress');
    if (!progress) return;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  function initTimelineProgress() {
    const timeline = $('#timeline');
    const fill = $('#timelineFill');
    if (!timeline || !fill) return;
    const update = () => {
      const rect = timeline.getBoundingClientRect();
      const travel = rect.height + window.innerHeight * 0.3;
      const entered = window.innerHeight * 0.72 - rect.top;
      const ratio = Math.max(0, Math.min(1, entered / travel));
      timeline.style.setProperty('--timeline-progress', `${ratio * 100}%`);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  function initChapterDots() {
    const links = $$('#chapterDots a');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const targets = links.map(link => $(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const active = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${active.target.id}`));
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -35% 0px' });
    targets.forEach(target => observer.observe(target));
  }

  function initCounters() {
    const counters = $$('[data-counter]');
    if (!counters.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      counters.forEach(counter => { counter.textContent = counter.dataset.counter; });
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter || 0);
        const start = performance.now();
        const duration = 900;
        const tick = now => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = String(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(counter => observer.observe(counter));
  }

  function initLightbox() {
    const dialog = $('#lightbox');
    const image = $('#lightboxImage');
    const caption = $('#lightboxCaption');
    const close = $('#lightboxClose');
    if (!dialog || !image || !caption || !close) return;

    const hide = () => {
      if (dialog.open) dialog.close();
    };
    close.addEventListener('click', hide);
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (outside) hide();
    });

    document.addEventListener('click', event => {
      const trigger = event.target.closest('.js-lightbox');
      if (!trigger) return;
      const src = trigger.dataset.image;
      if (!src) return;
      image.src = src;
      image.alt = trigger.dataset.caption || 'Portfolio artwork';
      caption.textContent = trigger.dataset.caption || '';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  }

  function initTilt() {
    if (!finePointer || reduceMotion) return;
    $$('.tilt').forEach(card => {
      const intensity = Number(card.dataset.tilt || 6);
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * intensity).toFixed(2)}deg) rotateY(${(px * intensity).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    });
  }

  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$('.magnetic').forEach(element => {
      element.addEventListener('pointermove', event => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        element.style.transform = `translate(${(x * 0.12).toFixed(1)}px, ${(y * 0.12).toFixed(1)}px)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
  }

  function initCursor() {
    if (!finePointer || reduceMotion) return;
    const orb = $('#cursorOrb');
    const ring = $('#cursorRing');
    if (!orb || !ring) return;

    let targetX = -100, targetY = -100, ringX = -100, ringY = -100;
    document.body.classList.add('cursor-ready');

    window.addEventListener('pointermove', event => {
      targetX = event.clientX;
      targetY = event.clientY;
      orb.style.left = `${targetX}px`;
      orb.style.top = `${targetY}px`;
    }, { passive: true });

    const loop = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    document.addEventListener('pointerover', event => {
      if (event.target.closest('a, button, .tilt, .archive-track')) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('pointerout', event => {
      if (event.target.closest('a, button, .tilt, .archive-track')) document.body.classList.remove('cursor-hover');
    });
  }

  function initParallax() {
    if (reduceMotion) return;
    const elements = $$('[data-parallax]');
    if (!elements.length) return;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('pointermove', event => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    const update = () => {
      elements.forEach(el => {
        const speed = Number(el.dataset.parallax || 0);
        el.style.translate = `${mouseX * speed * 100}px ${mouseY * speed * 70}px`;
      });
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  function initSparkles() {
    const containers = [$('#heroSparkles'), $('.contact-stars')].filter(Boolean);
    containers.forEach((container, containerIndex) => {
      const total = containerIndex === 0 ? 28 : 20;
      for (let i = 0; i < total; i += 1) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${(i * 37 + containerIndex * 11) % 97}%`;
        sparkle.style.top = `${(i * 61 + 7) % 94}%`;
        sparkle.style.setProperty('--dur', `${2.2 + (i % 7) * 0.37}s`);
        sparkle.style.setProperty('--delay', `${-(i % 9) * 0.28}s`);
        sparkle.style.transform = `scale(${0.6 + (i % 4) * 0.22})`;
        container.appendChild(sparkle);
      }
    });
  }

  function initArchiveDrag() {
    const track = $('#archiveTrack');
    if (!track) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      down = true;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('dragging');
      track.setPointerCapture?.(event.pointerId);
    });
    track.addEventListener('pointermove', event => {
      if (!down) return;
      const delta = event.clientX - startX;
      track.scrollLeft = startScroll - delta;
    });
    const finish = event => {
      if (!down) return;
      down = false;
      track.classList.remove('dragging');
      if (event?.pointerId != null) track.releasePointerCapture?.(event.pointerId);
    };
    track.addEventListener('pointerup', finish);
    track.addEventListener('pointercancel', finish);
    track.addEventListener('pointerleave', event => { if (down && event.buttons === 0) finish(event); });

    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') track.scrollBy({ left: 360, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (event.key === 'ArrowLeft') track.scrollBy({ left: -360, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  function initImageErrorHandling() {
    $$('img').forEach(img => {
      img.addEventListener('error', () => {
        const parent = img.parentElement;
        if (!parent) return;
        img.hidden = true;
        parent.classList.add('image-missing');
        if (!parent.querySelector('.missing-label')) {
          const label = document.createElement('span');
          label.className = 'missing-label';
          label.textContent = 'Artwork preview unavailable';
          parent.appendChild(label);
        }
      }, { once: true });
    });
  }

  renderProjects();
  initProjectFilters();
  initNavigation();
  initScrollProgress();
  initTimelineProgress();
  initAccentObserver();
  initChapterDots();
  initCounters();
  initLightbox();
  initSparkles();
  initArchiveDrag();
  initImageErrorHandling();

  // Run after dynamically rendered project cards exist.
  initRevealObserver();
  initTilt();
  initMagnetic();
  initCursor();
  initParallax();
})();
