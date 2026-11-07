/**
 * Farish CV — Personal Website & Editorial Monograph Logic
 */

const WORK_ITEMS = [
  {
    id: "gfsa-ai-first-2026",
    category: "ai-programs",
    categoryLabel: "AI Startup Acceleration",
    year: "2024 — 2026",
    title: "Google for Startups Accelerator: AI First India (10th Anniversary)",
    summary:
      "Spearheaded India's flagship equity-free AI startup accelerator across Agentic AI, Multimodal AI, Physical AI, and Sovereign AI—selecting 20 pioneering Seed-to-Series A startups from ~2,500 annual applications.",
    metric: "~2,500 Applicants · 20 Cohort Startups",
    org: "Google — AI Startup Programs (India)",
    highlights: [
      "Architected curriculum and deep technical mentorship connecting founders with specialists across Google DeepMind, Google Cloud, Health, Android, and Play.",
      "Focused 2025–2026 cohorts on workflow-native systems: Agentic AI (45%), Multimodal AI (30%), Physical AI, and Sovereign Indian AI models.",
      "Enabled direct integration with Gemini, Gemma, Imagen, Veo, and Cloud TPUs alongside structured weekly OKR tracking.",
      "Aligned program pillars directly with the IndiaAI Mission to advance sovereign capabilities and global enterprise readiness."
    ],
    link: "https://blog.google/intl/en-in/announcing-the-2026-cohort-of-google-for-startups-accelerator-india/",
    linkText: "Read 2026 Cohort Announcement on Google Blog"
  },
  {
    id: "portfolio-breakthroughs-ai",
    category: "portfolio-impact",
    categoryLabel: "Portfolio Breakthroughs",
    year: "2023 — 2026",
    title: "Scaling Deep-Tech & Applied AI Alumni to Population Scale",
    summary:
      "Partnered with founders across MedTech, Indic Voice AI, Climate Intelligence, and FinTech to translate foundational Gemini & Gemma architectures into measurable enterprise and societal outcomes.",
    metric: "4x Revenue & 50% Latency Gains",
    org: "Google for Startups Alumni Portfolio",
    highlights: [
      "AiSteth (MedTech): Built an offline, edge-encrypted smart stethoscope MVP that screened 75,000+ patients without internet across 20+ Indian states.",
      "Vaani AI (Indic Voice AI): Processed 1M+ minutes monthly and reduced manual calls by 75% using Gemini, Gemma, and proprietary voice models.",
      "Resilience AI (ClimateTech): Optimized climate adaptation models with Gemma 12B, achieving 35% higher accuracy and 23% faster runtimes.",
      "Dview & Superjoin: Dview achieved 4x revenue growth; Superjoin leveraged Gemini to improve spreadsheet intelligence accuracy and latency by 50%.",
      "VideoSDK & Pulse: VideoSDK cut voice agent costs by 40% and doubled revenue via Gemini Live API; Pulse uncovered $3M in at-risk enterprise revenue."
    ],
    link: "https://blog.google/intl/en-in/inviting-ai-first-startups-to-apply-for-google-for-startups-accelerator-india/",
    linkText: "Explore Alumni Impact Highlights"
  },
  {
    id: "gfsa-cohorts-6-to-8",
    category: "ai-programs",
    categoryLabel: "AI Startup Acceleration",
    year: "2021 — 2024",
    title: "Google for Startups Accelerator India (Classes 6, 7 & 8)",
    summary:
      "Led multi-cohort acceleration for 130+ high-growth Indian startups solving systemic challenges across healthcare, space-tech, climate, education, and B2B SaaS—with 35%+ women-led startup representation.",
    metric: "130+ Startups Accelerated",
    org: "Google for Startups India",
    highlights: [
      "Guided category-defining alumni including GalaxEye Space (multi-sensor imaging satellites), BrainSightAI (neuro-imaging), immunitoAI (AI antibody therapeutics), and Entri (vernacular upskilling for millions).",
      "Championed inclusive ecosystem expansion with 35% women-led startups in Class 6 and dedicated support for founders beyond metro hubs via Startup School India.",
      "Designed intensive bootcamps covering ML architecture, UX design sprints, product strategy, and Founders' Leaders Lab."
    ],
    link: "https://blog.google/intl/en-in/introducing-the-eighth-cohort-of-google-for-startups-accelerator-india/",
    linkText: "Read Class 8 Cohort Feature"
  },
  {
    id: "startup-success-days-ai-masterclass",
    category: "ecosystem",
    categoryLabel: "National Ecosystem",
    year: "2023 — 2026",
    title: "Startup Success Days & Intelligent Agents Architecture Immersions",
    summary:
      "Designed and led multi-city founder & developer immersions across Bengaluru, Chennai, and Delhi—connecting startups, VCs, IIT research parks, and DeepMind/Cloud engineers.",
    metric: "Pan-India Founder & VC Network",
    org: "Google for Developers & Ecosystem Partners",
    highlights: [
      "Keynote & panel lead at Startup Success Days (IITM Research Park, Chennai) and AI Day for Startups (IHFC — IIT Delhi).",
      "Catalyzed national sustainability innovations such as Earth5R's Sustainability AI Engine (selected among India's Top 15 AI Agents) through first-principles agentic architecture workshops.",
      "Featured speaker at India AI Impact Summit 2026 and NASSCOM Agentic AI Roadshows."
    ],
    link: "https://gdg.community.dev/events/details/google-gdg-cloud-chennai-presents-startup-success-days-india-2023-chennai/",
    linkText: "View Startup Success Days Program"
  },
  {
    id: "google-play-go-india-sea",
    category: "ecosystem",
    categoryLabel: "National Ecosystem",
    year: "2019 — 2021",
    title: "Google Play Go India & SEA + Build for Digital India (MeitY)",
    summary:
      "Drove mobile app & gaming ecosystem growth across India and Southeast Asia on Google Play, and co-executed the national 'Build for Digital India' program with the Ministry of Electronics & IT.",
    metric: "3,000+ Student Submissions · India & SEA",
    org: "Google Play & Government Partnerships",
    highlights: [
      "Consulted top mobile and gaming studios across India and Southeast Asia on culturalization, LiveOps localization, and payer conversion.",
      "Co-led Build for Digital India in partnership with MeitY, engaging 3,000+ engineering project teams across healthcare, agriculture, and smart cities.",
      "Directed mentorship bootcamps across 4 Indian cities and the national virtual pitch finale for the top 15 student innovations."
    ],
    link: "https://blog.google/intl/en-in/products/google-companies/meet-top-teams-of-build-for-digital/",
    linkText: "Read Build for Digital India Feature"
  },
  {
    id: "pitney-bowes-gdg-mit",
    category: "open-innovation",
    categoryLabel: "Open Innovation & Community",
    year: "2013 — 2019",
    title: "Global Developer Relations (Pitney Bowes), MIT AITI & GDG Kozhikode",
    summary:
      "Built global developer challenges and the PB Start SMB Accelerator across San Francisco and India at Pitney Bowes, following grassroots community leadership with GDG Kozhikode and MIT AITI.",
    metric: "750K+ SMB Reach · Global Hackathons",
    org: "Pitney Bowes · GDG · MIT AITI",
    highlights: [
      "Spearheaded the Pitney Bowes Global SMB Challenge and SendPro C-Series developer ecosystem in collaboration with PayPal, Freshworks, and AWS.",
      "Founded and organized Google Developer Group (GDG) Kozhikode, hosting Google I/O Extended, Android, and HTML5 developer summits in Kerala.",
      "Selected as a Jagriti Yatra Fellow (2013, Communication & Technology) and alumnus of the MIT Accelerating Information Technology Innovation (AITI) Startup Accelerator."
    ],
    link: "https://www.hackerearth.com/challenges/hackathon/pitney-bowes-smb-challenge-2018/",
    linkText: "View Global SMB Innovation Challenge"
  }
];

