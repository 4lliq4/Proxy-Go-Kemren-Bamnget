// ============================================================
// FOTO ARCHIVE HERO (3 foto paling atas)
// Taruh foto di assets/hero/ dengan nama: hero1, hero2, hero3
// (hero2 = foto tengah/besar). Format: jpg, jpeg, png, webp
// ============================================================
(function loadHeroPhotos() {
  const exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];
  document.querySelectorAll("img[data-hero]").forEach((img) => {
    const base = "assets/hero/" + img.dataset.hero;
    let i = 0;
    const tryNext = () => {
      if (i >= exts.length) { img.hidden = true; return; }
      img.src = base + "." + exts[i++];
    };
    img.onload = () => { img.hidden = false; };
    img.onerror = tryNext;
    tryNext();
  });
})();

// ============================================================
// DATA ANGGOTA â€” Isi data masing-masing anggota di sini.
// Foto  : letakkan di assets/members/anggotaN/foto.jpg
// CV    : letakkan di assets/members/anggotaN/cv.pdf
// Link  : isi URL lengkap, atau "#" jika belum ada
// ============================================================
const members = [
  {
    id: "01", name: "ABID", pokemon: "CHARMANDER",
    birth: "28 December 2006", origin: "PEKALONGAN",
    photo: "assets/members/anggota1/foto1.jpg",
    instagram: "bidd.01", linkedin: "https://www.linkedin.com/in/abid-rizqi-ananto-putro-3322a4411/", github: "#",
    cv: "assets/members/anggota1/CV Abid Rizqi Ananto Putro.pdf"
  },
  {
    id: "02", name: "ALLIQA", pokemon: "PIKACHU",
    birth: "16 July 2007", origin: "SELAYAR",
    photo: "assets/members/anggota2/foto2.jpg",
    instagram: "alliqaananta", linkedin: "https://www.linkedin.com/in/alliqa-ananta-amsyir-3606a8380/", github: "https://github.com/4lliq4",
    cv: "assets/members/anggota2/Curriculum Vitae ATS_Alliqa Ananta Amsyir_M0403251038.pdf"
  },
  {
    id: "03", name: "FACHRI", pokemon: "SQUIRTLE",
    birth: "28 July 2007", origin: "JAKARTA",
    photo: "assets/members/anggota3/foto3.jpg",
    instagram: "__fachri.siaeo", linkedin: "https://www.linkedin.com/in/mohammad-fachri-307a05205/", github: "#",
    cv: "assets/members/anggota3/CV_Mohammad Fachri.pdf"
  },
  {
    id: "04", name: "ALYA", pokemon: "BULBASAUR",
    birth: "14 January 2007", origin: "BOGOR",
    photo: "assets/members/anggota4/foto4.jpg",
    instagram: "alyanggita_", linkedin: "https://www.linkedin.com/in/alyaanggita/", github: "#",
    cv: "assets/members/anggota4/CV_Alya Anggita.pdf"
  },
  {
    id: "05", name: "MARIA", pokemon: "EEVEE",
    birth: "14 November 2007", origin: "BEKASI",
    photo: "assets/members/anggota5/foto5.jpg",
    instagram: "mariaadvna", linkedin: "https://www.linkedin.com/in/maria-amanda-devina/", github: "github.com/marimoria",
    cv: "assets/members/anggota5/CV-ATS Maria Amanda Devina.pdf"
  },
  {
    id: "06", name: "DEVINA", pokemon: "LUCARIO",
    birth: "11 December 2007", origin: "BOGOR",
    photo: "assets/members/anggota6/foto6.jpg",
    instagram: "dep_ii0", linkedin: "https://www.linkedin.com/in/devina-alfiyanti-185517418/", github: "#",
    cv: "assets/members/anggota6/CV_Devina Alfiyanti.pdf"
  },
  {
    id: "07", name: "BIMO", pokemon: "GENGAR",
    birth: "04 November 2006", origin: "BANDUNG",
    photo: "assets/members/anggota7/foto7.jpg",
    instagram: "bimo_rajjaz", linkedin: "https://www.linkedin.com/in/bimo-rajjaz-pahlevi-1379b13ab/", github: "https://github.com/Bimo-RP",
    cv: "assets/members/anggota7/CV Ats_Bimo Rajjaz Pahlevi.pdf"
  },
  {
    id: "08", name: "EMIR", pokemon: "CHARIZARD",
    birth: "01 March 2007", origin: "BOGOR",
    photo: "assets/members/anggota8/foto8.jpg",
    instagram: "emirsyah_aa", linkedin: "https://linkedin.com/in/emirsyahahmad", github: "https://github.com/YM1Rfr",
    cv: "assets/members/anggota8/CV_Emirsyah Ahmad Akmal.pdf"
  },
  {
    id: "09", name: "RABANI", pokemon: "VAPOREON",
    birth: "27 August 2006", origin: "JAKARTA",
    photo: "assets/members/anggota9/foto9.JPG",
    instagram: "mrbani.w", linkedin: "https://www.linkedin.com/in/muhammad-rabani-wicaksono-5b8044421/", github: "#",
    cv: "assets/members/anggota9/CV_Muhammad Rabani Wicaksono.pdf"
  },
  {
    id: "10", name: "NASYWA", pokemon: "JOLTEON",
    birth: "06 March 2007", origin: "BOGOR",
    photo: "assets/members/anggota10/foto10.jpg",
    instagram: "aidhnsywa", linkedin: "https://www.linkedin.com/in/aidahnasywaazzahra/", github: "#",
    cv: "assets/members/anggota10/CV_Aidah Nasywa Azzahra.pdf"
  },
  {
    id: "11", name: "SAKYA", pokemon: "MEOWTH",
    birth: "12 May 2007", origin: "CILACAP",
    photo: "assets/members/anggota11/foto11.jpg",
    instagram: "skya_qq2", linkedin: "https://www.linkedin.com/in/sakya-qonita/", github: "#",
    cv: "assets/members/anggota11/CV_Sakya Qonita Qurrotu'ain.pdf"
  },
];
// ============================================================



