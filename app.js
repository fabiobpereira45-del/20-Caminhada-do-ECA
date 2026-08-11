// ========= DATA =========
const institutions = [
  {
    nome: "Casa da Amizade",
    participantes: 20,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "Ótimo",
    melhoria: "Horário de início do evento",
    color1: "#f7971e", color2: "#ffd200"
  },
  {
    nome: "Colégio Estadual Conselheiro Vicente Pacheco de Oliveira",
    participantes: 55,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "A oportunidade da nossa Fanfarra prestigiar o evento.",
    melhoria: "A Equipe Organizadora do evento deveria chegar no local antes dos convidados.",
    color1: "#1e88e5", color2: "#42a5f5"
  },
  {
    nome: "Escola Professor Bernardino Moreira",
    participantes: 50,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "Todo processo de organização e acolhimento. Aproveito para parabenizar o evento.",
    melhoria: "Horário de início",
    color1: "#43e97b", color2: "#38f9d7"
  },
  {
    nome: "Escola Municipal Helena Magalhães",
    participantes: 55,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "Mostrar na juventude que não estão sozinhos",
    melhoria: "Horário, organização do trânsito, distanciamento entre as escolas",
    color1: "#fa709a", color2: "#fee140"
  },
  {
    nome: "Escola Criança Esperança de Santo Inácio",
    participantes: 40,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "As músicas, a banda de fanfarra e a segurança durante o percurso",
    melhoria: "A saída do ônibus das comunidades; a nossa saiu tarde às 08:30.",
    color1: "#FEAC5E", color2: "#C779D0"
  },
  {
    nome: "Escola Municipal Cosme de Farias",
    participantes: 40,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "As crianças realizando a caminhada chamando atenção para uma temática importante relacionada a elas",
    melhoria: "Pulseiras entregues diretamente às equipes; mais profissionais para pintura de rosto; percurso e horário com mais sol.",
    color1: "#fd746c", color2: "#ff9068"
  },
  {
    nome: "Escola Passos do Saber LTDA",
    participantes: 67,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "Atenção de todos os conselheiros e interação com os educandos",
    melhoria: "Informações sobre o transporte com mais antecedência",
    color1: "#667eea", color2: "#764ba2"
  },
  {
    nome: "Escola Municipal Esperança de Viver",
    participantes: 27,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "As informações sobre o ECA durante o percurso e a atenção dos conselheiros",
    melhoria: "Organizar as instituições em pequenos blocos com cordas para padronizar",
    color1: "#a18cd1", color2: "#fbc2eb"
  },
  {
    nome: "Creche Vila Verde",
    participantes: 45,
    primeira_vez: "Sim",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "A alegria das crianças em compartilhar espaços diferentes em sua trajetória educacional.",
    melhoria: "Melhorar a divulgação e organização de assistência às crianças com mais dignidade, principalmente nas instalações sanitárias.",
    color1: "#4facfe", color2: "#00f2fe"
  },
  {
    nome: "Escola Municipal Laura Sales de Almeida",
    participantes: 120,
    primeira_vez: "Não",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "Organização e ludicidade",
    melhoria: "Tudo ótimo!",
    color1: "#f093fb", color2: "#f5576c"
  },
  {
    nome: "Escola Municipal CSU de Pernambués",
    participantes: 49,
    primeira_vez: "Não",
    apresentacao: "Sim",
    lanche: "Sim",
    agua: "Sim",
    protetor: "Sim , ambos",
    veiculo: "Sim",
    recepcao: "Satisfatório",
    proxima: "Sim",
    positivo: "A conscientização das crianças e comunidade, integração e participação de várias escolas",
    melhoria: "Como sugestão, poderia sair da Piedade até a Castro Alves.",
    color1: "#56ab2f", color2: "#a8e063"
  }
];

