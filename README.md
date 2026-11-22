# Fragata Films — site institucional

Site estático (HTML + CSS + JavaScript, sem backend, sem banco de dados e sem formulários).
Animações: GSAP 3.12.5 + ScrollTrigger (carregados da cdnjs). Fonte: Montserrat (Google Fonts).

## Estrutura
```
index.html            página única
favicon.png
robots.txt
.nojekyll             evita o processamento Jekyll no GitHub Pages
assets/css/style.css
assets/js/main.js
assets/img/           fotos (WebP) e logo
```

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `fragata-films`) e envie estes arquivos para a raiz.
2. Em **Settings → Pages**: *Source* = **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarde 1–2 minutos. O endereço será `https://SEU-USUARIO.github.io/fragata-films/`.
4. Marque **Enforce HTTPS** (Settings → Pages).

Se usar domínio próprio (ex.: fragatafilms.com.br): informe-o em Settings → Pages → *Custom domain*,
aponte o DNS conforme a instrução do GitHub e, depois, troque em `index.html` o `og:image` por um endereço completo
(`https://seudominio/assets/img/hero.webp`) para a pré-visualização ao compartilhar no WhatsApp/Instagram.

## Segurança do repositório (faça antes de publicar)
- Ative a **autenticação em dois fatores (2FA)** na conta do GitHub. É a proteção mais importante: quem controla a conta controla o código.
- Não adicione colaboradores que não precisem editar. Use senha única e, de preferência, chave de acesso (passkey).
- Em **Settings → Branches**, proteja a `main` (exigir pull request) se mais de uma pessoa tiver acesso.
- Nunca envie senhas, tokens, chaves ou arquivos `.env` ao repositório (o `.gitignore` já ajuda). O site não precisa de nenhum.
- Ative **Settings → Code security → Secret scanning** e alertas por e-mail.
- Se o repositório for público, qualquer pessoa pode ler o código e baixar as fotos; só quem tem permissão consegue alterá-lo.

## Cuidados do próprio site
- A política de segurança de conteúdo (CSP) está no `<head>` e só permite arquivos do próprio site, a cdnjs (GSAP) e o Google Fonts.
- Se, após publicar, o console do navegador (F12) mostrar um erro de CSP, ajuste a meta CSP em `index.html`.
- Para eliminar a dependência da CDN: baixe `gsap.min.js` e `ScrollTrigger.min.js` (versão 3.12.5), coloque em `assets/js/vendor/`, troque os `src` no `index.html` e remova `https://cdnjs.cloudflare.com` da CSP.
- Ao atualizar GSAP, troque a versão manualmente e teste.

## Atualizações comuns
- Telefone/WhatsApp: procure por `5548991273110` em `index.html`.
- Cor de destaque: `--lime` no início de `assets/css/style.css`.
- Fotos: substitua os arquivos em `assets/img/` mantendo os nomes (ideal: WebP, até ~1200 px de largura).