// â”€â”€â”€ HELPER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function hasLink(url) { return url && url !== "#"; }

// â”€â”€â”€ BANGUN KARTU DI LINEUP GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const lineupGrid = document.getElementById("teamLineupGrid");

members.forEach((m, i) => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.style.opacity = "0"; // tersembunyi dulu, akan dianimasikan saat archive dibuka

  card.innerHTML = `
    <div class="tc-photo" id="tc-bg-${i}">
      <div class="tc-fallback"></div>
      <div class="tc-shade"></div>
      <div class="tc-badge">
        <span class="tc-poke">${m.pokemon}</span>
      </div>
    </div>
    <div class="tc-info">
      <h3>${m.name}</h3>
      <p>${m.origin}</p>
    </div>`;

  // Pasang foto sebagai background, fallback ke gradient
  const bg = card.querySelector(`#tc-bg-${i}`);
  const img = new Image();
  img.onload = () => { bg.style.backgroundImage = `url('${m.photo}')`; };
  img.onerror = () => { bg.style.backgroundImage = "linear-gradient(135deg,#1f2d3d,#6c7480)"; };
  img.src = m.photo;

  // Klik card â†’ buka profile modal detail
  card.addEventListener("click", () => openProfile(i));

  lineupGrid.appendChild(card);
});

// â”€â”€â”€ POKÃ‰BALL ARCHIVE INTERACTION (2-STATE DISCOVER) â”€â”€â”€â”€â”€â”€â”€â”€
const discoverSection = document.getElementById("discover");
const discoverBall = document.getElementById("pokeball");
const clickHint = document.getElementById("clickHint");
const teamLineup = document.getElementById("teamLineup");
const discoverCopy = document.getElementById("discoverCopy");
const resetBtn = document.getElementById("resetPokeball") || document.getElementById("closeArchive");

let archiveState = "initial"; // "initial" | "opening" | "team" | "closing"
let ballCX = 0;
let ballCY = 0;

function handlePokeballClick() {
  if (archiveState !== "initial") return;
  archiveState = "opening";

  // Catat titik tengah PokÃ©ball relatif terhadap section #discover
  const ballRect = discoverBall.getBoundingClientRect();
  const sectionRect = discoverSection.getBoundingClientRect();
  ballCX = ballRect.left + ballRect.width / 2 - sectionRect.left;
  ballCY = ballRect.top + ballRect.height / 2 - sectionRect.top;

  // Matikan pointer event agar tidak ada double click atau hover
  discoverBall.style.pointerEvents = "none";
  discoverBall.style.cursor = "default";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    onOpeningComplete();
    return;
  }

  // Masuk ke fase opening (fade out teks & hint)
  discoverSection.classList.add("is-opening");

  // Fase 1: PokÃ©ball bergetar cepat & kuat (poke-shake)
  discoverBall.classList.add("poke-shake");

  function onShakeEnd(e) {
    if (e.target !== discoverBall || e.animationName !== "pokeShake") return;
    discoverBall.removeEventListener("animationend", onShakeEnd);
    discoverBall.classList.remove("poke-shake");

    // Fase 2: PokÃ©ball membuka (poke-open)
    startBallOpening();
  }
  discoverBall.addEventListener("animationend", onShakeEnd);
}