const SPEAKER_BIOS = {
  short:
    "Farish CV is the Regional Lead for AI Startup Programs (India) at Google, where he leads Google for Startups Accelerator: India and partners with pioneering Seed-to-Series A founders building across Agentic, Multimodal, Physical, and Sovereign AI. An alumnus of the MIT AITI Startup Accelerator and University of Calicut, he has helped scale 150+ startups across India and Southeast Asia.",
  standard:
    "Farish CV serves as Regional Lead, AI Startup Programs (India) at Google, spearheading flagship initiatives including the Google for Startups Accelerator: AI First. Over the past decade across Google and global developer ecosystems, Farish has partnered with more than 150 high-growth startups—connecting founders with deep technical mentorship from Google DeepMind, Cloud, and Android to transition experimental AI into population-scale deployment. Previously, he managed Google Play developer growth across India and Southeast Asia, co-led national innovation programs with MeitY, and led Global Developer Relations at Pitney Bowes. He is an alumnus of the University of Calicut, the MIT Accelerating Information Technology Innovation (AITI) program, and a Jagriti Yatra Fellow.",
  full:
    "Farish CV is the Regional Lead for AI Startup Programs in India at Google, where he architects and leads Google's flagship equity-free startup accelerators, including the landmark 10th-anniversary Google for Startups Accelerator: India cohort. Working at the intersection of frontier AI research and venture scale, he enables Seed-to-Series A startups building Agentic Workflows, Multimodal Systems, Physical AI, and Sovereign Indian Models to solve complex challenges across healthcare, climate resilience, fintech, and developer infrastructure.\n\nPrior to leading AI Startup Programs, Farish served as Program Manager for the Startup & Developer Ecosystem at Google India and Program Manager for Google Play (India & Southeast Asia), where he helped scale over 150 startups and guided mobile and gaming studios on regional growth. Earlier in his career, he led Global Developer Relations and Open Innovation at Pitney Bowes, organized Google Developer Group (GDG) Kozhikode, completed the MIT Accelerating Information Technology Innovation (AITI) Startup Accelerator, and was selected as a national Fellow on the Jagriti Yatra."
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();
  initWorkShowcase();
  initModal();
  initSpeakerBioSwitcher();
  initQuickInquiryForm();
  initScrollSpy();
});

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem("farishcv-theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    updateThemeIcon("light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("farishcv-theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("theme-toggle-icon");
  if (!iconSpan) return;
  if (theme === "dark") {
    iconSpan.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    iconSpan.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navList = document.getElementById("primary-nav-list");
  if (!menuBtn || !navList) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("mobile-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("mobile-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   SELECTED WORK SHOWCASE & FILTERING
   ========================================================================== */
function initWorkShowcase() {
  const grid = document.getElementById("work-showcase-grid");
  const countEl = document.getElementById("work-count-indicator");
  const filterBtns = document.querySelectorAll(".filter-tab");

  if (!grid) return;

  function renderCards(filterKey) {
    const filtered =
      filterKey === "all"
        ? WORK_ITEMS
        : WORK_ITEMS.filter((item) => item.category === filterKey);

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${WORK_ITEMS.length} selected initiatives`;
    }

    grid.innerHTML = filtered
      .map(
        (item) => `
      <article class="work-card" data-work-id="${item.id}" tabindex="0" role="button" aria-label="Inspect ${item.title}">
        <div>
          <div class="work-card-header">
            <span class="work-category-badge" data-cat="${item.category}">${item.categoryLabel}</span>
            <span class="work-year">${item.year}</span>
          </div>
          <h3 class="work-title">${item.title}</h3>
          <p class="work-summary">${item.summary}</p>
        </div>
        <div class="work-card-footer">
          <span class="work-metric-pill">${item.metric}</span>
          <span class="work-inspect-btn">Case Dossier →</span>
        </div>
      </article>
    `
      )
      .join("");

    grid.querySelectorAll(".work-card").forEach((card) => {
      card.addEventListener("click", () => {
        openWorkModal(card.getAttribute("data-work-id"));
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openWorkModal(card.getAttribute("data-work-id"));
        }
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.getAttribute("data-filter") || "all");
    });
  });

  renderCards("all");
}

/* ==========================================================================
   MODAL CASE STUDY VIEWER
   ========================================================================== */
function initModal() {
  const backdrop = document.getElementById("work-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!backdrop || !closeBtn) return;

  closeBtn.addEventListener("click", closeWorkModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeWorkModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeWorkModal();
    }
  });
}

function openWorkModal(workId) {
  const item = WORK_ITEMS.find((w) => w.id === workId);
  if (!item) return;

  const backdrop = document.getElementById("work-modal-backdrop");
  const catEl = document.getElementById("modal-category");
  const titleEl = document.getElementById("modal-title");
  const subEl = document.getElementById("modal-subtitle");
  const metricEl = document.getElementById("modal-metric");
  const listEl = document.getElementById("modal-highlights");
  const linkEl = document.getElementById("modal-external-link");

  if (catEl) catEl.textContent = `${item.categoryLabel} · ${item.year} · ${item.org}`;
  if (titleEl) titleEl.textContent = item.title;
  if (subEl) subEl.textContent = item.summary;
  if (metricEl) metricEl.textContent = `Key Impact Indicator: ${item.metric}`;
  if (listEl) {
    listEl.innerHTML = item.highlights.map((h) => `<li>${h}</li>`).join("");
  }
  if (linkEl) {
    linkEl.href = item.link;
    linkEl.textContent = `${item.linkText} ↗`;
  }

  if (backdrop) {
    backdrop.classList.add("open");
    backdrop.setAttribute("aria-hidden", "false");
  }
}

function closeWorkModal() {
  const backdrop = document.getElementById("work-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
  }
}

/* ==========================================================================
   SPEAKER BIO SWITCHER & CLIPBOARD COPY
   ========================================================================== */
function initSpeakerBioSwitcher() {
  const buttons = document.querySelectorAll(".bio-switch-btn");
  const bioTextEl = document.getElementById("speaker-bio-text");
  const copyBtn = document.getElementById("copy-speaker-bio-btn");
  const feedbackEl = document.getElementById("copy-bio-feedback");

  if (!bioTextEl) return;

  let currentKey = "standard";
  bioTextEl.textContent = SPEAKER_BIOS[currentKey];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentKey = btn.getAttribute("data-bio-length") || "standard";
      bioTextEl.textContent = SPEAKER_BIOS[currentKey];
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(SPEAKER_BIOS[currentKey]);
        if (feedbackEl) {
          feedbackEl.textContent = "✓ Copied bio to clipboard";
          feedbackEl.classList.add("visible");
          setTimeout(() => feedbackEl.classList.remove("visible"), 2600);
        }
      } catch {
        if (feedbackEl) {
          feedbackEl.textContent = "Select text above to copy";
          feedbackEl.classList.add("visible");
        }
      }
    });
  }
}

/* ==========================================================================
   QUICK INQUIRY COMPOSER
   ========================================================================== */
function initQuickInquiryForm() {
  const form = document.getElementById("quick-inquiry-form");
  const statusEl = document.getElementById("inquiry-status-msg");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("inquiry-name")?.value.trim() || "Founder / Colleague";
    const topic = document.getElementById("inquiry-topic")?.value || "Startup Ecosystem & AI Programs";
    const message = document.getElementById("inquiry-message")?.value.trim() || "";

    const subject = encodeURIComponent(`[farish.cv] ${topic} — from ${name}`);
    const body = encodeURIComponent(
      `Hi Farish,\n\n${message}\n\nBest regards,\n${name}`
    );

    if (statusEl) {
      statusEl.textContent = "✓ Opening email client addressed to farish.kty@gmail.com...";
      statusEl.classList.add("visible");
    }

    window.location.href = `mailto:farish.kty@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   SCROLL SPY FOR NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}