const comissao = [
  { nome: "JOSELINA REIS OLIVEIRA SILVA", conselho: "CONSELHO TUTELAR I", regiao: "Roma", funcao: "Membro" },
  { nome: "SAMILE SANTOS DA CRUZ SOUZA", conselho: "CONSELHO TUTELAR II", regiao: "Barroquinha", funcao: "Coordenadora" },
  { nome: "MEIRE BATISTA DE OLIVEIRA", conselho: "CONSELHO TUTELAR III", regiao: "Vila Laura", funcao: "Membro" },
  { nome: "JOSENIRA MEIRELES DOS SANTOS", conselho: "CONSELHO TUTELAR IV", regiao: "Liberdade", funcao: "Membro" },
  { nome: "NOEMI BRITO DA SILVA", conselho: "CONSELHO TUTELAR V", regiao: "Itapoã", funcao: "Membro" },
  { nome: "LUCIENE PEREIRA DOS SANTOS", conselho: "CONSELHO TUTELAR VI", regiao: "Pernambués", funcao: "Membro" },
  { nome: "RENAN OLIVEIRA DOS SANTOS", conselho: "CONSELHO TUTELAR VII", regiao: "Castelo Branco", funcao: "Membro" },
  { nome: "SÔNIA MARIA SOARES RIBEIRO JESUS", conselho: "CONSELHO TUTELAR VIII", regiao: "Cajazeiras", funcao: "Membro" },
  { nome: "ARACELE ARAUJO SILVA BARBOSA", conselho: "CONSELHO TUTELAR IX", regiao: "Periperi", funcao: "Membro" },
  { nome: "ROSANA JESUS DA SILVA RIBEIRO", conselho: "CONSELHO TUTELAR X", regiao: "Federação", funcao: "Secretária" },
  { nome: "ANDREA HELMA SANTOS BORGES", conselho: "CONSELHO TUTELAR XI", regiao: "Boca do Rio", funcao: "Membro" },
  { nome: "SIDNEY SILVA SANTOS", conselho: "CONSELHO TUTELAR XII", regiao: "São Caetano", funcao: "Membro" },
  { nome: "FÁBIO BARRETO PEREIRA", conselho: "CONSELHO TUTELAR XIII", regiao: "Narandiba", funcao: "Secretário" },
  { nome: "VIVIANE SILVA PEIXOTO", conselho: "CONSELHO TUTELAR XIV", regiao: "Ilhas", funcao: "Membro" },
  { nome: "VANIA DOS SANTOS SOARES", conselho: "CONSELHO TUTELAR XV", regiao: "Barra", funcao: "Membro" },
  { nome: "CÍNTIA MARA CONCEIÇÃO DE JESUS", conselho: "CONSELHO TUTELAR XVI", regiao: "Ipitanga", funcao: "Membro" },
  { nome: "KELI CRISTIANE VIANA HIRSCH", conselho: "CONSELHO TUTELAR XVII", regiao: "Pituba", funcao: "Membro" },
  { nome: "ANA PAULA VIANA DE SOUZA", conselho: "CONSELHO TUTELAR XVIII", regiao: "Valéria", funcao: "Membro" },
  { nome: "ANDRESSA COSTA DOS SANTOS", conselho: "CONSELHO TUTELAR XIX", regiao: "Nordeste de Amaralina", funcao: "Membro" },
  { nome: "ANDRÉ SANTOS SANTANA", conselho: "CONSELHO TUTELAR XX", regiao: "Subúrbio", funcao: "Membro" },
  { nome: "EDSON BARCELOS DOS SANTOS", conselho: "CONSELHO TUTELAR XXI", regiao: "Águas Claras", funcao: "Membro" },
  { nome: "ROSANA MEIRELES BARBOSA", conselho: "CONSELHO TUTELAR XXII", regiao: "Cabula", funcao: "Membro" },
  { nome: "SILVIA DA PAZ JESUS", conselho: "CONSELHO TUTELAR XXIII", regiao: "Jardim das Margaridas/CEASA", funcao: "Membro" },
  { nome: "SORAIA DO NASCIMENTO VEIGA", conselho: "CONSELHO TUTELAR XXIV", regiao: "Brotas", funcao: "Membro" }
];

// ========= INIT — see full DOMContentLoaded below =========


// ========= SECTION NAVIGATION =========
function showSection(id) {
  document.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const section = document.getElementById("section-" + id);
  const nav = document.getElementById("nav-" + id);
  if (section) section.classList.add("active");
  if (nav) nav.classList.add("active");
  // close sidebar on mobile
  if (window.innerWidth <= 700) {
    const sb = document.getElementById("sidebar");
    if (sb) sb.classList.remove("open");
  }
}
window.showSection = showSection;

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  if (sb) sb.classList.toggle("open");
}
window.toggleSidebar = toggleSidebar;