function startBallOpening() {
  discoverBall.classList.add("poke-open");

  // Efek cahaya radial flash
  const flash = document.createElement("div");
  flash.className = "poke-flash";
  document.body.appendChild(flash);
  flash.addEventListener("animationend", () => flash.remove(), { once: true });

  // Sinkronisasi via animationend pada ball-top
  const ballTop = discoverBall.querySelector(".ball-top");
  function onOpenEnd(e) {
    if (e.animationName !== "ballTopOpen") return;
    ballTop.removeEventListener("animationend", onOpenEnd);

    // Fase 3: PokÃ©ball selesai membuka â†’ ganti state ke Meet the Team
    onOpeningComplete();
  }
  ballTop.addEventListener("animationend", onOpenEnd);
}

function onOpeningComplete() {
  // Transisi State: WHO'S INSIDE? â†’ MEET THE TEAM
  discoverSection.classList.remove("is-opening");
  discoverSection.classList.add("is-team");

  // Arahkan viewport user langsung ke awal tampilan Meet the Team
  if (teamLineup) {
    teamLineup.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  revealMemberCards();
}

function revealMemberCards() {
  const cards = lineupGrid.querySelectorAll(".team-card");
  const sRect = discoverSection.getBoundingClientRect();

  cards.forEach((card, idx) => {
    const cardRect = card.getBoundingClientRect();
    const cardCX = cardRect.left + cardRect.width / 2 - sRect.left;
    const cardCY = cardRect.top + cardRect.height / 2 - sRect.top;

    const fromX = ballCX - cardCX;
    const fromY = ballCY - cardCY;

    card.style.setProperty("--from-x", `${fromX}px`);
    card.style.setProperty("--from-y", `${fromY}px`);

    // Stagger kemunculan kartu satu per satu dari posisi PokÃ©ball
    setTimeout(() => {
      card.style.opacity = "1";
      card.classList.add("card-revealed");
    }, idx * 55);
  });

  const totalCardTime = (cards.length - 1) * 55 + 550;
  setTimeout(() => {
    archiveState = "team";
  }, totalCardTime);
}

// â”€â”€â”€ POKÃ‰BALL VISUAL RESET HELPER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function resetPokeballVisual() {
  discoverBall.classList.remove("poke-open", "poke-shake", "poke-reveal");

  discoverBall.style.animation = "";
  discoverBall.style.transition = "";
  discoverBall.style.opacity = "";
  discoverBall.style.transform = "";
  discoverBall.style.filter = "";

  const top = discoverBall.querySelector(".ball-top");
  const bottom = discoverBall.querySelector(".ball-bottom");
  const band = discoverBall.querySelector(".ball-band");
  const button = discoverBall.querySelector(".ball-button");

  [top, bottom, band, button].forEach((el) => {
    if (!el) return;

    el.style.animation = "";
    el.style.transition = "";
    el.style.transform = "";
    el.style.opacity = "";
  });

  discoverBall.querySelectorAll(".ambient-particle").forEach((el) => {
    el.style.animation = "";
    el.style.opacity = "";
    el.style.transform = "";
  });
}

