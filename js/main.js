(function () {
  var I18N = {
    pt: {
      'nav.sobre': 'Sobre',
      'nav.formacao': 'Formação',
      'nav.habilidades': 'Habilidades',
      'nav.experiencia': 'Experiência',
      'nav.feitos': 'Feitos',
      'nav.projetos': 'Projetos',
      'nav.contato': 'Contato',
      'hero.kicker': 'Portfólio dev',
      'hero.sub': 'Desenvolvedor full-stack: Ruby on Rails, Java/Spring, Next.js/React e Python/IA. Do componente reutilizável ao SaaS em produção com pagamentos, mensageria e integrações.',
      'hero.alt': 'Gabriel Baldo',
      'cta.projetos': 'Ver projetos',
      'cta.contato': 'Contato',
      'sobre.h2': 'Sobre',
      'sobre.p': 'Sou desenvolvedor full-stack na Codengage. Hoje construo uma plataforma de gestão de licitações; antes, atuei em um ERP para agências de viagens com gestão de milhas internacionais. Nos projetos próprios vou de Java/Spring a Next.js — sempre versionado no Git e publicado na web.',
      'sobre.li1': '<strong>Front-end:</strong> interfaces responsivas e acessíveis, do HTML semântico ao React.',
      'sobre.li2': '<strong>Back-end:</strong> APIs e arquiteturas escaláveis, com filas, mensageria e integrações.',
      'formacao.h2': 'Formação',
      'formacao.li1': 'UTFPR — Campus Dois Vizinhos. Formação superior na área de tecnologia, com ênfase em desenvolvimento de software: da base da web a frameworks modernos, bancos de dados e boas práticas de engenharia.',
      'hab.h2': 'Habilidades e tecnologias',
      'hab.c1h': 'Linguagens',
      'hab.c2h': 'Front-end',
      'hab.c2p': 'HTML semântico · CSS (Flexbox/Grid, Mobile First) · React/Next.js · Tailwind',
      'hab.c3h': 'Back-end',
      'hab.c3p': 'MVC · Rails · Spring Boot · FastAPI · APIs REST · JWT · webhooks · filas',
      'hab.c4h': 'Dados e infra',
      'hab.c4p': 'PostgreSQL · Docker · Kubernetes · CI/CD',
      'exp.h2': 'Experiência',
      'exp.c1h': 'Biblioteca de componentes — Codengage',
      'exp.c1m': 'Ruby · ViewComponent · Gem',
      'exp.c1p': 'Biblioteca de componentes de UI reutilizáveis para os produtos da empresa, com testes, versionamento e code review.',
      'exp.c2h': 'Plataforma de gestão de licitações',
      'exp.c2m': 'Rails · Web em tempo real · Deploy conteinerizado',
      'exp.c2p': 'Atuação atual: sistema web para gestão de licitações com cache, filas e atualizações em tempo real, CI, deploy conteinerizado e geração de documentos de licitação por serviço de IA.',
      'exp.c3h': 'ERP para agências de viagens',
      'exp.c3m': 'Gestão · Milhas internacionais · Integrações',
      'exp.c3p': 'Atuei em ERP com gestão de milhas internacionais: controle de saldos, regras de resgate, integrações com parceiros e leitura automática de e-mails para importar bilhetes de voo para o sistema.',
      'exp.c4h': 'Extensão de navegador',
      'exp.c4m': 'Varejo · Coleta em página · Fora da loja',
      'exp.c4p': 'Extensão que coleta preços de varejo direto nas páginas e envia ao sistema, com fila oportunista e instalação fora da loja.',
      'proj.h2': 'Projetos',
      'proj.c1h': 'SaaS de agendamento para barbearias',
      'proj.c1m': 'Java/Spring · Next.js · Pagamentos · Mensageria',
      'proj.c1p': 'Multi-tenant, pagamento com webhooks robustos, mensageria multi-provedor, notificações push e auth segura. Validado em produção com operações reais.',
      'proj.c2h': 'Campo 2D ao vivo para rádios de futebol',
      'proj.c2m': 'Visão computacional · Tempo real · Widget incorporável',
      'proj.c2p': 'Gera o campo 2D automático a partir da captura do jogo para rádios sem direito de imagem: detecção de bola e jogadores com homografia para o campo, IA no PC da emissora sem GPU na nuvem e widget ao vivo por iframe com latência abaixo de 400ms.',
      'proj.c3h': 'Automação acadêmica com IA',
      'proj.c3m': 'Python · IA · PDF/Word',
      'proj.c3p': 'Lê atividades, gera conteúdo com IA, formata documentos e submete. Open source.',
      'proj.c4h': 'Conversor de moedas com cotação viva',
      'proj.c4m': 'HTML · CSS · JS puro · Dados oficiais',
      'proj.c4p': 'Conversor com cotação oficial do Banco Central, 100% front estático publicado na web.',
      'feat.h2': 'Feitos',
      'feat.c1h': 'Coleta resiliente com filas oportunistas',
      'feat.c1m': 'Webscraping · Anti-bloqueio · Agendamento',
      'feat.c1p': 'Coleta de preços em sites com bloqueio de IP e páginas muradas: agenda à noite e delega a execução ao navegador do primeiro operador online — servidor primeiro, navegador como complemento — com filas, retentativas e descoberta dinâmica de fontes.',
      'feat.c2h': 'Dashboard operacional',
      'feat.c2m': 'Métricas · Gráficos · Tempo real',
      'feat.c2p': 'Painel com métricas, gráficos e acompanhamento em tempo real para decisão operacional.',
      'feat.c3h': 'Importação versionada com rollback seguro',
      'feat.c3m': 'Dados · Integridade · Rollback',
      'feat.c3p': 'Importação de tabelas oficiais com invariante de versão única: descartar a versão atual restaura automaticamente a anterior válida.',
      'feat.c5h': 'Fluxos guiados de documentos',
      'feat.c5m': 'Etapas · Validações · TR e minutas',
      'feat.c5p': 'Assistente em etapas para elaboração de TR e minutas, com validação por etapa e geração do documento final.',
      'feat.c6h': 'Módulos de usuário e conta',
      'feat.c6m': 'Perfis · 2FA · Recuperação de acesso',
      'feat.c6p': 'Cadastro, perfis e permissões, autenticação em dois fatores e fluxos de recuperação e troca de senha.',
      'cont.h2': 'Contato',
      'cont.p': 'Contato para propostas, parcerias e dúvidas técnicas.',
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
      'nav.feitos': 'Highlights',
      'nav.projetos': 'Projects',
      'nav.contato': 'Contact',
      'hero.kicker': 'Dev portfolio',
      'hero.sub': 'Full-stack developer: Ruby on Rails, Java/Spring, Next.js/React and Python/AI. From reusable components to production SaaS with payments, messaging and integrations.',
      'hero.alt': 'Gabriel Baldo',
      'cta.projetos': 'View projects',
      'cta.contato': 'Contact',
      'sobre.h2': 'About',
      'sobre.p': 'I am a full-stack developer at Codengage. Today I build a bidding management platform; previously, I worked on an ERP for travel agencies with international miles management. On side projects I go from Java/Spring to Next.js — always versioned in Git and published on the web.',
      'sobre.li1': '<strong>Frontend:</strong> responsive, accessible interfaces, from semantic HTML to React.',
      'sobre.li2': '<strong>Backend:</strong> APIs and scalable architectures, with queues, messaging and integrations.',
      'formacao.h2': 'Education',
      'formacao.li1': 'UTFPR — Dois Vizinhos campus. Higher education in technology, focused on software development: from web fundamentals to modern frameworks, databases and engineering best practices.',
      'hab.h2': 'Skills and technologies',
      'hab.c1h': 'Languages',
      'hab.c2h': 'Frontend',
      'hab.c2p': 'Semantic HTML · CSS (Flexbox/Grid, Mobile First) · React/Next.js · Tailwind',
      'hab.c3h': 'Backend',
      'hab.c3p': 'MVC · Rails · Spring Boot · FastAPI · REST APIs · JWT · webhooks · queues',
      'hab.c4h': 'Data and infra',
      'hab.c4p': 'PostgreSQL · Docker · Kubernetes · CI/CD',
      'exp.h2': 'Experience',
      'exp.c1h': 'Component library — Codengage',
      'exp.c1m': 'Ruby · ViewComponent · Gem',
      'exp.c1p': 'Library of reusable UI components for company products, with tests, versioning and code review.',
      'exp.c2h': 'Bidding management platform',
      'exp.c2m': 'Rails · Realtime web · Containerized deploy',
      'exp.c2p': 'Current work: web system for bid management with caching, queues and realtime updates, CI, containerized deploy and AI-generated bidding documents.',
      'exp.c3h': 'ERP for travel agencies',
      'exp.c3m': 'Management · International miles · Integrations',
      'exp.c3p': 'Previously worked on an ERP with international miles management: balance tracking, redemption rules, partner integrations and automatic email reading to import flight tickets into the system.',
      'exp.c4h': 'Browser extension',
      'exp.c4m': 'Retail · On-page collection · Off-store',
      'exp.c4p': 'Extension that collects retail prices directly on pages and sends them to the system, with an opportunistic queue and off-store install.',
      'proj.h2': 'Projects',
      'proj.c1h': 'Scheduling SaaS for barbershops',
      'proj.c1m': 'Java/Spring · Next.js · Payments · Messaging',
      'proj.c1p': 'Multi-tenant, payments with robust webhooks, multi-provider messaging, push notifications and secure auth. Validated in production with real operations.',
      'proj.c2h': 'Live 2D pitch for soccer radio stations',
      'proj.c2m': 'Computer vision · Realtime · Embeddable widget',
      'proj.c2p': 'Generates an automatic live 2D pitch from game capture for radio stations without image rights: ball and player detection mapped onto the field via homography, AI on the station PC with no cloud GPU, and a live iframe widget under 400ms latency.',
      'proj.c3h': 'Academic automation with AI',
      'proj.c3m': 'Python · AI · PDF/Word',
      'proj.c3p': 'Reads assignments, generates content with AI, formats documents and submits. Open source.',
      'proj.c4h': 'Currency converter with live rates',
      'proj.c4m': 'HTML · CSS · Pure JS · Official data',
      'proj.c4p': 'Converter with official Central Bank rates, 100% static frontend published on the web.',
      'feat.h2': 'Highlights',
      'feat.c1h': 'Resilient collection with opportunistic queues',
      'feat.c1m': 'Webscraping · Anti-blocking · Scheduling',
      'feat.c1p': 'Price collection across IP-blocking, walled sites: schedules overnight and delegates execution to the first operator online — server first, browser as backup — with queues, retries and dynamic source discovery.',
      'feat.c2h': 'Operational dashboard',
      'feat.c2m': 'Metrics · Charts · Realtime',
      'feat.c2p': 'Panel with metrics, charts and realtime tracking for operational decisions.',
      'feat.c3h': 'Versioned imports with safe rollback',
      'feat.c3m': 'Data · Integrity · Rollback',
      'feat.c3p': 'Official table imports with a single-live-version invariant: discarding the current version automatically restores the previous valid one.',
      'feat.c5h': 'Guided document flows',
      'feat.c5m': 'Steps · Validations · TR and drafts',
      'feat.c5p': 'Step-by-step assistant for drafting TRs and minutas, with per-step validation and final document generation.',
      'feat.c6h': 'User and account modules',
      'feat.c6m': 'Profiles · 2FA · Access recovery',
      'feat.c6p': 'Signup, profiles and permissions, two-factor authentication and password recovery and change flows.',
      'cont.h2': 'Contact',
      'cont.p': 'Contact for proposals, partnerships and technical questions.',
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
