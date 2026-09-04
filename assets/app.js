(function () {
  const C = window.CURRICULUM;
  const root = document.getElementById("app");
  const navEl = document.getElementById("nav");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = "2026";

  const state = {
    mode: localStorage.getItem("nuclear-mode") || "adult",
    plants: null,
    map: null,
    markers: [],
    selected: null
  };

  function assetUrl(rel) {
    const page = String(location.href).replace(/[?#].*$/, "");
    const dir = page.replace(/[^/]*$/, "");
    return dir + String(rel).replace(/^\//, "");
  }

  function isKid() { return state.mode === "kids"; }
  function t(adult, kid) { return isKid() ? kid : adult; }

  function setMode(mode) {
    state.mode = mode;
    localStorage.setItem("nuclear-mode", mode);
    document.body.classList.toggle("kids", mode === "kids");
    document.body.classList.toggle("adult", mode === "adult");
    document.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.mode === mode));
    });
    render();
  }

  function route() {
    const hash = (location.hash || "#/").replace(/^#/, "");
    const parts = hash.split("/").filter(Boolean);
    return { parts, path: "/" + parts.join("/") };
  }

  function nav() {
    navEl.innerHTML = C.nav.map((item) => {
      const here = route().path;
      const active = item.href === "#/" ? here === "/" : here.startsWith(item.href.replace("#", ""));
      return `<a href="${item.href}" class="${active ? "active" : ""}">${t(item.adult, item.kid)}</a>`;
    }).join("");
  }

  function freeze() {
    return `<div class="freeze">${C.meta.freezeNote}</div>`;
  }

  function home() {
    const s = C.meta.snapshot;
    const conclusions = isKid() ? C.conclusions.kid : C.conclusions.adult;
    return `
      <section class="hero">
        ${freeze()}
        <h1>${t("Nuclear energy, taught in order", "Nuclear energy, told simply")}</h1>
        <p class="lede">${t(
          "A USA-first course from the first chain reaction to the plants on the Great Lakes. Adult pages carry conclusions. Kids pages use the same skeleton and smaller words.",
          "Same story as the grown-up course. Shorter words. The bomb comes before the light bulb, because that is what happened."
        )}</p>
        <div class="stats">
          <div class="stat"><b>${s.usReactors}</b><span>${t("U.S. reactors running", "U.S. machines on")}</span></div>
          <div class="stat"><b>${s.usSharePct}%</b><span>${t("of U.S. electricity", "of U.S. electricity")}</span></div>
          <div class="stat"><b>${s.usCfPct}%</b><span>${t("fleet capacity factor", "how hard they ran")}</span></div>
          <div class="stat"><b>${s.worldSharePct}%</b><span>${t("of world electricity", "of world electricity")}</span></div>
        </div>
      </section>
      <div class="grid-2">
        <div>
          <p class="kicker">${t("Start here", "Start here")}</p>
          <div class="session-list">
            ${C.sessions.map((sess) => `
              <article class="session-card">
                <a href="#/learn/${sess.n}">
                  <span class="kicker">Session ${sess.n}</span>
                  <strong>${t(sess.adultTitle, sess.kidTitle)}</strong>
                </a>
              </article>`).join("")}
          </div>
        </div>
        <aside class="card">
          <p class="kicker">${t("What this course is willing to say", "The big takeaways")}</p>
          <ol>${conclusions.map((c) => `<li>${c}</li>`).join("")}</ol>
          <p class="counter">${t("Each takeaway has a counter-case in the lesson. Cheap wind plus storage is the serious rival, not a cartoon.", "Grown-up pages also show the other side of the argument.")}</p>
        </aside>
      </div>
    `;
  }

  function learnIndex() {
    return `
      <section class="page">
        ${freeze()}
        <h1>${t("Eight sessions", "Eight lessons")}</h1>
        <p class="lede">${t("About 35–45 minutes each. The encyclopedia sits behind these.", "Read in order. Map and safety tools wait inside.")}</p>
        <p><a href="#/print">${t("Printable lesson sheets", "Print the lessons")}</a> · <a href="#/topics/waste">${t("Waste and the NPT", "Leftover fuel")}</a></p>
        <div class="session-list" style="margin-top:18px">
          ${C.sessions.map((sess) => `
            <article class="session-card">
              <a href="#/learn/${sess.n}">
                <span class="kicker">Session ${sess.n}</span>
                <strong>${t(sess.adultTitle, sess.kidTitle)}</strong>
              </a>
            </article>`).join("")}
        </div>
      </section>`;
  }

  function sessionPage(n) {
    const sess = C.sessions.find((s) => s.n === Number(n));
    if (!sess) return `<p>That lesson is missing.</p>`;
    const paras = (isKid() ? sess.kid : sess.adult).map((p) => `<p>${p}</p>`).join("");
    const extra = extraFor(sess.n);
    const prev = sess.n > 1 ? `<a href="#/learn/${sess.n - 1}">← ${t("Previous", "Back")}</a>` : `<a href="#/learn">${t("All sessions", "All lessons")}</a>`;
    const next = sess.n < 8 ? `<a href="#/learn/${sess.n + 1}">${t("Next", "Next")} →</a>` : `<a href="#/map">${t("Open the lake map", "Open the lake map")} →</a>`;
    return `
      <section class="session prose">
        ${freeze()}
        <p class="kicker">Session ${sess.n} of 8</p>
        <h1>${t(sess.adultTitle, sess.kidTitle)}</h1>
        ${paras}
        ${extra}
        <div class="pager">${prev}${next}</div>
      </section>`;
  }


  function session1Visual() {
    return `
      <section class="cutaway" id="s1-cutaway">
        <p class="kicker">${t("Plate I · Incredible cutaway", "Look inside")}</p>
        <p class="lede" style="font-size:16px;margin:0 0 8px">${t(
          "Same idea as a Biesty plate: slice the machine open, then make the hidden parts move. Tap a layer.",
          "We cut the machine open. Tap a picture. Then move the rods."
        )}</p>
        <div class="plate-tabs" role="tablist">
          <button type="button" data-plate="plant" aria-pressed="true">${t("The plant", "The plant")}</button>
          <button type="button" data-plate="pellet">${t("Pellet to split", "Tiny pellet")}</button>
          <button type="button" data-plate="core">${t("The core", "The pot")}</button>
          <button type="button" data-plate="chain">${t("Chain + rods", "Dominos")}</button>
        </div>

        <div class="plate on" data-pane="plant">
          <div class="plate-frame">
            <img src="${assetUrl("assets/plates/plant-cutaway.jpg")}" width="1168" height="784" loading="eager" decoding="async" alt="${t("Cutaway of a Great Lakes pressurized-water plant: core, steam, turbine, wires, lake water.", "A power plant cut open by the lake.")}" />
          </div>
          <div class="hotspots" data-notes="plant">
            <button type="button" data-note="core" aria-pressed="true">${t("Core", "Core")}</button>
            <button type="button" data-note="rods">${t("Control rods", "Rods")}</button>
            <button type="button" data-note="steam">${t("Steam generator", "Steam")}</button>
            <button type="button" data-note="turbine">${t("Turbine + generator", "Spinning part")}</button>
            <button type="button" data-note="lake">${t("Lake water", "Lake")}</button>
            <button type="button" data-note="wires">${t("Wires out", "Wires")}</button>
          </div>
          <p class="plate-note" data-caption="plant">${t("Electricity is a side effect of heat. The core makes heat. Water carries it. Steam spins a turbine. A generator turns spin into current. Lake water takes leftover heat.", "Heat first. Steam next. Spin next. Wires last.")}</p>
        </div>

        <div class="plate" data-pane="pellet">
          <div class="plate-frame">
            <img src="${assetUrl("assets/plates/pellet-fission.jpg")}" width="1168" height="784" loading="eager" decoding="async" alt="${t("Three-scale cutaway: ceramic fuel pellet, atom with nucleus, nucleus splitting and throwing neutrons and heat.", "A pellet, an atom, and a split.")}" />
          </div>
          <p class="plate-note">${t("A pellet is fingertip-size ceramic uranium dioxide. Inside, some nuclei can split when a neutron hits. The split throws heat and more neutrons. That is fission. We do not need the algebra of a chain here — only the picture: one split can cause the next.", "A pellet is as small as a fingertip. Inside, a nucleus can split. Heat comes out. Tiny pieces called neutrons can hit the next atom.")}</p>
        </div>

        <div class="plate" data-pane="core">
          <div class="plate-frame portrait">
            <img src="${assetUrl("assets/plates/core-cutaway.jpg")}" width="784" height="1168" loading="eager" decoding="async" alt="${t("Cutaway reactor vessel: fuel assemblies in water, control rods hanging above, heat leaving in pipes.", "The pot with fuel standing in water and rods above.")}" />
          </div>
          <p class="plate-note">${t("The core is a forest of fuel tubes standing in water. Water slows neutrons and carries heat. Control rods drop from above and soak up neutrons so the chain stays a walk, not a sprint.", "Fuel stands in water. Rods can drop in and catch the flying pieces so the chain does not run away.")}</p>
        </div>

        <div class="plate" data-pane="chain">
          <div class="chain-board">
            <svg viewBox="0 0 640 360" role="img" aria-label="${t("Animated chain reaction with movable control rods", "Moving picture of splits and rods")}" class="board" id="chain-svg">
              <rect x="0" y="0" width="640" height="360" fill="#efe6d2"/>
              <text x="24" y="32" font-family="Georgia, serif" font-size="16" fill="#1c1914">${t("Chain reaction — difference is control", "Splits that cause more splits")}</text>
              <text x="24" y="52" font-family="IBM Plex Sans, sans-serif" font-size="11" fill="#4a453c">${t("Neutrons fly. Rods catch. Heat blooms when the chain is allowed.", "Move the slider. Watch the dots.")}</text>
              <g class="heat-pulse" opacity="0.4">
                <ellipse cx="200" cy="230" rx="70" ry="36" fill="#d7b15a"/>
                <ellipse cx="440" cy="230" rx="70" ry="36" fill="#d7b15a"/>
              </g>
              <g fill="#7a5a32" stroke="#1c1914" stroke-width="2">
                <rect x="160" y="190" width="28" height="110" rx="4"/>
                <rect x="200" y="190" width="28" height="110" rx="4"/>
                <rect x="400" y="190" width="28" height="110" rx="4"/>
                <rect x="440" y="190" width="28" height="110" rx="4"/>
              </g>
              <g fill="#8b3a2a">
                <circle cx="174" cy="230" r="9"/>
                <circle cx="214" cy="250" r="9"/>
                <circle cx="414" cy="230" r="9"/>
                <circle cx="454" cy="250" r="9"/>
              </g>
              <g class="rods" fill="#2a2a28" stroke="#111" stroke-width="1">
                <rect x="166" y="70" width="16" height="130" rx="2"/>
                <rect x="206" y="70" width="16" height="130" rx="2"/>
                <rect x="406" y="70" width="16" height="130" rx="2"/>
                <rect x="446" y="70" width="16" height="130" rx="2"/>
              </g>
              <g fill="#1b4a56" stroke="#fff" stroke-width="1">
                <circle class="n-dot" r="6" cx="80" cy="220"/>
                <circle class="n-dot d2" r="6" cx="320" cy="220"/>
                <circle class="n-dot d3" r="6" cx="200" cy="240"/>
                <circle class="n-dot d4" r="6" cx="140" cy="260"/>
              </g>
              <text x="158" y="322" font-size="11" fill="#4a453c">${t("FUEL", "FUEL")}</text>
              <text x="398" y="322" font-size="11" fill="#4a453c">${t("FUEL", "FUEL")}</text>
              <text x="500" y="88" font-size="11" fill="#4a453c">${t("RODS", "RODS")}</text>
            </svg>
          </div>
          <div class="rod-ctrl">
            <label><span>${t("Control rods", "Rods")}</span><b id="rod-label">${t("halfway", "halfway")}</b></label>
            <input id="rod-slider" type="range" min="0" max="100" value="35" />
            <p class="plate-note" id="rod-note">${t("Slide right to drop the rods. Neutrons get caught. Heat quiets. That is a plant. A weapon is built so the chain cannot be walked back. This page does not teach that machine.", "Slide right. The rods drop. The flying pieces get caught. That is control.")}</p>
          </div>
        </div>
      </section>`;
  }

  function bindCutaway() {
    const root = document.getElementById("s1-cutaway");
    if (!root) return;
    root.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.replaceWith(Object.assign(document.createElement("p"), {
          className: "plate-note",
          textContent: t("Safari could not load this plate from " + img.getAttribute("src") + ". Hard-refresh, or open the site over https rather than from Files.", "Picture did not load. Refresh, or open the site in a browser tab from the web.")
        }));
      });
    });
    const notes = {
      core: t("The core is where nuclei split. It is a heat engine, not a lightning box.", "This is where atoms split and make heat."),
      rods: t("Control rods soak up neutrons. Drop them and the chain slows. That is the difference between a plant and a runaway.", "Rods catch the flying pieces so the chain stays a walk."),
      steam: t("In a PWR the reactor water stays inside its own loop. It heats a second loop of cleaner water into steam.", "Heat moves into other water and makes steam."),
      turbine: t("Steam hits blades. The shaft spins a generator. After this point it is ordinary electricity.", "Steam spins a fan. The fan makes electricity."),
      lake: t("Lake water is the dump for leftover heat. It is not the water that boiled on the fuel.", "The lake cools the leftover heat."),
      wires: t("Wires leave the fence. Your house is on the grid, not on this site.", "Wires leave. Your house is not the plant.")
    };
    root.querySelectorAll("[data-plate]").forEach((btn) => {
      btn.addEventListener("click", () => {
        root.querySelectorAll("[data-plate]").forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        root.querySelectorAll("[data-pane]").forEach((pane) => pane.classList.toggle("on", pane.dataset.pane === btn.dataset.plate));
      });
    });
    root.querySelectorAll("[data-note]").forEach((btn) => {
      btn.addEventListener("click", () => {
        root.querySelectorAll("[data-note]").forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        const cap = root.querySelector("[data-caption=plant]");
        if (cap) cap.textContent = notes[btn.dataset.note];
      });
    });
    const slider = document.getElementById("rod-slider");
    const svg = document.getElementById("chain-svg");
    const label = document.getElementById("rod-label");
    const note = document.getElementById("rod-note");
    const apply = () => {
      if (!slider || !svg) return;
      const v = Number(slider.value);
      svg.classList.toggle("rods-in", v >= 55);
      const rods = svg.querySelector(".rods");
      if (rods) rods.style.transform = `translateY(${Math.round(v * 0.72)}px)`;
      if (label) label.textContent = v < 25 ? t("mostly out — chain lively", "mostly out") : v < 65 ? t("halfway", "halfway") : t("in — chain quiet", "rods in");
      if (note && v >= 70) note.textContent = t("Rods in. Neutrons get caught. Heat fades. This is how a plant is walked, not sprinted.", "Rods in. The flying pieces get caught. The heat calms down.");
    };
    slider?.addEventListener("input", apply);
    apply();
  }

  function extraFor(n) {
    if (n === 1) return session1Visual() + sliderBox();
    if (n === 4 || n === 6) return `<p><a class="pager" href="#/map" style="display:inline-block;margin-top:8px">${t("Open the Midwest map", "Open the lake map")}</a></p>`;
    if (n === 5) return `<p><a href="#/safety">${t("Open the three-accident comparator", "Compare the three accidents")}</a></p>`;
    if (n === 7) return costBoxes();
    return "";
  }

  function sliderBox() {
    return `
      <div class="slider-wrap" id="cf-tool">
        <p class="kicker">${t("Interactive · capacity versus generation", "Try this · engines versus work")}</p>
        <label><span>${t("Compare this many gigawatts of each source", "How many gigawatts of each?")}</span><b id="gw-label">1.0 GW</b></label>
        <input id="gw" type="range" min="0.5" max="5" step="0.5" value="1" />
        <p style="font-size:13px;color:var(--ink-soft)">${t(
          "Each bar is annual megawatt-hours from the same nameplate, using frozen 2026-class capacity factors: nuclear 91%, gas 56%, wind 35%, utility solar 25%. Homes assume 10.8 MWh per year.",
          "Same size engines. Nuclear walks all day. Solar and wind sprint when the weather says so."
        )}</p>
        <div class="bars" id="bars"></div>
      </div>`;
  }

  function paintSlider() {
    const input = document.getElementById("gw");
    if (!input) return;
    const draw = () => {
      const gw = Number(input.value);
      document.getElementById("gw-label").textContent = gw.toFixed(1) + " GW";
      const rows = [
        ["Nuclear", 0.91, "#1b4a56"],
        ["Gas", 0.56, "#8b3a2a"],
        ["Wind", 0.35, "#2d6a78"],
        ["Solar", 0.25, "#b8892e"]
      ];
      const mwh = (cf) => gw * 1000 * cf * 8760;
      const max = mwh(0.91);
      document.getElementById("bars").innerHTML = rows.map(([name, cf, color]) => {
        const energy = mwh(cf);
        const homes = Math.round(energy / 10.8);
        const pct = Math.max(8, (energy / max) * 100);
        return `<div class="bar-row"><span>${name}</span><div class="bar"><span style="width:${pct}%;background:${color}"></span></div><span>${Math.round(energy).toLocaleString()} MWh · ~${homes.toLocaleString()} ${t("homes", "homes")}</span></div>`;
      }).join("");
    };
    input.addEventListener("input", draw);
    draw();
  }

  function costBoxes() {
    return `
      <div class="cost-grid">
        <article class="card house">
          <p class="kicker">${t("House A", "House A")}</p>
          <h3>${t("Existing plant", "Paid-off house")}</h3>
          <p>${t("Fuel, people, maintenance. The cheapest nuclear MWh America will have this decade.", "You still pay for heat and the roof. You are not paying a second mortgage.")}</p>
        </article>
        <article class="card house">
          <p class="kicker">${t("House B", "House B")}</p>
          <h3>${t("New U.S. FOAK", "First custom house")}</h3>
          <p>${t("Vogtle 3 & 4: ~2.2 GW for $32–35+ billion, about $15,000–16,500/kW. Unit 4 cheaper than 3.", "Builders had been gone 30 years. The first one costs a fortune. The second costs less.")}</p>
        </article>
        <article class="card house">
          <p class="kicker">${t("The rival", "The other tools")}</p>
          <h3>${t("Wind / solar + firming", "Wind and sun plus extras")}</h3>
          <p>${t("Cheaper to start. Need batteries, gas, or extra wires to look like 2 a.m. in January.", "Cheaper to begin. Need extra gear when the wind dies and the sun sets.")}</p>
        </article>
      </div>`;
  }

  function mapPage() {
    return `
      <section class="page">
        ${freeze()}
        <h1>${t("Great Lakes and Midwest plants", "The lake map")}</h1>
        <p class="lede">${t("One pin per site. Yellow is waking, not running. Proposed SMRs do not recolor a site.", "Tap a pin. Green is on. Yellow is waking up. Gray is gone.")}</p>
        <div class="map-toolbar">
          <button type="button" id="zoom-mi" aria-pressed="false">${t("Michigan only", "Just Michigan")}</button>
          <button type="button" id="zoom-mw" aria-pressed="true">${t("All Midwest", "Whole map")}</button>
        </div>
        <div class="map-legend">
          <span><i class="dot operating"></i>${t("Running", "On")}</span>
          <span><i class="dot restarting"></i>${t("Restarting", "Waking")}</span>
          <span><i class="dot closed"></i>${t("Closed", "Gone")}</span>
        </div>
        <div id="map"></div>
        <div class="plant-panel card" id="plant-panel">
          <p class="kicker">${t("Select a pin", "Tap a pin")}</p>
          <p>${t("Detroit-first order is Fermi, Cook, Palisades.", "Start with Fermi, Cook, and Palisades.")}</p>
        </div>
      </section>`;
  }

  function plantHTML(site) {
    const card = isKid() ? site.card_kid : site.card_adult;
    const units = (site.units || []).map((u) => {
      const mw = u.mw_net_summer != null ? `${u.mw_net_summer} MW` : "historic";
      return `<li>${u.id} · ${u.type || "?"} · ${mw} · ${u.status}</li>`;
    }).join("");
    return `
      <p class="kicker">${site.locality}, ${site.state} · ${site.lake_or_river || ""}</p>
      <h2>${card.title}<span class="status-chip ${site.site_status}">${site.site_status}</span></h2>
      <p>${card.body}</p>
      <p><em>${isKid() ? card.try_this : (site.card_adult.what_we_take || "")}</em></p>
      <p class="kicker">${t("Units", "Machines")}</p>
      <ul>${units}</ul>`;
  }

  async function loadPlants() {
    if (state.plants) return state.plants;
    if (window.PLANTS) {
      state.plants = window.PLANTS;
      return state.plants;
    }
    const res = await fetch("data/plants.json");
    state.plants = await res.json();
    return state.plants;
  }

  function color(status) {
    return { operating: "#2f6b3a", restarting: "#c48a12", closed: "#6d6a63", proposed: "#1f5f8b" }[status] || "#6d6a63";
  }

  async function paintMap() {
    const el = document.getElementById("map");
    if (!el || typeof L === "undefined") return;
    const data = await loadPlants();
    if (state.map) {
      state.map.remove();
      state.map = null;
    }
    const map = L.map(el, { scrollWheelZoom: true }).setView([42.35, -86], 6);
    state.map = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 12
    }).addTo(map);
    const bounds = [];
    data.sites.forEach((site) => {
      const marker = L.circleMarker([site.lat, site.lon], {
        radius: site.layer === "michigan" ? 9 : 7,
        color: "#f3eee3",
        weight: 2,
        fillColor: color(site.site_status),
        fillOpacity: 0.95
      }).addTo(map);
      marker.bindTooltip(site.short_name);
      marker.on("click", () => {
        state.selected = site.id;
        document.getElementById("plant-panel").innerHTML = plantHTML(site);
      });
      bounds.push([site.lat, site.lon]);
    });
    const miBounds = [];
    data.sites.forEach((site) => {
      if (site.state === "MI") miBounds.push([site.lat, site.lon]);
    });
    function fitAll() {
      if (bounds.length) map.fitBounds(bounds, { padding: [24, 24], maxZoom: 6 });
      document.getElementById("zoom-mw")?.setAttribute("aria-pressed", "true");
      document.getElementById("zoom-mi")?.setAttribute("aria-pressed", "false");
    }
    function fitMi() {
      if (miBounds.length) map.fitBounds(miBounds, { padding: [28, 28], maxZoom: 8 });
      document.getElementById("zoom-mi")?.setAttribute("aria-pressed", "true");
      document.getElementById("zoom-mw")?.setAttribute("aria-pressed", "false");
    }
    if (bounds.length) map.fitBounds(bounds, { padding: [24, 24], maxZoom: 6 });
    document.getElementById("zoom-mi")?.addEventListener("click", fitMi);
    document.getElementById("zoom-mw")?.addEventListener("click", fitAll);
    const first = data.sites.find((s) => s.id === "fermi") || data.sites[0];
    document.getElementById("plant-panel").innerHTML = plantHTML(first);
  }

  function safetyPage() {
    const view = isKid() ? "kidStory" : "adultStory";
    return `
      <section class="page">
        ${freeze()}
        <h1>${t("Three names, three different days", "Safe or scary?")}</h1>
        <p class="lede">${t("Same word — accident. Not the same event. Toggle Adult/Kids in the header and the cards change.", "Pennsylvania, Ukraine, Japan. Read all three.")}</p>
        <div class="compare">
          ${C.accidents.map((a) => `
            <article class="card">
              <p class="kicker">INES ${a.ines} · ${a.date}</p>
              <h3>${a.name}</h3>
              <p class="meta">${a.place}</p>
              <p>${a[view]}</p>
              ${isKid() ? "" : `<p><strong>What broke.</strong> ${a.broke}</p><p><strong>Offsite.</strong> ${a.offsite}</p><p><strong>After.</strong> ${a.after}</p>`}
            </article>`).join("")}
        </div>
        <div class="take">
          <p>${t(C.sessions[4].adult[C.sessions[4].adult.length - 1], C.sessions[4].kid[C.sessions[4].kid.length - 1])}</p>
        </div>
      </section>`;
  }

  function costPage() {
    return `
      <section class="page prose">
        ${freeze()}
        <h1>${t("What it costs", "Two houses")}</h1>
        ${(isKid() ? C.sessions[6].kid : C.sessions[6].adult).map((p) => `<p>${p}</p>`).join("")}
        ${costBoxes()}
        ${sliderBox()}
      </section>`;
  }

  function topicsPage() {
    return `
      <section class="page">
        <h1>${t("Encyclopedia", "More pages")}</h1>
        <p class="lede">${t("Deep path. Each card jumps to the short-path session that carries the argument.", "More doors. Same story.")}</p>
        <div class="session-list" style="margin-top:16px">
          ${C.topics.map((tp) => `
            <article class="session-card"><a href="${tp.href || "#/learn/" + tp.session}">
              <span class="kicker">${tp.id}</span>
              <strong>${tp.title}</strong>
            </a></article>`).join("")}
        </div>
        <div class="card" style="margin-top:18px">
          <p class="kicker">${t("Uses beyond electricity", "Not only electricity")}</p>
          ${(isKid() ? C.uses.kid : C.uses.adult).map((p) => `<p>${p}</p>`).join("")}
        </div>
        <h2 style="font-family:var(--serif)">${t("Glossary", "Word list")}</h2>
        <dl class="glossary">
          ${C.glossary.map((g) => `<dt>${g.term}</dt><dd>${t(g.adult, g.kid)}</dd>`).join("")}
        </dl>
        <h2 style="font-family:var(--serif)">${t("Sources", "Where the numbers came from")}</h2>
        <ul>${C.sources.map((s) => `<li>${s}</li>`).join("")}</ul>
      </section>`;
  }

  function claimsPage() {
    return `
      <section class="page">
        <h1>${t("How to read the next headline", "Headlines")}</h1>
        <p class="lede">${t("Four kid questions, seven adult ones collapsed into the same habit: is it on, who pays, compared with what, which accident.", "Tap a headline. Ask the missing piece.")}</p>
        <div class="claim-grid">
          ${C.claims.map((c, i) => `
            <button class="claim" data-claim="${i}">
              ${c.headline}
              <div class="questions">${c.tags.map((tg) => `<span>${tg}</span>`).join("")}</div>
            </button>`).join("")}
        </div>
        <div class="card" id="claim-out" style="margin-top:16px">
          <p>${t("Ask: Is this machine making power today, being built, or only described?", "Ask: is it on?")}</p>
        </div>
      </section>`;
  }

  function bindClaims() {
    document.querySelectorAll("[data-claim]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".claim").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const c = C.claims[Number(btn.dataset.claim)];
        const answers = {
          0: t("Not on. No U.S. home reactor exists. Microreactors are a campus/mine/base story.", "Not a house machine. Not next year."),
          1: t("Per TWh, nuclear sits with wind and solar. Coal smoke is the high scoreboard. Chernobyl is the tail risk people remember.", "That headline skips the scoreboard. Coal smoke hurts more people per amount of power."),
          2: t("False on 2 September 2026. Fuel was being loaded. NRC board 0% power. Restarting ≠ generating.", "Not yet. Fuel went in. Power has not come out."),
          3: t("Physics spark ≠ machine that runs every day ≠ grid interconnection. None of those clocks say “your bill.”", "A lab spark is not a night-light."),
          4: t("True for many fence-line LCOE charts. Incomplete if you need 2 a.m. in January without gas.", "Cheaper to start. Not automatically there at 2 a.m."),
          5: t("America is restarting and talking. China is pouring concrete. Those are different maps.", "Look for cranes. Most of them are not in Michigan.")
        };
        document.getElementById("claim-out").innerHTML = `<p class="kicker">${c.headline}</p><p>${answers[btn.dataset.claim]}</p>`;
      });
    });
  }


  function wastePage() {
    const w = C.waste;
    const paras = (isKid() ? w.kid : w.adult).map((p) => `<p>${p}</p>`).join("");
    return `
      <section class="page prose">
        ${freeze()}
        <h1>${t(w.adultTitle, w.kidTitle)}</h1>
        ${paras}
        <div class="card">
          <p class="kicker">${t("Local pins", "On the lake map")}</p>
          <p>${t("Prairie Island, Minnesota: operating plant beside a Native community, casks on site. Big Rock Point, Michigan: plant gone, casks still inland from Lake Michigan. Palisades: if it restarts, it still has a pad.", "Prairie Island still runs next to a Native community. Big Rock Point is gone; the barrels are not.")}</p>
          <p><a href="#/map">${t("Open the map", "Open the lake map")} →</a></p>
        </div>
      </section>`;
  }

  function printPage() {
    const tries = {
      1: t("Knock over one domino, then two. Put your hand in the line. That is a control rod.", "Dominos, then a hand in the line."),
      2: t("Put three chips in order: Chicago pile, desert test, cities bombed.", "Order the three chips."),
      3: t("Two accident cards: Pennsylvania 1979 and Chernobyl 1986. Same word. Not the same day.", "Two cards. Same word. Not the same day."),
      4: t("Open the map. Click your nearest pin. Is it running, waking, or gone?", "Find the nearest pin."),
      5: t("Toggle fear / data on the three-accident page.", "Read all three names."),
      6: t("Pin map: Cook, Fermi, Palisades, Big Rock. Colors: running, waking, gone.", "Four Michigan pins."),
      7: t("Two columns: keep the lakeside plant / replace with gas / replace with wind plus batteries.", "Which works at 2 a.m.?"),
      8: t("Three clocks for fusion. None should say tomorrow unless a plant is selling power.", "Three clocks. Not tomorrow.")
    };
    const sheets = C.sessions.map((sess) => {
      const body = (isKid() ? sess.kid : sess.adult).slice(0, 4).map((p) => `<p>${p}</p>`).join("");
      const take = (isKid() ? sess.kid : sess.adult).slice(-1)[0];
      return `
        <article class="card sheet">
          <p class="kicker">Session ${sess.n} of 8 · ${C.meta.asOf}</p>
          <h2>${t(sess.adultTitle, sess.kidTitle)}</h2>
          ${body}
          <div class="take"><p>${take}</p></div>
          <div class="try-box"><strong>${t("Try this.", "Try this.")}</strong> ${tries[sess.n]}</div>
        </article>`;
    }).join("");
    return `
      <section class="page">
        ${freeze()}
        <h1>${t("Printable lesson sheets", "Print the lessons")}</h1>
        <p class="lede">${t("One sheet per session. Use the Adult/Kids toggle, then print from the browser. A PDF packet is also in the project folder.", "Turn on Kids or Adult, then print.")}</p>
        <div class="sheet-actions">
          <button type="button" id="do-print">${t("Print these sheets", "Print")}</button>
          <a href="nuclear-energy-lesson-sheets.pdf">${t("Download PDF packet", "PDF")}</a>
          <a href="#/learn">${t("Back to sessions", "Back to lessons")}</a>
        </div>
        ${sheets}
      </section>`;
  }

  async function render() {
    nav();
    const { parts } = route();
    const section = parts[0] || "home";
    if (!parts.length) root.innerHTML = home();
    else if (section === "learn" && !parts[1]) root.innerHTML = learnIndex();
    else if (section === "learn") root.innerHTML = sessionPage(parts[1]);
    else if (section === "map" || section === "midwest") root.innerHTML = mapPage();
    else if (section === "safety") root.innerHTML = safetyPage();
    else if (section === "cost") root.innerHTML = costPage();
    else if (section === "topics" && parts[1] === "waste") root.innerHTML = wastePage();
    else if (section === "topics" || section === "glossary" || section === "sources") root.innerHTML = topicsPage();
    else if (section === "waste") root.innerHTML = wastePage();
    else if (section === "print" || section === "sheets") root.innerHTML = printPage();
    else if (section === "claims") root.innerHTML = claimsPage();
    else root.innerHTML = home();

    paintSlider();
    bindCutaway();
    bindClaims();
    document.getElementById("do-print")?.addEventListener("click", () => window.print());
    if (section === "map" || section === "midwest") {
      await paintMap();
    }
    window.scrollTo(0, 0);
  }

  document.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });
  window.addEventListener("hashchange", render);
  document.body.classList.add(state.mode === "kids" ? "kids" : "adult");
  document.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.mode === state.mode));
  });
  render();
})();
