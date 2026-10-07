# portfolio — Gabriel Baldo

> **Aluno:** Gabriel Baldo · **Disciplina:** Programação para Web 1 (UTFPR), turma extra · **Atividade:** Projeto 1 — site pessoal (HTML → CSS → Mobile First responsivo).
> **Site publicado:** https://Gabriel-Baldo.github.io/portfolio/ · **Etapa 1 (HTML puro):** https://Gabriel-Baldo.github.io/portfolio/etapa-1/

Portfólio dev público (vai para um `.com`). Estático puro — HTML/CSS/JS, sem build — para deploy simples em qualquer hospedagem.

> Este repo é o **Projeto 1 (site pessoal)** da disciplina Web 1 + portfólio carreira. O **Projeto 2 (Câmbio Hoje)** mora no repo [`cambio-hoje`](https://github.com/Gabriel-Baldo/cambio-hoje) — sem código de um dentro do outro.

## Evolução por etapas (disciplina)

- **Etapa 1 — HTML puro:** `etapa-1/index.html` (sem CSS/JS — verificado por grep; também marcada na tag `etapa-1-html-puro`). Nome, foto, Sobre, Formação, Experiências/Projetos, Habilidades, links, contato com `<form>`, navegação.
- **Etapa 2 — CSS externo:** `css/style.css` (cores, tipografia, espaçamentos, bordas, links, formulário, hover).
- **Etapa 3 — Mobile First:** base = telas pequenas (1 coluna, menu hamburger); `@media (min-width: 600px)` 2 colunas; `@media (min-width: 900px)` hero lado a lado + nav inline. Viewport configurado, sem larguras fixas, imagens com `max-width: 100%`. Evidência: DevTools em 375px / 768px / ≥1200px.

## Estrutura

- `index.html` — conteúdo + SEO/OG
- `css/style.css` — tema escuro, Mobile First, Flex/Grid
- `js/main.js` — menu mobile, copiar e-mail (Clipboard API)
- `assets/img/` — fotos do evento Codengage 10 anos (mar/2026), otimizadas (~150 KB cada, originais tinham ~5 MB)

## Rodar local

```bash
# Com Docker (padrão dos repos — porta 8081 p/ não colidir com o cambio-hoje na 8080)
docker compose up --build
# http://localhost:8081

# Sem Docker
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar no seu .com

Opção A — GitHub Pages + domínio próprio:
1. Push deste repo para `Gabriel-Baldo/portfolio` (público)
2. Settings → Pages → Deploy from branch → `main` /root
3. Settings → Pages → Custom domain → digite seu `.com` → Enforce HTTPS
4. No DNS do registrador: `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` + `CNAME www` → `<user>.github.io`
5. Crie o arquivo `CNAME` com o domínio (ver `CNAME.example`)

Opção B — Vercel/Netlify: importe o repo, output = raiz, sem build command.

## Fotos

Originais: `~/Downloads/DSC01244.jpg` (hero), `DSC01716.jpg` (equipe), `DSC01914.jpg` (momento). Re-otimizar com:

```bash
python3 -c "from PIL import Image; im=Image.open('orig.jpg').convert('RGB'); im.resize((1200,int(im.height*1200/im.width)),Image.LANCZOS).save('assets/img/x.jpg','JPEG',quality=78,optimize=True,progressive=True)"
```
