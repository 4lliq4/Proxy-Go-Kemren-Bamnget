const members = [
  ["01","NAMA ANGGOTA 01","CHARMANDER","DD / MM / YYYY","KOTA ASAL","@username"],
  ["02","NAMA ANGGOTA 02","PIKACHU","DD / MM / YYYY","KOTA ASAL","@username"],
  ["03","NAMA ANGGOTA 03","SQUIRTLE","DD / MM / YYYY","KOTA ASAL","@username"],
  ["04","NAMA ANGGOTA 04","BULBASAUR","DD / MM / YYYY","KOTA ASAL","@username"],
  ["05","NAMA ANGGOTA 05","EEVEE","DD / MM / YYYY","KOTA ASAL","@username"],
  ["06","NAMA ANGGOTA 06","LUCARIO","DD / MM / YYYY","KOTA ASAL","@username"],
  ["07","NAMA ANGGOTA 07","GENGAR","DD / MM / YYYY","KOTA ASAL","@username"],
  ["08","NAMA ANGGOTA 08","CHARIZARD","DD / MM / YYYY","KOTA ASAL","@username"],
  ["09","NAMA ANGGOTA 09","VAPOREON","DD / MM / YYYY","KOTA ASAL","@username"],
  ["10","NAMA ANGGOTA 10","JOLTEON","DD / MM / YYYY","KOTA ASAL","@username"],
  ["11","NAMA ANGGOTA 11","MEOWTH","DD / MM / YYYY","KOTA ASAL","@username"]
];

const grid = document.getElementById("memberGrid");
const pokeballBtn = document.getElementById("pokeball");
const pokeballHint = document.getElementById("pokeballHint");
const membersSection = document.getElementById("members");
// Render 11 member cards with 3D Flip
members.forEach((m, i) => {
  const card = document.createElement("article");
  card.className = "member-card";
  card.dataset.index = i;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${m[1]} profile card. Click to flip.`);

  const cleanUser = m[5].replace(/^@/, '');

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        <div class="member-img"></div>
        <span class="type-tag">${m[2]}</span>
        <div class="card-info">
          <span class="card-no">#${m[0]}</span>
          <h3 class="front-name">${m[1]}</h3>
          <p class="front-hint">TAP TO FLIP <span>↻</span></p>
        </div>
      </div>
      <div class="card-face card-back">
        <div class="back-badge-row">
          <span class="card-no">#${m[0]}</span>
          <span class="type-tag">${m[2]}</span>
        </div>
        <h3 class="back-name">${m[1]}</h3>
        <div class="back-meta">
          <div class="meta-field">
            <span class="meta-label">DATE OF BIRTH</span>
            <strong class="meta-value">${m[3]}</strong>
          </div>
          <div class="meta-field">
            <span class="meta-label">ORIGIN</span>
            <strong class="meta-value">${m[4]}</strong>
          </div>
        </div>
        <div class="back-links">
          <a href="https://instagram.com/${cleanUser}" target="_blank" rel="noopener noreferrer" class="card-link-pill" aria-label="${m[1]} Instagram">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <span>Instagram</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="card-link-pill" aria-label="${m[1]} LinkedIn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a href="#" class="card-link-pill cv-pill" aria-label="View CV for ${m[1]}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>CV</span>
          </a>
        </div>
        <span class="card-flip-indicator">TAP TO FLIP BACK ↺</span>
      </div>
    </div>`;

  // Flip handler: do not flip if clicking interactive link/button
  card.addEventListener("click", (e) => {
    if (e.target.closest("a, button, .card-link-pill")) {
      return;
    }
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.closest("a, button, .card-link-pill")) {
        return;
      }
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });

  // Handle interactive pills on card back (Instagram, LinkedIn, CV)
  card.querySelectorAll(".card-link-pill").forEach(link => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();

      if (link.classList.contains("cv-pill")) {
        e.preventDefault();
        openModal(i);
      }
    });
  });

  grid.appendChild(card);
});

let isArchiveOpen = false;
let isAnimating = false;

