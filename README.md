# Gabriel Baldo — Dev Portfolio

Portfólio de desenvolvedor full-stack (Ruby on Rails, Java/Spring, Next.js/React, Python/IA). Estático puro — HTML/CSS/JS, sem build — com toggle PT/EN e deploy simples em qualquer hospedagem.

**Site publicado:** https://Gabriel-Baldo.github.io/portfolio/

## Estrutura

- `index.html` — conteúdo + SEO/OG, com atributos `data-i18n` (PT/EN via `js/main.js`)
- `css/style.css` — tema escuro, Mobile First (`min-width: 600px/900px`), Flex/Grid
- `js/main.js` — menu mobile, copiar e-mail, dicionário PT/EN com `localStorage`
- `assets/img/hero.jpg` — foto otimizada para web (~180 KB)

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

`assets/img/hero.jpg` — foto otimizada para web. Re-otimizar com:

```bash
python3 -c "from PIL import Image; im=Image.open('orig.jpg').convert('RGB'); im.resize((1200,int(im.height*1200/im.width)),Image.LANCZOS).save('assets/img/x.jpg','JPEG',quality=78,optimize=True,progressive=True)"
```

## Contexto acadêmico

Este repo também é o Projeto 1 (site pessoal) da disciplina Programação para Web 1 (UTFPR): `etapa-1/index.html` é o snapshot em HTML puro (tag `etapa-1-html-puro`), e a versão principal evoluiu com CSS externo e layout Mobile First. O Projeto 2 (conversor de moedas) mora no repo [`cambio-hoje`](https://github.com/Gabriel-Baldo/cambio-hoje).