// ========= INSTITUTIONS =========
function renderInstitutions(list) {
  const grid = document.getElementById("instGrid");
  grid.innerHTML = "";
  list.forEach((inst, idx) => {
    const initials = inst.nome.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase();
    const card = document.createElement("div");
    card.className = "inst-card";
    card.style.setProperty("--c1", inst.color1);
    card.style.setProperty("--c2", inst.color2);
    card.setAttribute("onclick", `openModal(${idx})`);
    card.innerHTML = `
      <div class="inst-card-icon">🏫</div>
      <div class="inst-card-name">${inst.nome}</div>
      <div class="inst-card-parts">👥 ${inst.participantes} participantes</div>
      <div class="inst-card-tags">
        <span class="tag ${inst.primeira_vez==='Sim' ? 'tag-blue' : 'tag-purple'}">${inst.primeira_vez==='Sim' ? '🆕 1ª participação' : '⭐ Experiente'}</span>
        <span class="tag ${inst.apresentacao==='Sim' ? 'tag-green' : 'tag-orange'}">${inst.apresentacao==='Sim' ? '🎭 Apresentação' : 'Sem apresentação'}</span>
        <span class="tag tag-green">✅ Retorna em 2027</span>
      </div>
      <div class="inst-card-arrow">›</div>
    `;
    grid.appendChild(card);
  });
}

function filterInstitutions(q) {
  const filtered = institutions.filter(i => i.nome.toLowerCase().includes(q.toLowerCase()));
  renderInstitutions(filtered);
}

function openModal(idx) {
  const inst = institutions[idx];
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-icon">🏫</div>
      <h2>${inst.nome}</h2>
      <div class="modal-header-sub">Avaliação — 20ª Caminhada do ECA 2026</div>
    </div>
    <div class="modal-body">
      <div class="modal-detail-grid">
        <div class="modal-detail">
          <div class="modal-detail-label">Participantes</div>
          <div class="modal-detail-value">👥 ${inst.participantes}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">1ª participação?</div>
          <div class="modal-detail-value">${inst.primeira_vez === 'Sim' ? '🆕 Sim' : '⭐ Não (experiente)'}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Apresentação artística</div>
          <div class="modal-detail-value">${inst.apresentacao === 'Sim' ? '✅ Sim' : '❌ Não'}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Lanche suficiente</div>
          <div class="modal-detail-value">${inst.lanche === 'Sim' ? '✅ Sim' : '⚠️ ' + inst.lanche}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Água suficiente</div>
          <div class="modal-detail-value">${inst.agua === 'Sim' ? '✅ Sim' : '⚠️ ' + inst.agua}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Protetor solar / Material</div>
          <div class="modal-detail-value">✅ ${inst.protetor}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Veículo suficiente</div>
          <div class="modal-detail-value">${inst.veiculo === 'Sim' ? '✅ Sim' : '⚠️ ' + inst.veiculo}</div>
        </div>
        <div class="modal-detail">
          <div class="modal-detail-label">Avaliação da recepção</div>
          <div class="modal-detail-value">⭐ ${inst.recepcao}</div>
        </div>
        <div class="modal-detail" style="grid-column:1/-1">
          <div class="modal-detail-label">Retorna em 2027?</div>
          <div class="modal-detail-value">${inst.proxima === 'Sim' ? '🎉 Sim, com certeza!' : inst.proxima}</div>
        </div>
      </div>
      <div class="modal-feedback" style="border-left:3px solid #00c48c">
        <div class="modal-feedback-label">✨ Ponto Mais Positivo</div>
        <div class="modal-feedback-text">${inst.positivo}</div>
      </div>
      <div class="modal-feedback" style="border-left:3px solid #ff8c42; margin-top:10px">
        <div class="modal-feedback-label">🔧 Sugestão de Melhoria</div>
        <div class="modal-feedback-text">${inst.melhoria}</div>
      </div>
    </div>
  `;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ========= COMISSAO =========
function renderComissao() {
  const grid = document.getElementById("comissaoGrid");
  comissao.forEach(m => {
    const initials = m.nome.split(" ").slice(0,2).map(w => w[0]).join("");
    let roleClass = "role-member";
    let roleLabel = "Membro";
    if (m.funcao === "Coordenadora") { roleClass = "role-coord"; roleLabel = "Coordenadora"; }
    if (m.funcao === "Secretário" || m.funcao === "Secretária") { roleClass = "role-sec"; roleLabel = m.funcao; }
    const card = document.createElement("div");
    card.className = "comissao-card";
    card.innerHTML = `
      <div class="comissao-avatar">${initials}</div>
      <div class="comissao-info">
        <div class="comissao-name">${m.nome}</div>
        <div class="comissao-ct">${m.conselho} — ${m.regiao}</div>
        <span class="comissao-role-badge ${roleClass}">${roleLabel}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ========= FEEDBACK =========
function renderFeedback() {
  const pos = document.getElementById("positivos");
  const mel = document.getElementById("melhorias");
  institutions.forEach(inst => {
    if (inst.positivo) {
      const el = document.createElement("div");
      el.className = "feedback-item feedback-item-positive";
      el.innerHTML = `<div class="feedback-inst">${inst.nome}</div><div class="feedback-text">"${inst.positivo}"</div>`;
      pos.appendChild(el);
    }
    if (inst.melhoria) {
      const el = document.createElement("div");
      el.className = "feedback-item feedback-item-improve";
      el.innerHTML = `<div class="feedback-inst">${inst.nome}</div><div class="feedback-text">"${inst.melhoria}"</div>`;
      mel.appendChild(el);
    }
  });
}

// ========= COUNTER ANIMATION =========
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(c => {
    const target = parseInt(c.getAttribute("data-target"));
    const duration = 1200;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        c.textContent = target.toLocaleString("pt-BR");
        clearInterval(timer);
      } else {
        c.textContent = Math.floor(current).toLocaleString("pt-BR");
      }
    }, 16);
  });