const discoverSection = document.getElementById("discover");
const returnPokeballBtn = document.getElementById("returnPokeballBtn");

// Event-driven Open Completion (Pokeball disappears, Meet the Team takes over)
function handleOpenComplete() {
  pokeballBtn.classList.remove("is-opening");
  isArchiveOpen = true;
  isAnimating = false;

  if (discoverSection) {
    discoverSection.classList.add("archive-open");
  }

  if (membersSection) {
    void membersSection.offsetWidth; // trigger reflow for smooth overlay transition
    membersSection.classList.add("is-unlocked");
  }

  // Stagger reveal 11 cards
  const cards = grid.querySelectorAll(".member-card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach((card, idx) => {
    card.classList.remove("revealed");
    if (prefersReducedMotion) {
      card.classList.add("revealed");
    } else {
      setTimeout(() => {
        card.classList.add("revealed");
      }, idx * 45);
    }
  });

  if (discoverSection) {
    discoverSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Reset / Return to Pokéball (Meet the Team fades out, Pokéball reappears)
function resetArchive() {
  if (isAnimating) return;
  isAnimating = true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fade out Meet the Team
  if (membersSection) {
    membersSection.classList.remove("is-unlocked");
  }

  const duration = prefersReducedMotion ? 0 : 350;

  setTimeout(() => {
    if (discoverSection) {
      discoverSection.classList.remove("archive-open");
    }

    // Reset all cards to front face
    grid.querySelectorAll(".member-card.flipped").forEach(c => c.classList.remove("flipped"));
    grid.querySelectorAll(".member-card").forEach(c => c.classList.remove("revealed"));

    isArchiveOpen = false;

    if (prefersReducedMotion) {
      isAnimating = false;
    } else {
      pokeballBtn.classList.add("is-reappearing");
    }

    if (discoverSection) {
      discoverSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, duration);
}

// Pokéball Click to Open
function openArchive() {
  if (isAnimating || isArchiveOpen) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  isAnimating = true;
  pokeballBtn.setAttribute("aria-expanded", "true");

  if (prefersReducedMotion) {
    handleOpenComplete();
  } else {
    pokeballBtn.classList.add("is-opening");
  }
}

if (pokeballBtn) {
  // Synchronized Animation End Handler
  pokeballBtn.addEventListener("animationend", (e) => {
    if (e.animationName === "pokeDisappear") {
      handleOpenComplete();
    } else if (e.animationName === "pokeReappear") {
      pokeballBtn.classList.remove("is-reappearing");
      isAnimating = false;
    }
  });

  // Click & Keyboard to Open
  pokeballBtn.addEventListener("click", openArchive);
  pokeballBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openArchive();
    }
  });
}

// Return to Pokéball Button Handler
if (returnPokeballBtn) {
  returnPokeballBtn.addEventListener("click", resetArchive);
  returnPokeballBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      resetArchive();
    }
  });
}

const memLeft = document.getElementById("memoryLeft");
const memRight = document.getElementById("memoryRight");
for (let i = 1; i <= 12; i++) {
  const el = document.createElement("div"); el.className = "memory-placeholder"; el.textContent = `MEMORY ${String(i).padStart(2, "0")}`; memLeft.appendChild(el);
}
for (let i = 13; i <= 24; i++) {
  const el = document.createElement("div"); el.className = "memory-placeholder"; el.textContent = `MEMORY ${String(i).padStart(2, "0")}`; memRight.appendChild(el);
}

const modal = document.getElementById("cvModal");
function openModal(i) {
  const m = members[i];
  document.getElementById("modalName").textContent = m[1];
  document.getElementById("modalPokemon").textContent = m[2];
  document.getElementById("modalBirth").textContent = m[3];
  document.getElementById("modalOrigin").textContent = m[4];
  document.getElementById("modalSocial").textContent = m[5];
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = "" }
document.getElementById("closeModal").onclick = closeModal;
modal.querySelector(".modal-backdrop").onclick = closeModal;
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal() });

window.addEventListener("load",()=>{
  setTimeout(()=>document.getElementById("loader").classList.add("hide"),2100);
});
