// ============================================================
// DATA ANGGOTA — Isi data masing-masing anggota di sini.
// Foto  : letakkan di assets/members/anggotaN/foto.jpg
// CV    : letakkan di assets/members/anggotaN/cv.pdf
// Link  : isi URL lengkap, atau "#" jika belum ada
// ============================================================
const members = [
  {
    id:"01", name:"NAMA ANGGOTA 01", pokemon:"CHARMANDER",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota1/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota1/cv.pdf"
  },
  {
    id:"02", name:"NAMA ANGGOTA 02", pokemon:"PIKACHU",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota2/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota2/cv.pdf"
  },
  {
    id:"03", name:"NAMA ANGGOTA 03", pokemon:"SQUIRTLE",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota3/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota3/cv.pdf"
  },
  {
    id:"04", name:"NAMA ANGGOTA 04", pokemon:"BULBASAUR",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota4/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota4/cv.pdf"
  },
  {
    id:"05", name:"NAMA ANGGOTA 05", pokemon:"EEVEE",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota5/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota5/cv.pdf"
  },
  {
    id:"06", name:"NAMA ANGGOTA 06", pokemon:"LUCARIO",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota6/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota6/cv.pdf"
  },
  {
    id:"07", name:"NAMA ANGGOTA 07", pokemon:"GENGAR",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota7/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota7/cv.pdf"
  },
  {
    id:"08", name:"NAMA ANGGOTA 08", pokemon:"CHARIZARD",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota8/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota8/cv.pdf"
  },
  {
    id:"09", name:"NAMA ANGGOTA 09", pokemon:"VAPOREON",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota9/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota9/cv.pdf"
  },
  {
    id:"10", name:"NAMA ANGGOTA 10", pokemon:"JOLTEON",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota10/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota10/cv.pdf"
  },
  {
    id:"11", name:"NAMA ANGGOTA 11", pokemon:"MEOWTH",
    birth:"DD / MM / YYYY", origin:"KOTA ASAL",
    photo:"assets/members/anggota11/foto.jpg",
    instagram:"#", linkedin:"#", github:"#",
    cv:"assets/members/anggota11/cv.pdf"
  },
];
// ============================================================



// ─── HELPER ─────────────────────────────────────────────────
function hasLink(url) { return url && url !== "#"; }

// ─── BANGUN KARTU DI LINEUP GRID ─────────────────────────────
const lineupGrid = document.getElementById("teamLineupGrid");

members.forEach((m, i) => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.style.opacity = "0"; // tersembunyi dulu, akan dianimasikan

  card.innerHTML = `
    <div class="tc-photo" id="tc-bg-${i}">
      <div class="tc-fallback">#${m.id}</div>
      <div class="tc-shade"></div>
      <div class="tc-badge">
        <span class="card-no">#${m.id}</span>
        <span class="tc-poke">${m.pokemon}</span>
      </div>
    </div>
    <div class="tc-info">
      <h3>${m.name}</h3>
      <p>${m.origin}</p>
    </div>
    <div class="tc-links">
      <a href="${hasLink(m.instagram) ? m.instagram : "#"}"
         target="_blank" rel="noopener"
         class="tl tl-ig${hasLink(m.instagram) ? "" : " tl-off"}"
         ${hasLink(m.instagram) ? "" : 'tabindex="-1"'}>IG</a>
      <a href="${hasLink(m.linkedin) ? m.linkedin : "#"}"
         target="_blank" rel="noopener"
         class="tl tl-li${hasLink(m.linkedin) ? "" : " tl-off"}"
         ${hasLink(m.linkedin) ? "" : 'tabindex="-1"'}>LI</a>
      <a href="${hasLink(m.github) ? m.github : "#"}"
         target="_blank" rel="noopener"
         class="tl tl-gh${hasLink(m.github) ? "" : " tl-off"}"
         ${hasLink(m.github) ? "" : 'tabindex="-1"'}>GH</a>
      <a href="${hasLink(m.cv) ? m.cv : "#"}"
         target="_blank" rel="noopener"
         class="tl tl-cv${hasLink(m.cv) ? "" : " tl-off"}"
         ${hasLink(m.cv) ? "" : 'tabindex="-1"'}>CV↗</a>
    </div>`;

  // Pasang foto sebagai background, fallback ke gradient
  const bg = card.querySelector(`#tc-bg-${i}`);
  const img = new Image();
  img.onload  = () => { bg.style.backgroundImage = `url('${m.photo}')`; };
  img.onerror = () => { bg.style.backgroundImage = "linear-gradient(135deg,#1f2d3d,#6c7480)"; };
  img.src = m.photo;

  // Klik foto → buka profile modal detail
  bg.addEventListener("click", () => openProfile(i));

  lineupGrid.appendChild(card);
});

// ─── POKEBALL WHO'S INSIDE — satu kali, kartu keluar inline ──
const discoverBall  = document.getElementById("pokeball");
const clickHint     = document.getElementById("clickHint");
const teamLineup    = document.getElementById("teamLineup");
const discoverCopy  = document.getElementById("discoverCopy");