// ========= SUPABASE INTEGRATION =========
const SUPABASE_URL = window.SUPABASE_URL || "https://haugbvsackvfbwiupyiv.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhdWdidnNhY2t2ZmJ3aXVweWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0NTk2ODMsImV4cCI6MjEwMjAzNTY4M30.znl2glDclD4IQp9oIEoN4XR5jO0IEac3--RhA462hQw";

let supabaseClient = null;
if (window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase client initialized successfully");
  } catch (e) {
    console.warn("Supabase init warning:", e);
  }
}

// ========= VOZ DOS CONSELHEIROS =========

const avaliacoesIniciais = [];
let currentFilter = "todos";
let currentRating = 0;

// ---- storage helpers ----
function loadAvaliacoesLocal() {
  const salvas = JSON.parse(localStorage.getItem("avaliacoes_conselheiros") || "[]");
  salvas.forEach((a, i) => { if (!a.id) a.id = "av_" + i + "_" + Date.now(); });
  return [...avaliacoesIniciais, ...salvas];
}

function saveAvaliacoesLocal(lista) {
  localStorage.setItem("avaliacoes_conselheiros", JSON.stringify(lista));
}

function loadRepliesLocal(avId) {
  return JSON.parse(localStorage.getItem("replies_" + avId) || "[]");
}

function saveReplyLocal(avId, reply) {
  const replies = loadRepliesLocal(avId);
  replies.push(reply);
  localStorage.setItem("replies_" + avId, JSON.stringify(replies));
}

// ---- Supabase Sync ----
async function syncFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data: avs, error: err1 } = await supabaseClient
      .from('avaliacoes_conselheiros')
      .select('*')
      .order('created_at', { ascending: true });

    if (!err1 && avs && avs.length > 0) {
      saveAvaliacoesLocal(avs);
      renderConsGrid(currentFilter);
    }

    const { data: coms, error: err2 } = await supabaseClient
      .from('comentarios_conselheiros')
      .select('*')
      .order('created_at', { ascending: true });

    if (!err2 && coms) {
      const byAv = {};
      coms.forEach(c => {
        const avId = c.avaliacao_id;
        if (!byAv[avId]) byAv[avId] = [];
        byAv[avId].push({
          nome: c.nome,
          conselho: c.conselho,
          initials: c.initials,
          texto: c.texto,
          data: new Date(c.created_at).toLocaleDateString("pt-BR")
        });
      });
      Object.keys(byAv).forEach(avId => {
        localStorage.setItem("replies_" + avId, JSON.stringify(byAv[avId]));
      });
      renderConsGrid(currentFilter);
    }
  } catch (e) {
    console.log("Supabase sync info:", e);
  }
}