// â”€â”€â”€ CLOSE / RESET â†’ KEMBALI KE WHO'S INSIDE? â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function closeArchive() {
  if (archiveState !== "team") return;
  archiveState = "closing";

  // 1. Stop any active animation
  discoverBall.classList.remove("poke-open", "poke-shake", "poke-reveal");

  // 2. Reset PokÃ©ball internals to CLOSED state immediately
  resetPokeballVisual();

  // 3. Reset team cards
  const cards = lineupGrid.querySelectorAll(".team-card");
  cards.forEach((card) => {
    card.classList.remove("card-revealed");
    card.style.opacity = "0";
    card.style.animation = "";
    card.style.transform = "";
    card.style.removeProperty("--from-x");
    card.style.removeProperty("--from-y");
  });

  // Scroll viewport kembali ke awal section #discover
  discoverSection.scrollIntoView({ behavior: "smooth", block: "start" });

  // 4. Hide Team state
  discoverSection.classList.remove("is-team", "is-opening", "is-closing");

  // 5. Restore Who's Inside state
  if (discoverCopy) {
    discoverCopy.style.display = "";
    discoverCopy.style.opacity = "1";
    discoverCopy.style.transform = "";
  }
  if (clickHint) {
    clickHint.style.display = "";
    clickHint.style.opacity = "1";
    clickHint.style.transform = "";
  }

  // 6. Restore PokÃ©ball
  discoverBall.style.display = "";
  discoverBall.style.pointerEvents = "";
  discoverBall.style.cursor = "";

  // 7. Make sure it is CLOSED before revealing it
  resetPokeballVisual();

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    archiveState = "initial";
    return;
  }

  // 8. Reveal the CLOSED PokÃ©ball
  void discoverBall.offsetWidth;
  discoverBall.classList.add("poke-reveal");

  // 9. Restore click handler / state when reveal completes
  function onRevealEnd(e) {
    if (e && e.target !== discoverBall) return;
    discoverBall.removeEventListener("animationend", onRevealEnd);
    discoverBall.classList.remove("poke-reveal");
    archiveState = "initial";
  }

  discoverBall.addEventListener("animationend", onRevealEnd, { once: true });
  setTimeout(() => {
    discoverBall.removeEventListener("animationend", onRevealEnd);
    discoverBall.classList.remove("poke-reveal");
    archiveState = "initial";
  }, 500);
}

if (discoverBall) {
  resetPokeballVisual();
  discoverBall.addEventListener("click", handlePokeballClick);
}

document.querySelectorAll(".close-archive, #resetPokeball, #closeArchive").forEach((btn) => {
  btn.addEventListener("click", closeArchive);
});

// â”€â”€â”€ PROFILE MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const profileModal = document.getElementById("profileModal");

function formatInstagram(raw) {
  if (!raw || raw === "#") return null;
  let handle = raw.trim();
  handle = handle.replace(/^https?:\/\/(www\.)?instagram\.com\/?/, "");
  handle = handle.replace(/\/.*$/, "");
  handle = handle.replace(/^@/, "");
  if (!handle) return null;
  return {
    handle: `@${handle}`,
    url: `https://instagram.com/${handle}`
  };
}

function openProfile(i) {
  const m = members[i];

  // Foto di modal
  const ph = document.getElementById("modalPhoto");
  ph.style.backgroundImage = "";
  ph.style.backgroundSize = "cover";
  ph.style.backgroundPosition = "center";
  const img = new Image();
  img.onload = () => { ph.style.backgroundImage = `url('${m.photo}')`; };
  img.onerror = () => { ph.style.backgroundImage = "linear-gradient(135deg,#252f3d,#777f8a)"; };
  img.src = m.photo;

  // Teks
  document.getElementById("modalName").textContent = m.name;
  document.getElementById("modalPokemon").textContent = m.pokemon;
  document.getElementById("modalBirth").textContent = m.birth || m.dob || "â€”";
  document.getElementById("modalOrigin").textContent = m.origin;

  // Instagram username sebagai clickable link di member info
  const igEl = document.getElementById("modalSocial");
  if (igEl) {
    const igData = formatInstagram(m.instagram);
    if (igData) {
      igEl.textContent = igData.handle;
      igEl.href = igData.url;
      igEl.target = "_blank";
      igEl.rel = "noopener noreferrer";
      igEl.style.pointerEvents = "auto";
      igEl.style.opacity = "1";
      igEl.style.cursor = "pointer";
    } else {
      igEl.textContent = "â€”";
      igEl.removeAttribute("href");
      igEl.style.pointerEvents = "none";
      igEl.style.opacity = "0.45";
      igEl.style.cursor = "default";
    }
  }

  // Tombol sosial & CV
  setLink("modalLinkedin", m.linkedin);
  setLink("modalGithub", m.github);
  setLink("modalCv", m.cv);

  profileModal.classList.add("open");
  profileModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function setLink(id, href) {
  const el = document.getElementById(id);
  const isEmpty = !hasLink(href);
  el.href = isEmpty ? "#" : href;
  el.style.opacity = isEmpty ? "0.28" : "1";
  el.style.pointerEvents = isEmpty ? "none" : "auto";
  el.style.cursor = isEmpty ? "default" : "pointer";
}

function closeProfileModal() {
  profileModal.classList.remove("open");
  profileModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("closeModal").onclick = closeProfileModal;
profileModal.querySelector(".modal-backdrop").onclick = closeProfileModal;
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProfileModal();
});

