// Menu mobile + ano + copiar e-mail + toggle PT/EN (JS puro, sem dependências)
(function () {
  var I18N = {
    pt: {
      'nav.sobre': 'Sobre',
      'nav.formacao': 'Formação',
      'nav.habilidades': 'Habilidades',
      'nav.experiencia': 'Experiência',
      'nav.projetos': 'Projetos',
      'nav.contato': 'Contato',
      'hero.kicker': 'Portfólio dev',
      'hero.sub': 'Desenvolvedor full-stack: Ruby on Rails, Java/Spring, Next.js/React e Python/IA. Do componente reutilizável ao SaaS em produção com pagamentos, mensageria e integrações.',
      'hero.alt': 'Gabriel Baldo',
      'cta.projetos': 'Ver projetos',
      'cta.contato': 'Contato',
      'sobre.h2': 'Sobre',
      'sobre.p': 'Sou desenvolvedor full-stack na Codengage. No dia a dia construo uma plataforma de gestão de licitações e um ERP para agências de viagens com gestão de milhas internacionais. Nos projetos próprios vou de Java/Spring a Next.js — sempre versionado no Git e publicado na web.',
      'sobre.li1': '<strong>Front que entrega:</strong> HTML semântico, CSS responsivo Mobile First, JavaScript com fetch/async, depois React.',
      'sobre.li2': '<strong>Back de verdade:</strong> MVC, APIs, webhooks, filas, auth JWT, rate limiting e DTOs sanitizados.',
      'formacao.h2': 'Formação',
      'formacao.li1': 'UTFPR — Campus Dois Vizinhos. Formação superior na área de tecnologia, com ênfase em desenvolvimento de software: da base da web a frameworks modernos, bancos de dados e boas práticas de engenharia.',
      'hab.h2': 'Habilidades e tecnologias',
      'hab.c1h': 'Linguagens',
      'hab.c2h': 'Front-end',
      'hab.c2p': 'HTML semântico · CSS (Flexbox/Grid, Mobile First) · React/Next.js · Tailwind',
      'hab.c3h': 'Back-end',
      'hab.c3p': 'MVC · Rails · Spring Boot · FastAPI · APIs REST · JWT · webhooks · filas',
      'hab.c4h': 'Dados e infra',
      'hab.c4p': 'PostgreSQL · Docker · Kubernetes · Kafka · CI/CD',
      'exp.h2': 'Experiência',
      'exp.c1h': 'Biblioteca de componentes — Codengage',
      'exp.c1m': 'Ruby · ViewComponent · Gem',
      'exp.c1p': 'Biblioteca de componentes de UI reutilizáveis para os produtos da empresa, com testes, versionamento e code review.',
      'exp.c2h': 'Plataforma de gestão de licitações',
      'exp.c2m': 'Rails · Web em tempo real · Deploy conteinerizado',
      'exp.c2p': 'Sistema web para gestão de licitações com cache, filas e atualizações em tempo real, CI e deploy conteinerizado.',
      'exp.c3h': 'ERP para agências de viagens',
      'exp.c3m': 'Gestão · Milhas internacionais · Integrações',
      'exp.c3p': 'ERP com gestão de milhas internacionais: controle de saldos, regras de resgate e integrações com parceiros.',
      'proj.h2': 'Projetos',
      'proj.c1h': 'SaaS de agendamento para barbearias',
      'proj.c1m': 'Java/Spring · Next.js · Pagamentos · Mensageria',
      'proj.c1p': 'Multi-tenant, pagamento com webhooks robustos, mensageria multi-provedor, notificações push e auth segura. Validado em produção com operações reais. Repositório privado — demo sob pedido.',
      'proj.c2h': 'Plataforma de acompanhamento de lances',
      'proj.c2m': 'Java · Backend + frontend + desktop · Docker',
      'proj.c2p': 'Plataforma em evolução com backend, frontend e app desktop orquestrados via compose. Repositório privado — detalhes sob pedido.',
      'proj.c3h': 'Automação acadêmica com IA',
      'proj.c3m': 'Python · IA · PDF/Word',
      'proj.c3p': 'Lê atividades, gera conteúdo com IA, formata documentos e submete. Open source.',
      'proj.c4h': 'Conversor de moedas com cotação viva',
      'proj.c4m': 'HTML · CSS · JS puro · Dados oficiais',
      'proj.c4p': 'Conversor com cotação oficial do Banco Central, 100% front estático publicado na web.',
      'cont.h2': 'Contato',
      'cont.p': 'Bora conversar sobre Rails, Spring, Next ou IA aplicada?',
      'cont.email': 'E-mail',
      'cont.copiar': 'copiar',
      'cont.copiado': 'copiado!',
      'cont.fh': 'Mande uma mensagem',
      'cont.nome': 'Nome:',
      'cont.nomePh': 'Seu nome',
      'cont.emailPh': 'voce@exemplo.com',
      'cont.msg': 'Mensagem:',
      'cont.msgPh': 'Sobre o que quer conversar?',
      'cont.enviar': 'Enviar',
    },
    en: {
      'nav.sobre': 'About',
      'nav.formacao': 'Education',
      'nav.habilidades': 'Skills',
      'nav.experiencia': 'Experience',
      'nav.projetos': 'Projects',
      'nav.contato': 'Contact',
      'hero.kicker': 'Dev portfolio',
      'hero.sub': 'Full-stack developer: Ruby on Rails, Java/Spring, Next.js/React and Python/AI. From reusable components to production SaaS with payments, messaging and integrations.',
      'hero.alt': 'Gabriel Baldo',
      'cta.projetos': 'View projects',
      'cta.contato': 'Contact',
      'sobre.h2': 'About',
      'sobre.p': 'I am a full-stack developer at Codengage. Day to day I build a bidding management platform and an ERP for travel agencies with international miles management. On side projects I go from Java/Spring to Next.js — always versioned in Git and published on the web.',
      'sobre.li1': '<strong>Frontend that delivers:</strong> semantic HTML, Mobile First responsive CSS, JavaScript with fetch/async, then React.',
      'sobre.li2': '<strong>Real backend:</strong> MVC, APIs, webhooks, queues, JWT auth, rate limiting and sanitized DTOs.',
      'formacao.h2': 'Education',
      'formacao.li1': 'UTFPR — Dois Vizinhos campus. Higher education in technology, focused on software development: from web fundamentals to modern frameworks, databases and engineering best practices.',
      'hab.h2': 'Skills and technologies',
      'hab.c1h': 'Languages',
      'hab.c2h': 'Frontend',
      'hab.c2p': 'Semantic HTML · CSS (Flexbox/Grid, Mobile First) · React/Next.js · Tailwind',
      'hab.c3h': 'Backend',
      'hab.c3p': 'MVC · Rails · Spring Boot · FastAPI · REST APIs · JWT · webhooks · queues',
      'hab.c4h': 'Data and infra',
      'hab.c4p': 'PostgreSQL · Docker · Kubernetes · Kafka · CI/CD',
      'exp.h2': 'Experience',
      'exp.c1h': 'Component library — Codengage',
      'exp.c1m': 'Ruby · ViewComponent · Gem',
      'exp.c1p': 'Library of reusable UI components for company products, with tests, versioning and code review.',
      'exp.c2h': 'Bidding management platform',
      'exp.c2m': 'Rails · Realtime web · Containerized deploy',
      'exp.c2p': 'Web system for bid management with caching, queues and realtime updates, CI and containerized deploy.',
      'exp.c3h': 'ERP for travel agencies',
      'exp.c3m': 'Management · International miles · Integrations',
      'exp.c3p': 'ERP with international miles management: balance tracking, redemption rules and partner integrations.',
      'proj.h2': 'Projects',
      'proj.c1h': 'Scheduling SaaS for barbershops',
      'proj.c1m': 'Java/Spring · Next.js · Payments · Messaging',
      'proj.c1p': 'Multi-tenant, payments with robust webhooks, multi-provider messaging, push notifications and secure auth. Validated in production with real operations. Private repo — demo on request.',
      'proj.c2h': 'Bid tracking platform',
      'proj.c2m': 'Java · Backend + frontend + desktop · Docker',
      'proj.c2p': 'Evolving platform with backend, frontend and desktop app orchestrated via compose. Private repo — details on request.',
      'proj.c3h': 'Academic automation with AI',
      'proj.c3m': 'Python · AI · PDF/Word',
      'proj.c3p': 'Reads assignments, generates content with AI, formats documents and submits. Open source.',
      'proj.c4h': 'Currency converter with live rates',
      'proj.c4m': 'HTML · CSS · Pure JS · Official data',
      'proj.c4p': 'Converter with official Central Bank rates, 100% static frontend published on the web.',
      'cont.h2': 'Contact',
      'cont.p': 'Shall we talk about Rails, Spring, Next or applied AI?',
      'cont.email': 'Email',
      'cont.copiar': 'copy',
      'cont.copiado': 'copied!',
      'cont.fh': 'Send a message',
      'cont.nome': 'Name:',
      'cont.nomePh': 'Your name',
      'cont.emailPh': 'you@example.com',
      'cont.msg': 'Message:',
      'cont.msgPh': 'What do you want to talk about?',
      'cont.enviar': 'Send',
    }
  };

  var lang = 'pt';
  try { lang = localStorage.getItem('gb-lang') || 'pt'; } catch (e) {}
  if (!I18N[lang]) lang = 'pt';

  function applyLang(l) {
    lang = I18N[l] ? l : 'pt';
    var d = I18N[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] !== undefined) el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (d[k] !== undefined) el.innerHTML = d[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (d[k] !== undefined) el.setAttribute('placeholder', d[k]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (d[k] !== undefined) el.setAttribute('alt', d[k]);
    });
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('gb-lang', lang); } catch (e) {}
    var copiar = document.getElementById('copiar-email');
    if (copiar && copiar.textContent !== d['cont.copiado']) copiar.textContent = d['cont.copiar'];
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  // Menu mobile
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('aberto'); });
    });
  }

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());

  var copiar = document.getElementById('copiar-email');
  if (copiar) {
    copiar.addEventListener('click', function () {
      var email = 'gabriel.k.baldo@gmail.com';
      var done = function (ok) {
        copiar.textContent = ok ? I18N[lang]['cont.copiado'] : email;
        setTimeout(function () { copiar.textContent = I18N[lang]['cont.copiar']; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  }

  applyLang(lang);
})();