// ---- renderização ----
function renderConsGrid(filter) {
  if (filter !== undefined) currentFilter = filter;
  const grid = document.getElementById("consGrid");
  if (!grid) return;

  const todas = loadAvaliacoesLocal();
  const filtradas = currentFilter === "todos"
    ? todas
    : todas.filter(a => a.categoria === currentFilter);

  grid.innerHTML = "";

  if (filtradas.length === 0) {
    grid.innerHTML = `
      <div class="cons-empty">
        <div style="font-size:48px;margin-bottom:12px">📋</div>
        <strong>Nenhuma avaliação ainda</strong>
        <p style="margin-top:6px;font-size:13px">Seja o primeiro a compartilhar sua experiência!</p>
      </div>`;
    return;
  }

  filtradas.forEach((av) => {
    const avId = av.id || ("av_" + av.nome.replace(/\s/g, "") + "_" + av.data);
    av.id = avId;
    const replies = loadRepliesLocal(avId);

    const starsHtml = Array.from({length: 5}, (_, i) =>
      `<span class="cons-card-star${i >= av.rating ? " off" : ""}">★</span>`
    ).join("");

    const catLabels = {
      positivo:    {cls: "cat-positivo",    txt: "✨ Positivo"},
      sugestao:    {cls: "cat-sugestao",    txt: "🔧 Sugestão"},
      logistica:   {cls: "cat-logistica",   txt: "🚌 Logística"},
      organizacao: {cls: "cat-organizacao", txt: "📋 Organização"}
    };
    const cat = catLabels[av.categoria] || {cls: "cat-positivo", txt: av.categoria};
    const initials = av.initials || av.nome.split(" ").slice(0,2).map(w => w[0].toUpperCase()).join("");

    const repliesHtml = replies.map(r => `
      <div class="reply-item">
        <div class="reply-avatar">${r.initials || "?"}</div>
        <div class="reply-body">
          <div class="reply-meta"><strong>${r.nome}</strong> · <span>${r.conselho}</span> · <span class="reply-date">${r.data}</span></div>
          <div class="reply-text">${r.texto}</div>
        </div>
      </div>
    `).join("");

    const card = document.createElement("div");
    card.className = "cons-card";
    card.setAttribute("data-cat", av.categoria);
    card.setAttribute("data-id", avId);
    card.style.setProperty("--cons-accent", av.accent || "linear-gradient(90deg,#1e88e5,#42a5f5)");

    card.innerHTML = `
      <div class="cons-card-header">
        <div class="cons-card-avatar" style="background:${av.accent || 'var(--blue)'}">${initials}</div>
        <div class="cons-card-info">
          <div class="cons-card-name">${av.nome}</div>
          <div class="cons-card-ct">${av.conselho}</div>
          <div class="cons-card-stars">${starsHtml}</div>
        </div>
        <span class="cons-card-cat ${cat.cls}">${cat.txt}</span>
      </div>
      <div class="cons-card-body">${av.comentario}</div>
      ${av.sugestao ? `
        <div class="cons-card-sugestao">
          <div class="cons-card-sugestao-label">💡 Sugestão para 2027</div>
          <div class="cons-card-sugestao-text">${av.sugestao}</div>
        </div>` : ""}
      <div class="cons-card-footer">
        <span class="cons-card-time">📅 ${av.data || "2026"}</span>
        <button class="reply-toggle-btn" onclick="toggleReplies('${avId}', this)">
          💬 ${replies.length > 0 ? replies.length + " comentário" + (replies.length > 1 ? "s" : "") : "Comentar"}
        </button>
      </div>
      <div class="replies-section" id="replies-${avId}" style="display:none">
        <div class="replies-list" id="replies-list-${avId}">${repliesHtml}</div>
        <div class="reply-form">
          <div class="reply-form-row">
            <input type="text" class="reply-input" id="reply-nome-${avId}" placeholder="Seu nome *" />
            <select class="reply-input reply-select" id="reply-ct-${avId}">
              <option value="">Conselho Tutelar...</option>
              <option>CT I — Roma</option><option>CT II — Barroquinha</option>
              <option>CT III — Vila Laura</option><option>CT IV — Liberdade</option>
              <option>CT V — Itapoã</option><option>CT VI — Pernambués</option>
              <option>CT VII — Castelo Branco</option><option>CT VIII — Cajazeiras</option>
              <option>CT IX — Periperi</option><option>CT X — Federação</option>
              <option>CT XI — Boca do Rio</option><option>CT XII — São Caetano</option>
              <option>CT XIII — Narandiba</option><option>CT XIV — Ilhas</option>
              <option>CT XV — Barra</option><option>CT XVI — Ipitanga</option>
              <option>CT XVII — Pituba</option><option>CT XVIII — Valéria</option>
              <option>CT XIX — Nordeste de Amaralina</option><option>CT XX — Subúrbio</option>
              <option>CT XXI — Águas Claras</option><option>CT XXII — Cabula</option>
              <option>CT XXIII — Jardim das Margaridas</option><option>CT XXIV — Brotas</option>
            </select>
          </div>
          <textarea class="reply-textarea" id="reply-text-${avId}" placeholder="Escreva seu comentário..."></textarea>
          <div class="reply-actions">
            <button class="reply-cancel-btn" onclick="toggleReplies('${avId}', null, true)">Cancelar</button>
            <button class="reply-send-btn" onclick="submitReply('${avId}')">📨 Enviar comentário</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleReplies(avId, btn, forceClose) {
  const section = document.getElementById("replies-" + avId);
  if (!section) return;
  const isOpen = section.style.display !== "none";
  if (forceClose || isOpen) {
    section.style.display = "none";
  } else {
    section.style.display = "block";
    section.querySelector(".reply-textarea")?.focus();
  }
}

async function submitReply(avId) {
  const nome = document.getElementById("reply-nome-" + avId)?.value.trim();
  const ct   = document.getElementById("reply-ct-" + avId)?.value;
  const txt  = document.getElementById("reply-text-" + avId)?.value.trim();

  if (!nome || !txt) {
    alert("Por favor, preencha seu nome e o comentário.");
    return;
  }

  const reply = {
    nome,
    conselho: ct || "Conselho não informado",
    initials: nome.split(" ").slice(0,2).map(w => w[0].toUpperCase()).join(""),
    texto: txt,
    data: new Date().toLocaleDateString("pt-BR") + " " + new Date().toLocaleTimeString("pt-BR", {hour:"2-digit",minute:"2-digit"})
  };

  saveReplyLocal(avId, reply);

  // Send to Supabase
  if (supabaseClient) {
    try {
      await supabaseClient.from('comentarios_conselheiros').insert([{
        avaliacao_id: avId,
        nome: reply.nome,
        conselho: reply.conselho,
        initials: reply.initials,
        texto: reply.texto
      }]);
    } catch (e) {
      console.log("Supabase insert reply info:", e);
    }
  }

  const list = document.getElementById("replies-list-" + avId);
  if (list) {
    const div = document.createElement("div");
    div.className = "reply-item reply-item--new";
    div.innerHTML = `
      <div class="reply-avatar">${reply.initials}</div>
      <div class="reply-body">
        <div class="reply-meta"><strong>${reply.nome}</strong> · <span>${reply.conselho}</span> · <span class="reply-date">${reply.data}</span></div>
        <div class="reply-text">${reply.texto}</div>
      </div>
    `;
    list.appendChild(div);
    setTimeout(() => div.classList.add("reply-item--visible"), 20);
  }

  const nomeEl = document.getElementById("reply-nome-" + avId);
  const ctEl   = document.getElementById("reply-ct-" + avId);
  const txtEl  = document.getElementById("reply-text-" + avId);
  if (nomeEl) nomeEl.value = "";
  if (ctEl)   ctEl.value   = "";
  if (txtEl)  txtEl.value  = "";

  const card = document.querySelector(`[data-id="${avId}"]`);
  if (card) {
    const allReplies = loadRepliesLocal(avId);
    const btn = card.querySelector(".reply-toggle-btn");
    if (btn) btn.textContent = `💬 ${allReplies.length} comentário${allReplies.length > 1 ? "s" : ""}`;
  }
}

function filterConselheiros(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll(".cons-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderConsGrid(filter);
}

function setRating(n) {
  currentRating = n;
  document.getElementById("consRating").value = n;
  document.querySelectorAll(".star").forEach((s, i) => {
    s.classList.toggle("active", i < n);
  });
}

window.filterInstitutions = filterInstitutions;
window.openModal = openModal;
window.closeModal = closeModal;
window.filterConselheiros = filterConselheiros;
window.setRating = setRating;
window.submitConselheiro = submitConselheiro;
window.resetForm = resetForm;
window.toggleReplies = toggleReplies;
window.submitReply = submitReply;

function initApp() {
  renderInstitutions(institutions);
  renderComissao();
  renderFeedback();
  renderConsGrid("todos");
  animateCounters();
  syncFromSupabase();

  const stars = document.querySelectorAll(".star");
  stars.forEach((s, i) => {
    s.addEventListener("mouseenter", () => {
      stars.forEach((st, j) => st.classList.toggle("active", j <= i));
    });
    s.addEventListener("mouseleave", () => {
      stars.forEach((st, j) => st.classList.toggle("active", j < currentRating));
    });
  });
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(initApp, 1);
} else {
  document.addEventListener("DOMContentLoaded", initApp);
}

async function submitConselheiro(e) {
  e.preventDefault();
  const nome      = document.getElementById("consNome").value.trim();
  const conselho  = document.getElementById("consConselho").value;
  const rating    = parseInt(document.getElementById("consRating").value);
  const categoria = document.getElementById("consCategoria").value;
  const comentario= document.getElementById("consComentario").value.trim();
  const sugestao  = document.getElementById("consSugestao").value.trim();

  if (!nome || !conselho || rating === 0 || !comentario) {
    alert("Por favor, preencha todos os campos obrigatórios e selecione uma avaliação em estrelas.");
    return;
  }

  const accents = {
    positivo:    "linear-gradient(135deg,#00695c,#00c48c)",
    sugestao:    "linear-gradient(135deg,#e65100,#ff8c42)",
    logistica:   "linear-gradient(135deg,#0d47a1,#1e88e5)",
    organizacao: "linear-gradient(135deg,#4527a0,#7c4dff)"
  };

  const nova = {
    id: "av_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
    nome,
    conselho,
    rating,
    categoria,
    comentario,
    sugestao,
    initials: nome.split(" ").slice(0,2).map(w => w[0].toUpperCase()).join(""),
    accent: accents[categoria] || accents.positivo,
    data: new Date().toLocaleDateString("pt-BR")
  };

  const salvas = JSON.parse(localStorage.getItem("avaliacoes_conselheiros") || "[]");
  salvas.push(nova);
  localStorage.setItem("avaliacoes_conselheiros", JSON.stringify(salvas));

  // Send to Supabase
  if (supabaseClient) {
    try {
      await supabaseClient.from('avaliacoes_conselheiros').insert([{
        id: nova.id,
        nome: nova.nome,
        conselho: nova.conselho,
        rating: nova.rating,
        categoria: nova.categoria,
        comentario: nova.comentario,
        sugestao: nova.sugestao,
        initials: nova.initials,
        accent: nova.accent
      }]);
    } catch (e) {
      console.log("Supabase insert evaluation info:", e);
    }
  }

  document.getElementById("consForm").style.display = "none";
  document.getElementById("formSuccess").style.display = "flex";
  renderConsGrid(currentFilter);
}

function resetForm() {
  document.getElementById("consForm").reset();
  document.getElementById("consForm").style.display = "flex";
  document.getElementById("formSuccess").style.display = "none";
  currentRating = 0;
  document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
  document.getElementById("consRating").value = 0;
}