discoverBall.addEventListener("click", function handlePokeball() {
  discoverBall.removeEventListener("click", handlePokeball); // satu kali saja
  discoverBall.style.cursor = "default";
  discoverBall.style.pointerEvents = "none";

  // Simpan posisi tengah pokeball sebelum dianimasikan
  const ballRect = discoverBall.getBoundingClientRect();
  const sectionRect = document.getElementById("discover").getBoundingClientRect();
  const ballCX = ballRect.left + ballRect.width  / 2 - sectionRect.left;
  const ballCY = ballRect.top  + ballRect.height / 2 - sectionRect.top;

  // ── Fase 1: getaran (0-680ms)
  discoverBall.classList.add("poke-shake");

  setTimeout(() => {
    discoverBall.classList.remove("poke-shake");

    // ── Fase 2: pokeball terbuka + flash (680ms)
    discoverBall.classList.add("poke-open");

    const flash = document.createElement("div");
    flash.className = "poke-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 700);

    // Fade out teks & hint
    [discoverCopy, clickHint].forEach(el => {
      if (el) { el.style.transition = "opacity .3s"; el.style.opacity = "0"; }
    });

    // ── Fase 3: tunjukkan lineup grid (tapi header belum muncul)
    setTimeout(() => {
      teamLineup.classList.add("show-grid");

      // ── Fase 4: kartu keluar satu per satu dari posisi pokeball
      const cards = lineupGrid.querySelectorAll(".team-card");
      cards.forEach((card, idx) => {
        // Hitung offset dari pokeball ke posisi kartu di grid
        const cardRect  = card.getBoundingClientRect();
        const sRect     = document.getElementById("discover").getBoundingClientRect();
        const cardCX    = cardRect.left + cardRect.width  / 2 - sRect.left;
        const cardCY    = cardRect.top  + cardRect.height / 2 - sRect.top;

        const fromX = ballCX - cardCX;
        const fromY = ballCY - cardCY;

        card.style.setProperty("--from-x", `${fromX}px`);
        card.style.setProperty("--from-y", `${fromY}px`);

        setTimeout(() => {
          card.style.opacity   = "1";
          card.style.animation = `cardFlyOut .55s cubic-bezier(.22,.68,0,1.2) forwards`;
        }, idx * 70);
      });

      // ── Fase 5: pokeball fade out setelah kartu terakhir keluar
      const totalDelay = members.length * 70 + 400;
      setTimeout(() => {
        discoverBall.style.transition = "opacity .5s, transform .5s";
        discoverBall.style.opacity   = "0";
        discoverBall.style.transform = "scale(0.4)";
        discoverBall.style.pointerEvents = "none";

        // ── Fase 6: header MEET THE TEAM muncul
        setTimeout(() => {
          discoverBall.style.display = "none";
          if (clickHint) clickHint.style.display = "none";
          if (discoverCopy) discoverCopy.style.display = "none";
          teamLineup.classList.add("show-header");
        }, 500);

      }, totalDelay);

    }, 520);

  }, 680);
});

// ─── PROFILE MODAL ──────────────────────────────────────────

const profileModal = document.getElementById("profileModal");

function openProfile(i) {
  const m = members[i];

  // Foto di modal
  const ph = document.getElementById("modalPhoto");
  ph.style.backgroundImage    = "";
  ph.style.backgroundSize     = "cover";
  ph.style.backgroundPosition = "center";
  const img = new Image();
  img.onload  = () => { ph.style.backgroundImage = `url('${m.photo}')`; };
  img.onerror = () => { ph.style.backgroundImage = "linear-gradient(135deg,#252f3d,#777f8a)"; };
  img.src = m.photo;

  // Teks
  document.getElementById("modalName").textContent    = m.name;
  document.getElementById("modalPokemon").textContent = m.pokemon;
  document.getElementById("modalBirth").textContent   = m.birth;
  document.getElementById("modalOrigin").textContent  = m.origin;
  document.getElementById("modalSocial").textContent  =
    hasLink(m.instagram) ? m.instagram.replace(/https?:\/\/(www\.)?instagram\.com\//,"@") : "—";

  // Tombol sosial & CV
  setLink("modalInstagram", m.instagram);
  setLink("modalLinkedin",  m.linkedin);
  setLink("modalGithub",    m.github);
  setLink("modalCv",        m.cv);

  profileModal.classList.add("open");
  profileModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function setLink(id, href) {
  const el = document.getElementById(id);
  const isEmpty = !hasLink(href);
  el.href              = isEmpty ? "#" : href;
  el.style.opacity     = isEmpty ? "0.28" : "1";
  el.style.pointerEvents = isEmpty ? "none" : "auto";
  el.style.cursor      = isEmpty ? "default" : "pointer";
}

function closeProfileModal() {
  profileModal.classList.remove("open");
  profileModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("closeModal").onclick         = closeProfileModal;
profileModal.querySelector(".modal-backdrop").onclick = closeProfileModal;
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProfileModal();
});

// ─── MEMORIES ───────────────────────────────────────────────

// ============================================================
// MEMORIES — Tambahkan nama file foto kamu di sini.
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

const memLeft  = document.getElementById("memoryLeft");
const memRight = document.getElementById("memoryRight");

function buildMemoryStrip(container, photos) {
  const doubled = [...photos, ...photos];
  doubled.forEach((filename, idx) => {
    const el = document.createElement("img");
    el.src   = `assets/memories/${filename}`;
    el.alt   = `Memory ${idx + 1}`;
    el.className = "memory-img";
    el.loading = "lazy";
    el.onerror = function() {
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
  const mid   = Math.ceil(memoriesPhotos.length / 2);
  const left  = memoriesPhotos.slice(0, mid);
  const right = memoriesPhotos.slice(mid).length > 0
                  ? memoriesPhotos.slice(mid)
                  : memoriesPhotos.slice().reverse();
  buildMemoryStrip(memLeft,  left);
  buildMemoryStrip(memRight, right);
}

// ─── LOADER ─────────────────────────────────────────────────
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 2100);
});