// â”€â”€â”€ MEMORIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// ============================================================
// MEMORIES â€” Tambahkan nama file foto kamu di sini.
// Letakkan foto di folder: assets/memories/
// Contoh: "foto1.jpg", "momen-wisuda.png", dsb.
// ============================================================
const memoriesPhotos = [
  "Foto Proxy 1.jpeg",
  "Foto Proxy 2.jpeg",
  "Foto Proxy 3.jpeg",
  "Foto Proxy 4.jpeg",
  "Foto Proxy 5.jpeg",
  "Foto Proxy 6.jpeg",
  "Foto Proxy 7.jpeg",
  "Foto Proxy 8.jpeg",
  "Foto Proxy 9.jpeg",
  "Foto Proxy 10.jpeg",
  "Foto Proxy 11.jpeg",
  "Foto Proxy 12.jpeg",

  // tambahkan foto lainnya di bawah ini:
  // "foto2.jpg",
  // "foto3.jpg",
];
// ============================================================

const memLeft = document.getElementById("memoryLeft");
const memRight = document.getElementById("memoryRight");

function buildMemoryStrip(container, photos) {
  const doubled = [...photos, ...photos];
  doubled.forEach((filename, idx) => {
    const el = document.createElement("img");
    el.src = `assets/memories/${filename}`;
    el.alt = `Memory ${idx + 1}`;
    el.className = "memory-img";
    el.loading = "lazy";
    el.onerror = function () {
      const ph = document.createElement("div");
      ph.className = "memory-placeholder";
      ph.textContent = `MEMORY ${String(idx + 1).padStart(2, "0")}`;
      container.replaceChild(ph, el);
    };
    container.appendChild(el);
  });
}

if (memoriesPhotos.length === 0) {
  for (let i = 1; i <= 12; i++) {
    const el = document.createElement("div");
    el.className = "memory-placeholder";
    el.textContent = `MEMORY ${String(i).padStart(2, "0")}`;
    memLeft.appendChild(el);
  }
  for (let i = 13; i <= 24; i++) {
    const el = document.createElement("div");
    el.className = "memory-placeholder";
    el.textContent = `MEMORY ${String(i).padStart(2, "0")}`;
    memRight.appendChild(el);
  }
} else {
  const mid = Math.ceil(memoriesPhotos.length / 2);
  const left = memoriesPhotos.slice(0, mid);
  const right = memoriesPhotos.slice(mid).length > 0
    ? memoriesPhotos.slice(mid)
    : memoriesPhotos.slice().reverse();
  buildMemoryStrip(memLeft, left);
  buildMemoryStrip(memRight, right);
}

// â”€â”€â”€ LOADER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 2100);
});

// ============================================================
// BACKGROUND MUSIC â€” taruh lagu di assets/music/bgm.mp3
// Browser memblokir autoplay bersuara, jadi musik mulai saat
// pengunjung pertama kali klik / tap / tekan tombol.
// ============================================================
(function setupBgm() {
  const audio = document.getElementById("bgm");
  const btn = document.getElementById("bgmToggle");
  if (!audio || !btn) return;

  const VOLUME = 0.4; // atur volume 0.0 - 1.0
  audio.volume = VOLUME;
  let wantsMusic = localStorage.getItem("bgmMuted") !== "1";

  const render = (playing) => {
    btn.classList.toggle("is-muted", !playing);
    btn.setAttribute("aria-pressed", String(playing));
    btn.setAttribute("aria-label", playing ? "Matikan musik" : "Putar musik");
    btn.querySelector(".bgm-label").textContent = playing ? "BGM ON" : "BGM OFF";
  };

  const play = () => audio.play().then(() => render(true)).catch(() => render(false));
  const pause = () => { audio.pause(); render(false); };

  // Sembunyikan tombol kalau file musik tidak ditemukan
  audio.addEventListener("error", () => btn.classList.add("is-missing"));

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wantsMusic = audio.paused;
    localStorage.setItem("bgmMuted", wantsMusic ? "0" : "1");
    wantsMusic ? play() : pause();
  });

  // Coba autoplay; kalau diblokir, mulai di interaksi pertama
  if (wantsMusic) play();
  const startOnInteract = (e) => {
    if (btn.contains(e.target)) return; // biar klik tombol tidak dobel
    if (wantsMusic && audio.paused) play();
    ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
      document.removeEventListener(ev, startOnInteract));
  };
  ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
    document.addEventListener(ev, startOnInteract, { passive: true }));

  // Jeda saat tab disembunyikan, lanjut saat kembali
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) audio.pause();
    else if (wantsMusic) play();
  });
})();
